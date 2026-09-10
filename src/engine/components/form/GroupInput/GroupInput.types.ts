import type {
  CSSProperties,
} from "react";

import type {
  GroupInputComponentName,
} from "./config/groupInputRegistry";

export type GroupInputDirection =
  | "horizontal"
  | "vertical";

export type GroupInputValue =
  Record<string, unknown>;

export interface GroupInputItem {
  /**
   * Name of the FlowForge component
   * to render.
   *
   * Examples:
   * Input, Select, Textarea,
   * Button, Icon, Flag
   */
  componentName: GroupInputComponentName;

  /**
   * Name of the item's value inside
   * the GroupInput value object.
   */
  name?: string;

  /**
   * Initial/current value of the item.
   */
  value?: unknown;

  /**
   * Controls the item's share of the available
   * space inside the GroupInput.
   *
   * Items without a flex value use the default
   * equal distribution.
   *
   * Examples:
   * 1, 2, 3
   */
  flex?: number;

  /**
   * Component-specific props.
   *
   * GroupInput controls the internal
   * FieldWrapper behavior and always
   * renders child components without
   * their own wrapper.
   */
  [key: string]: unknown;
}

export interface GroupInputProps {
  /**
   * Name of the complete grouped value.
   */
  name: string;

  /**
   * Label of the GroupInput.
   */
  label?: string;

  /**
   * Helper text of the GroupInput.
   */
  helperText?: string;

  /**
   * Validation error of the GroupInput.
   */
  error?: string;

  /**
   * Marks the GroupInput as required.
   */
  required?: boolean;

  /**
   * Disables the complete GroupInput.
   */
  disabled?: boolean;

  /**
   * Controls whether GroupInput uses
   * its own FieldWrapper.
   *
   * Default: true.
   */
  withWrapper?: boolean;

  /**
   * Controls the layout direction.
   *
   * Default: horizontal.
   */
  direction?: GroupInputDirection;

  /**
   * Shows a divider between items.
   *
   * Default: false.
   */
  divider?: boolean;

  /**
   * Controls the width behavior of
   * the GroupInput.
   *
   * Default: true.
   */
  fullWidth?: boolean;

  /**
   * Removes the outer border.
   *
   * Dividers between items remain
   * available when enabled.
   *
   * Default: false.
   */
  noBorder?: boolean;

  /**
   * GroupInput items.
   */
  items: GroupInputItem[];

  /**
   * Controlled grouped value.
   */
  value?: GroupInputValue;

  /**
   * Initial grouped value.
   */
  defaultValue?: GroupInputValue;

  /**
   * Called whenever a named item's
   * value changes.
   */
  onChange?: (
    value: GroupInputValue
  ) => void;

  className?: string;

  style?: CSSProperties;
}