import { useTranslation } from "react-i18next";
import clsx from "clsx";

import type { SpinnerProps } from "./Spinner.types";
import { spinnerVariants } from "./Spinner.styles";

import "./Spinner.css";

export default function Spinner({
  size = "md",
  variant = "primary",
  label,
  fullscreen = false,
  className,
  ...props
}: SpinnerProps) {
  const { t } = useTranslation();

  const spinnerLabel = label ?? t("loading");

  const spinner = (
    <span
      role="status"
      aria-live="polite"
      aria-label={spinnerLabel}
      className={clsx(
        spinnerVariants({
          size,
          variant,
        }),
        className
      )}
      {...props}
    >
      <span className="sr-only">
        {spinnerLabel}
      </span>
    </span>
  );

  if (fullscreen) {
    return (
      <div
        className="ff-spinner-fullscreen"
        role="presentation"
      >
        {spinner}
      </div>
    );
  }

  return spinner;
}