import { cva } from "class-variance-authority";

export const collapseVariants = cva(
  "ff-collapse",
  {
    variants: {
      open: {
        true: "ff-collapse--open",
        false: "",
      },

      disabled: {
        true: "ff-collapse--disabled",
        false: "",
      },
    },

    defaultVariants: {
      open: false,
      disabled: false,
    },
  }
);