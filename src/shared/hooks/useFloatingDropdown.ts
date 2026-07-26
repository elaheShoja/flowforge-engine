import { useState } from "react";

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";

export function useFloatingDropdown() {

  const [open, setOpen] = useState(false);

  const floating = useFloating({
    open,
    onOpenChange: setOpen,

    placement: "bottom-start",

    whileElementsMounted: autoUpdate,

    middleware: [
      offset(6),
      flip(),
      shift({
        padding: 8,
      }),
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