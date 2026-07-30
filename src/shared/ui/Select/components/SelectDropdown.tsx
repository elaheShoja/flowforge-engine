import { useEffect, useRef } from "react";
import Dropdown from "@/shared/ui/Dropdown";
import SearchInput from "@/shared/ui/SearchInput";

import SelectGroup from "./SelectGroup";
import SelectOption from "./SelectOption";

import type {
  SelectGroup as SelectGroupType,
  SelectOption as SelectOptionType,
  SelectRemoteResult,
} from "../Select.types";

interface SelectDropdownProps {
  options: Array<SelectOptionType | SelectGroupType>;
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

  onSearch?: (
    query: string,
    page: number
  ) => void | Promise<void | SelectRemoteResult>;

  hasMore?: boolean;

  onLoadMore?: (
    query: string,
    page: number
  ) => void | Promise<void | SelectRemoteResult>;

  loading?: boolean;
}

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
  onSearch,
  hasMore = false,
  onLoadMore,
  loading = false,
}: SelectDropdownProps) {
  const activeOption =
    activeIndex !== null
      ? flatOptions[activeIndex]
      : null;

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  const searchInitializedRef =
    useRef(false);

  const optionsRef =
    useRef<HTMLDivElement>(null);

  const loadingMoreRef =
    useRef(false);

  const pageRef =
    useRef(1);

  /**
   * Reset pagination only when search query changes.
   */
  useEffect(() => {
    pageRef.current = 1;
    loadingMoreRef.current = false;
  }, [search]);

  /**
   * Focus search input when dropdown opens.
   */
  useEffect(() => {
    if (!searchable) return;

    searchInputRef.current?.focus();
  }, [searchable]);

  /**
   * Remote search
   */
  useEffect(() => {
    if (!searchable) return;
    if (!onSearch) return;

    /**
     * Do not execute remote search
     * on initial mount.
     */
    if (!searchInitializedRef.current) {
      searchInitializedRef.current = true;
      return;
    }

    const timer = window.setTimeout(() => {
      pageRef.current = 1;
      loadingMoreRef.current = false;

      onSearch(search, 1);
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    search,
    searchable,
    onSearch,
  ]);

  /**
   * Load more ONLY when the user actually
   * scrolls near the bottom.
   */
  useEffect(() => {
    const element = optionsRef.current;

    if (!element) return;
    if (!onLoadMore) return;

    const handleScroll = async () => {
      if (loadingMoreRef.current) return;
      if (loading) return;
      if (!hasMore) return;

      /**
       * Important:
       * If content does not overflow yet,
       * do NOT automatically load another page.
       */
      const hasVerticalOverflow =
        element.scrollHeight > element.clientHeight;

      if (!hasVerticalOverflow) return;

      /**
       * User must actually scroll.
       */
      if (element.scrollTop <= 0) return;

      const distanceFromBottom =
        element.scrollHeight -
        element.scrollTop -
        element.clientHeight;

      if (distanceFromBottom > 30) return;

      loadingMoreRef.current = true;

      const nextPage =
        pageRef.current + 1;

      try {
        await onLoadMore(
          search,
          nextPage
        );

        /**
         * Keep the page number only after
         * successful loading.
         */
        pageRef.current = nextPage;
      } finally {
        loadingMoreRef.current = false;
      }
    };

    element.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      element.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    search,
    hasMore,
    loading,
    onLoadMore,
  ]);

  return (
    <Dropdown
      containerRef={floatingRef}
      {...floatingProps}
      role="listbox"
      style={{
        ...floatingStyles,
        zIndex: 1000,
      }}
    >
      {searchable && (
        <div className="ff-select__search">
          <SearchInput
            ref={searchInputRef}
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search..."
            withWrapper={false}
          />
        </div>
      )}

      <div
        ref={optionsRef}
        className="ff-select__options"
      >
        {loading &&
        filteredOptions.length === 0 ? (
          <div className="ff-select__empty">
            Loading ...
          </div>
        ) : filteredOptions.length === 0 &&
          search ? (
          <div className="ff-select__empty">
            No results found
          </div>
        ) : (
          filteredOptions.map((option) => {
            if ("options" in option) {
              return (
                <div key={option.label}>
                  <SelectGroup
                    group={option}
                  />

                  {option.options.map(
                    (child) => (
                      <SelectOption
                        key={child.value}
                        option={child}
                        index={flatOptions.findIndex(
                          (item) =>
                            item.value ===
                            child.value
                        )}
                        active={
                          activeOption?.value ===
                          child.value
                        }
                        listRef={listRef}
                        selected={
                          typeof value ===
                            "string" &&
                          value ===
                            child.value
                        }
                        onSelect={onSelect}
                      />
                    )
                  )}
                </div>
              );
            }

            return (
              <SelectOption
                key={option.value}
                option={option}
                index={flatOptions.findIndex(
                  (item) =>
                    item.value ===
                    option.value
                )}
                active={
                  activeOption?.value ===
                  option.value
                }
                listRef={listRef}
                selected={
                  typeof value === "string" &&
                  value === option.value
                }
                onSelect={onSelect}
              />
            );
          })
        )}

        {onLoadMore && hasMore && (
          <div
            className="ff-select__load-more"
            aria-hidden="true"
          >
            {loading && (
              <div className="ff-select__loading-more">
                Loading...
              </div>
            )}
          </div>
        )}
      </div>
    </Dropdown>
  );
}