import { useState } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
} from "@floating-ui/react";

export default function useSelect() {
  const [open, setOpen] = useState(false);

  const floating = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [
      offset(6),
      flip(),
      shift(),
    ],
  });

  return {
    open,
    setOpen,
    ...floating,
  };
}