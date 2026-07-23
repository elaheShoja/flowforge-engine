import clsx from "clsx";

import type { SpinnerProps } from "./Spinner.types";
import { spinnerVariants } from "./Spinner.styles";

import "./Spinner.css";

export default function Spinner({
  size = "md",
  variant = "primary",
  label = "Loading...",
  fullscreen = false,
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={clsx(
        spinnerVariants({
          size,
          variant,
          fullscreen,
        }),
        className
      )}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </span>
  );
}