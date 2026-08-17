import type { HTMLAttributes, ReactNode } from "react";

export interface FieldWrapperProps
  extends HTMLAttributes<HTMLDivElement> {

  label?: string;

  htmlFor?: string;

  required?: boolean;

  errorId?: string;

  error?: string;

  helperId?: string;

  helperText?: string;

  tooltip?: ReactNode;

  children: ReactNode;

  fullWidth?: boolean;

  disabled?: boolean;
}