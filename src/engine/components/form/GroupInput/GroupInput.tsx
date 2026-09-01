import {
  useEffect,
  useState,
} from "react";

import { groupInputVariants } from "./GroupInput.styles";

import FieldWrapper from "@/engine/components/form/FieldWrapper";

import {
  groupInputRegistry,
} from "./config/groupInputRegistry";

import {
  groupInputValueConfig,
} from "./config/GroupInputValueConfig";

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

  divider = true,

  noBorder = false,

  items,

  value,

  defaultValue = {},

  onChange,

  className,

  style,
}: GroupInputProps) {
  /* ========================================================
     Internal Value
  ======================================================== */

  const [
    internalValue,
    setInternalValue,
  ] = useState<GroupInputValue>(
    value ?? defaultValue
  );

  /* ========================================================
     Controlled Synchronization
  ======================================================== */

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue =
    value ?? internalValue;

  /* ========================================================
     Update Item Value
  ======================================================== */

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

  /* ========================================================
     Resolve Event Value
  ======================================================== */

  const resolveEventValue = (
    event: unknown
  ): unknown => {
    if (
      event &&
      typeof event === "object" &&
      "target" in event
    ) {
      const target =
        (
          event as {
            target?: {
              value?: unknown;
            };
          }
        ).target;

      return target?.value;
    }

    return event;
  };

  /* ========================================================
     Render
  ======================================================== */

  const content = (
    <div
      className={groupInputVariants({
        direction,
        divider,
        disabled,
        fullWidth,
        noBorder,
        className,
      })}
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
            flex = 1,
            ...componentProps
          } = item;

          const config =
            groupInputValueConfig[
              componentName as keyof typeof groupInputValueConfig
            ];

          const hasValueName =
            Boolean(itemName);

          const itemValue =
            hasValueName
              ? currentValue[itemName!]
              : undefined;

          /* ==================================================
             Child Props
          ================================================== */

          const props: Record<
            string,
            unknown
          > = {
            ...componentProps,

            /*
             * GroupInput always owns
             * the FieldWrapper.
             */
            withWrapper: false,

            /*
             * GroupInput owns the disabled state.
             */
            disabled:
              disabled ||
              Boolean(
                componentProps.disabled
              ),
          };

          /* ==================================================
             Value Prop
          ================================================== */

          if (
            hasValueName &&
            config
          ) {
            props[
              config.valueProp
            ] = itemValue;
          }

          /* ==================================================
             Change Handler
          ================================================== */

          if (
            hasValueName &&
            config
          ) {
            props.onChange = (
              nextValue: unknown
            ) => {
              const resolvedValue =
                config.changeMode ===
                "event"
                  ? resolveEventValue(
                      nextValue
                    )
                  : nextValue;

              handleItemChange(
                itemName!,
                resolvedValue
              );
            };
          }

          /* ==================================================
             Forced noBorder
          ================================================== */

          /*
           * noBorder is an internal GroupInput
           * concern. When configured for a child,
           * it is always forced to true.
           *
           * It is intentionally assigned AFTER
           * componentProps so the consumer cannot
           * override it through item props.
           */
          if (config?.noBorder) {
            props.noBorder = true;
          }

          /* ==================================================
             Render Item
          ================================================== */

          return (
            <div
              key={
                itemName ??
                `${componentName}-${index}`
              }
              className="ff-group-input__item"
              style={{
                flex: `${flex} 1 0` 
              }}
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

  /* ========================================================
     Without Wrapper
  ======================================================== */

  if (!withWrapper) {
    return content;
  }

  /* ========================================================
     With Wrapper
  ======================================================== */

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