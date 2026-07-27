import Dropdown from "@/shared/ui/Dropdown";

import SelectOption from "./SelectOption";

import type {
  SelectGroup,
  SelectOption as SelectOptionType,
} from "./Select.types";

interface SelectDropdownProps {
    options: Array<SelectOptionType | SelectGroup>;
    value?: string | string[];

    floatingRef: React.Ref<HTMLDivElement>;

    floatingStyles: React.CSSProperties;

    floatingProps: React.HTMLProps<HTMLElement>;

    activeIndex: number | null;

    listRef: React.MutableRefObject<Array<HTMLElement | null>>;

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
  onSelect,
}: SelectDropdownProps) {
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