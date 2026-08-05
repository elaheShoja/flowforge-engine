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

interface SelectBaseProps {
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

  searchable?: boolean;

  clearable?: boolean;

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
}

/**
 * Single Select
 */
export interface SingleSelectProps
  extends SelectBaseProps {
  multi?: false;

  value?: string;

  defaultValue?: string;

  onChange?: (
    value: string
  ) => void;
}

/**
 * Multi Select
 */
export interface MultiSelectProps
  extends SelectBaseProps {
  multi: true;

  value?: string[];

  defaultValue?: string[];

  onChange?: (
    value: string[]
  ) => void;
}

/**
 * Select Props
 *
 * Discriminated Union:
 *
 * multi === false / undefined
 * → string
 *
 * multi === true
 * → string[]
 */
export type SelectProps =
  | SingleSelectProps
  | MultiSelectProps;