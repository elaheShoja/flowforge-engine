import type { GroupInputComponentName } from "./groupInputRegistry";

/* ==========================================================
   Value Mapping
========================================================== */

export type GroupInputValueProp =
  | "value"
  | "checked";

export type GroupInputChangeMode =
  | "event"
  | "direct";

/* ==========================================================
   Configuration
========================================================== */

export interface GroupInputValueConfig {
  valueProp: GroupInputValueProp;

  changeMode: GroupInputChangeMode;

  /**
   * Whether GroupInput should force
   * noBorder on the child component.
   *
   * The consumer cannot override this
   * when the component is rendered inside
   * GroupInput.
   */
  noBorder?: boolean;
}

/* ==========================================================
   Registry
========================================================== */

export const groupInputValueConfig: Partial<
  Record<
    GroupInputComponentName,
    GroupInputValueConfig
  >
> = {
  /* --------------------------------------------------------
     Input
  -------------------------------------------------------- */

  Input: {
    valueProp: "value",
    changeMode: "event",
    noBorder: true,
  },

  /* --------------------------------------------------------
     InputType
  -------------------------------------------------------- */

  InputType: {
    valueProp: "value",
    changeMode: "event",
    noBorder: true,
  },

  /* --------------------------------------------------------
     Textarea
  -------------------------------------------------------- */

  Textarea: {
    valueProp: "value",
    changeMode: "event",
    noBorder: true,
  },

  /* --------------------------------------------------------
     Select
  -------------------------------------------------------- */

  Select: {
    valueProp: "value",
    changeMode: "direct",
    noBorder: true,
  },

  /* --------------------------------------------------------
     Checkbox
  -------------------------------------------------------- */

  Checkbox: {
    valueProp: "checked",
    changeMode: "direct",
  },

  /* --------------------------------------------------------
     Radio
  -------------------------------------------------------- */

  Radio: {
    valueProp: "checked",
    changeMode: "direct",
  },

  /* --------------------------------------------------------
     Switch
  -------------------------------------------------------- */

  Switch: {
    valueProp: "checked",
    changeMode: "direct",
  },
};