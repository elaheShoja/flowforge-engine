import {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";

import Dropdown from "@/shared/ui/Dropdown";
import SearchInput from "@/shared/ui/SearchInput";

import SelectGroup from "./SelectGroup";
import SelectOption from "./SelectOption";
import SelectAllOption from "./SelectAllOption";

import type {
  SelectGroup as SelectGroupType,
  SelectOption as SelectOptionType,
} from "../Select.types";

interface SelectDropdownProps {
  options: Array<
    SelectOptionType | SelectGroupType
  >;

  value?: string | string[];

  floatingRef: React.Ref<HTMLDivElement>;

  floatingStyles: React.CSSProperties;

  floatingProps: React.HTMLProps<HTMLElement>;

  activeIndex: number | null;

  listRef: React.MutableRefObject<
    Array<HTMLElement | null>
  >;

  searchable?: boolean;

  search: string;

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;

  filteredOptions: Array<
    SelectOptionType | SelectGroupType
  >;

  flatOptions: SelectOptionType[];

  onSelect: (value: string) => void;

  showSelectAll?: boolean;

  selectAllChecked?: boolean;

  selectAllIndeterminate?: boolean;

  onSelectAll?: () => void;

  onLoadMore?: () => void;

  loading?: boolean;

  hasMore?: boolean;
}

/**
 * --------------------------------------------------
 * Search Section
 * --------------------------------------------------
 *
 * This part is intentionally separated from the
 * options list.
 *
 * Pagination / loading can cause the options list
 * to re-render without recreating the search input.
 */
interface SelectSearchProps {
  search: string;

  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;

  inputRef: React.RefObject<
    HTMLInputElement | null
  >;

  onFocus: () => void;

  onBlur: () => void;
}

const SelectSearch = memo(
  function SelectSearch({
    search,
    setSearch,
    inputRef,
    onFocus,
    onBlur,
  }: SelectSearchProps) {
    const { t } =
      useTranslation();

    return (
      <div className="ff-select__search">
        <SearchInput
          ref={inputRef}
          value={search}
          onChange={(event) => {
            setSearch(
              event.target.value
            );
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={t(
            "search"
          )}
          withWrapper={false}
        />
      </div>
    );
  }
);

/**
 * --------------------------------------------------
 * Select Dropdown
 * --------------------------------------------------
 */
export default function SelectDropdown({
  value,
  floatingRef,
  floatingStyles,
  floatingProps,
  activeIndex,
  listRef,
  searchable,
  search,
  setSearch,
  filteredOptions,
  flatOptions,
  onSelect,
  showSelectAll = false,
  selectAllChecked = false,
  selectAllIndeterminate = false,
  onSelectAll,
  onLoadMore,
  loading = false,
  hasMore = false,
}: SelectDropdownProps) {
  const { t } =
    useTranslation();

  const isOptionSelected = (
    optionValue: string
  ) => {
    if (
      Array.isArray(value)
    ) {
      return value.includes(
        optionValue
      );
    }

    return (
      value === optionValue
    );
  };

  const activeOption =
    activeIndex !== null
      ? flatOptions[
          activeIndex
        ]
      : null;

  /**
   * Search input DOM node.
   */
  const searchInputRef =
    useRef<HTMLInputElement>(
      null
    );

  /**
   * Options scroll container.
   */
  const optionsRef =
    useRef<HTMLDivElement>(
      null
    );

  /**
   * Prevent multiple load-more requests.
   */
  const loadingMoreRef =
    useRef(false);

  /**
   * Remember whether the user was typing
   * in the search input.
   *
   * This is important because an async request
   * can cause parent state updates.
   */
  const searchHasFocusRef =
    useRef(false);

  /**
   * --------------------------------------------------
   * Initial Search Focus
   * --------------------------------------------------
   *
   * Runs only when searchable changes.
   *
   * It does NOT run on every loading / pagination
   * update.
   */
  useEffect(() => {
    if (!searchable) {
      return;
    }

    searchInputRef.current?.focus();
  }, [searchable]);

  /**
   * --------------------------------------------------
   * Preserve Search Focus
   * --------------------------------------------------
   *
   * If the search input had focus before an async
   * update, restore focus after React commits the
   * update.
   */
  useLayoutEffect(() => {
    if (!searchable) {
      return;
    }

    if (
      !searchHasFocusRef.current
    ) {
      return;
    }

    const input =
      searchInputRef.current;

    if (!input) {
      return;
    }

    if (
      document.activeElement !==
      input
    ) {
      input.focus();
    }
  }, [
    loading,
    filteredOptions,
  ]);

  /**
   * --------------------------------------------------
   * Keep loadingMoreRef synchronized
   * --------------------------------------------------
   */
  useEffect(() => {
    if (!loading) {
      loadingMoreRef.current =
        false;
    }
  }, [loading]);

  /**
   * --------------------------------------------------
   * Infinite Scroll
   * --------------------------------------------------
   */
  useEffect(() => {
    const element =
      optionsRef.current;

    if (!element) {
      return;
    }

    if (!onLoadMore) {
      return;
    }

    const handleScroll = () => {
      if (loading) {
        return;
      }

      if (!hasMore) {
        return;
      }

      if (
        loadingMoreRef.current
      ) {
        return;
      }

      /**
       * Do not load more if the list
       * doesn't actually have overflow.
       */
      const hasVerticalOverflow =
        element.scrollHeight >
        element.clientHeight;

      if (!hasVerticalOverflow) {
        return;
      }

      /**
       * Do not load the next page
       * at the initial scroll position.
       */
      if (
        element.scrollTop <= 0
      ) {
        return;
      }

      const distanceFromBottom =
        element.scrollHeight -
        element.scrollTop -
        element.clientHeight;

      /**
       * Start loading before reaching
       * the exact bottom.
       */
      if (
        distanceFromBottom > 30
      ) {
        return;
      }

      loadingMoreRef.current =
        true;

      onLoadMore();
    };

    element.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      element.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    loading,
    hasMore,
    onLoadMore,
  ]);

  return (
    <Dropdown
      containerRef={
        floatingRef
      }
      {...floatingProps}
      style={{
        ...floatingStyles,
        zIndex: 1000,
      }}
    >
      {searchable && (
        <SelectSearch
          search={search}
          setSearch={setSearch}
          inputRef={
            searchInputRef
          }
          onFocus={() => {
            searchHasFocusRef.current =
              true;
          }}
          onBlur={() => {
            searchHasFocusRef.current =
              false;
          }}
        />
      )}

      {showSelectAll && (
        <SelectAllOption
          checked={
            selectAllChecked
          }
          indeterminate={
            selectAllIndeterminate
          }
          onClick={() => {
            onSelectAll?.();
          }}
        />
      )}

      <div
        ref={optionsRef}
        className="ff-select__options"
        role="listbox"
      >
        {loading &&
        filteredOptions.length ===
          0 ? (
          <div
            className="ff-select__empty"
            role="status"
            aria-live="polite"
          >
            {t("loading")}
          </div>
        ) : filteredOptions.length ===
            0 && search ? (
          <div
            className="ff-select__empty"
            role="status"
            aria-live="polite"
          >
            {t("noResults")}
          </div>
        ) : (
          filteredOptions.map(
            (option) => {
              /**
               * Group
               */
              if (
                "options" in
                option
              ) {
                return (
                  <div
                    key={
                      option.label
                    }
                  >
                    <SelectGroup
                      group={option}
                    />

                    {option.options.map(
                      (
                        child
                      ) => {
                        const index =
                          flatOptions.findIndex(
                            (
                              item
                            ) =>
                              item.value ===
                              child.value
                          );

                        return (
                          <SelectOption
                            key={
                              child.value
                            }
                            option={
                              child
                            }
                            index={
                              index
                            }
                            active={
                              activeOption?.value ===
                              child.value
                            }
                            listRef={
                              listRef
                            }
                            selected={isOptionSelected(
                              child.value
                            )}
                            onSelect={
                              onSelect
                            }
                          />
                        );
                      }
                    )}
                  </div>
                );
              }

              /**
               * Normal option
               */
              const index =
                flatOptions.findIndex(
                  (
                    item
                  ) =>
                    item.value ===
                    option.value
                );

              return (
                <SelectOption
                  key={
                    option.value
                  }
                  option={
                    option
                  }
                  index={
                    index
                  }
                  active={
                    activeOption?.value ===
                    option.value
                  }
                  listRef={
                    listRef
                  }
                  selected={isOptionSelected(
                    option.value
                  )}
                  onSelect={
                    onSelect
                  }
                />
              );
            }
          )
        )}

        {onLoadMore &&
          hasMore && (
            <div
              className="ff-select__load-more"
              aria-hidden="true"
            >
              {loading && (
                <div className="ff-select__loading-more">
                  {t("loading")}
                </div>
              )}
            </div>
          )}
      </div>
    </Dropdown>
  );
}