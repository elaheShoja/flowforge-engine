import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import useSelect from "./hooks/useSelect";
import useSelectSearch from "./hooks/useSelectSearch";
import useControllableState from "@/shared/hooks/useControllableState";
import useSelectAll from "./hooks/useSelectAll";

import filterOptions from "./utils/filterOptions";
import flattenOptions from "./utils/flattenOptions";

import type {
  SelectGroup,
  SelectOption,
  SelectProps,
} from "./Select.types";

import SelectDropdown from "./components/SelectDropdown";
import SelectValue from "./components/SelectValue";

import FieldWrapper from "@/engine/components/form/FieldWrapper";

import "./Select.css";

const DEFAULT_LIMIT = 5;
const SEARCH_DEBOUNCE = 300;

export default function Select(
  props: SelectProps
) {
  const { t } = useTranslation();

  const {
    label,
    placeholder = t("selectPlaceholder"),
    helperText,
    error,
    required,
    fullWidth = true,
    disabled = false,

    searchable = false,
    options,

    value,
    defaultValue,
    onChange,

    onSearch,

    multi = false,
    clearable = false,
    displayMode = "chips",
  } = props;

  const {
    search,
    setSearch,
  } = useSelectSearch();

  /**
   * --------------------------------------------------
   * Remote data
   * --------------------------------------------------
   */

  const [
    remoteOptions,
    setRemoteOptions,
  ] = useState<
    Array<SelectOption | SelectGroup>
  >([]);

  const [
    remoteSelectedOptions,
    setRemoteSelectedOptions,
  ] = useState<SelectOption[]>([]);

  const [offset, setOffset] =
    useState(0);

  const [totalCount, setTotalCount] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  const [
    selectedValue,
    setSelectedValue,
  ] = useControllableState<
    string | string[]
  >({
    value: value as
      | string
      | string[]
      | undefined,

    defaultValue: defaultValue as
      | string
      | string[]
      | undefined,

    onChange: (nextValue) => {
      if (multi) {
        (
          onChange as
            | ((value: string[]) => void)
            | undefined
        )?.(nextValue as string[]);

        return;
      }

      (
        onChange as
          | ((value: string) => void)
          | undefined
      )?.(nextValue as string);
    },
  });

  /**
   * --------------------------------------------------
   * Request protection
   * --------------------------------------------------
   */

  const requestIdRef =
    useRef(0);

  const loadingMoreRef =
    useRef(false);

  const searchRef =
    useRef(search);

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  /**
   * --------------------------------------------------
   * Remote request
   * --------------------------------------------------
   */

  const fetchRemoteOptions =
    useCallback(
      async (
        query: string,
        nextOffset: number,
        limit: number,
        append: boolean
      ) => {
        if (!onSearch) {
          return;
        }

        const requestId =
          ++requestIdRef.current;

        if (append) {
          loadingMoreRef.current =
            true;
        }

        setLoading(true);

        try {
          const result =
            await onSearch(
              query,
              nextOffset,
              limit
            );

          /**
           * Ignore stale responses.
           */
          if (
            requestId !==
            requestIdRef.current
          ) {
            return;
          }

          if (!result) {
            return;
          }

          setRemoteOptions(
            (previous) =>
              append
                ? [
                    ...previous,
                    ...result.options,
                  ]
                : result.options
          );

          setOffset(nextOffset);

          setTotalCount(
            result.totalCount
          );
        } finally {
          if (
            requestId ===
            requestIdRef.current
          ) {
            setLoading(false);
          }

          if (append) {
            loadingMoreRef.current =
              false;
          }
        }
      },
      [onSearch]
    );

  /**
   * --------------------------------------------------
   * Remote search
   * --------------------------------------------------
   */

  useEffect(() => {
    if (!onSearch) {
      return;
    }

    if (!searchable) {
      return;
    }

    const timer =
      window.setTimeout(() => {
        /**
         * Invalidate previous requests.
         */
        requestIdRef.current += 1;

        loadingMoreRef.current =
          false;

        setOffset(0);
        setTotalCount(0);
        setRemoteOptions([]);

        fetchRemoteOptions(
          search,
          0,
          DEFAULT_LIMIT,
          false
        );
      }, SEARCH_DEBOUNCE);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    search,
    searchable,
    onSearch,
    fetchRemoteOptions,
  ]);

  /**
   * --------------------------------------------------
   * Initial remote load
   * --------------------------------------------------
   *
   * Remote Select without search still needs
   * its first page.
   */

  const initialRemoteLoadRef =
    useRef(false);

  useEffect(() => {
    if (!onSearch) {
      return;
    }

    if (searchable) {
      return;
    }

    if (
      initialRemoteLoadRef.current
    ) {
      return;
    }

    initialRemoteLoadRef.current =
      true;

    fetchRemoteOptions(
      "",
      0,
      DEFAULT_LIMIT,
      false
    );
  }, [
    onSearch,
    searchable,
    fetchRemoteOptions,
  ]);

  /**
   * --------------------------------------------------
   * Has More
   * --------------------------------------------------
   */

  const hasMore =
    Boolean(onSearch) &&
    remoteOptions.length <
      totalCount;

  /**
   * --------------------------------------------------
   * Load More
   * --------------------------------------------------
   */

  const handleLoadMore =
    useCallback(() => {
      if (!onSearch) {
        return;
      }

      if (loading) {
        return;
      }

      if (
        loadingMoreRef.current
      ) {
        return;
      }

      if (!hasMore) {
        return;
      }

      const nextOffset =
        offset +
        DEFAULT_LIMIT;

      fetchRemoteOptions(
        searchRef.current,
        nextOffset,
        DEFAULT_LIMIT,
        true
      );
    }, [
      onSearch,
      loading,
      hasMore,
      offset,
      fetchRemoteOptions,
    ]);

  /**
   * --------------------------------------------------
   * Options
   * --------------------------------------------------
   */

  const sourceOptions =
    onSearch
      ? remoteOptions
      : options;

  /**
   * Remote options are already filtered
   * by backend.
   *
   * Local options are filtered internally.
   */

  const filteredOptions =
    onSearch
      ? sourceOptions
      : filterOptions(
          sourceOptions,
          search
        );

  const flatOptions =
    flattenOptions(
      filteredOptions
    );

  useEffect(() => {
    if (!onSearch) {
      return;
    }

    setRemoteSelectedOptions(
      (previous) => {
        const next = [...previous];

        flatOptions.forEach(
          (option) => {
            if (
              Array.isArray(
                selectedValue
              ) &&
              selectedValue.includes(
                option.value
              )
            ) {
              const exists =
                next.some(
                  (item) =>
                    item.value ===
                    option.value
                );

              if (!exists) {
                next.push(option);
              }
            }
          }
        );

        return next;
      }
    );
  }, [
    onSearch,
    flatOptions,
    selectedValue,
  ]);

  /**
   * --------------------------------------------------
   * Selected option
   * --------------------------------------------------
   *
   * Important:
   *
   * Remote Select must search inside
   * remoteOptions, not the original options prop.
   */

  const selectedIndex = multi
    ? flatOptions.findIndex(
        (option) =>
          Array.isArray(
            selectedValue
          ) &&
          selectedValue.includes(
            option.value
          )
      )
    : flatOptions.findIndex(
        (option) =>
          option.value ===
          selectedValue
      );

  const allSourceOptions =
    flattenOptions(
      sourceOptions
    );

  const selectedOptions = multi
    ? (
        onSearch
          ? remoteSelectedOptions
          : allSourceOptions
      ).filter(
        (option) =>
          Array.isArray(
            selectedValue
          ) &&
          selectedValue.includes(
            option.value
          )
      )
    : (
        onSearch
          ? [
              ...remoteSelectedOptions,
              ...allSourceOptions,
            ]
          : allSourceOptions
      ).filter(
        (option) =>
          option.value ===
          selectedValue
      );

  const selectableValues =
    flatOptions.filter(
      (option)=>
        !option.disabled
    )
    .map(
      (option) =>
        option.value
    );

  const {
    isAllSelected,
    isIndeterminate,
    toggleSelectAll,
  } = useSelectAll({
    options:
      selectableValues,

    selectedValues:
      Array.isArray(
        selectedValue
      )
        ? selectedValue
        : [],

    onChange:
      setSelectedValue,
  });

  /**
   * --------------------------------------------------
   * List navigation
   * --------------------------------------------------
   */

  const itemsKey =
    flatOptions
      .map(
        (option) =>
          option.value
      )
      .join("|");

  const disabledIndices =
    flatOptions.reduce<number[]>(
      (indices, option, index) => {
        if (option.disabled) {
          indices.push(index);
        }

        return indices;
      },
      []
    );

  const {
    open,
    setOpen,

    refs,
    floatingStyles,
    isPositioned,

    activeIndex,
    listRef,

    getReferenceProps,
    getFloatingProps,
  } = useSelect({
    itemCount:
      flatOptions.length,

    selectedIndex,

    itemsKey,

    disabledIndices,
  });

  /**
   * --------------------------------------------------
   * Clear search when dropdown closes
   * --------------------------------------------------
   */

  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [
    open,
    setSearch,
  ]);

  /**
   * --------------------------------------------------
   * Dropdown width
   * --------------------------------------------------
   */

  const referenceWidth =
    refs.reference.current
      ?.getBoundingClientRect()
      .width ?? 0;

  /**
   * --------------------------------------------------
   * Display value
   * --------------------------------------------------
   */

  const handleSelect = (
    optionValue: string
  ) => {
    if (multi) {
      const currentValues =
        Array.isArray(
          selectedValue
        )
          ? selectedValue
          : [];

      const exists =
        currentValues.includes(
          optionValue
        );

      const nextValues = exists
        ? currentValues.filter(
            (item) =>
              item !== optionValue
          )
        : [
            ...currentValues,
            optionValue,
          ];

      setSelectedValue(
        nextValues
      );

      return;
    }

    setSelectedValue(
      optionValue
    );

    setOpen(false);
  };

  const handleClear = () => {
    if (multi === true) {
      setSelectedValue([]);

      return;
    }

    setSelectedValue("");
  };

  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <div
        ref={refs.setReference}
        tabIndex={
          disabled ? -1 : 0
        }
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        {...getReferenceProps({
          onKeyDown(event) {
            if (
              event.key ===
              "ArrowDown"
            ) {
              event.preventDefault();

              if (!open) {
                setOpen(true);
              }
            }

            if (
              event.key ===
              "Escape"
            ) {
              setOpen(false);
            }
          },
        })}
        className={clsx(
          "ff-select",
          open &&
            "ff-select--open",
          disabled &&
            "ff-select--disabled"
        )}
      >
        <div className="ff-select__content">
          <SelectValue
            options={
              selectedOptions
            }
            placeholder={
              placeholder
            }
            multi={multi}
            displayMode={
              displayMode
            }
          />
        </div>

        <div className="ff-select__actions">
          {clearable &&
            (Array.isArray(
              selectedValue
            )
              ? selectedValue.length >
                0
              : Boolean(
                  selectedValue
                )) && (
              <button
                type="button"
                className="ff-select__clear"
                aria-label={t(
                  "clearSelection"
                )}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClear();
                }}
              >
                ×
              </button>
            )}

          <span
            className="ff-select__icon"
            aria-hidden="true"
          >
            ▼
          </span>
        </div>
      </div>

      {!disabled && open && (
        <SelectDropdown
          options={
            sourceOptions
          }
          value={
            selectedValue
          }
          multi={multi}
          isPositioned={isPositioned}
          floatingRef={
            refs.setFloating
          }
          floatingStyles={{
            ...floatingStyles,
            width:
              referenceWidth,
          }}
          floatingProps={
            getFloatingProps()
          }
          activeIndex={
            activeIndex
          }
          listRef={
            listRef
          }
          searchable={
            searchable
          }
          search={search}
          setSearch={
            setSearch
          }
          filteredOptions={
            filteredOptions
          }
          flatOptions={
            flatOptions
          }
          loading={
            loading
          }
          hasMore={
            hasMore
          }
          onLoadMore={
            onSearch
              ? handleLoadMore
              : undefined
          }
          onSelect={
            handleSelect
          }
          showSelectAll={
            multi &&
            !onSearch &&
            Boolean(
              props.selectAll
                ?.enabled
            )
          }
          selectAllChecked={
            isAllSelected
          }
          selectAllIndeterminate={
            isIndeterminate
          }
          onSelectAll={
            toggleSelectAll
          }
        />
      )}
    </FieldWrapper>
  );
}