import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix"
  > {

  label?: string;

  helperText?: string;

  error?: string;

  size?: InputSize;

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