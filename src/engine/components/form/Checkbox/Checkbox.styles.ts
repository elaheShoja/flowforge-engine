import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "ff-checkbox",
  {
    variants: {
      size: {
        sm: "ff-checkbox--sm",
        md: "ff-checkbox--md",
        lg: "ff-checkbox--lg",
      },

      error: {
        true: "ff-checkbox--error",
        false: "",
      },

      disabled: {
        true: "ff-checkbox--disabled",
        false: "",
      },

      fullWidth: {
        true: "ff-checkbox--full",
        false: "",
      },

      alignWithField: {
        true: "ff-checkbox--align-field",
        false: "",
      },

      indeterminate: {
        true: "ff-checkbox--indeterminate",
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      error: false,
      disabled: false,
      fullWidth: false,
      alignWithField: false,
      indeterminate: false,
    },
  }
);