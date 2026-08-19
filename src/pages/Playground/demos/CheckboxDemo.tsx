import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  Input,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface CheckboxDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function CheckboxDemo({
  focusId,
  innerFocusId,
}: CheckboxDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "checkbox-interactive",
    "checkbox-basic-usage",
    "checkbox-sizes",
    "checkbox-states",
    "checkbox-indeterminate",
    "checkbox-controlled",
    "checkbox-form-alignment",
    "checkbox-dynamic-label",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "checkbox-interactive",
    ]);

  /* ==================================================
     State IDs
  ================================================== */

  const stateIds = [
    "checkbox-states-default",
    "checkbox-states-required",
    "checkbox-states-disabled",
    "checkbox-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "checkbox-states-default",
    ]);

  /* ==================================================
     Interactive Playground
  ================================================== */

  const [checked, setChecked] =
    useState(false);

  const [size, setSize] =
    useState<"sm" | "md" | "lg">("md");

  const [disabled, setDisabled] =
    useState(false);

  const [required, setRequired] =
    useState(false);

  const [error, setError] =
    useState(false);

  const [indeterminate, setIndeterminate] =
    useState(false);

  const [fullWidth, setFullWidth] =
    useState(false);

   const [alignWithField, setAlignWithField] =
    useState(true);

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
          id="checkbox-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with the main
                Checkbox properties and see
                the result immediately.
              </p>
            </div>

            <div className="playground-controls">

              {/* Size */}

              <div className="playground-control">
                
                <Select
                  value={size}
                  label="Size"
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

              {/* Checked */}

              <Checkbox
                label="Checked"
                checked={checked}
                onChange={setChecked}
              />

              {/* Indeterminate */}

              <Checkbox
                label="Indeterminate"
                checked={indeterminate}
                onChange={(value) => {
                  setIndeterminate(value);
                }}
              />

              {/* Required */}

              <Checkbox
                label="Required"
                checked={required}
                onChange={setRequired}
                withWrapper={false}
              />

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
                withWrapper={false}
              />

              {/* Error */}

              <Checkbox
                label="Error"
                checked={error}
                onChange={setError}
                withWrapper={false}
              />

              {/* Full Width */}

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
                withWrapper={false}
              />

            </div>

            <div className="playground-preview">

              <Checkbox
                id="interactive-checkbox"
                label="Enable FlowForge feature"
                description="This option controls whether the feature is enabled."
                checked={checked}
                onChange={(value) => {
                  setChecked(value);

                  if (indeterminate) {
                    setIndeterminate(false);
                  }
                }}
                size={size}
                disabled={disabled}
                required={required}
                indeterminate={indeterminate}
                fullWidth={fullWidth}
                error={
                  error
                    ? "Please review this option."
                    : undefined
                }
              />

            </div>

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {checked
                  ? "Checked"
                  : "Unchecked"}
              </strong>
            </p>

            <p className="playground-value">
              Indeterminate:{" "}
              <strong>
                {indeterminate
                  ? "Yes"
                  : "No"}
              </strong>
            </p>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="checkbox-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic controlled Checkbox
                with a label and description.
              </p>
            </div>

            <BasicCheckboxExample />

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="checkbox-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                Checkbox supports small,
                medium and large sizes.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <SizeCheckboxExample
                size="sm"
              />

              <SizeCheckboxExample
                size="md"
              />

              <SizeCheckboxExample
                size="lg"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="checkbox-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Checkbox states used
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
                id="checkbox-states-default"
                title="Default"
              >
                <div className="playground-section">

                  <StateCheckboxExample
                    label="Default"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="checkbox-states-required"
                title="Required"
              >
                <div className="playground-section">

                  <StateCheckboxExample
                    label="Required"
                    required
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="checkbox-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <StateCheckboxExample
                    label="Disabled"
                    disabled
                    checked
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="checkbox-states-error"
                title="Error"
              >
                <div className="playground-section">

                  <StateCheckboxExample
                    label="Error"
                    error="Please select this option."
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Indeterminate
        ================================================== */}

        <Collapse
          id="checkbox-indeterminate"
          title="Indeterminate"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Indeterminate
              </h2>

              <p>
                The indeterminate state is useful
                when a Checkbox represents a
                partially selected group.
              </p>
            </div>

            <IndeterminateExample />

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Checkbox
        ================================================== */}

        <Collapse
          id="checkbox-controlled"
          title="Controlled Checkbox"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Checkbox
              </h2>

              <p>
                Checkbox can be fully controlled
                using React state.
              </p>
            </div>

            <ControlledCheckboxExample />

          </div>
        </Collapse>


        {/* ==================================================
            Form Alignment
        ================================================== */}

        <Collapse
        id="checkbox-form-alignment"
        title="Form Alignment"
        >
        <div className="playground-section">

            <div className="playground-section__header">
            <h2>
                Form Alignment
            </h2>

            <p>
                Use alignWithField to align a Checkbox
                with the control area of other form
                fields in a multi-column form layout.
            </p>
            </div>


            {/* ==================================================
                Alignment Control
            ================================================== */}

            <div className="playground-controls">

            <Checkbox
                label="Align With Field"
                description="Align the Checkbox with the input control in the opposite column."
                checked={alignWithField}
                onChange={setAlignWithField}
            />

            </div>


            {/* ==================================================
                Two Column Form Layout
            ================================================== */}

            <div className="playground-grid--two-columns">

            {/* ==================================================
                Column 1 — Form Fields
            ================================================== */}

            <div className="playground-stack">

                <Input
                label="First Name"
                placeholder="Enter first name"
                />

                <Input
                label="Last Name"
                placeholder="Enter last name"
                />

                <Input
                label="Email"
                placeholder="Enter email"
                />

            </div>


            {/* ==================================================
                Column 2 — Checkboxes
            ================================================== */}

            <div className="playground-stack">

                <AlignedCheckboxExample
                label="Active"
                description="User can access the application."
                alignWithField={alignWithField}
                defaultChecked
                />

                <AlignedCheckboxExample
                label="Verified"
                description="The user's email address has been verified."
                alignWithField={alignWithField}
                defaultChecked
                />

                <AlignedCheckboxExample
                label="Notifications"
                description="User can receive application notifications."
                alignWithField={alignWithField}
                />

            </div>

            </div>

        </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}


/* ==========================================================
   Basic Checkbox Example
========================================================== */

function BasicCheckboxExample() {
  const [checked, setChecked] =
    useState(false);

  return (
    <Checkbox
      label="Accept terms and conditions"
      description="You must accept the terms before continuing."
      checked={checked}
      onChange={setChecked}
    />
  );
}


/* ==========================================================
   Size Example
========================================================== */

interface SizeCheckboxExampleProps {
  size: "sm" | "md" | "lg";
}

function SizeCheckboxExample({
  size,
}: SizeCheckboxExampleProps) {
  const [checked, setChecked] =
    useState(false);

  return (
    <Checkbox
      label={`${size.toUpperCase()} Checkbox`}
      size={size}
      checked={checked}
      onChange={setChecked}
    />
  );
}


/* ==========================================================
   State Example
========================================================== */

interface StateCheckboxExampleProps {
  label: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

function StateCheckboxExample({
  label,
  checked = false,
  required = false,
  disabled = false,
  error,
}: StateCheckboxExampleProps) {
  const [value, setValue] =
    useState(checked);

  return (
    <Checkbox
      label={label}
      checked={value}
      onChange={setValue}
      required={required}
      disabled={disabled}
      error={error}
    />
  );
}


/* ==========================================================
   Indeterminate Example
========================================================== */

function IndeterminateExample() {
  const [checked, setChecked] =
    useState(false);

  const [indeterminate, setIndeterminate] =
    useState(true);

  const handleChange = (
    value: boolean
  ) => {
    setChecked(value);
    setIndeterminate(false);
  };

  return (
    <div className="playground-stack">

      <Checkbox
        label="Select all"
        description="Clicking the Checkbox resolves the indeterminate state."
        checked={checked}
        indeterminate={indeterminate}
        onChange={handleChange}
      />

      <p className="playground-value">
        State:{" "}
        <strong>
          {indeterminate
            ? "Indeterminate"
            : checked
              ? "Checked"
              : "Unchecked"}
        </strong>
      </p>

      <button
        type="button"
        onClick={() => {
          setChecked(false);
          setIndeterminate(true);
        }}
      >
        Reset to Indeterminate
      </button>

    </div>
  );
}


/* ==========================================================
   Controlled Example
========================================================== */

function ControlledCheckboxExample() {
  const [checked, setChecked] =
    useState(false);

  return (
    <div className="playground-stack">

      <Checkbox
        label="Controlled value"
        checked={checked}
        onChange={setChecked}
      />

      <p className="playground-value">
        Current value:{" "}
        <strong>
          {checked
            ? "true"
            : "false"}
        </strong>
      </p>

    </div>
  );
}


/* ==========================================================
   Aligned Checkbox Example
========================================================== */

interface AlignedCheckboxExampleProps {
  label: string;
  description: string;
  alignWithField: boolean;
  defaultChecked?: boolean;
}

function AlignedCheckboxExample({
  label,
  description,
  alignWithField,
  defaultChecked = false,
}: AlignedCheckboxExampleProps) {
  const [checked, setChecked] =
    useState(defaultChecked);

  return (
    <Checkbox
      label={label}
      description={description}
      alignWithField={alignWithField}
      checked={checked}
      onChange={setChecked}
    />
  );
}

