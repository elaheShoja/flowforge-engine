import { useCallback, useMemo } from "react";

interface UseSelectAllProps {
  options: string[];

  selectedValues: string[];

  onChange: (
    values: string[]
  ) => void;
}

export default function useSelectAll({
  options,
  selectedValues,
  onChange,
}: UseSelectAllProps) {

  const isAllSelected =
    useMemo(() => {
      if (options.length === 0) {
        return false;
      }

      return options.every(
        (value) =>
          selectedValues.includes(value)
      );
    }, [
      options,
      selectedValues,
    ]);


  const isIndeterminate =
    useMemo(() => {
      const selectedCount =
        options.filter(
          (value) =>
            selectedValues.includes(value)
        ).length;

      return (
        selectedCount > 0 &&
        selectedCount <
          options.length
      );
    }, [
      options,
      selectedValues,
    ]);


  const toggleSelectAll =
    useCallback(() => {

      if (isAllSelected) {
        onChange(
          selectedValues.filter(
            (value) => !options.includes(value)
          )
        );
        return;
      }

      onChange([
        ...new Set([
          ...selectedValues,
          ...options,
        ]),
      ]);

    }, [
      isAllSelected,
      options,
      selectedValues,
      onChange,
    ]);


  return {
    isAllSelected,
    isIndeterminate,
    toggleSelectAll,
  };
}