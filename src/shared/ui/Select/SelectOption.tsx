import clsx from "clsx";
import type { SelectOption as SelectOptionType } from "./Select.types";

interface Props {
  option: SelectOptionType;
  selected: boolean;
  onSelect: (value: string) => void;
}

export default function SelectOption({
  option,
  selected,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      disabled={option.disabled}
      className={clsx(
        "ff-select__option",
        selected && "ff-select__option--selected"
      )}
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