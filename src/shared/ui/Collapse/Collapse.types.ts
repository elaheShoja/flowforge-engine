import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface CollapseProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "title" | "onToggle"
  > {
  /**
   * Unique identifier for the collapse.
   */
  id: string;

  /**
   * Collapse header title.
   */
  title: ReactNode;

  /**
   * Collapse content.
   */
  children: ReactNode;

  /**
   * Initial open state for uncontrolled usage.
   */
  defaultOpen?: boolean;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Called whenever the collapse state changes.
   */
  onOpenChange?: (
    id: string,
    open: boolean
  ) => void;

  /**
   * Optional icon displayed when the collapse is open.
   */
  openIcon?: ReactNode;

  /**
   * Optional icon displayed when the collapse is closed.
   */
  closeIcon?: ReactNode;

  /**
   * Optional content displayed at the end of the header.
   */
  endContent?: ReactNode;

  /**
   * Disables user interaction.
   */
  disabled?: boolean;

  /**
   * Additional class for the root element.
   */
  className?: string;

  /**
   * Additional class for the header button.
   */
  headerClassName?: string;

  /**
   * Additional class for the body.
   */
  bodyClassName?: string;
}