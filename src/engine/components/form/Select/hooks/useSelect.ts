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
  disabledIndices?: number[];
}

export default function useSelect({
  itemCount,
  selectedIndex,
  disabledIndices = [],
}: UseSelectProps) {
  const [open, setOpen] =
    useState(false);

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const listRef = useRef<
    Array<HTMLElement | null>
  >([]);

  const floating = useFloating({
    open,
    onOpenChange: setOpen,

    placement: "bottom-start",

    strategy: "fixed",

    middleware: [
      offset(6),
      flip(),
      shift(),
    ],

    whileElementsMounted:
      autoUpdate,
  });

  const click =
    useClick(floating.context);

  const dismiss =
    useDismiss(floating.context);

  const listNavigation =
    useListNavigation(
      floating.context,
      {
        listRef,
        activeIndex,

        onNavigate:
          setActiveIndex,

        loop: true,

        disabledIndices,
      }
    );

  const interactions =
    useInteractions([
      click,
      dismiss,
      listNavigation,
    ]);

  /**
   * Initial active item.
   *
   * IMPORTANT:
   * We do NOT reset activeIndex every time
   * itemCount changes.
   *
   * This is important for remote pagination:
   *
   * Page 1
   *   ↓
   * Page 2 appended
   *   ↓
   * itemCount changes
   *   ↓
   * activeIndex stays where it was
   *   ↓
   * scroll position stays stable
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

    setActiveIndex((current) => {
      /**
       * Keep current active item if it is
       * still valid and not disabled.
       */
      if (
        current !== null &&
        current >= 0 &&
        current < itemCount &&
        !disabledIndices.includes(current)
      ) {
        return current;
      }

      /**
       * Use selected item only if it is
       * not disabled.
       */
      if (
        selectedIndex >= 0 &&
        selectedIndex < itemCount &&
        !disabledIndices.includes(
          selectedIndex
        )
      ) {
        return selectedIndex;
      }

      /**
       * Find the first enabled item.
       */
      const firstEnabledIndex =
        Array.from(
          { length: itemCount },
          (_, index) => index
        ).find(
          (index) =>
            !disabledIndices.includes(index)
        );

      return firstEnabledIndex ?? null;
    });
  }, [
    open,
    itemCount,
    selectedIndex,
    disabledIndices,
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