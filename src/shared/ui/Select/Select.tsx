import clsx from "clsx";
import useSelect from "./useSelect";
import type { SelectProps } from "./Select.types";
import SelectDropdown from "./SelectDropdown";

import FieldWrapper from "@/shared/ui/FieldWrapper";

import "./Select.css"

export default function Select({
  label,
  helperText,
  error,
  required,
  fullWidth = false,
  disabled = false,

  options,
  value,
  onChange,
}: SelectProps) {
  const {
    open,
    setOpen,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  } = useSelect();

  const referenceWidth =
    refs.reference.current?.getBoundingClientRect().width ?? 0;

  const selectedOption = options.find(
    (option) =>
      !("options" in option) &&
      option.value === value
  );

  const displayValue =
    selectedOption?.label ?? "Select country";

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

        {...getReferenceProps()}

        className={clsx(
          "ff-select",
          open && "ff-select--open",
          disabled && "ff-select--disabled"
        )}
      >
        <span
          className={clsx(
            "ff-select__value",
            !selectedOption &&
              "ff-select__placeholder"
          )}
        >
          {displayValue}
        </span>

        <span className="ff-select__icon">
          ▼
        </span>
      </div>

      {!disabled && open && (
        <SelectDropdown
          options={options}
          value={value}
          floatingRef={refs.setFloating}
          floatingStyles={{
            ...floatingStyles,
            width: referenceWidth,
          }}
          floatingProps={getFloatingProps()}
          onSelect={(value) => {
            onChange?.(value);
            setOpen(false);
          }}
        />
      )}
    </FieldWrapper>
  );
}