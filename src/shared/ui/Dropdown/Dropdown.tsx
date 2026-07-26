import clsx from "clsx";
import type {
  CSSProperties,
  ReactNode,
  Ref,
} from "react";

import "./Dropdown.css";

interface DropdownProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  containerRef?: Ref<HTMLDivElement>;
}

export default function Dropdown({
  children,
  className,
  style,
  containerRef,
}: DropdownProps) {
  return (
    <div
      ref={containerRef}
      className={clsx("ff-dropdown", className)}
      style={style}
    >
      {children}
    </div>
  );
}