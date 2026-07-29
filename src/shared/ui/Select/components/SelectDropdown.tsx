import { useEffect ,useRef } from "react";
import Dropdown from "@/shared/ui/Dropdown";
import SearchInput from "@/shared/ui/SearchInput";

import SelectGroup from "./SelectGroup";
import SelectOption from "./SelectOption";

import type {
  SelectGroup as SelectGroupType,
  SelectOption as SelectOptionType,
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

  onSearch?: (query: string) => void | Promise<void>;

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
  loading=false,
}: SelectDropdownProps) {
  const activeOption =
    activeIndex !== null
      ? flatOptions[activeIndex]
      : null;

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!searchable) return;

    searchInputRef.current?.focus();
  }, [search, searchable]);

  useEffect(() => {
    if (!searchable) return;
    if (!onSearch) return;
    if (!search) return;

    const timer = window.setTimeout(() => {
      onSearch(search);
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [search, searchable, onSearch]);

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

      <div className="ff-select__options">
        {loading ? (
          <div className="ff-select__empty">
            Loading ...
          </div>
        ):
          filteredOptions.length === 0 && search ? (
          <div className="ff-select__empty">
            No results found
          </div>
        ) : (
          filteredOptions.map((option) => {
            if ("options" in option) {
              return (
                <div key={option.label}>
                  <SelectGroup group={option} />

                  {option.options.map((child) => (
                    <SelectOption
                      key={child.value}
                      option={child}
                      index={flatOptions.findIndex(
                        (item) => item.value === child.value
                      )}
                      active={activeOption?.value === child.value}
                      listRef={listRef}
                      selected={
                        typeof value === "string" &&
                        value === child.value
                      }
                      onSelect={onSelect}
                    />
                  ))}
                </div>
              );
            }

            return (
              <SelectOption
                key={option.value}
                option={option}
                index={flatOptions.findIndex(
                  (item) => item.value === option.value
                )}
                active={activeOption?.value === option.value}
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
      </div>
    </Dropdown>
  );
}