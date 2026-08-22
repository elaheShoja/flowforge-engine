import { cva } from "class-variance-authority";

export const switchVariants = cva(
  "ff-switch",
  {
    variants: {
      size: {
        sm: "ff-switch--sm",
        md: "ff-switch--md",
        lg: "ff-switch--lg",
      },

      error: {
        true: "ff-switch--error",
        false: "",
      },

      disabled: {
        true: "ff-switch--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-switch--full",
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