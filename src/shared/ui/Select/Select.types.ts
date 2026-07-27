import type { ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: string;

  shortLabel?: string;

  disabled?: boolean;

  icon?: ReactNode;
}

export interface SelectGroup {
  label: string;

  options: SelectOption[];
}

export interface SelectProps {

  label?: string;

  helperText?: string;

  error?: string;

  required?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  placeholder?: string;

  options: Array<SelectOption | SelectGroup>;

  value?: string | string[];

  defaultValue?: string | string[];

  onChange?: (value: string) => void;

  multi?: boolean;

  searchable?: boolean;

  clearable?: boolean;

  loading?: boolean;

}