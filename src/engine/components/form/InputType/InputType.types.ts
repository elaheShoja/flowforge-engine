import type { InputProps } from "../Input";

export interface InputTypeProps
  extends Omit<InputProps, "type"> {
  type?: InputTypeName;
}

export type InputTypeName =
  | "text"
  | "email"
  | "password"
  | "search"
  | "number"
  | "phone"
  | "url";