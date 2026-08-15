import {
  forwardRef,
  useEffect,
  useId,
  useState,
} from "react";
import clsx from "clsx";

import type { CollapseProps } from "./Collapse.types";

import {collapseVariants} from "./Collapse.styles";

import "./Collapse.css";

const Collapse = forwardRef<
  HTMLDivElement,
  CollapseProps
>(
  (
    {
      id,
      title,
      children,

      defaultOpen = false,
      open,

      onOpenChange,

      openIcon,
      closeIcon,

      endContent,

      disabled = false,

      className,
      headerClassName,
      bodyClassName,

      ...buttonProps
    },
    ref
  ) => {
    const generatedId = useId();

    const contentId =
      `ff-collapse-content-${generatedId}`;

    const [internalOpen, setInternalOpen] =
      useState(defaultOpen);

    const isOpen =
      open !== undefined
        ? open
        : internalOpen;

    useEffect(() => {
      if (open !== undefined) {
        setInternalOpen(open);
      }
    }, [open]);

    const handleToggle = () => {
      if (disabled) {
        return;
      }

      const nextOpen = !isOpen;

      if (open === undefined) {
        setInternalOpen(nextOpen);
      }

      onOpenChange?.(id, nextOpen);
    };

    return (
      <div
        ref={ref}
        id={id}
        className={clsx(
          collapseVariants({
            open: isOpen,
            disabled,
          }),
          className
        )}
        data-collapse-id={id}
        data-open={isOpen}
      >
        <button
          type="button"
          className={clsx(
            "ff-collapse__header",
            headerClassName
          )}
          aria-expanded={isOpen}
          aria-controls={contentId}
          disabled={disabled}
          onClick={handleToggle}
          {...buttonProps}
        >
          <span className="ff-collapse__header-content">
            <span className="ff-collapse__indicator">
              {isOpen
                ? openIcon ?? (
                    <span
                      aria-hidden="true"
                      className="ff-collapse__arrow ff-collapse__arrow--open"
                    >
                      ›
                    </span>
                  )
                : closeIcon ?? (
                    <span
                      aria-hidden="true"
                      className="ff-collapse__arrow"
                    >
                      ›
                    </span>
                  )}
            </span>

            <span className="ff-collapse__title">
              {title}
            </span>
          </span>

          {endContent && (
            <span className="ff-collapse__end">
              {endContent}
            </span>
          )}
        </button>

        <div
          id={contentId}
          className={clsx(
            "ff-collapse__body",
            {
              "ff-collapse__body--open": isOpen,
            },
            bodyClassName
          )}
          role="region"
          aria-hidden={!isOpen}
        >
          <div className="ff-collapse__body-inner">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Collapse.displayName = "Collapse";

export default Collapse;