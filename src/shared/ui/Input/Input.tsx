import clsx from "clsx";

import {
  FieldWrapper,
  Spinner,
} from "@/shared/ui";

import type { InputProps } from "./Input.types";
import { inputVariants } from "./Input.styles";

import "./Input.css";

export default function Input({
  label,
  helperText,
  error,

  size = "md",

  fullWidth = false,

  loading = false,
  loadingText,

  startAdornment,
  endAdornment,

  className = "",

  disabled = false,

  placeholder,

  required,

  ...inputProps
}: InputProps) {

  /*const hasValue =
    inputProps.value !== undefined &&
    inputProps.value !== null &&
    String(inputProps.value).length > 0;*/
    
  return (
    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth={fullWidth}
    >
      <div
        className={clsx(
          inputVariants({
            size,
            error: !!error,
            disabled: disabled || loading,
            fullWidth,
          }),
          className
        )}
      >
        {startAdornment && (
          <span className="ff-input__adornment">
            {startAdornment}
          </span>
        )}

        <input
          className="ff-input__element"
          disabled={disabled || loading}
          placeholder={
            loading && loadingText
              ? loadingText
              : placeholder
          }
          {...inputProps}
        />

        {loading ? (
          <span className="ff-input__adornment">
            <Spinner
              size="sm"
              variant="primary"
            />
          </span>
        ) : (
          endAdornment && (
            <span className="ff-input__adornment">
              {endAdornment}
            </span>
          )
        )}
      </div>
    </FieldWrapper>
  );
}