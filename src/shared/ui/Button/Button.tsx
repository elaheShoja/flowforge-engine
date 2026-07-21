import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";
import clsx from "clsx";

import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const classes = clsx(
    buttonVariants({
      variant,
      size,
      fullWidth,
      loading,
    }),
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span
          className="ff-button__spinner"
          aria-hidden="true"
        />
      ) : (
        leftIcon && (
          <span className="ff-button__icon">
            {leftIcon}
          </span>
        )
      )}

      {children && (
        <span className="ff-button__label">
          {children}
        </span>
      )}

      {!loading && rightIcon && (
        <span className="ff-button__icon">
          {rightIcon}
        </span>
      )}
    </button>
  );
}