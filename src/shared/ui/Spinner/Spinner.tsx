import clsx from "clsx";

import type { SpinnerProps } from "./Spinner.types";
import { spinnerVariants } from "./Spinner.styles";

import "./Spinner.css";

export default function Spinner({
  size = "md",
  variant = "primary",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={clsx(
        spinnerVariants({
          size,
          variant,
        }),
        className
      )}
      {...props}
    />
  );
}