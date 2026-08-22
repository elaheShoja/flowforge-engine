import { cva } from "class-variance-authority";

export const radioVariants = cva(
  "ff-radio",
  {
    variants: {
      size: {
        sm: "ff-radio--sm",
        md: "ff-radio--md",
        lg: "ff-radio--lg",
      },

      error: {
        true: "ff-radio--error",
        false: "",
      },

      disabled: {
        true: "ff-radio--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-radio--full",
        false: "",
      },

      alignWithField: {
        true: "ff-radio--align-field",
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      error: false,
      disabled: false,
      fullWidth: false,
      alignWithField: false,
    },
  }
);