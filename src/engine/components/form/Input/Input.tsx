import clsx from "clsx";
import {
  forwardRef,
  useId,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import {
  FieldWrapper,
  Spinner,
  Icon,
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

      noBorder = false,

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

    const inputRef =
      useRef<HTMLInputElement>(null);

    const isControlled =
      inputProps.value !== undefined;

    const [uncontrolledValue, setUncontrolledValue] =
      useState(() =>
        String(
          isControlled
            ? inputProps.value ?? ""
            : inputProps.defaultValue ?? ""
        )
      );

    const currentValue = isControlled
      ? inputProps.value
      : uncontrolledValue;

    const hasValue =
      currentValue !== undefined &&
      currentValue !== null &&
      String(currentValue).length > 0;

    const hasStartAdornment = !!startAdornment;
    const hasEndAdornment = !!endAdornment;

    const isNumberInput =
      inputProps.type == "number";

    const generatedId = useId();

    const inputId =
      inputProps.id ?? generatedId;

    const helperId = helperText
      ? `${inputId}-helper`
      : undefined;

    const errorId = error
      ? `${inputId}-error`
      : undefined;

    const describedBy = [
      inputProps["aria-describedby"],
      error ? errorId : helperId,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (!isControlled) {
        setUncontrolledValue(
          event.target.value
        );
      }

      inputProps.onChange?.(event);
    };

    const handleClear = () => {
      onClear?.();

      if (!isControlled) {
        if (inputRef.current) {
          inputRef.current.value = "";
        }

        setUncontrolledValue("");
      }

      inputProps.onChange?.({
        target: {
          value: "",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    };

    const inputElement = (
      <div
        className={clsx(
          inputVariants({
            size,
            error: !!error,
            disabled: disabled || loading,
            fullWidth,
            noBorder: !!noBorder,
          }),
          hasStartAdornment &&
            "ff-input--has-start-adornment",
          hasEndAdornment &&
            "ff-input--has-end-adornment",
          isNumberInput &&
            "ff-input--number",
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
          ref={(element) => {
            inputRef.current = element;

            if (typeof ref === "function") {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
          }}
          className="ff-input__element"
          disabled={disabled || loading}
          placeholder={
            loading && loadingText
              ? loadingText
              : placeholder
          }
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={handleInputChange}
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
                <Icon
                  name="clear"
                  size={16}
                />
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