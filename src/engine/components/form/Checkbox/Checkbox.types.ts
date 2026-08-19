import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type CheckboxSize =
  | "sm"
  | "md"
  | "lg";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "size"
    | "checked"
    | "defaultChecked"
    | "onChange"
  > {
  /**
   * Checkbox label.
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
   * Called when the checked state changes.
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
   * Checkbox size.
   */
  size?: CheckboxSize;

  /**
   * Makes the checkbox container full width.
   */
  fullWidth?: boolean;

  /**
   * Aligns the Checkbox with the
   * control area of another form field.
   *
   * The Checkbox uses an empty FieldWrapper
   * label slot to preserve the same vertical
   * structure as regular form fields.
   */
  alignWithField?: boolean;

  /**
   * Marks the field as required.
   */
  required?: boolean;

  /**
   * Makes the checkbox visually and
   * functionally disabled.
   */
  disabled?: boolean;

  /**
   * Shows the Checkbox in an indeterminate state.
   *
   * Indeterminate is a visual DOM state and
   * does not replace the checked value.
   */
  indeterminate?: boolean;

  /**
   * Optional tooltip displayed by FieldWrapper.
   */
  tooltip?: ReactNode;

  /**
   * Removes the FieldWrapper.
   *
   * Useful when Checkbox is embedded inside
   * another layout or custom form structure.
   */
  withWrapper?: boolean;

  /**
   * Optional class name for the Checkbox root.
   */
  className?: string;
}