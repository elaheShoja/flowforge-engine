import type {
  TextareaHTMLAttributes,
} from "react";

export type TextareaResize =
  | "none"
  | "vertical"
  | "horizontal"
  | "both";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  label?: string;

  helperText?: string;

  error?: string;

  fullWidth?: boolean;

  rows?: number;

  minRows?: number;

  maxRows?: number;

  autoResize?: boolean;

  resize?: TextareaResize;
}