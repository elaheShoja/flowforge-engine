import type { ComponentType } from "react";

import InputDemo from "./demos/InputDemo";
import TextareaDemo from "./demos/TextareaDemo";
import CollapseDemo from "./demos/CollapseDemo";
import CollapseGroupDemo from "./demos/CollapseGroupDemo";

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
  collapse: CollapseDemo,
  "collapse-group": CollapseGroupDemo,
};