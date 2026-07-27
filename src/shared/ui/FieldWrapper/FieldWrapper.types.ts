import type { HTMLAttributes, ReactNode } from "react";

export interface FieldWrapperProps
  extends HTMLAttributes<HTMLDivElement> {

  label?: string;

  required?: boolean;

  error?: string;

  helperText?: string;

  tooltip?: ReactNode;

  children: ReactNode;

  fullWidth?: boolean;

  disabled?: boolean;
}