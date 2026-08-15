import clsx from "clsx";
import { fieldWrapperVariants } from "./FieldWrapper.styles";
import type { FieldWrapperProps } from "./FieldWrapper.types";


import "./FieldWrapper.css";

export default function FieldWrapper({
  label,
  htmlFor,
  required = false,
  errorId,
  error,
  helperId,
  helperText,
  tooltip,
  fullWidth = false,
  children,
  className = "",
  disabled = false,
  ...props
}: FieldWrapperProps) {
  return (
    <div
      className={clsx(
        fieldWrapperVariants({
          fullWidth,
        }),
        disabled && "ff-field--disabled",
        className
      )}
      {...props}
    >
      {(label || tooltip) && (
        <div className="ff-field__header">
          {label && (
            <label 
              htmlFor={htmlFor}
              className="ff-field__label"
            >
              {label}

              {required && (
                <span className="ff-field__required">
                  *
                </span>
              )}
            </label>
          )}

          {tooltip && (
            <div className="ff-field__tooltip">
              {tooltip}
            </div>
          )}
        </div>
      )}

      <div className="ff-field__control">
        {children}
      </div>

      {error ? (
        <p 
          id={errorId}
          className="ff-field__error"
        >
          {error}
        </p>
      ) : (
        helperText && (
          <p 
            id={helperId}
            className="ff-field__helper"
          >
            {helperText}
          </p>
        )
      )}
    </div>
  );
}