import { cva } from "class-variance-authority";

export const groupInputVariants = cva(
  "ff-group-input",
  {
    variants: {
      direction: {
        horizontal:
          "ff-group-input--horizontal",

        vertical:
          "ff-group-input--vertical",
      },

      divider: {
        true: "ff-group-input--divider",
        false: "",
      },

      disabled: {
        true: "ff-group-input--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-group-input--full",
        false: "",
      },

      noBorder: {
        true: "ff-group-input--no-border",
        false: "",
      },
    },

    defaultVariants: {
      direction: "horizontal",
      divider: true,
      disabled: false,
      fullWidth: true,
      noBorder: false,
    },
  }
);