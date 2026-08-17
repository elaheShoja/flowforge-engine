import clsx from "clsx";
import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  Ref,
} from "react";

import "./Dropdown.css";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
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
  ...props
}: DropdownProps) {
  return (
    <div
      ref={containerRef}
      className={clsx("ff-dropdown", className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}