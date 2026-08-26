import clsx from "clsx";

import {
  flagRegistries,
} from "./flagRegistry";

import type {
  FlagProps,
} from "./Flag.types";

import "./Flag.css";

export default function Flag({
  type,
  code,
  size = 18,
  className,
  title,
  ariaLabel,
  style,
}: FlagProps) {
  const registry =
    flagRegistries[type];

  const FlagComponent =
    registry[code];

  if (!FlagComponent) {
    return null;
  }

  return (
    <span
      className="ff-flag-wrapper"
      title={title}
    >
      <FlagComponent
        width={size}
        height={size}
        className={clsx(
          "ff-flag",
          className
        )}
        role="img"
        aria-label={
          ariaLabel ?? title
        }
        style={style}
      />
    </span>
  );
}