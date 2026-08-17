import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "label"
  | "error";

export interface TypographyProps
  extends HTMLAttributes<HTMLElement> {

  variant?: TypographyVariant;

  children: ReactNode;

  as?: ElementType;

  truncate?: boolean;
}