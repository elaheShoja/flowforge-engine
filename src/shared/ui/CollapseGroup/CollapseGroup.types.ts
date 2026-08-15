import type { ReactNode } from "react";

export interface CollapseGroupProps {
  /**
   * Collapse components managed by the group.
   */
  children: ReactNode;

  /**
   * IDs of currently open collapses.
   *
   * When provided, the group becomes controlled.
   */
  activeIds?: string[];

  /**
   * Initial open collapse IDs.
   *
   * Used for uncontrolled usage.
   */
  defaultActiveIds?: string[];

  /**
   * Allows multiple collapses to remain open.
   *
   * When false, opening one collapse
   * closes the previously opened collapse.
   */
  multiple?: boolean;

  /**
   * Called whenever the open collapse state changes.
   */
  onChange?: (activeIds: string[]) => void;

  /**
   * ID of the collapse that should receive focus.
   */
  focusId?: string;

  /**
   * Automatically scroll to the focused collapse.
   *
   * @default true
   */
  scrollToFocus?: boolean;

  /**
   * Additional class for the group root.
   */
  className?: string;

  /**
   * Disables interaction for all collapses
   * managed by the group.
   *
   * @default false
   */
  disabled?: boolean;
}