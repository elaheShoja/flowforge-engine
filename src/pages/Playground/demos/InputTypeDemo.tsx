import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  InputType,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface InputTypeDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function InputTypeDemo({
  focusId,
  innerFocusId,
}: InputTypeDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "input-type-interactive",
    "input-type-basic-usage",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "input-type-interactive",
    ]);

  /* ==================================================
     Basic Usage Type IDs
  ================================================== */

  const typeIds = [
    "input-type-text",
    "input-type-email",
    "input-type-password",
    "input-type-search",
    "input-type-number",
    "input-type-phone",
    "input-type-url",
  ];

  const [typeActiveIds, setTypeActiveIds] =
    useState<string[]>([
      innerFocusId &&
      typeIds.includes(innerFocusId)
        ? innerFocusId
        : "input-type-text",
    ]);

  /* ==================================================
     Interactive Playground State
  ================================================== */

  const [type, setType] =
    useState<
      | "text"
      | "email"
      | "password"
      | "search"
      | "number"
      | "phone"
      | "url"
    >("text");

  const [value, setValue] =
    useState("FlowForge");

  const [size, setSize] =
    useState<"sm" | "md" | "lg">("md");

  const [disabled, setDisabled] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [clearable, setClearable] =
    useState(false);

  const [fullWidth, setFullWidth] =
    useState(false);

  const [required, setRequired] =
    useState(false);

  const [showError, setShowError] =
    useState(false);

  return (
    <div className="playground-stack">

      <CollapseGroup
        activeIds={sectionActiveIds}
        multiple
        onChange={setSectionActiveIds}
        focusId={
          focusId &&
          sectionIds.includes(focusId)
            ? focusId
            : undefined
        }
      >

        {/* ==================================================
            Interactive Playground
        ================================================== */}

        <Collapse
          id="input-type-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-controls">

              {/* Type */}

              <Select
                label="Type"
                value={type}
                onChange={(value) => {
                  setType(
                    value as
                      | "text"
                      | "email"
                      | "password"
                      | "search"
                      | "number"
                      | "phone"
                      | "url"
                  );
                }}
                options={[
                  {
                    value: "text",
                    label: "Text",
                  },
                  {
                    value: "email",
                    label: "Email",
                  },
                  {
                    value: "password",
                    label: "Password",
                  },
                  {
                    value: "search",
                    label: "Search",
                  },
                  {
                    value: "number",
                    label: "Number",
                  },
                  {
                    value: "phone",
                    label: "Phone",
                  },
                  {
                    value: "url",
                    label: "URL",
                  },
                ]}
              />

              {/* Size */}

              <Select
                label="Size"
                value={size}
                onChange={(value) => {
                  setSize(
                    value as
                      | "sm"
                      | "md"
                      | "lg"
                  );
                }}
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

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
                alignWithField
              />

              {/* Loading */}

              <Checkbox
                label="Loading"
                checked={loading}
                onChange={setLoading}
                alignWithField
              />

              {/* Clearable */}

              <Checkbox
                label="Clearable"
                checked={clearable}
                onChange={setClearable}
              />

              {/* Full Width */}

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
              />

              {/* Required */}

              <Checkbox
                label="Required"
                checked={required}
                onChange={setRequired}
              />

              {/* Error */}

              <Checkbox
                label="Error"
                checked={showError}
                onChange={setShowError}
              />

            </div>

            <div className="playground-preview">

              <InputType
                type={type}
                label="Interactive Input"
                value={value}
                onChange={(event) =>
                  setValue(
                    event.target.value
                  )
                }
                placeholder="Type something..."
                size={size}
                disabled={disabled}
                loading={loading}
                loadingText="Loading..."
                clearable={clearable}
                fullWidth={fullWidth}
                required={required}
                error={
                  showError
                    ? "This field contains an error."
                    : undefined
                }
              />

            </div>

            <p className="playground-value">
              Type:{" "}
              <strong>
                {type}
              </strong>
              {" — "}
              Current value:{" "}
              <strong>
                {value || "Empty"}
              </strong>
            </p>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="input-type-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                InputType provides predefined
                behaviors for common input types.
              </p>
            </div>

            <CollapseGroup
              activeIds={typeActiveIds}
              multiple
              onChange={setTypeActiveIds}
              focusId={
                innerFocusId &&
                typeIds.includes(innerFocusId)
                  ? innerFocusId
                  : undefined
              }
            >

              {/* ==================================================
                  Text
              ================================================== */}

              <Collapse
                id="input-type-text"
                title="Text"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      Text
                    </h2>

                    <p>
                      A standard text input.
                    </p>
                  </div>

                  <InputType
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                  />

                </div>
              </Collapse>


              {/* ==================================================
                  Email
              ================================================== */}

              <Collapse
                id="input-type-email"
                title="Email"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      Email
                    </h2>

                    <p>
                      Email input with its
                      predefined icon and behavior.
                    </p>
                  </div>

                  <InputType
                    type="email"
                  />

                </div>
              </Collapse>


              {/* ==================================================
                  Password
              ================================================== */}

              <Collapse
                id="input-type-password"
                title="Password"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      Password
                    </h2>

                    <p>
                      Password input with built-in
                      visibility toggle.
                    </p>
                  </div>

                  <InputType
                    type="password"
                  />

                </div>
              </Collapse>


              {/* ==================================================
                  Search
              ================================================== */}

              <Collapse
                id="input-type-search"
                title="Search"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      Search
                    </h2>

                    <p>
                      Search input with its
                      predefined search icon.
                    </p>
                  </div>

                  <InputType
                    type="search"
                  />

                </div>
              </Collapse>


              {/* ==================================================
                  Number
              ================================================== */}

              <Collapse
                id="input-type-number"
                title="Number"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      Number
                    </h2>

                    <p>
                      Input configured for
                      numeric values.
                    </p>
                  </div>

                  <InputType
                    type="number"
                  />

                </div>
              </Collapse>


              {/* ==================================================
                  Phone
              ================================================== */}

              <Collapse
                id="input-type-phone"
                title="Phone"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      Phone
                    </h2>

                    <p>
                      Input configured for
                      phone numbers.
                    </p>
                  </div>

                  <InputType
                    type="phone"
                  />

                </div>
              </Collapse>


              {/* ==================================================
                  URL
              ================================================== */}

              <Collapse
                id="input-type-url"
                title="URL"
              >
                <div className="playground-section">

                  <div className="playground-section__header">
                    <h2>
                      URL
                    </h2>

                    <p>
                      Input configured for
                      web addresses.
                    </p>
                  </div>

                  <InputType
                    type="url"
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}