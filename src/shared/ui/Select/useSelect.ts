import { useState, useRef, useEffect } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useInteractions,
  useListNavigation,
} from "@floating-ui/react";

export default function useSelect() {
  const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

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

    const listNavigation = useListNavigation(
        floating.context,
        {
            listRef,
            activeIndex,
            selectedIndex: activeIndex,
            onNavigate: setActiveIndex,
            loop: true
        }
     );

    const interactions = useInteractions([
        click,
        dismiss,
        listNavigation,
    ]);

    useEffect(() => {
        if (!open) {
            setActiveIndex(null);
        }
    }, [open])
    
    return {
        open,
        setOpen,

        activeIndex,
        setActiveIndex,

        listRef,

        ...floating,
        ...interactions,
    };
}