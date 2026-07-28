import Dropdown from "@/shared/ui/Dropdown";
import SearchInput from "@/shared/ui/SearchInput";
import useSelectSearch from "../hooks/useSelectSearch";

import SelectOption from "./SelectOption";

import type {
  SelectGroup,
  SelectOption as SelectOptionType,
} from "../Select.types";

interface SelectDropdownProps {
    options: Array<SelectOptionType | SelectGroup>;
    value?: string | string[];

    floatingRef: React.Ref<HTMLDivElement>;

    floatingStyles: React.CSSProperties;

    floatingProps: React.HTMLProps<HTMLElement>;

    activeIndex: number | null;

    listRef: React.MutableRefObject<Array<HTMLElement | null>>;

    searchable?: boolean;

    onSelect: (value: string) => void;

}

export default function SelectDropdown({
  options,
  value,
  floatingRef,
  floatingStyles,
  floatingProps,
  activeIndex,
  listRef,
  searchable,
  onSelect,
}: SelectDropdownProps) {
    const {search, setSearch} = useSelectSearch();
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  withWrapper={false}
                />
            </div>
        )}
        
      <div className="ff-select__options">
        {options.map((option, index) => {
          if ("options" in option) return null;

          return (
            <SelectOption
              key={option.value}
              option={option}
              index={index}
              active={activeIndex === index}
              listRef={listRef}
              selected={typeof value=== "string" && value === option.value}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </Dropdown>
  );
}