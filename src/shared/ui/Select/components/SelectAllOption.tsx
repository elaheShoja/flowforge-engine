import { useTranslation } from "react-i18next";
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
  const { t } =
    useTranslation();

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
      aria-pressed={checked}
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
        aria-hidden="true"
      >
        {checked
          ? "✓"
          : indeterminate
            ? "−"
            : ""}
      </span>

      <span>
        {t("selectAll")}
      </span>
    </button>
  );
}