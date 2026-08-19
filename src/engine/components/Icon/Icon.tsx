import clsx from "clsx";
import type {
  ComponentPropsWithoutRef,
} from "react";

import {
  iconRegistry,
  type IconName,
} from "./iconRegistry";

import "./Icon.css";

export interface IconProps
  extends ComponentPropsWithoutRef<"svg"> {
  name: IconName;
  size?: number;
  color?: string;
}

export function Icon({
  name,
  size = 18,
  color,
  className,
  ...props
}: IconProps) {
  const IconComponent =
    iconRegistry[name];

  return (
    <IconComponent
      width={size}
      height={size}
      color={color}
      className={clsx(
        "ff-icon",
        className
      )}
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}