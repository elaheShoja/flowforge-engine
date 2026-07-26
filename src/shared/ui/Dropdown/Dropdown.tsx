import clsx from "clsx";
import type {
  CSSProperties,
  ReactNode,
} from "react";

import "./Dropdown.css";

interface DropdownProps {

  children: ReactNode;

  className?: string;

  style?: CSSProperties;

}

export default function Dropdown({

  children,

  className,

  style,

}: DropdownProps) {

  return (

    <div
      className={clsx(
        "ff-dropdown",
        className
      )}
      style={style}
    >
      {children}
    </div>

  );

}