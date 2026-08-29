import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type InputTypeName =
  | "text"
  | "email"
  | "password"
  | "search"
  | "number"
  | "phone"
  | "url";

export interface InputTypeProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "prefix" | "size"
  > {
  /**
   * Semantic input type supported by FlowForge.
   */
  type?: InputTypeName;

  label?: string;

  helperText?: string;

  error?: string;

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;

  startAdornment?: ReactNode;

  endAdornment?: ReactNode;

  loading?: boolean;

  loadingText?: string;

  clearable?: boolean;

  onClear?: () => void;

  prefix?: ReactNode;

  suffix?: ReactNode;

  withWrapper?: boolean;
}