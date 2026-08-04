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

  totalCount: number;
}

export interface SelectProps {
  label?: string;

  helperText?: string;

  error?: string;

  required?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  placeholder?: string;

  options: Array<
    SelectOption | SelectGroup
  >;

  value?: string | string[];

  defaultValue?: string | string[];

  onChange?: (value: string) => void;

  /**
   * Remote search / pagination.
   *
   * Select internally manages:
   * - search
   * - debounce
   * - offset
   * - limit
   * - loading
   * - hasMore
   * - infinite scroll
   * - pagination reset
   * - request protection
   *
   * Consumer only provides the request.
   */
  onSearch?: (
    query: string,
    offset: number,
    limit: number
  ) =>
    | void
    | Promise<SelectRemoteResult | void>;

  multi?: boolean;

  searchable?: boolean;

  clearable?: boolean;
}