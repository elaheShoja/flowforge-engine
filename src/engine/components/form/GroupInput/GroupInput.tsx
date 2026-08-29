import {
  useEffect,
  useState,
} from "react";

import clsx from "clsx";

import FieldWrapper from "@/engine/components/form/FieldWrapper";

import {
  groupInputRegistry,
} from "./groupInputRegistry";

import type {
  GroupInputProps,
  GroupInputValue,
} from "./GroupInput.types";

import "./GroupInput.css";

export default function GroupInput({
  label,
  helperText,
  error,
  required,
  disabled = false,
  fullWidth = true,
  withWrapper = true,
  direction = "horizontal",
  divider = false,
  items,
  value,
  defaultValue = {},
  onChange,
  className,
  style,
}: GroupInputProps) {
  const [
    internalValue,
    setInternalValue,
  ] = useState<GroupInputValue>(
    value ?? defaultValue
  );

  /**
   * Keep internal state synchronized
   * when GroupInput is controlled.
   */
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue =
    value ?? internalValue;

  /**
   * Update one named item.
   */
  const handleItemChange = (
    itemName: string,
    nextValue: unknown
  ) => {
    const nextValues: GroupInputValue = {
      ...currentValue,
      [itemName]: nextValue,
    };

    if (value === undefined) {
      setInternalValue(nextValues);
    }

    onChange?.(nextValues);
  };

  /**
   * Normalize different onChange signatures.
   *
   * Input / Textarea:
   *   event.target.value
   *
   * Select:
   *   value
   *
   * Checkbox / Radio / Switch:
   *   event.target.checked
   *   or direct value
   */
  const resolveChangeValue = (
    eventOrValue: unknown
  ): unknown => {
    if (
      eventOrValue &&
      typeof eventOrValue === "object"
    ) {
      const event =
        eventOrValue as {
          target?: {
            value?: unknown;
            checked?: unknown;
          };
        };

      if (
        event.target &&
        "checked" in event.target &&
        typeof event.target.checked ===
          "boolean"
      ) {
        return event.target.checked;
      }

      if (
        event.target &&
        "value" in event.target
      ) {
        return event.target.value;
      }
    }

    return eventOrValue;
  };

  const content = (
    <div
      className={clsx(
        "ff-group-input",
        `ff-group-input--${direction}`,
        divider &&
          "ff-group-input--divider",
        disabled &&
          "ff-group-input--disabled",
        className
      )}
      style={style}
    >
      {items.map(
        (
          item,
          index
        ) => {
          const Component =
            groupInputRegistry[
              item.componentName as keyof typeof groupInputRegistry
            ] as React.ComponentType<
              Record<string, unknown>
            >;

          if (!Component) {
            return null;
          }

          const {
            componentName,
            name: itemName,
            ...componentProps
          } = item;

          const hasValueName =
            Boolean(itemName);

          const itemValue =
            hasValueName
              ? currentValue[itemName!]
              : undefined;

          const itemOnChange =
            hasValueName
              ? (
                  nextValue: unknown
                ) => {
                  handleItemChange(
                    itemName!,
                    resolveChangeValue(
                      nextValue
                    )
                  );
                }
              : undefined;

          const props: Record<
            string,
            unknown
          > = {
            ...componentProps,

            /*
             * GroupInput owns the wrapper.
             * Child components must never
             * render their own FieldWrapper.
             */
            withWrapper: false,

            disabled:
              disabled ||
              Boolean(
                componentProps.disabled
              ),

            ...(hasValueName && {
              name: itemName,
              value: itemValue,
              onChange:
                itemOnChange,
            }),
          };

          return (
            <div
              key={
                itemName ??
                `${componentName}-${index}`
              }
              className="ff-group-input__item"
            >
              <Component
                {...props}
              />
            </div>
          );
        }
      )}
    </div>
  );

  if (!withWrapper) {
    return content;
  }

  return (
    <FieldWrapper
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {content}
    </FieldWrapper>
  );
}