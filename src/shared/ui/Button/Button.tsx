import clsx from "clsx";

import Spinner from "../Spinner";

import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";

import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const classes = clsx(
    buttonVariants({
      variant,
      size,
      fullWidth,
    }),
    className
  );

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span aria-hidden="true">
          <Spinner
            size="sm"
            variant={
              variant === "outline" ||
              variant === "ghost"
                ? "primary"
                : "light"
            }
          />
        </span>
      ) : (
        leftIcon && (
          <span
            className="ff-button__icon"
            aria-hidden="true"
          >
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
        <span
          className="ff-button__icon"
          aria-hidden="true"
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
}