import clsx from "clsx";
import type { SelectOption as SelectOptionType } from "./Select.types";

interface Props {
    option: SelectOptionType;

    selected: boolean;

    onSelect: (value: string) => void;

    index: number;

    active: boolean;

    listRef: React.MutableRefObject<Array<HTMLElement | null>>;
}

export default function SelectOption({
  option,
  selected,
  onSelect,
  index,
  active,
  listRef,
}: Props) {
  return (
    <button
        type="button"
        disabled={option.disabled}
        ref={(node) => {
            listRef.current[index] = node;

            if (active) {
                node?.scrollIntoView({
                    block: "nearest",
                })
            }
        }}
        className={clsx(
            "ff-select__option",
            selected && "ff-select__option--selected",
            active && "ff-select__option--active"
        )}
        tabIndex={active ? 0 : 1}
        role="option"
        aria-selected={selected}
        onClick={() => onSelect(option.value)}
    >
      {option.icon && (
        <span className="ff-select__option-icon">
          {option.icon}
        </span>
      )}

      <span className="ff-select__option-label">
        {option.label}
      </span>
    </button>
  );
}