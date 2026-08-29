import clsx from "clsx";

export type GroupInputDirection =
  | "horizontal"
  | "vertical";

interface GroupInputStyleOptions {
  direction: GroupInputDirection;

  divider?: boolean;

  disabled?: boolean;

  className?: string;
}

export function groupInputVariants({
  direction,
  divider = false,
  disabled = false,
  className,
}: GroupInputStyleOptions) {
  return clsx(
    "ff-group-input",
    `ff-group-input--${direction}`,
    divider &&
      "ff-group-input--divider",
    disabled &&
      "ff-group-input--disabled",
    className
  );
}