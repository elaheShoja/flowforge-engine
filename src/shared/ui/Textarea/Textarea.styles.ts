import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  "ff-textarea",
  {
    variants: {
      error: {
        true: "ff-textarea--error",
        false: "",
      },

      disabled: {
        true: "ff-textarea--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-textarea--full",
        false: "",
      },
    },

    defaultVariants: {
      error: false,
      disabled: false,
      fullWidth: true,
    },
  }
);