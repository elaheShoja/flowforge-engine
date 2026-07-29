import { useState, useRef, useEffect } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useInteractions,
  useListNavigation,
} from "@floating-ui/react";

interface UseSelectProps {
  itemCount: number;
  selectedIndex: number;
  itemsKey: string;
}

export default function useSelect({
  itemCount,
  selectedIndex,
  itemsKey,
}: UseSelectProps) {
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

    whileElementsMounted: autoUpdate,
  });

  const click = useClick(floating.context);

  const dismiss = useDismiss(floating.context);

  const listNavigation = useListNavigation(
    floating.context,
    {
      listRef,
      activeIndex,

      onNavigate: setActiveIndex,

      loop: true,
    }
  );

  const interactions = useInteractions([
    click,
    dismiss,
    listNavigation,
  ]);

  /**
   * تعیین Active هنگام:
   *
   * 1. باز شدن Select
   * 2. تغییر نتایج Search
   * 3. تغییر Selected
   *
   * اولویت:
   *
   * Selected داخل لیست هست
   *        ↓
   * Active = Selected
   *
   * Selected داخل لیست نیست
   *        ↓
   * Active = اولین آیتم
   *
   * لیست خالی
   *        ↓
   * Active = null
   */
  useEffect(() => {
    if (!open) {
      setActiveIndex(null);
      return;
    }

    if (itemCount === 0) {
      setActiveIndex(null);
      return;
    }

    if (
      selectedIndex >= 0 &&
      selectedIndex < itemCount
    ) {
      setActiveIndex(selectedIndex);
      return;
    }

    setActiveIndex(0);
  }, [
    open,
    itemCount,
    selectedIndex,
    itemsKey,
  ]);

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