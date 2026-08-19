import clsx from "clsx";

import {
  forwardRef,
  useEffect,
  useId,
  useRef,
} from "react";

import FieldWrapper from "@/engine/components/form/FieldWrapper";

import type {
  CheckboxProps,
} from "./Checkbox.types";

import {
  checkboxVariants,
} from "./Checkbox.styles";

import "./Checkbox.css";

const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox(
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

    indeterminate = false,

    tooltip,

    withWrapper = true,

    className = "",

    ...inputProps
  },
  forwardedRef
) {
  const generatedId = useId();

  const checkboxId =
    id ?? generatedId;

  const internalRef =
    useRef<HTMLInputElement>(
      null
    );

  /**
   * Keep forwarded ref and internal ref
   * synchronized.
   */
  const setInputRef = (
    node: HTMLInputElement | null
  ) => {
    internalRef.current = node;

    if (typeof forwardedRef === "function") {
      forwardedRef(node);
      return;
    }

    if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  /**
   * Native checkbox indeterminate
   * is a DOM property, not an HTML attribute.
   */
  useEffect(() => {
    if (!internalRef.current) {
      return;
    }

    internalRef.current.indeterminate =
      indeterminate;
  }, [indeterminate]);

  const helperId =
    helperText
      ? `${checkboxId}-helper`
      : undefined;

  const errorId =
    error
      ? `${checkboxId}-error`
      : undefined;

  const describedBy =
    errorId ?? helperId;

  const checkboxElement = (
    <label
      className={clsx(
        checkboxVariants({
          size,
          error: !!error,
          disabled,
          fullWidth,
          indeterminate,
        }),
        className
      )}
    >
      <input
        {...inputProps}
        ref={setInputRef}
        id={checkboxId}
        type="checkbox"
        className="ff-checkbox__input"
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
        className="ff-checkbox__control"
        aria-hidden="true"
      >
        <span className="ff-checkbox__mark" />

        <span className="ff-checkbox__indeterminate" />
      </span>

      {(label || description) && (
        <span className="ff-checkbox__content">
          {label && (
            <span className="ff-checkbox__label">
              {label}

              {required && (
                <span className="ff-checkbox__required">
                  *
                </span>
              )}
            </span>
          )}

          {description && (
            <span className="ff-checkbox__description">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );

  if (!withWrapper) {
    return checkboxElement;
  }

  return (
    <FieldWrapper
      /*
       * When Checkbox participates in a multi-column
       * form, an empty label keeps its content aligned
       * with the control area of regular fields.
       */
      label={
        alignWithField
          ? "\u00A0"
          : undefined
      }
      htmlFor={checkboxId}
      helperText={helperText}
      helperId={helperId}
      error={error}
      errorId={errorId}
      required={false}
      tooltip={tooltip}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {checkboxElement}
    </FieldWrapper>
  );
});

export default Checkbox;