import type { HTMLAttributes } from "react";

export type SpinnerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type SpinnerVariant =
  | "primary"
  | "secondary"
  | "light";

export interface SpinnerProps
  extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
}