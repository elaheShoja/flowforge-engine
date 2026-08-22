import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  Select,
  Textarea,
} from "@/engine/components";

import "../Playground.css";

interface TextareaDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function TextareaDemo({
  focusId,
  innerFocusId,
}: TextareaDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "textarea-interactive",
    "textarea-basic-usage",
    "textarea-controlled",
    "textarea-rows",
    "textarea-full-width",
    "textarea-auto-resize",
    "textarea-min-rows",
    "textarea-max-rows",
    "textarea-resize",
    "textarea-states",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "textarea-interactive",
    ]);

  /* ==================================================
     State IDs
  ================================================== */

  const stateIds = [
    "textarea-states-default",
    "textarea-states-required",
    "textarea-states-disabled",
    "textarea-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "textarea-states-default",
    ]);

  /* ==================================================
     Interactive Playground State
  ================================================== */

  const [value, setValue] =
    useState("FlowForge");

  const [resize, setResize] =
    useState<
      "none" | "vertical" | "horizontal" | "both"
    >("vertical");

  const [rows, setRows] =
    useState(3);

  const [minRows, setMinRows] =
    useState(3);

  const [maxRows, setMaxRows] =
    useState(8);

  const [fullWidth, setFullWidth] =
    useState(true);

  const [autoResize, setAutoResize] =
    useState(false);

  const [disabled, setDisabled] =
    useState(false);

  const [required, setRequired] =
    useState(false);

  const [error, setError] =
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
          id="textarea-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-controls">

              {/* Resize */}

              <div className="playground-control">
                <Select
                  value={resize}
                  label="Resize"
                  onChange={(value) => {
                    setResize(
                      value as
                        | "none"
                        | "vertical"
                        | "horizontal"
                        | "both"
                    );
                  }}
                  options={[
                    {
                      value: "none",
                      label: "None",
                    },
                    {
                      value: "vertical",
                      label: "Vertical",
                    },
                    {
                      value: "horizontal",
                      label: "Horizontal",
                    },
                    {
                      value: "both",
                      label: "Both",
                    },
                  ]}
                />
              </div>

              {/* Rows */}

              <div className="playground-control">
                <Select
                  value={String(rows)}
                  label="Rows"
                  onChange={(value) => {
                    setRows(Number(value));
                  }}
                  options={[
                    {
                      value: "2",
                      label: "2",
                    },
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "4",
                      label: "4",
                    },
                    {
                      value: "5",
                      label: "5",
                    },
                    {
                      value: "6",
                      label: "6",
                    },
                  ]}
                />
              </div>

              {/* Min Rows */}

              <div className="playground-control">
                <Select
                  value={String(minRows)}
                  label="Min Rows"
                  onChange={(value) => {
                    setMinRows(Number(value));
                  }}
                  options={[
                    {
                      value: "1",
                      label: "1",
                    },
                    {
                      value: "2",
                      label: "2",
                    },
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "4",
                      label: "4",
                    },
                    {
                      value: "5",
                      label: "5",
                    },
                  ]}
                />
              </div>

              {/* Max Rows */}

              <div className="playground-control">
                <Select
                  value={String(maxRows)}
                  label="Max Rows"
                  onChange={(value) => {
                    setMaxRows(Number(value));
                  }}
                  options={[
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "5",
                      label: "5",
                    },
                    {
                      value: "8",
                      label: "8",
                    },
                    {
                      value: "10",
                      label: "10",
                    },
                    {
                      value: "15",
                      label: "15",
                    },
                  ]}
                />
              </div>

              {/* Full Width */}

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
                alignWithField
              />

              {/* Auto Resize */}

              <Checkbox
                label="Auto Resize"
                checked={autoResize}
                onChange={setAutoResize}
                alignWithField
              />

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
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
                checked={error}
                onChange={setError}
              />

            </div>

            <div className="playground-preview">

              <Textarea
                label="Interactive Textarea"
                value={value}
                onChange={(event) =>
                  setValue(event.target.value)
                }
                placeholder="Enter your text..."
                rows={rows}
                minRows={minRows}
                maxRows={maxRows}
                resize={resize}
                autoResize={autoResize}
                fullWidth={fullWidth}
                disabled={disabled}
                required={required}
                error={
                  error
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
          id="textarea-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic multiline text input
                for longer user-provided
                content.
              </p>
            </div>

            <Textarea
              label="Description"
              placeholder="Enter your description..."
              rows={4}
            />

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Textarea
        ================================================== */}

        <Collapse
          id="textarea-controlled"
          title="Controlled Textarea"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Textarea
              </h2>

              <p>
                Textarea can be fully controlled
                using React state.
              </p>
            </div>

            <Textarea
              label="Controlled value"
              value={value}
              onChange={(event) =>
                setValue(event.target.value)
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
        </Collapse>


        {/* ==================================================
            Rows
        ================================================== */}

        <Collapse
          id="textarea-rows"
          title="Rows"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Rows
              </h2>

              <p>
                Control the initial height
                of the textarea using the
                rows property.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <Textarea
                label="2 Rows"
                rows={2}
                placeholder="Two rows"
              />

              <Textarea
                label="4 Rows"
                rows={4}
                placeholder="Four rows"
              />

              <Textarea
                label="6 Rows"
                rows={6}
                placeholder="Six rows"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Full Width
        ================================================== */}

        <Collapse
          id="textarea-full-width"
          title="Full Width"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Full Width
              </h2>

              <p>
                Compare content-width and
                full-width textarea layouts.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <Textarea
                label="Content Width"
                fullWidth={false}
                rows={3}
                placeholder="Content width"
              />

              <Textarea
                label="Full Width"
                fullWidth
                rows={3}
                placeholder="Full width"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Auto Resize
        ================================================== */}

        <Collapse
          id="textarea-auto-resize"
          title="Auto Resize"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Auto Resize
              </h2>

              <p>
                Automatically adjust the
                textarea height based on
                its content.
              </p>
            </div>

            <Textarea
              label="Auto Resize"
              autoResize
              rows={3}
              minRows={3}
              maxRows={8}
              placeholder="Start typing..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Minimum Rows
        ================================================== */}

        <Collapse
          id="textarea-min-rows"
          title="Minimum Rows"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Minimum Rows
              </h2>

              <p>
                Define the minimum height
                used during automatic
                resizing.
              </p>
            </div>

            <Textarea
              label="Minimum 3 Rows"
              autoResize
              rows={3}
              minRows={3}
              placeholder="Start typing..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Maximum Rows
        ================================================== */}

        <Collapse
          id="textarea-max-rows"
          title="Maximum Rows"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Maximum Rows
              </h2>

              <p>
                Define the maximum height
                used during automatic
                resizing.
              </p>
            </div>

            <Textarea
              label="Maximum 8 Rows"
              autoResize
              rows={3}
              maxRows={8}
              placeholder="Start typing..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Resize
        ================================================== */}

        <Collapse
          id="textarea-resize"
          title="Resize"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Resize
              </h2>

              <p>
                Control how the user can
                manually resize the textarea.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <Textarea
                label="None"
                resize="none"
                rows={3}
                placeholder="Resize disabled"
              />

              <Textarea
                label="Vertical"
                resize="vertical"
                rows={3}
                placeholder="Vertical resize"
              />

              <Textarea
                label="Horizontal"
                resize="horizontal"
                rows={3}
                placeholder="Horizontal resize"
              />

              <Textarea
                label="Both"
                resize="both"
                rows={3}
                placeholder="Resize in both directions"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="textarea-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Textarea states used
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
                id="textarea-states-default"
                title="Default"
              >
                <div className="playground-section">

                  <Textarea
                    label="Default"
                    placeholder="Default state"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="textarea-states-required"
                title="Required"
              >
                <div className="playground-section">

                  <Textarea
                    label="Required"
                    required
                    placeholder="Required field"
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="textarea-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <Textarea
                    label="Disabled"
                    disabled
                    value="Disabled textarea"
                    readOnly
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="textarea-states-error"
                title="Error"
              >
                <div className="playground-section">

                  <Textarea
                    label="Error"
                    error="Please enter a valid value."
                    placeholder="Error state"
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