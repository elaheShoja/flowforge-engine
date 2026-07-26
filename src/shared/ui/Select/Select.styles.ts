import { cva } from "class-variance-authority";

export const selectVariants = cva(
  "ff-select",
  {
    variants: {

      error: {
        true: "ff-select--error",
        false: "",
      },

      disabled: {
        true: "ff-select--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-select--full",
        false: "",
      },

      open: {
        true: "ff-select--open",
        false: "",
      },

    },

    defaultVariants: {

      error: false,

      disabled: false,

      fullWidth: false,

      open: false,

    },
  }
);