import type { ComponentType } from "react";

import InputDemo from "./demos/InputDemo";

export type PlaygroundDemo = ComponentType;

export const playgroundRegistry: Record<
  string,
  PlaygroundDemo
> = {
  input: InputDemo,
};