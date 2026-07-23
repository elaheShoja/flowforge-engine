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
    "size"
  > {

  label?: string;

  helperText?: string;

  error?: string;

  size?: InputSize;

  fullWidth?: boolean;

  startAdornment?: ReactNode;

  endAdornment?: ReactNode;

  loading?: boolean;

  clearable?: boolean;
}