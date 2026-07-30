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

export interface SelectRemoteResult {
  options: Array<SelectOption | SelectGroup>;

  hasMore: boolean;
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

  onSearch?: (
    query: string,
    page: number
  ) => void | Promise<void | SelectRemoteResult>;

  multi?: boolean;

  searchable?: boolean;

  clearable?: boolean;

  loading?: boolean;

  hasMore?: boolean;

  onLoadMore?: (
    query: string,
    page: number
  ) => void | Promise<void | SelectRemoteResult>;
}