import type {
  CSSProperties,
  ReactNode,
} from "react";

import type {
  CountryFlagCode,
} from "@/engine/assets/flags/country";

export interface BaseFlagProps {
  size?: number;

  className?: string;

  title?: string;

  ariaLabel?: string;

  style?: CSSProperties;

  children?: ReactNode;
}

export type FlagProps =
  | (BaseFlagProps & {
      type: "country";
      code: CountryFlagCode;
    });