import clsx from "clsx";

import {
  forwardRef,
  useId,
} from "react";

import FieldWrapper from "@/engine/components/form/FieldWrapper";

import type {
  SwitchProps,
} from "./Switch.types";

import {
  switchVariants,
} from "./Switch.styles";

import "./Switch.css";

const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>(function Switch(
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

    alignWithField = false,

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

  const switchId =
    id ?? generatedId;

  const helperId =
    helperText
      ? `${switchId}-helper`
      : undefined;

  const errorId =
    error
      ? `${switchId}-error`
      : undefined;

  const describedBy =
    errorId ?? helperId;

  const switchElement = (
    <label
      className={clsx(
        switchVariants({
          size,
          error: !!error,
          disabled,
          fullWidth,
        }),
        className
      )}
    >
      <input
        {...inputProps}
        ref={forwardedRef}
        id={switchId}
        type="checkbox"
        className="ff-switch__input"
        checked={checked}
        defaultChecked={
          checked === undefined
            ? defaultChecked
            : undefined
        }
        disabled={disabled}
        required={required}
        role="switch"
        aria-checked={
          checked
        }
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
        className="ff-switch__control"
        aria-hidden="true"
      >
        <span className="ff-switch__thumb" />
      </span>

      {(label || description) && (
        <span className="ff-switch__content">
          {label && (
            <span className="ff-switch__label">
              {label}

              {required && (
                <span className="ff-switch__required">
                  *
                </span>
              )}
            </span>
          )}

          {description && (
            <span className="ff-switch__description">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );

  /*
   * In special layouts such as editable tables,
   * the surrounding component manages the field
   * structure, so FieldWrapper can be removed.
   */
  if (!withWrapper) {
    return switchElement;
  }

  return (
    <FieldWrapper
      /*
       * When alignment is requested, an empty label
       * preserves the vertical space normally occupied
       * by a regular field label.
       */
      label={
        alignWithField
          ? "\u00A0"
          : undefined
      }
      htmlFor={switchId}
      helperText={helperText}
      helperId={helperId}
      error={error}
      errorId={errorId}
      required={false}
      tooltip={tooltip}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {switchElement}
    </FieldWrapper>
  );
});

export default Switch;