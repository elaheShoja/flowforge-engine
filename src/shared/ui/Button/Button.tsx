import clsx from "clsx";

import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export default function Button({
  children,
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}