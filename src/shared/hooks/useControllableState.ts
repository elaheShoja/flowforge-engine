import {
  useCallback,
  useState,
} from "react";

interface Props<T> {
  value?: T;

  defaultValue?: T;

  onChange?: (
    value: T
  ) => void;
}

export default function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: Props<T>) {
  const [internalValue, setInternalValue] =
    useState<T | undefined>(
      defaultValue
    );

  const isControlled =
    value !== undefined;

  const currentValue =
    isControlled
      ? value
      : internalValue;

  const setValue =
    useCallback(
      (nextValue: T) => {
        if (!isControlled) {
          setInternalValue(
            nextValue
          );
        }

        onChange?.(nextValue);
      },
      [
        isControlled,
        onChange,
      ]
    );

  return [
    currentValue,
    setValue,
  ] as const;
}