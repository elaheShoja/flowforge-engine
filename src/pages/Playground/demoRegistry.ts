import type { ComponentType } from "react";

import InputDemo from "./demos/InputDemo";
import TextareaDemo from "./demos/TextareaDemo";
import CollapseDemo from "./demos/CollapseDemo";
import CollapseGroupDemo from "./demos/CollapseGroupDemo";
import SelectDemo from "./demos/SelectDemo";
import CheckboxDemo from "./demos/CheckboxDemo";
import PasswordInputDemo from "./demos/PasswordInputDemo";
import SearchInputDemo from "./demos/SearchInputDemo";
import ButtonDemo from "./demos/ButtonDemo";
import SpinnerDemo from "./demos/SpinnerDemo";

export type PlaygroundDemo = ComponentType<{
  focusId?: string;
  innerFocusId?: string;
}>;
  

export const playgroundRegistry: Record<
  string,
  PlaygroundDemo
> = { 
  input: InputDemo,
  textarea: TextareaDemo,
  select: SelectDemo,
  checkbox: CheckboxDemo,
  "search-input" : SearchInputDemo,
  "password-input": PasswordInputDemo,
  button: ButtonDemo,
  spinner: SpinnerDemo,
  collapse: CollapseDemo,
  "collapse-group": CollapseGroupDemo, 
};