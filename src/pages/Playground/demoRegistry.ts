import type { ComponentType } from "react";

import InputDemo from "./demos/InputDemo";
import TextareaDemo from "./demos/TextareaDemo";
import CollapseDemo from "./demos/CollapseDemo";
import CollapseGroupDemo from "./demos/CollapseGroupDemo";
import SelectDemo from "./demos/SelectDemo";
import CheckboxDemo from "./demos/CheckboxDemo";
import ButtonDemo from "./demos/ButtonDemo";
import SpinnerDemo from "./demos/SpinnerDemo";
import RadioDemo from "./demos/RadioDemo";
import SwitchDemo from "./demos/SwitchDemo";
import FlagDemo from "./demos/FlagDemo";
import GroupInputDemo from "./demos/GroupInputDemo";
import InputTypeDemo from "./demos/InputTypeDemo";

export type PlaygroundDemo = ComponentType<{
  focusId?: string;
  innerFocusId?: string;
}>;
  

export const playgroundRegistry: Record<
  string,
  PlaygroundDemo
> = { 
  input: InputDemo,
  "input-type": InputTypeDemo,
  textarea: TextareaDemo,
  flag: FlagDemo,
  select: SelectDemo,
  checkbox: CheckboxDemo,
  radio: RadioDemo,
  switch: SwitchDemo,
  "group-input": GroupInputDemo,
  button: ButtonDemo,
  spinner: SpinnerDemo,
  collapse: CollapseDemo,
  "collapse-group": CollapseGroupDemo, 
};