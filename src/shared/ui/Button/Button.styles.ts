import { cva } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      outline: "",
      ghost: "",
      danger: "",
      success: "",
      warning: "",
    },

    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },

    fullWidth: {
      true: "w-full",
      false: "",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});