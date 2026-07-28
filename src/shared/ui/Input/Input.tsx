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

  clearable = false,
  onClear,

  prefix,
  suffix,

  withWrapper = true,

  ...inputProps
}: InputProps) {

  const hasValue =
    inputProps.value !== undefined &&
    inputProps.value !== null &&
    String(inputProps.value).length > 0;

  const handleClear = () => {
    onClear?.();

    if (inputProps.onChange) {
      inputProps.onChange({
        target: {
          value: "",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const inputElement = (
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

        {prefix && (
          <span className="ff-input__prefix">
            {prefix}
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

        {suffix && (
          <span className="ff-input__suffix">
            {suffix}
          </span>
        )}

       <span className="ff-input__actions">

        {!loading &&
          clearable &&
          hasValue && (
            <button
              type="button"
              className="ff-input__clear"
              onClick={handleClear}
            >
              ×
            </button>
          )}

        {loading ? (
          <Spinner
            size="sm"
            variant="primary"
          />
        ) : (
          endAdornment
        )}

      </span>
      </div>
  );
  
  if (!withWrapper) {
    return inputElement;
  }
  
  return (
    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {inputElement}
    </FieldWrapper>
  );
}