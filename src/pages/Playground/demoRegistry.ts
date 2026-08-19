import type { ComponentType } from "react";

import InputDemo from "./demos/InputDemo";
import TextareaDemo from "./demos/TextareaDemo";
import CollapseDemo from "./demos/CollapseDemo";
import CollapseGroupDemo from "./demos/CollapseGroupDemo";
import SelectDemo from "./demos/SelectDemo";
import CheckboxDemo from "./demos/CheckboxDemo";

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
  checkbox: CheckboxDemo,
  collapse: CollapseDemo,
  "collapse-group": CollapseGroupDemo,
  select: SelectDemo,
};