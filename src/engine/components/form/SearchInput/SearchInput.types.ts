import type { InputProps } from "../Input";

export interface SearchInputProps
  extends Omit<InputProps, "type"> {
  clearable?: boolean;
}