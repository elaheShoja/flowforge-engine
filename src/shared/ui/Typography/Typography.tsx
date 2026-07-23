import clsx from "clsx";

import { typographyVariants } from "./Typography.styles";
import type { TypographyProps } from "./Typography.types";

import "./Typography.css";

export default function Typography({
  variant = "body",
  as,
  truncate = false,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as ?? "p";

  return (
    <Component
      className={clsx(
        typographyVariants({
          variant,
          truncate,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}