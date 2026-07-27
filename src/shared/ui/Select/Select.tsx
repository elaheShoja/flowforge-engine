import { useState } from "react";
import clsx from "clsx";
import {
  useFloating,
  offset,
  flip,
  shift
} from "@floating-ui/react";
import type { SelectProps } from "./Select.types";


import Dropdown from "@/shared/ui/Dropdown";
import FieldWrapper from "@/shared/ui/FieldWrapper";

import "./Select.css"

export default function Select({
  label,
  helperText,
  error,
  required,
  fullWidth = false,
  
  options,
  value,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const floating = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [
      offset(6),
      flip(),
      shift()
      
    ],
  });

  const {refs, floatingStyles} = floating;

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

    >
      <div
        ref={refs.setReference}
        className={clsx(
          "ff-select",
          open && "ff-select--open",
        )}
        onClick={() => setOpen(!open)}
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

      {open && (
        <Dropdown
          containerRef={refs.setFloating}
          style={{
            ...floatingStyles,
            width: 500,
            zIndex: 1000,
          }}
        >
          <div className="ff-select__options">
            {options.map((option) => {
              if ("options" in option) return null;

              return (
                <button
                  key={option.value}
                  type="button"
                  className={clsx(
                    "ff-select__option",
                    value === option.value &&
                      "ff-select__option--selected"
                  )}
                  onClick={() => {
                    onChange?.(option.value);
                    setOpen(false);
                  }}
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
            })}
          </div>
        </Dropdown>
      )}
    </FieldWrapper>
  );
}