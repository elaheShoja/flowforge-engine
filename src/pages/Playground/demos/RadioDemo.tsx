import { useState } from "react";

import {
  Checkbox,
  Input,
  Radio,
  Select,
  Collapse,
  CollapseGroup,
} from "@/engine/components";

import "../Playground.css";

interface RadioDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function RadioDemo({
  focusId,
  innerFocusId,
}: RadioDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "radio-interactive",
    "radio-basic-usage",
    "radio-group",
    "radio-sizes",
    "radio-states",
    "radio-controlled",
    "radio-form-alignment",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "radio-interactive",
    ]);

  /* ==================================================
     State IDs
  ================================================== */

  const stateIds = [
    "radio-states-default",
    "radio-states-required",
    "radio-states-disabled",
    "radio-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "radio-states-default",
    ]);

  /* ==================================================
     Interactive Playground
  ================================================== */

  const [value, setValue] =
    useState("option-a");

  const [size, setSize] =
    useState<"sm" | "md" | "lg">("md");

  const [disabled, setDisabled] =
    useState(false);

  const [required, setRequired] =
    useState(false);

  const [error, setError] =
    useState(false);

  const [fullWidth, setFullWidth] =
    useState(false);

  const [alignWithField, setAlignWithField] =
    useState(true);

  /* ==================================================
     Form Alignment Radio Group
  ================================================== */

  const [userRole, setUserRole] =
    useState("administrator");

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
          id="radio-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with the main Radio
                properties and see the result
                immediately.
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


              {/* Selected Value */}

              <div className="playground-control">

                <Select
                  value={value}
                  label="Selected Value"
                  onChange={(selectedValue) => {
                    setValue(selectedValue);
                  }}
                  options={[
                    {
                      value: "option-a",
                      label: "Option A",
                    },
                    {
                      value: "option-b",
                      label: "Option B",
                    },
                    {
                      value: "option-c",
                      label: "Option C",
                    },
                  ]}
                />

              </div>


              {/* Required */}

              <Checkbox
                label="Required"
                checked={required}
                onChange={setRequired}
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

              <div className="playground-stack">

                <Radio
                  name="interactive-radio"
                  value="option-a"
                  label="Option A"
                  description="Select option A."
                  checked={
                    value === "option-a"
                  }
                  onChange={(checked) => {
                    if (checked) {
                      setValue("option-a");
                    }
                  }}
                  size={size}
                  required={required}
                  disabled={disabled}
                  fullWidth={fullWidth}
                  alignWithField={
                    alignWithField
                  }
                  error={
                    error
                      ? "Please select a valid option."
                      : undefined
                  }
                />

                <Radio
                  name="interactive-radio"
                  value="option-b"
                  label="Option B"
                  description="Select option B."
                  checked={
                    value === "option-b"
                  }
                  onChange={(checked) => {
                    if (checked) {
                      setValue("option-b");
                    }
                  }}
                  size={size}
                  required={required}
                  disabled={disabled}
                  fullWidth={fullWidth}
                  alignWithField={
                    alignWithField
                  }
                  error={
                    error
                      ? "Please select a valid option."
                      : undefined
                  }
                />

                <Radio
                  name="interactive-radio"
                  value="option-c"
                  label="Option C"
                  description="Select option C."
                  checked={
                    value === "option-c"
                  }
                  onChange={(checked) => {
                    if (checked) {
                      setValue("option-c");
                    }
                  }}
                  size={size}
                  required={required}
                  disabled={disabled}
                  fullWidth={fullWidth}
                  alignWithField={
                    alignWithField
                  }
                  error={
                    error
                      ? "Please select a valid option."
                      : undefined
                  }
                />

              </div>

            </div>


            <p className="playground-value">
              Current value:{" "}
              <strong>
                {value}
              </strong>
            </p>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="radio-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic Radio with a label
                and description.
              </p>
            </div>

            <BasicRadioExample />

          </div>
        </Collapse>


        {/* ==================================================
            Radio Group
        ================================================== */}

        <Collapse
          id="radio-group"
          title="Radio Group"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Radio Group
              </h2>

              <p>
                Radios with the same name form
                a native radio group where only
                one option can be selected.
              </p>
            </div>

            <RadioGroupExample />

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="radio-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                Radio supports small, medium
                and large sizes.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <SizeRadioExample
                size="sm"
              />

              <SizeRadioExample
                size="md"
              />

              <SizeRadioExample
                size="lg"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="radio-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Radio states used
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
                id="radio-states-default"
                title="Default"
              >
                <div className="playground-section">

                  <StateRadioExample
                    label="Default"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="radio-states-required"
                title="Required"
              >
                <div className="playground-section">

                  <StateRadioExample
                    label="Required"
                    required
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="radio-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <StateRadioExample
                    label="Disabled"
                    disabled
                    checked
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="radio-states-error"
                title="Error"
              >
                <div className="playground-section">

                  <StateRadioExample
                    label="Error"
                    error="Please select this option."
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Radio
        ================================================== */}

        <Collapse
          id="radio-controlled"
          title="Controlled Radio"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Radio
              </h2>

              <p>
                Radio groups can be fully
                controlled using React state.
              </p>
            </div>

            <ControlledRadioExample />

          </div>
        </Collapse>


        {/* ==================================================
            Form Alignment
        ================================================== */}

        <Collapse
          id="radio-form-alignment"
          title="Form Alignment"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Form Alignment
              </h2>

              <p>
                Use alignWithField to align Radio
                controls with the field controls
                in a multi-column form layout.
              </p>
            </div>


            {/* ==================================================
                Alignment Control
            ================================================== */}

            <div className="playground-controls">

              <Checkbox
                label="Align With Field"
                description="Align the Radio controls with the input controls."
                checked={alignWithField}
                onChange={setAlignWithField}
                withWrapper={false}
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
                  Column 2 — Radio Group
              ================================================== */}

              <div className="playground-stack">

                <AlignedRadioExample
                  label="Administrator"
                  description="Full access to the application."
                  value="administrator"
                  selectedValue={userRole}
                  onChange={setUserRole}
                  alignWithField={
                    alignWithField
                  }
                />

                <AlignedRadioExample
                  label="Editor"
                  description="Can create and modify content."
                  value="editor"
                  selectedValue={userRole}
                  onChange={setUserRole}
                  alignWithField={
                    alignWithField
                  }
                />

                <AlignedRadioExample
                  label="Viewer"
                  description="Can view application content."
                  value="viewer"
                  selectedValue={userRole}
                  onChange={setUserRole}
                  alignWithField={
                    alignWithField
                  }
                />

              </div>

            </div>


            <p className="playground-value">
              Selected role:{" "}
              <strong>
                {userRole}
              </strong>
            </p>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}


/* ==========================================================
   Basic Radio Example
========================================================== */

function BasicRadioExample() {
  const [checked, setChecked] =
    useState(false);

  return (
    <Radio
      name="basic-radio"
      value="basic"
      label="Enable notifications"
      description="Receive notifications about account activity."
      checked={checked}
      onChange={setChecked}
    />
  );
}


/* ==========================================================
   Radio Group Example
========================================================== */

function RadioGroupExample() {
  const [value, setValue] =
    useState("monthly");

  return (
    <div className="playground-stack">

      <Radio
        name="billing-cycle"
        value="monthly"
        label="Monthly"
        description="Pay every month."
        checked={
          value === "monthly"
        }
        onChange={(checked) => {
          if (checked) {
            setValue("monthly");
          }
        }}
      />

      <Radio
        name="billing-cycle"
        value="yearly"
        label="Yearly"
        description="Pay once per year."
        checked={
          value === "yearly"
        }
        onChange={(checked) => {
          if (checked) {
            setValue("yearly");
          }
        }}
      />

      <Radio
        name="billing-cycle"
        value="enterprise"
        label="Enterprise"
        description="Custom billing for enterprise accounts."
        checked={
          value === "enterprise"
        }
        onChange={(checked) => {
          if (checked) {
            setValue("enterprise");
          }
        }}
      />

      <p className="playground-value">
        Selected plan:{" "}
        <strong>
          {value}
        </strong>
      </p>

    </div>
  );
}


/* ==========================================================
   Size Example
========================================================== */

interface SizeRadioExampleProps {
  size: "sm" | "md" | "lg";
}

function SizeRadioExample({
  size,
}: SizeRadioExampleProps) {
  const [checked, setChecked] =
    useState(false);

  return (
    <Radio
      name={`radio-size-${size}`}
      value={size}
      label={`${size.toUpperCase()} Radio`}
      size={size}
      checked={checked}
      onChange={setChecked}
    />
  );
}


/* ==========================================================
   State Example
========================================================== */

interface StateRadioExampleProps {
  label: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

function StateRadioExample({
  label,
  checked = false,
  required = false,
  disabled = false,
  error,
}: StateRadioExampleProps) {
  const [value, setValue] =
    useState(checked);

  return (
    <Radio
      name={`radio-state-${label}`}
      value={label}
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
   Controlled Example
========================================================== */

function ControlledRadioExample() {
  const [value, setValue] =
    useState("standard");

  return (
    <div className="playground-stack">

      <Radio
        name="controlled-plan"
        value="standard"
        label="Standard"
        description="For individual users."
        checked={
          value === "standard"
        }
        onChange={(checked) => {
          if (checked) {
            setValue("standard");
          }
        }}
      />

      <Radio
        name="controlled-plan"
        value="professional"
        label="Professional"
        description="For professional users and small teams."
        checked={
          value === "professional"
        }
        onChange={(checked) => {
          if (checked) {
            setValue("professional");
          }
        }}
      />

      <Radio
        name="controlled-plan"
        value="enterprise"
        label="Enterprise"
        description="For larger organizations."
        checked={
          value === "enterprise"
        }
        onChange={(checked) => {
          if (checked) {
            setValue("enterprise");
          }
        }}
      />

      <p className="playground-value">
        Current value:{" "}
        <strong>
          {value}
        </strong>
      </p>

    </div>
  );
}


/* ==========================================================
   Aligned Radio Example
========================================================== */

interface AlignedRadioExampleProps {
  label: string;
  description: string;
  alignWithField: boolean;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

function AlignedRadioExample({
  label,
  description,
  alignWithField,
  value,
  selectedValue,
  onChange,
}: AlignedRadioExampleProps) {
  return (
    <Radio
      name="user-role"
      value={value}
      label={label}
      description={description}
      alignWithField={alignWithField}
      checked={
        selectedValue === value
      }
      onChange={(checked) => {
        if (checked) {
          onChange(value);
        }
      }}
    />
  );
}