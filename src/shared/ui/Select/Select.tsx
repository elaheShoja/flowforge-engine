import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import Dropdown from "@/shared/ui/Dropdown";
import { FieldWrapper } from "@/shared/ui";
import { useFloatingDropdown } from "@/shared/hooks/useFloatingDropdown";

import type { SelectProps } from "./Select.types";
import { selectVariants } from "./Select.styles";

import "./Select.css";

export default function Select({
  label,
  helperText,
  error,

  required,

  disabled,

  fullWidth = false,

  placeholder = "Select...",

  options,


  onChange,

}: SelectProps) {

  const {

    open,

    refs,

    floatingStyles,

    getReferenceProps,

    getFloatingProps,

  } = useFloatingDropdown();

  return (

    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth={fullWidth}
    >

      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={clsx(
          selectVariants({
            error: !!error,
            disabled,
            fullWidth,
            open,
          })
        )}
      >

        <span className="ff-select__placeholder">
          {placeholder}
        </span>

        <span className="ff-select__icon">
          <ChevronDown size={18} />
        </span>

      </div>

      {open && (

        <Dropdown
          style={floatingStyles}
          {...getFloatingProps()}
        >

          <div className="ff-select__options">

            {options.map((option) => {

              if ("options" in option) return null;

              return (

                <button
                  key={option.value}
                  type="button"
                  className="ff-select__option"
                  onClick={() => {

                    onChange?.(option.value);

                  }}
                >

                  {option.label}

                </button>

              );

            })}

          </div>

        </Dropdown>

      )}

    </FieldWrapper>

  );

}