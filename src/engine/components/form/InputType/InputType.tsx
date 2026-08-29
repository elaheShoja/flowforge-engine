import {
  forwardRef,
  useState,
  type ReactNode,
} from "react";

import { useTranslation } from "react-i18next";
import { Search, Phone } from "lucide-react";

import {
  Icon,
  Input,
} from "@/engine/components";

import {
  inputTypeConfig,
} from "./InputType.config";

import type {
  InputAdornmentType,
} from "./InputType.config";

import type {
  InputTypeProps,
} from "./InputType.types";

const InputType = forwardRef<
  HTMLInputElement,
  InputTypeProps
>(
  function InputType(
    {
      type = "text",

      label,
      placeholder,

      startAdornment,
      endAdornment,

      clearable,

      prefix,
      suffix,

      ...props
    },
    ref
  ) {
    const { t } =
      useTranslation("common");

    const config =
      inputTypeConfig[type];

    /* =====================================================
       Password Visibility
    ===================================================== */

    const [
      passwordVisible,
      setPasswordVisible,
    ] = useState(false);

    const togglePasswordVisibility =
      () => {
        setPasswordVisible(
          (previous) => !previous
        );
      };

    /* =====================================================
       Default Adornments
    ===================================================== */

    const adornments: Record<
      InputAdornmentType,
      ReactNode
    > = {
      email: (
        <Icon
          name="email"
          size={18}
        />
      ),

      search: (
        <Search size={18} />
      ),

      phone: (
        <Phone size={18} />
      ),

      passwordToggle: (
        <button
          type="button"
          onClick={
            togglePasswordVisibility
          }
          aria-label={
            passwordVisible
              ? t("hidePassword")
              : t("showPassword")
          }
        >
          <Icon
            name={
              passwordVisible
                ? "hidePassword"
                : "showPassword"
            }
            size={18}
          />
        </button>
      ),
    };

    /* =====================================================
       Resolve Start Adornment
    ===================================================== */

    const resolvedStartAdornment =
      startAdornment ??
      (config.startAdornment
        ? adornments[
            config.startAdornment
          ]
        : undefined);

    /* =====================================================
       Resolve End Adornment
    ===================================================== */

    const resolvedEndAdornment =
      endAdornment ??
      (config.endAdornment
        ? adornments[
            config.endAdornment
          ]
        : undefined);

    /* =====================================================
       Resolve Label
    ===================================================== */

    const resolvedLabel =
      label ??
      (config.labelKey
        ? t(config.labelKey)
        : undefined);

    /* =====================================================
       Resolve Placeholder
    ===================================================== */

    const resolvedPlaceholder =
      placeholder ??
      (config.placeholderKey
        ? t(
            config.placeholderKey
          )
        : undefined);

    /* =====================================================
       Resolve Clearable
    ===================================================== */

    const resolvedClearable =
      clearable ??
      config.clearable ??
      false;

    /* =====================================================
       Resolve Native Input Type
    ===================================================== */

    const resolvedInputType =
      config.inputType === "password" &&
      passwordVisible
        ? "text"
        : config.inputType;

    /* =====================================================
       Render
    ===================================================== */

    return (
      <Input
        {...props}
        ref={ref}
        type={resolvedInputType}
        label={resolvedLabel}
        placeholder={
          resolvedPlaceholder
        }
        startAdornment={
          resolvedStartAdornment
        }
        endAdornment={
          resolvedEndAdornment
        }
        clearable={
          resolvedClearable
        }
        prefix={
          prefix ??
          config.prefix
        }
        suffix={
          suffix ??
          config.suffix
        }
      />
    );
  }
);

export default InputType;