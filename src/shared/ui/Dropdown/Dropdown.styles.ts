import { cva } from "class-variance-authority";

export const fieldWrapperVariants = cva(
  "ff-field",
  {
    variants: {
      fullWidth: {
        true: "ff-field--full",
        false: "",
      },
    },

    defaultVariants: {
      fullWidth: false,
    },
  }
);