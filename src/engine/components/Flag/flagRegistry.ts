import {
  countryFlags,
} from "@/engine/assets/flags";

import type {
  CountryFlagCode,
} from "@/engine/assets/flags/country";

/* ==========================================================
   Flag Registry
========================================================== */

export const flagRegistries = {
  country: countryFlags,
} as const;

/* ==========================================================
   Flag Types
========================================================== */

export type FlagType =
  keyof typeof flagRegistries;

/* ==========================================================
   Flag Code Map
========================================================== */

export interface FlagCodeMap {
  country: CountryFlagCode;
}