import clsx from "clsx";

import { FieldWrapper } from "@/shared/ui";

import type { InputProps } from "./Input.types";
import { inputVariants } from "./Input.styles";

import "./Input.css";

export default function Input({
  label,
  helperText,
  error,

  size = "md",

  fullWidth = false,

  startAdornment,
  endAdornment,

  className,

  ...props
}: InputProps) {
  return (
    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={props.required}
      fullWidth={fullWidth}
    >
      <div
        className={clsx(
          inputVariants({
            size,
            error: !!error,
            disabled: props.disabled,
            fullWidth,
          }),
          className
        )}
      >
        {startAdornment && (
          <span className="ff-input__icon">
            {startAdornment}
          </span>
        )}

        <input
          className="ff-input__element"
          {...props}
        />

        {endAdornment && (
          <span className="ff-input__icon">
            {endAdornment}
          </span>
        )}
      </div>
    </FieldWrapper>
  );
}