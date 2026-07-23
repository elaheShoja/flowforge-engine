import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "ff-input",
  {
    variants: {
      size: {
        sm: "ff-input--sm",
        md: "ff-input--md",
        lg: "ff-input--lg",
      },

      error: {
        true: "ff-input--error",
        false: "",
      },

      disabled: {
        true: "ff-input--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-input--full",
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      error: false,
      disabled: false,
      fullWidth: false,
    },
  }
);