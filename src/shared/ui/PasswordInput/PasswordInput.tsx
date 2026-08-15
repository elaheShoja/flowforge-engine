import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/shared/ui";

import type { PasswordInputProps } from "./PasswordInput.types";

export default function PasswordInput({
  endAdornment,
  ...props
}: PasswordInputProps) {
  const { t } = useTranslation();

  const [visible, setVisible] =
    useState(false);

  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      endAdornment={
        <button
          type="button"
          onClick={() =>
            setVisible(!visible)
          }
          aria-label={
            visible
              ? t("hidePassword") 
              : t("showPassword")
          }
        >
          {visible ? "🙈" : "👁"}
        </button>
      }
    />
  );
}