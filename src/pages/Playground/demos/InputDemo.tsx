import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  Input,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface InputDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function InputDemo({
  focusId,
  innerFocusId,
}: InputDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "input-interactive",
    "input-basic-usage",
    "input-controlled",
    "input-sizes",
    "input-states",
    "input-clearable",
    "input-prefix-suffix",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "input-interactive",
    ]);

  /* ==================================================
     Sizes Group
  ================================================== */

  const sizeIds = [
    "input-size-small",
    "input-size-medium",
    "input-size-large",
  ];

  const [sizeActiveIds, setSizeActiveIds] =
    useState<string[]>([
      innerFocusId &&
      sizeIds.includes(innerFocusId)
        ? innerFocusId
        : "input-size-medium",
    ]);

  /* ==================================================
     States Group
  ================================================== */

  const stateIds = [
    "input-state-default",
    "input-state-required",
    "input-state-disabled",
    "input-state-loading",
    "input-state-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "input-state-default",
    ]);

  /* ==================================================
     Prefix & Suffix Group
  ================================================== */

  const prefixSuffixIds = [
    "input-prefix",
    "input-suffix",
  ];

  const [
    prefixSuffixActiveIds,
    setPrefixSuffixActiveIds,
  ] = useState<string[]>([
    innerFocusId &&
    prefixSuffixIds.includes(innerFocusId)
      ? innerFocusId
      : "input-prefix",
  ]);

  /* ==================================================
     Interactive Playground
  ================================================== */

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
          id="input-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-controls">

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

              <Input
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
          id="input-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic Input with a label
                and placeholder.
              </p>
            </div>

            <BasicInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Input
        ================================================== */}

        <Collapse
          id="input-controlled"
          title="Controlled Input"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Input
              </h2>

              <p>
                Input can be controlled
                using React state.
              </p>
            </div>

            <ControlledInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="input-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                Input supports small,
                medium, and large sizes.
              </p>
            </div>

            <CollapseGroup
              activeIds={sizeActiveIds}
              multiple
              onChange={setSizeActiveIds}
              focusId={
                innerFocusId &&
                sizeIds.includes(innerFocusId)
                  ? innerFocusId
                  : undefined
              }
            >

              <Collapse
                id="input-size-small"
                title="Small"
              >
                <div className="playground-section">

                  <SizeInputExample
                    size="sm"
                  />

                </div>
              </Collapse>

              <Collapse
                id="input-size-medium"
                title="Medium"
              >
                <div className="playground-section">

                  <SizeInputExample
                    size="md"
                  />

                </div>
              </Collapse>

              <Collapse
                id="input-size-large"
                title="Large"
              >
                <div className="playground-section">

                  <SizeInputExample
                    size="lg"
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="input-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Input states used
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
                id="input-state-default"
                title="Default"
              >
                <div className="playground-section">

                  <StateInputExample
                    label="Default"
                    placeholder="Default input"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="input-state-required"
                title="Required"
              >
                <div className="playground-section">

                  <StateInputExample
                    label="Required"
                    placeholder="Required input"
                    required
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="input-state-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <StateInputExample
                    label="Disabled"
                    placeholder="Disabled input"
                    disabled
                  />

                </div>
              </Collapse>


              {/* Loading */}

              <Collapse
                id="input-state-loading"
                title="Loading"
              >
                <div className="playground-section">

                  <StateInputExample
                    label="Loading"
                    placeholder="Loading..."
                    loading
                    loadingText="Loading..."
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="input-state-error"
                title="Error"
              >
                <div className="playground-section">

                  <StateInputExample
                    label="Error"
                    placeholder="Input with error"
                    error="Please enter a valid value."
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Clearable Input
        ================================================== */}

        <Collapse
          id="input-clearable"
          title="Clearable Input"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Clearable Input
              </h2>

              <p>
                The clear button appears when
                the input contains a value.
              </p>
            </div>

            <ClearableInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Prefix & Suffix
        ================================================== */}

        <Collapse
          id="input-prefix-suffix"
          title="Prefix & Suffix"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Prefix and Suffix
              </h2>

              <p>
                Add content before or after
                the input value.
              </p>
            </div>

            <CollapseGroup
              activeIds={
                prefixSuffixActiveIds
              }
              multiple
              onChange={
                setPrefixSuffixActiveIds
              }
              focusId={
                innerFocusId &&
                prefixSuffixIds.includes(
                  innerFocusId
                )
                  ? innerFocusId
                  : undefined
              }
            >

              {/* Prefix */}

              <Collapse
                id="input-prefix"
                title="Prefix"
              >
                <div className="playground-section">

                  <Input
                    label="Website"
                    prefix="https://"
                    placeholder="example.com"
                  />

                </div>
              </Collapse>


              {/* Suffix */}

              <Collapse
                id="input-suffix"
                title="Suffix"
              >
                <div className="playground-section">

                  <Input
                    label="Price"
                    suffix="USD"
                    placeholder="100"
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


/* ==========================================================
   Basic Input Example
========================================================== */

function BasicInputExample() {
  return (
    <Input
      label="Name"
      placeholder="Enter your name"
    />
  );
}


/* ==========================================================
   Controlled Input Example
========================================================== */

function ControlledInputExample() {
  const [value, setValue] =
    useState("");

  return (
    <div className="playground-stack">

      <Input
        label="Controlled value"
        value={value}
        onChange={(event) =>
          setValue(
            event.target.value
          )
        }
        placeholder="Type something..."
      />

      <p className="playground-value">
        Current value:{" "}
        <strong>
          {value || "Empty"}
        </strong>
      </p>

    </div>
  );
}


/* ==========================================================
   Size Input Example
========================================================== */

interface SizeInputExampleProps {
  size: "sm" | "md" | "lg";
}

function SizeInputExample({
  size,
}: SizeInputExampleProps) {
  return (
    <Input
      size={size}
      label={`${size.toUpperCase()} Input`}
      placeholder={`${size.toUpperCase()} input`}
    />
  );
}


/* ==========================================================
   State Input Example
========================================================== */

interface StateInputExampleProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  error?: string;
}

function StateInputExample({
  label,
  placeholder,
  required = false,
  disabled = false,
  loading = false,
  loadingText,
  error,
}: StateInputExampleProps) {
  const [value, setValue] =
    useState("");

  return (
    <Input
      label={label}
      value={value}
      onChange={(event) =>
        setValue(
          event.target.value
        )
      }
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      loading={loading}
      loadingText={loadingText}
      error={error}
    />
  );
}


/* ==========================================================
   Clearable Input Example
========================================================== */

function ClearableInputExample() {
  const [value, setValue] =
    useState("FlowForge");

  return (
    <Input
      label="Search"
      value={value}
      onChange={(event) =>
        setValue(
          event.target.value
        )
      }
      clearable
      onClear={() =>
        setValue("")
      }
      placeholder="Search..."
    />
  );
}