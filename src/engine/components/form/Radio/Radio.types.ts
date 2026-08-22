import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type RadioSize =
  | "sm"
  | "md"
  | "lg";

export interface RadioProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "size"
    | "checked"
    | "defaultChecked"
    | "onChange"
  > {
  /**
   * Radio label.
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
   * Called when the Radio becomes selected.
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
   * Radio size.
   */
  size?: RadioSize;

  /**
   * Makes the Radio container full width.
   */
  fullWidth?: boolean;

  /**
   * Aligns the Radio with the
   * control area of another form field.
   */
  alignWithField?: boolean;

  /**
   * Marks the field as required.
   */
  required?: boolean;

  /**
   * Makes the Radio visually and
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
   * Useful when Radio is embedded inside
   * another layout or custom form structure.
   */
  withWrapper?: boolean;

  /**
   * Optional class name for the Radio root.
   */
  className?: string;
}