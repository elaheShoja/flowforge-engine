import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

import clsx from "clsx";

import type { CollapseProps } from "../Collapse/Collapse.types";
import type { CollapseGroupProps } from "./CollapseGroup.types";

import { collapseGroupVariants } from "./CollapseGroup.styles";

import "./CollapseGroup.css";

export default function CollapseGroup({
  children,
  activeIds,
  defaultActiveIds = [],
  multiple = false,
  onChange,
  focusId,
  scrollToFocus = true,
  className,
  disabled = false,
}: CollapseGroupProps) {
  const [internalActiveIds, setInternalActiveIds] =
    useState<string[]>(defaultActiveIds);

  const isControlled = activeIds !== undefined;

  const currentActiveIds =
    activeIds ?? internalActiveIds;

  const groupRef =
    useRef<HTMLDivElement>(null);

  const updateActiveIds = (
    nextIds: string[]
  ) => {
    if (!isControlled) {
      setInternalActiveIds(nextIds);
    }

    onChange?.(nextIds);
  };

  const handleToggle = (
    id: string,
    open: boolean
  ) => {
    if (disabled) {
      return;
    }

    let nextIds: string[];

    if (multiple) {
      if (open) {
        nextIds = currentActiveIds.includes(id)
          ? currentActiveIds
          : [...currentActiveIds, id];
      } else {
        nextIds = currentActiveIds.filter(
          (activeId) => activeId !== id
        );
      }
    } else {
      nextIds = open ? [id] : [];
    }

    updateActiveIds(nextIds);
  };

  useEffect(() => {
    if (!focusId) {
      return;
    }

    const element =
      groupRef.current?.querySelector<HTMLElement>(
        `[data-collapse-id="${CSS.escape(focusId)}"]`
      );

    if (!element) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (scrollToFocus) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      const header =
        element.querySelector<HTMLElement>(
          ".ff-collapse__header"
        );

      header?.focus();
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    focusId,
    currentActiveIds,
    scrollToFocus,
  ]);

  return (
    <div
      ref={groupRef}
      className={clsx(
        collapseGroupVariants(),
        className
      )}
      data-collapse-group
    >
      {Children.map(children, (child) => {
        if (
          !isValidElement<CollapseProps>(child)
        ) {
          return child;
        }

        /*
         * فقط Collapse مستقیم این Group
         * باید توسط این Group مدیریت شود.
         */
        const id = child.props.id;

        if (!id) {
          return child;
        }

        /*
         * اگر child خودش CollapseGroup باشد،
         * اصلاً وارد مدیریت این Group نمی‌شود.
         */

        const isOpen =
          currentActiveIds.includes(id);

        const originalOnOpenChange =
          child.props.onOpenChange;

        return cloneElement(child, {
          open: isOpen,

          disabled:
            disabled || child.props.disabled,

          onOpenChange: (
            collapseId,
            open
          ) => {
            /*
             * فقط ID همان Collapse
             * در همین Group تغییر می‌کند.
             */
            handleToggle(
              collapseId,
              open
            );

            originalOnOpenChange?.(
              collapseId,
              open
            );
          },
        });
      })}
    </div>
  );
}

CollapseGroup.displayName = "CollapseGroup";