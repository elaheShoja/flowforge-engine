import { useState } from "react";

import {
  Collapse,
  CollapseGroup,
  Input,
  Select,
} from "@/engine/components";

import Flag from "@/engine/components/Flag/Flag";

import { countryFlags } from "@/engine/assets/flags";

import type {
  CountryFlagCode,
} from "@/engine/assets/flags/country";

import "../Playground.css";

interface FlagDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

/* ==========================================================
   Constants
========================================================== */

const sectionIds = [
  "flag-interactive",
  "flag-basic-usage",
  "flag-country-flags",
  "flag-sizes",
  "flag-accessibility",
];

const countryIds = [
  "flag-country-common",
  "flag-country-europe",
  "flag-country-asia",
];

const sizeIds = [
  "flag-size-small",
  "flag-size-medium",
  "flag-size-large",
];

const countryCodes =
  Object.keys(countryFlags) as CountryFlagCode[];

const sampleCountries: CountryFlagCode[] = [
  "IR",
  "DE",
  "US",
  "GB",
  "FR",
  "JP",
];

/* ==========================================================
   Component
========================================================== */

export default function FlagDemo({
  focusId,
  innerFocusId,
}: FlagDemoProps) {
  /* ==================================================
     Section State
  ================================================== */

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId && sectionIds.includes(focusId)
        ? focusId
        : "flag-interactive",
    ]);

  /* ==================================================
     Country Group State
  ================================================== */

  const [countryActiveIds, setCountryActiveIds] =
    useState<string[]>([
      innerFocusId &&
      countryIds.includes(innerFocusId)
        ? innerFocusId
        : "flag-country-common",
    ]);

  /* ==================================================
     Size Group State
  ================================================== */

  const [sizeActiveIds, setSizeActiveIds] =
    useState<string[]>([
      innerFocusId &&
      sizeIds.includes(innerFocusId)
        ? innerFocusId
        : "flag-size-medium",
    ]);

  /* ==================================================
     Interactive State
  ================================================== */

  const [type, setType] =
    useState<"country">("country");

  const [code, setCode] =
    useState<CountryFlagCode>("DE");

  const [size, setSize] =
    useState<"sm" | "md" | "lg">("md");

  const [title, setTitle] = useState("");

  const [ariaLabel, setAriaLabel] = useState("");

  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 36,
  } as const;

  return (
    <div className="playground-stack">
      <CollapseGroup
        activeIds={sectionActiveIds}
        multiple
        onChange={setSectionActiveIds}
        focusId={
          focusId && sectionIds.includes(focusId)
            ? focusId
            : undefined
        }
      >
        {/* ==================================================
            Interactive Playground
        ================================================== */}

        <Collapse
          id="flag-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">
            <div className="playground-controls">
              {/* Type */}

              <Select
                label="Type"
                value={type}
                onChange={(value) =>
                  setType(value as "country")
                }
                options={[
                  {
                    value: "country",
                    label: "Country",
                  },
                ]}
              />

              {/* Country */}

              <Select
                label="Country"
                value={code}
                searchable
                onChange={(value) =>
                  setCode(
                    value as CountryFlagCode
                  )
                }
                options={countryCodes.map(
                  (countryCode) => ({
                    value: countryCode,
                    label:
                      countryCode.toUpperCase(),
                  })
                )}
              />

              {/* Size */}

              <Select
                label="Size"
                value={size}
                onChange={(value) =>
                  setSize(
                    value as
                      | "sm"
                      | "md"
                      | "lg"
                  )
                }
                options={[
                  {
                    value: "sm",
                    label: "Small",
                  },
                  {
                    value: "md",
                    label: "Medium",
                  },
                  {
                    value: "lg",
                    label: "Large",
                  },
                ]}
              />

              {/* Title */}

              <Input
                label="Title"
                value={title}
                onChange={(event) =>
                  setTitle(
                    event.target.value
                  )
                }
                placeholder="Optional title"
              />

              {/* ARIA Label */}

              <Input
                label="ARIA Label"
                value={ariaLabel}
                onChange={(event) =>
                  setAriaLabel(
                    event.target.value
                  )
                }
                placeholder="Optional accessible label"
              />
            </div>

            <div className="playground-preview">
              <Flag
                type={type}
                code={code}
                size={sizeMap[size]}
                title={
                  title || undefined
                }
                ariaLabel={
                  ariaLabel || undefined
                }
              />
            </div>

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {type} /{" "}
                {code.toUpperCase()} /{" "}
                {sizeMap[size]}px
              </strong>
            </p>
          </div>
        </Collapse>

        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="flag-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Basic Usage</h2>

              <p>
                Display a flag using its
                type and code.
              </p>
            </div>

            <div className="playground-preview">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {sampleCountries.map(
                  (countryCode) => (
                    <Flag
                      key={countryCode}
                      type="country"
                      code={countryCode}
                      size={24}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </Collapse>

        {/* ==================================================
            Country Flags
        ================================================== */}

        <Collapse
          id="flag-country-flags"
          title="Country Flags"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Country Flags</h2>

              <p>
                A few examples of the
                available country flags.
              </p>
            </div>

            <CollapseGroup
              activeIds={countryActiveIds}
              multiple
              onChange={setCountryActiveIds}
              focusId={
                innerFocusId &&
                countryIds.includes(
                  innerFocusId
                )
                  ? innerFocusId
                  : undefined
              }
            >
              {/* Common */}

              <Collapse
                id="flag-country-common"
                title="Common Countries"
              >
                <CountryExample
                  countries={[
                    ["IR", "Iran"],
                    ["DE", "Germany"],
                    ["US", "United States"],
                    ["GB", "United Kingdom"],
                  ]}
                />
              </Collapse>

              {/* Europe */}

              <Collapse
                id="flag-country-europe"
                title="Europe"
              >
                <CountryExample
                  countries={[
                    ["DE", "Germany"],
                    ["FR", "France"],
                    ["IT", "Italy"],
                    ["GB", "United Kingdom"],
                    ["CH", "Switzerland"],
                  ]}
                />
              </Collapse>

              {/* Asia */}

              <Collapse
                id="flag-country-asia"
                title="Asia"
              >
                <CountryExample
                  countries={[
                    ["IR", "Iran"],
                    ["TR", "Türkiye"],
                    ["JP", "Japan"],
                    ["CN", "China"],
                    ["IN", "India"],
                  ]}
                />
              </Collapse>
            </CollapseGroup>
          </div>
        </Collapse>

        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="flag-sizes"
          title="Sizes"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Sizes</h2>

              <p>
                The Flag component supports
                different display sizes.
              </p>
            </div>

            <CollapseGroup
              activeIds={sizeActiveIds}
              multiple
              onChange={setSizeActiveIds}
              focusId={
                innerFocusId &&
                sizeIds.includes(
                  innerFocusId
                )
                  ? innerFocusId
                  : undefined
              }
            >
              {/* Small */}

              <Collapse
                id="flag-size-small"
                title="Small"
              >
                <div className="playground-section">
                  <Flag
                    type="country"
                    code="DE"
                    size={16}
                  />
                </div>
              </Collapse>

              {/* Medium */}

              <Collapse
                id="flag-size-medium"
                title="Medium"
              >
                <div className="playground-section">
                  <Flag
                    type="country"
                    code="DE"
                    size={24}
                  />
                </div>
              </Collapse>

              {/* Large */}

              <Collapse
                id="flag-size-large"
                title="Large"
              >
                <div className="playground-section">
                  <Flag
                    type="country"
                    code="DE"
                    size={36}
                  />
                </div>
              </Collapse>
            </CollapseGroup>
          </div>
        </Collapse>

        {/* ==================================================
            Accessibility
        ================================================== */}

        <Collapse
          id="flag-accessibility"
          title="Accessibility"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Accessibility</h2>

              <p>
                Provide title and ARIA label
                information when needed.
              </p>
            </div>

            <div className="playground-preview">
              <Flag
                type="country"
                code="DE"
                size={24}
                title="Germany"
                ariaLabel="Flag of Germany"
              />
            </div>
          </div>
        </Collapse>
      </CollapseGroup>
    </div>
  );
}

/* ==========================================================
   Country Example
========================================================== */

interface CountryExampleProps {
  countries: Array<
    [CountryFlagCode, string]
  >;
}

function CountryExample({
  countries,
}: CountryExampleProps) {
  return (
    <div className="playground-section">
      <div className="playground-stack">
        {countries.map(
          ([code, name]) => (
            <div
              key={code}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Flag
                type="country"
                code={code}
                size={24}
                title={name}
                ariaLabel={`${name} flag`}
              />

              <span>{name}</span>

              <code>
                {code.toUpperCase()}
              </code>
            </div>
          )
        )}
      </div>
    </div>
  );
}