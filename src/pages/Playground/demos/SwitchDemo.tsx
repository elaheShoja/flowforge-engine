import { useState } from "react";

import {
  Checkbox,
  Input,
  Select,
  Switch,
  Collapse,
  CollapseGroup,
} from "@/engine/components";

import "../Playground.css";

interface SwitchDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function SwitchDemo({
  focusId,
  innerFocusId,
}: SwitchDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "switch-interactive",
    "switch-basic-usage",
    "switch-controlled",
    "switch-sizes",
    "switch-states",
    "switch-form-alignment",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "switch-interactive",
    ]);

  /* ==================================================
     State IDs
  ================================================== */

  const stateIds = [
    "switch-states-default",
    "switch-states-required",
    "switch-states-disabled",
    "switch-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "switch-states-default",
    ]);

  /* ==================================================
     Interactive Playground
  ================================================== */

  const [checked, setChecked] =
    useState(true);

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

  /* ==================================================
     Form Alignment
  ================================================== */

  const [alignWithField, setAlignWithField] =
    useState(false);

  const [notificationsEnabled, setNotificationsEnabled] =
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
          id="switch-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

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
                alignWithField
              />


              {/* Required */}

              <Checkbox
                label="Required"
                checked={required}
                onChange={setRequired}
                alignWithField
              />


              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
              />


              {/* Error */}

              <Checkbox
                label="Error"
                checked={error}
                onChange={setError}
              />


              {/* Full Width */}

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
              />

            </div>


            <div className="playground-preview">

              <Switch
                label="Enable notifications"
                description="Receive notifications about account activity."
                checked={checked}
                onChange={setChecked}
                size={size}
                required={required}
                disabled={disabled}
                fullWidth={fullWidth}
                error={
                  error
                    ? "Please review this setting."
                    : undefined
                }
              />

            </div>


            <p className="playground-value">
              Current value:{" "}
              <strong>
                {checked
                  ? "true"
                  : "false"}
              </strong>
            </p>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="switch-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic Switch with a label
                and description.
              </p>
            </div>

            <BasicSwitchExample />

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Switch
        ================================================== */}

        <Collapse
          id="switch-controlled"
          title="Controlled Switch"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Switch
              </h2>

              <p>
                Switch state can be fully
                controlled using React state.
              </p>
            </div>

            <ControlledSwitchExample />

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="switch-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                Switch supports small, medium
                and large sizes.
              </p>
            </div>

            <div className="playground-stack">

              <SizeSwitchExample
                size="sm"
              />

              <SizeSwitchExample
                size="md"
              />

              <SizeSwitchExample
                size="lg"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="switch-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Switch states used
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
                id="switch-states-default"
                title="Default"
              >
                <div className="playground-section">

                  <StateSwitchExample
                    label="Default"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="switch-states-required"
                title="Required"
              >
                <div className="playground-section">

                  <StateSwitchExample
                    label="Required"
                    required
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="switch-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <StateSwitchExample
                    label="Disabled"
                    disabled
                    checked
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="switch-states-error"
                title="Error"
              >
                <div className="playground-section">

                  <StateSwitchExample
                    label="Error"
                    error="Please review this setting."
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Form Alignment
        ================================================== */}

        <Collapse
          id="switch-form-alignment"
          title="Form Alignment"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Form Alignment
              </h2>

              <p>
                Use alignWithField to align Switch
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
                description="Align the Switch controls with the input controls."
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
                  Column 2 — Switches
              ================================================== */}

              <div className="playground-stack">

                <Switch
                  label="Email Notifications"
                  description="Receive notifications by email."
                  checked={notificationsEnabled}
                  onChange={setNotificationsEnabled}
                  alignWithField={alignWithField}
                />

                <Switch
                  label="Push Notifications"
                  description="Receive notifications on your device."
                  alignWithField={alignWithField}
                  defaultChecked
                />

                <Switch
                  label="Marketing Updates"
                  description="Receive product and marketing updates."
                  alignWithField={alignWithField}
                />

              </div>

            </div>


            <p className="playground-value">
              Email notifications:{" "}
              <strong>
                {notificationsEnabled
                  ? "enabled"
                  : "disabled"}
              </strong>
            </p>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}


/* ==========================================================
   Basic Switch Example
========================================================== */

function BasicSwitchExample() {
  const [checked, setChecked] =
    useState(false);

  return (
    <Switch
      label="Enable notifications"
      description="Receive notifications about account activity."
      checked={checked}
      onChange={setChecked}
    />
  );
}


/* ==========================================================
   Controlled Example
========================================================== */

function ControlledSwitchExample() {
  const [enabled, setEnabled] =
    useState(true);

  return (
    <div className="playground-stack">

      <Switch
        label="Enable automatic updates"
        description="Automatically install available updates."
        checked={enabled}
        onChange={setEnabled}
      />

      <p className="playground-value">
        Current value:{" "}
        <strong>
          {enabled
            ? "enabled"
            : "disabled"}
        </strong>
      </p>

    </div>
  );
}


/* ==========================================================
   Size Example
========================================================== */

interface SizeSwitchExampleProps {
  size: "sm" | "md" | "lg";
}

function SizeSwitchExample({
  size,
}: SizeSwitchExampleProps) {
  const [checked, setChecked] =
    useState(false);

  return (
    <Switch
      label={`${size.toUpperCase()} Switch`}
      size={size}
      checked={checked}
      onChange={setChecked}
    />
  );
}


/* ==========================================================
   State Example
========================================================== */

interface StateSwitchExampleProps {
  label: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

function StateSwitchExample({
  label,
  checked = false,
  required = false,
  disabled = false,
  error,
}: StateSwitchExampleProps) {
  const [value, setValue] =
    useState(checked);

  return (
    <Switch
      label={label}
      checked={value}
      onChange={setValue}
      required={required}
      disabled={disabled}
      error={error}
    />
  );
}