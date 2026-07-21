import { cva } from "class-variance-authority";

export const buttonVariants = cva("ff-button", {
  variants: {
    variant: {
      primary: "ff-button--primary",
      secondary: "ff-button--secondary",
      outline: "ff-button--outline",
      ghost: "ff-button--ghost",
      danger: "ff-button--danger",
      success: "ff-button--success",
      warning: "ff-button--warning",
    },

    size: {
      xs: "ff-button--xs",
      sm: "ff-button--sm",
      md: "ff-button--md",
      lg: "ff-button--lg",
      xl: "ff-button--xl",
    },

    fullWidth: {
      true: "ff-button--full",
      false: "",
    },

    loading: {
      true: "ff-button--loading",
      false: "",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    loading: false,
  },
});