import { cva } from "class-variance-authority";

export const typographyVariants = cva("ff-typography", {
  variants: {
    variant: {
      h1: "ff-typography--h1",
      h2: "ff-typography--h2",
      h3: "ff-typography--h3",
      h4: "ff-typography--h4",
      h5: "ff-typography--h5",
      h6: "ff-typography--h6",

      "body-lg": "ff-typography--body-lg",
      body: "ff-typography--body",
      "body-sm": "ff-typography--body-sm",

      caption: "ff-typography--caption",
      label: "ff-typography--label",
      error: "ff-typography--error",
    },

    truncate: {
      true: "ff-typography--truncate",
      false: "",
    },
  },

  defaultVariants: {
    variant: "body",
    truncate: false,
  },
});