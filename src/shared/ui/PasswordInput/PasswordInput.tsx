import { useState } from "react";

import { Input } from "@/shared/ui";

import type { PasswordInputProps } from "./PasswordInput.types";

export default function PasswordInput({
  endAdornment,
  ...props
}: PasswordInputProps) {
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
        >
          {visible ? "🙈" : "👁"}
        </button>
      }
    />
  );
}