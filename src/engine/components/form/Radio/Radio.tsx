import clsx from "clsx";

import {
  forwardRef,
  useId,
} from "react";

import FieldWrapper from "@/engine/components/form/FieldWrapper";

import type {
  RadioProps,
} from "./Radio.types";

import {
  radioVariants,
} from "./Radio.styles";

import "./Radio.css";

const Radio = forwardRef<
  HTMLInputElement,
  RadioProps
>(function Radio(
  {
    id,
    label,
    description,

    checked,
    defaultChecked,

    onChange,

    helperText,
    error,

    size = "md",

    fullWidth = false,

    alignWithField = true,

    required = false,

    disabled = false,

    tooltip,

    withWrapper = true,

    className = "",

    ...inputProps
  },
  forwardedRef
) {
  const generatedId = useId();

  const radioId =
    id ?? generatedId;

  const helperId =
    helperText
      ? `${radioId}-helper`
      : undefined;

  const errorId =
    error
      ? `${radioId}-error`
      : undefined;

  const describedBy =
    errorId ?? helperId;

  const radioElement = (
    <label
      className={clsx(
        radioVariants({
          size,
          error: !!error,
          disabled,
          fullWidth,
          alignWithField,
        }),
        className
      )}
    >
      <input
        {...inputProps}
        ref={forwardedRef}
        id={radioId}
        type="radio"
        className="ff-radio__input"
        checked={checked}
        defaultChecked={
          checked === undefined
            ? defaultChecked
            : undefined
        }
        disabled={disabled}
        required={required}
        aria-invalid={
          error
            ? true
            : undefined
        }
        aria-describedby={
          describedBy
        }
        onChange={(event) => {
          onChange?.(
            event.target.checked
          );
        }}
      />

      <span
        className="ff-radio__control"
        aria-hidden="true"
      >
        <span className="ff-radio__dot" />
      </span>

      {(label || description) && (
        <span className="ff-radio__content">
          {label && (
            <span className="ff-radio__label">
              {label}

              {required && (
                <span className="ff-radio__required">
                  *
                </span>
              )}
            </span>
          )}

          {description && (
            <span className="ff-radio__description">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );

  if (!withWrapper) {
    return radioElement;
  }

  return (
    <FieldWrapper
      label={
        alignWithField
          ? "\u00A0"
          : undefined
      }
      htmlFor={radioId}
      helperText={helperText}
      helperId={helperId}
      error={error}
      errorId={errorId}
      required={false}
      tooltip={tooltip}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {radioElement}
    </FieldWrapper>
  );
});

export default Radio;