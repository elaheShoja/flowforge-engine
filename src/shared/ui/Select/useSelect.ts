import { useState } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useInteractions,
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

  const click = useClick(floating.context);

    const dismiss = useDismiss(floating.context);

    const interactions = useInteractions([
    click,
    dismiss,
    ]);

  return {
    open,
    setOpen,
    ...floating,
    ...interactions,
  };
}