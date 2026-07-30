import { useEffect, useRef } from "react";
import clsx from "clsx";

import type { SelectOption as SelectOptionType } from "../Select.types";

interface Props {
  option: SelectOptionType;

  selected: boolean;

  onSelect: (value: string) => void;

  index: number;

  active: boolean;

  listRef: React.MutableRefObject<
    Array<HTMLElement | null>
  >;
}

export default function SelectOption({
  option,
  selected,
  onSelect,
  index,
  active,
  listRef,
}: Props) {
  const optionRef = useRef<HTMLButtonElement | null>(null);

  /**
   * Keep the option registered for keyboard navigation.
   *
   * IMPORTANT:
   * Do NOT call scrollIntoView inside the ref callback.
   *
   * The ref callback can run again whenever the parent
   * list is re-rendered (for example after pagination).
   * Calling scrollIntoView there would move the scroll
   * position back to the active item.
   */
  const setOptionRef = (
    node: HTMLButtonElement | null
  ) => {
    optionRef.current = node;
    listRef.current[index] = node;
  };

  /**
   * Scroll only when the active state actually changes.
   *
   * This prevents pagination re-renders from moving
   * the scroll position back to the first item.
   */
  useEffect(() => {
    if (!active) return;

    optionRef.current?.scrollIntoView({
      block: "nearest",
    });
  }, [active]);

  return (
    <button
      type="button"
      disabled={option.disabled}
      ref={setOptionRef}
      className={clsx(
        "ff-select__option",
        selected &&
          "ff-select__option--selected",
        active &&
          "ff-select__option--active"
      )}
      tabIndex={active ? 0 : 1}
      role="option"
      aria-selected={selected}
      onClick={() =>
        onSelect(option.value)
      }
    >
      {option.icon && (
        <span className="ff-select__option-icon">
          {option.icon}
        </span>
      )}

      <span className="ff-select__option-label">
        {option.label}
      </span>
    </button>
  );
}