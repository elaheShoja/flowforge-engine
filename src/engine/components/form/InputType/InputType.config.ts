import type {
  InputTypeName,
} from "./InputType.types";

/* =========================================================
   Adornment Types
========================================================= */

export type InputAdornmentType =
  | "email"
  | "search"
  | "phone"
  | "url"
  | "passwordToggle";

/* =========================================================
   Input Type Configuration
========================================================= */

export interface InputTypeConfig {
  /**
   * Native HTML input type.
   */
  inputType: React.HTMLInputTypeAttribute;

  /**
   * Translation key for the default label.
   */
  labelKey?: string;

  /**
   * Translation key for the default placeholder.
   */
  placeholderKey?: string;

  /**
   * Default start adornment.
   */
  startAdornment?: InputAdornmentType;

  /**
   * Default end adornment.
   */
  endAdornment?: InputAdornmentType;

  /**
   * Whether clear functionality is enabled by default.
   */
  clearable?: boolean;

  /**
   * Default prefix.
   */
  prefix?: string;

  /**
   * Default suffix.
   */
  suffix?: string;
}

/* =========================================================
   Input Type Registry
========================================================= */

export const inputTypeConfig: Record<
  InputTypeName,
  InputTypeConfig
> = {
  /* -------------------------------------------------------
     Text
  ------------------------------------------------------- */

  text: {
    inputType: "text",
  },

  /* -------------------------------------------------------
     Email
  ------------------------------------------------------- */

  email: {
    inputType: "email",

    labelKey:
      "input.email.label",

    placeholderKey:
      "input.email.placeholder",

    startAdornment: "email",
  },

  /* -------------------------------------------------------
     Password
  ------------------------------------------------------- */

  password: {
    inputType: "password",

    labelKey:
      "input.password.label",

    placeholderKey:
      "input.password.placeholder",

    endAdornment:
      "passwordToggle",
  },

  /* -------------------------------------------------------
     Search
  ------------------------------------------------------- */

  search: {
    inputType: "search",

    labelKey:
      "input.search.label",

    placeholderKey:
      "input.search.placeholder",

    startAdornment:
      "search",

    clearable: true,
  },

  /* -------------------------------------------------------
     Number
  ------------------------------------------------------- */

  number: {
    inputType: "number",

    labelKey:
      "input.number.label",

    placeholderKey:
      "input.number.placeholder",
  },

  /* -------------------------------------------------------
     Phone
  ------------------------------------------------------- */

  phone: {
    inputType: "phone",

    labelKey:
      "input.phone.label",

    placeholderKey:
      "input.phone.placeholder",

    startAdornment: "phone",
  },

  /* -------------------------------------------------------
     URL
  ------------------------------------------------------- */

  url: {
    inputType: "url",

    labelKey:
      "input.url.label",

    placeholderKey:
      "input.url.placeholder",

    startAdornment: "url",
  },
};