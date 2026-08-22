import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  PasswordInput,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface PasswordInputDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function PasswordInputDemo({
  focusId,
  innerFocusId,
}: PasswordInputDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "password-input-interactive",
    "password-input-basic-usage",
    "password-input-controlled",
    "password-input-sizes",
    "password-input-states",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "password-input-interactive",
    ]);

  /* ==================================================
     States Group
  ================================================== */

  const stateIds = [
    "password-input-state-default",
    "password-input-state-required",
    "password-input-state-disabled",
    "password-input-state-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "password-input-state-default",
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

  const [required, setRequired] =
    useState(false);

  const [showError, setShowError] =
    useState(false);

  const [fullWidth, setFullWidth] =
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
          id="password-input-interactive"
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

              {/* Required */}

              <Checkbox
                label="Required"
                checked={required}
                onChange={setRequired}
                alignWithField
              />

              {/* Full Width */}

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
              />

              {/* Error */}

              <Checkbox
                label="Error"
                checked={showError}
                onChange={setShowError}
              />

            </div>

            <div className="playground-preview">

              <PasswordInput
                label="Password"
                value={value}
                onChange={(event) =>
                  setValue(
                    event.target.value
                  )
                }
                placeholder="Enter your password"
                size={size}
                disabled={disabled}
                required={required}
                fullWidth={fullWidth}
                error={
                  showError
                    ? "Please enter a valid password."
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
          id="password-input-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic PasswordInput with
                a label and placeholder.
              </p>
            </div>

            <BasicPasswordInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Password
        ================================================== */}

        <Collapse
          id="password-input-controlled"
          title="Controlled Password"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Password
              </h2>

              <p>
                PasswordInput can be controlled
                using the standard React input
                state pattern.
              </p>
            </div>

            <ControlledPasswordInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="password-input-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                PasswordInput supports small,
                medium, and large sizes through
                the underlying Input component.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <PasswordSizeExample
                size="sm"
              />

              <PasswordSizeExample
                size="md"
              />

              <PasswordSizeExample
                size="lg"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="password-input-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common PasswordInput states used
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
                id="password-input-state-default"
                title="Default"
              >
                <div className="playground-section">

                  <StatePasswordInputExample
                    label="Password"
                    placeholder="Enter password"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="password-input-state-required"
                title="Required"
              >
                <div className="playground-section">

                  <StatePasswordInputExample
                    label="Required Password"
                    placeholder="Enter password"
                    required
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="password-input-state-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <StatePasswordInputExample
                    label="Disabled Password"
                    value="FlowForge"
                    disabled
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="password-input-state-error"
                title="Error"
              >
                <div className="playground-section">

                  <StatePasswordInputExample
                    label="Password"
                    placeholder="Enter password"
                    error="Please enter a valid password."
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
   Basic PasswordInput Example
========================================================== */

function BasicPasswordInputExample() {
  return (
    <PasswordInput
      label="Password"
      placeholder="Enter your password"
    />
  );
}


/* ==========================================================
   Controlled PasswordInput Example
========================================================== */

function ControlledPasswordInputExample() {
  const [value, setValue] =
    useState("");

  return (
    <div className="playground-stack">

      <PasswordInput
        label="Controlled password"
        value={value}
        onChange={(event) =>
          setValue(
            event.target.value
          )
        }
        placeholder="Enter your password"
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
   Size Example
========================================================== */

interface PasswordSizeExampleProps {
  size: "sm" | "md" | "lg";
}

function PasswordSizeExample({
  size,
}: PasswordSizeExampleProps) {
  return (
    <PasswordInput
      size={size}
      label={`${size.toUpperCase()} Password`}
      placeholder="Enter password"
    />
  );
}


/* ==========================================================
   State Example
========================================================== */

interface StatePasswordInputExampleProps {
  label: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

function StatePasswordInputExample({
  label,
  placeholder,
  value: initialValue = "",
  required = false,
  disabled = false,
  error,
}: StatePasswordInputExampleProps) {
  const [value, setValue] =
    useState(initialValue);

  return (
    <PasswordInput
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
      error={error}
    />
  );
}