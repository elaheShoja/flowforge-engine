import clsx from "clsx";

interface Props {
  checked: boolean;

  indeterminate?: boolean;

  onClick: () => void;
}

export default function SelectAllOption({
  checked,
  indeterminate = false,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "ff-select__option",
        "ff-select__select-all",
        {
          "ff-select__select-all--checked":
            checked,

          "ff-select__select-all--indeterminate":
            indeterminate,
        }
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          "ff-select__checkbox",
          {
            "ff-select__checkbox--checked":
              checked,

            "ff-select__checkbox--indeterminate":
              indeterminate,
          }
        )}
      >
        {checked
          ? "✓"
          : indeterminate
            ? "−"
            : ""}
      </span>

      <span>
        Select All
      </span>
    </button>
  );
}