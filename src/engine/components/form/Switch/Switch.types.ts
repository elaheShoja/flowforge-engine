import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type SwitchSize =
  | "sm"
  | "md"
  | "lg";

export interface SwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "size"
    | "checked"
    | "defaultChecked"
    | "onChange"
  > {
  /**
   * Switch label.
   */
  label?: ReactNode;

  /**
   * Additional description displayed below the label.
   */
  description?: ReactNode;

  /**
   * Controlled checked state.
   */
  checked?: boolean;

  /**
   * Initial checked state for uncontrolled usage.
   */
  defaultChecked?: boolean;

  /**
   * Called when the Switch changes state.
   */
  onChange?: (
    checked: boolean
  ) => void;

  /**
   * Helper text displayed below the field.
   */
  helperText?: string;

  /**
   * Validation error message.
   */
  error?: string;

  /**
   * Switch size.
   */
  size?: SwitchSize;

  /**
   * Makes the Switch container full width.
   */
  fullWidth?: boolean;

  /**
   * Aligns the Switch with the
   * control area of another form field.
   *
   * When enabled, FieldWrapper uses an
   * empty label slot to preserve the same
   * vertical structure as regular fields.
   */
  alignWithField?: boolean;

  /**
   * Marks the field as required.
   */
  required?: boolean;

  /**
   * Makes the Switch visually and
   * functionally disabled.
   */
  disabled?: boolean;

  /**
   * Optional tooltip displayed by FieldWrapper.
   */
  tooltip?: ReactNode;

  /**
   * Removes the FieldWrapper.
   *
   * Useful when Switch is embedded inside
   * editable tables or other custom layouts
   * where the surrounding structure already
   * manages field layout and validation.
   */
  withWrapper?: boolean;

  /**
   * Optional class name for the Switch root.
   */
  className?: string;
}