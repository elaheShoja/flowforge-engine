import { cva } from "class-variance-authority";

export const spinnerVariants = cva("ff-spinner", {
  variants: {
    size: {
      xs: "ff-spinner--xs",
      sm: "ff-spinner--sm",
      md: "ff-spinner--md",
      lg: "ff-spinner--lg",
      xl: "ff-spinner--xl",
    },

    variant: {
      primary: "ff-spinner--primary",
      secondary: "ff-spinner--secondary",
      light: "ff-spinner--light",
    },

    fullscreen: {
      true: "ff-spinner-fullscreen",
      false: ""
    }
  },

  defaultVariants: {
    size: "md",
    variant: "primary",
    fullscreen: false,
  },
});