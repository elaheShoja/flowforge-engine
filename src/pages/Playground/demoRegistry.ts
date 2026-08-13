import type { ComponentType } from "react";

import InputDemo from "./demos/InputDemo";
import TextareaDemo from "./demos/TextareaDemo";

export type PlaygroundDemo = ComponentType;

export const playgroundRegistry: Record<
  string,
  PlaygroundDemo
> = {
  input: InputDemo,
  textarea: TextareaDemo,
};