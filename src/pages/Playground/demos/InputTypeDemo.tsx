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
    "input-type-controlled",
    "input-type-sizes",
    "input-type-clearable",
    "input-type-full-width",
    "input-type-states",
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
     State IDs
  ================================================== */

  const stateIds = [
    "input-type-states-default",
    "input-type-states-required",
    "input-type-states-disabled",
    "input-type-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "input-type-states-default",
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

  const [clearableValue, setClearableValue] =
    useState("FlowF"); 

  const [size, setSize] =
    useState<"sm" | "md" | "lg">("md");

  const [disabled, setDisabled] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [clearable, setClearable] =
    useState(false);

  const [fullWidth, setFullWidth] =
    useState(true);

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

              <div className="playground-control">
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
              </div>

              {/* Size */}

              <div className="playground-control">
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
              </div>

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
                behaviors and configurations
                for common input types.
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

              {/* Text */}

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


              {/* Email */}

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
                      Email input with a
                      predefined email icon.
                    </p>
                  </div>

                  <InputType
                    type="email"
                  />

                </div>
              </Collapse>


              {/* Password */}

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
                      Password input with a
                      built-in visibility toggle.
                    </p>
                  </div>

                  <InputType
                    type="password"
                  />

                </div>
              </Collapse>


              {/* Search */}

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
                      Search input with a
                      predefined search icon
                      and clear functionality.
                    </p>
                  </div>

                  <InputType
                    type="search"
                  />

                </div>
              </Collapse>


              {/* Number */}

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


              {/* Phone */}

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
                      phone numbers with a
                      predefined phone icon.
                    </p>
                  </div>

                  <InputType
                    type="phone"
                  />

                </div>
              </Collapse>


              {/* URL */}

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
                      web addresses with a
                      predefined URL icon.
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


        {/* ==================================================
            Controlled Input
        ================================================== */}

        <Collapse
          id="input-type-controlled"
          title="Controlled Input"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Input
              </h2>

              <p>
                InputType can be fully controlled
                using React state.
              </p>
            </div>

            <InputType
              type="email"
              label="Controlled email"
              value={value}
              onChange={(event) =>
                setValue(event.target.value)
              }
              placeholder="Enter email..."
            />

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {value || "Empty"}
              </strong>
            </p>

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="input-type-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                InputType supports small,
                medium, and large sizes.
              </p>
            </div>

            <div className="playground-stack--spaced">

              <InputType
                type="search"
                label="Small"
                size="sm"
                placeholder="Small email"
              />

              <InputType
                type="search"
                label="Medium"
                size="md"
                placeholder="Medium password"
              />

              <InputType
                type="search"
                label="Large"
                size="lg"
                placeholder="Search..."
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Clearable
        ================================================== */}

        <Collapse
          id="input-type-clearable"
          title="Clearable"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Clearable
              </h2>

              <p>
                Enable clear functionality
                for inputs that support it.
              </p>
            </div>

            <InputType
              type="search"
              label="Clearable Search"
              value={clearableValue}
              onChange={(event) =>
                  setClearableValue(
                    event.target.value
                  )
                }
              clearable
              placeholder="Search..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Full Width
        ================================================== */}

        <Collapse
          id="input-type-full-width"
          title="Full Width"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Full Width
              </h2>

              <p>
                Compare content-width and
                full-width input layouts.
              </p>
            </div>

            <div className="playground-stack--spaced">

              <InputType
                type="phone"
                label="Content Width"
                fullWidth={false}
                placeholder="Phone number"
              />

              <InputType
                type="url"
                label="Full Width"
                fullWidth
                placeholder="Enter URL"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="input-type-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common InputType states used
                in FlowForge forms.
              </p>
            </div>

            <CollapseGroup
              activeIds={stateActiveIds}
              multiple
              onChange={setStateActiveIds}
              focusId={
                innerFocusId &&
                stateIds.includes(innerFocusId)
                  ? innerFocusId
                  : undefined
              }
            >

              {/* Default */}

              <Collapse
                id="input-type-states-default"
                title="Default"
              >
                <div className="playground-section">

                  <InputType
                    type="email"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="input-type-states-required"
                title="Required"
              >
                <div className="playground-section">

                  <InputType
                    type="email"
                    required
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="input-type-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <InputType
                    type="email"
                    disabled
                    value="FlowForge@gmail.com"
                    readOnly
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="input-type-states-error"
                title="Error"
              >
                <div className="playground-section">

                  <InputType
                    type="email"
                    error="Please enter a valid email address."
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