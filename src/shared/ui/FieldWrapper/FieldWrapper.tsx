import clsx from "clsx";
import { fieldWrapperVariants } from "./FieldWrapper.styles";
import type { FieldWrapperProps } from "./FieldWrapper.types";


import "./FieldWrapper.css";

export default function FieldWrapper({
  label,
  required = false,
  error,
  helperText,
  tooltip,
  fullWidth = false,
  children,
  className = "",
  ...props
}: FieldWrapperProps) {
  return (
    <div
      className={clsx(
        fieldWrapperVariants({
          fullWidth,
        }),
        className
      )}
      {...props}
    >
      {(label || tooltip) && (
        <div className="ff-field__header">
          {label && (
            <label className="ff-field__label">
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
        <p className="ff-field__error">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="ff-field__helper">
            {helperText}
          </p>
        )
      )}
    </div>
  );
}