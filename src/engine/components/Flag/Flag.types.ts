import type {
  CSSProperties,
  ReactNode,
} from "react";

import type {
  CountryFlagCode,
} from "@/engine/assets/flags/country";

export type FlagType =
  | "country";

export interface FlagProps {
  type: FlagType;

  code: CountryFlagCode;

  size?: number;

  className?: string;

  title?: string;

  ariaLabel?: string;

  style?: CSSProperties;

  children?: ReactNode;
}