import type { SelectOption } from "../Select.types";

interface Props {
  options: SelectOption[];

  placeholder: string;

  multi?: boolean;

  displayMode?: "text" | "chips";
}

export default function SelectValue({
  options,
  placeholder,
  multi = false,
  displayMode = "chips",
}: Props) {

  /**
   * No selected value
   */
  if (options.length === 0) {
    return (
      <span className="ff-select__value ff-select__placeholder">
        {placeholder}
      </span>
    );
  }


  /**
   * Single Select
   */
  if (!multi) {
    return (
      <span className="ff-select__value">
        {options[0].label}
      </span>
    );
  }


  /**
   * Multi Text Mode
   */
  if (displayMode === "text") {

    const visibleOptions =
        options.slice(0, 2);

    const remaining =
        options.length -
        visibleOptions.length;

    return (
        <span className="ff-select__value">

        {visibleOptions
            .map(
            (option) =>
                option.label
            )
            .join(", ")}

        {remaining > 0 && (
            <>
            {" "}
            +{remaining}
            </>
        )}

        </span>
    );
    }


  /**
   * Multi Chips Mode
   */
  const visibleOptions =
    options.slice(0, 2);

  const remaining =
    options.length -
    visibleOptions.length;


  return (
    <span className="ff-select__chips">

      {visibleOptions.map(
        (option) => (
          <span
            key={option.value}
            className="ff-select__chip"
          >
            {option.label}
          </span>
        )
      )}

      {remaining > 0 && (
        <span className="ff-select__chip-more">
          +{remaining}
        </span>
      )}

    </span>
  );
}