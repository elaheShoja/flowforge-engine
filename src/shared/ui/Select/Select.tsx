import { useEffect } from "react";
import clsx from "clsx";
import useSelect from "./hooks/useSelect";
import useSelectSearch from "./hooks/useSelectSearch";
import filterOptions from "./utils/filterOptions";
import flattenOptions from "./utils/flattenOptions";
import type { SelectProps } from "./Select.types";
import SelectDropdown from "./components/SelectDropdown";

import FieldWrapper from "@/shared/ui/FieldWrapper";

import "./Select.css"

export default function Select({
  label,
  helperText,
  error,
  required,
  fullWidth = false,
  disabled = false,

  searchable= false,
  options,
  value,
  onChange,
  onSearch,
  hasMore= false,
  onLoadMore,
  loading = false,
}: SelectProps) {
  
  const {
    search,
    setSearch,
  } = useSelectSearch();

  const allFlatOptions= flattenOptions(options);

  const filteredOptions = onSearch? options : filterOptions(
    options,
    search
  );

  const flatOptions = flattenOptions(
    filteredOptions
  );

  const selectedIndex = flatOptions.findIndex(
    (option) => option.value === value
  );

  const itemsKey = flatOptions
    .map((option) => option.value)
    .join("|");

  const {
    open,
    setOpen,

    refs,
    floatingStyles,

    activeIndex,
    listRef,

    getReferenceProps,
    getFloatingProps,
  
  } = useSelect({
    itemCount: flatOptions.length,
    selectedIndex,
    itemsKey,
  });

  
  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open, setSearch])

  const referenceWidth =
    refs.reference.current?.getBoundingClientRect().width ?? 0;

  const selectedOption = allFlatOptions.find(
    (option) =>
      !("options" in option) &&
      option.value === value
  );

  const displayValue =
    selectedOption?.label ?? "Select country";

  return (
    <FieldWrapper 
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <div
        ref={refs.setReference}
        tabIndex={0}
        {...getReferenceProps({
          onKeyDown(event) {
            if (event.key === "ArrowDown"){
              event.preventDefault();

              if (!open){
                setOpen(true);
              }
            }

            if (event.key === "Escape") {
              setOpen(false);
            }
          }
        })}

        className={clsx(
          "ff-select",
          open && "ff-select--open",
          disabled && "ff-select--disabled"
        )}
      >
        <span
          className={clsx(
            "ff-select__value",
            !selectedOption &&
              "ff-select__placeholder"
          )}
        >
          {displayValue}
        </span>

        <span className="ff-select__icon">
          ▼
        </span>
      </div>

      {!disabled && open && (
        <SelectDropdown
          options={options}
          value={value}
          floatingRef={refs.setFloating}
          floatingStyles={{
            ...floatingStyles,
            width: referenceWidth,
          }}
          floatingProps={getFloatingProps()}
          activeIndex={activeIndex}
          listRef={listRef}
          searchable={searchable}
          search= {search}
          setSearch= {setSearch}
          filteredOptions={filteredOptions}
          flatOptions={flatOptions}
          loading={loading}
          onSearch={onSearch}
          hasMore={hasMore}
          onLoadMore={onLoadMore}
          onSelect={(value) => {
            onChange?.(value);
            setOpen(false);
          }}
        />
      )}
    </FieldWrapper>
  );
}