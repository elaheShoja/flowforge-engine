import clsx from "clsx";
import { forwardRef, useId } from "react";
import { useTranslation } from "react-i18next";

import {
  FieldWrapper,
  Spinner,
} from "@/engine/components";

import type { InputProps } from "./Input.types";
import { inputVariants } from "./Input.styles";

import "./Input.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      helperText,
      error,

      size = "md",

      fullWidth = true,

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
    },
    ref
  ) {
    const { t } = useTranslation("common");

    const hasValue =
      inputProps.value !== undefined &&
      inputProps.value !== null &&
      String(inputProps.value).length > 0;

    const generatedId = useId();

    const inputId = inputProps.id ?? generatedId;

    const helperId = helperText
      ? `${inputId}-helper`
      : undefined;

    const errorId = error
      ? `${inputId}-error`
      : undefined;

    const describedBy = error
      ? errorId
      : helperId;

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
          {...inputProps}
          id={inputId}
          ref={ref}
          className="ff-input__element"
          disabled={disabled || loading}
          placeholder={
            loading && loadingText
              ? loadingText
              : placeholder
          }
          aria-invalid={error ? true : undefined }
          aria-describedby={describedBy}
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
                aria-label={t("clear")}
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
        htmlFor={inputId}
        helperText={helperText}
        helperId={helperId}
        error={error}
        errorId={errorId}
        required={required}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {inputElement}
      </FieldWrapper>
    );
  }
);

export default Input;