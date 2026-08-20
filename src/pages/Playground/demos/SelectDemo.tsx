import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface SelectDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

/* =========================================================
   Options
========================================================= */

const selectOptions = [
  {
    value: "react",
    label: "React",
  },
  {
    value: "typescript",
    label: "TypeScript",
  },
  {
    value: "javascript",
    label: "JavaScript",
  },
  {
    value: "vue",
    label: "Vue",
  },
  {
    value: "angular",
    label: "Angular",
  },
];

const groupedOptions = [
  {
    label: "Frontend",
    options: [
      {
        value: "react",
        label: "React",
      },
      {
        value: "vue",
        label: "Vue",
      },
      {
        value: "angular",
        label: "Angular",
      },
    ],
  },
  {
    label: "Backend",
    options: [
      {
        value: "node",
        label: "Node.js",
      },
      {
        value: "dotnet",
        label: ".NET",
      },
      {
        value: "java",
        label: "Java",
      },
    ],
  },
];

const disabledOptions = [
  {
    value: "available",
    label: "Available Option",
  },
  {
    value: "disabled",
    label: "Disabled Option",
    disabled: true,
  },
  {
    value: "another",
    label: "Another Available Option",
  },
  {
    value: "disabled-two",
    label: "Another Disabled Option",
    disabled: true,
  },
];

/* =========================================================
   Component
========================================================= */

export default function SelectDemo({
  focusId,
  innerFocusId,
}: SelectDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "select-interactive",
    "select-basic-usage",
    "select-searchable",
    "select-multi",
    "select-disabled-options",
    "select-groups",
    "select-select-all",
    "select-states",
    "select-controlled",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "select-interactive",
    ]);

  /* ==================================================
     State IDs
  ================================================== */

  const stateIds = [
    "select-states-default",
    "select-states-required",
    "select-states-disabled",
    "select-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "select-states-default",
    ]);

  /* ==================================================
     Interactive Playground State
  ================================================== */

  const [interactiveMulti, setInteractiveMulti] =
    useState(false);

  const [interactiveSearchable, setInteractiveSearchable] =
    useState(true);

  const [interactiveClearable, setInteractiveClearable] =
    useState(true);

  const [interactiveDisabled, setInteractiveDisabled] =
    useState(false);

  const [interactiveValue, setInteractiveValue] =
    useState<string | string[]>("");

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
          id="select-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with the main Select
                properties and see the result
                immediately.
              </p>
            </div>

            <div className="playground-controls">

              {/* Multi */}

              <Checkbox
                label="Multi Select"
                checked={interactiveMulti}
                onChange={(checked) => {
                  setInteractiveMulti(checked);

                  setInteractiveValue(
                    checked ? [] : ""
                  );
                }}
              />

              {/* Searchable */}

              <Checkbox
                label="Searchable"
                checked={interactiveSearchable}
                onChange={setInteractiveSearchable}
              />

              {/* Clearable */}

              <Checkbox
                label="Clearable"
                checked={interactiveClearable}
                onChange={setInteractiveClearable}
              />

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={interactiveDisabled}
                onChange={setInteractiveDisabled}
                withWrapper={false}
              />

            </div>

            <div className="playground-preview">

              {interactiveMulti ? (
                <Select
                  label="Interactive Multi Select"
                  multi
                  searchable={
                    interactiveSearchable
                  }
                  clearable={
                    interactiveClearable
                  }
                  disabled={
                    interactiveDisabled
                  }
                  options={selectOptions}
                  value={
                    interactiveValue as string[]
                  }
                  onChange={
                    setInteractiveValue
                  }
                  placeholder="Select one or more options..."
                />
              ) : (
                <Select
                  label="Interactive Select"
                  searchable={
                    interactiveSearchable
                  }
                  clearable={
                    interactiveClearable
                  }
                  disabled={
                    interactiveDisabled
                  }
                  options={selectOptions}
                  value={
                    interactiveValue as string
                  }
                  onChange={
                    setInteractiveValue
                  }
                  placeholder="Select an option..."
                />
              )}

            </div>

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {Array.isArray(
                  interactiveValue
                )
                  ? interactiveValue.length > 0
                    ? interactiveValue.join(", ")
                    : "Empty"
                  : interactiveValue ||
                    "Empty"}
              </strong>
            </p>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="select-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic single-value Select
                component.
              </p>
            </div>

            <Select
              label="Framework"
              options={selectOptions}
              placeholder="Select a framework..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Searchable
        ================================================== */}

        <Collapse
          id="select-searchable"
          title="Searchable"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Searchable Select
              </h2>

              <p>
                Enable searching to quickly
                find an option from a larger
                list.
              </p>
            </div>

            <Select
              label="Search Framework"
              searchable
              clearable
              options={selectOptions}
              placeholder="Search frameworks..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Multi Select
        ================================================== */}

        <Collapse
          id="select-multi"
          title="Multi Select"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Multi Select
              </h2>

              <p>
                Select multiple options and
                display the selected values as
                chips.
              </p>
            </div>

            <Select
              label="Technologies"
              multi
              searchable
              clearable
              options={selectOptions}
              placeholder="Select technologies..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            Disabled Options
        ================================================== */}

        <Collapse
          id="select-disabled-options"
          title="Disabled Options"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Disabled Options
              </h2>

              <p>
                Individual options can be
                disabled while the Select itself
                remains interactive.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <Select
                label="Single Select"
                options={disabledOptions}
                placeholder="Try selecting a disabled option..."
              />

              <Select
                label="Multi Select"
                multi
                options={disabledOptions}
                placeholder="Try selecting multiple options..."
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Groups
        ================================================== */}

        <Collapse
          id="select-groups"
          title="Groups"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Option Groups
              </h2>

              <p>
                Options can be organized into
                labeled groups.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <Select
                label="Single Select"
                searchable
                options={groupedOptions}
                placeholder="Select a technology..."
              />

              <Select
                label="Multi Select"
                multi
                searchable
                options={groupedOptions}
                placeholder="Select technologies..."
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Select All
        ================================================== */}

        <Collapse
          id="select-select-all"
          title="Select All"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Select All
              </h2>

              <p>
                Enable Select All to select or
                clear all available options at
                once.
              </p>
            </div>

            <Select
              label="Select Technologies"
              multi
              searchable
              clearable
              selectAll={{
                enabled: true,
                scope: "filtered",
              }}
              options={selectOptions}
              placeholder="Select technologies..."
            />

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="select-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Select states used in
                FlowForge forms.
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
                id="select-states-default"
                title="Default"
              >
                <div className="playground-section">

                  <Select
                    label="Default"
                    options={selectOptions}
                    placeholder="Default state"
                  />

                </div>
              </Collapse>


              {/* Required */}

              <Collapse
                id="select-states-required"
                title="Required"
              >
                <div className="playground-section">

                  <Select
                    label="Required"
                    required
                    options={selectOptions}
                    placeholder="Required field"
                  />

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="select-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <Select
                    label="Disabled"
                    disabled
                    value="react"
                    options={selectOptions}
                  />

                </div>
              </Collapse>


              {/* Error */}

              <Collapse
                id="select-states-error"
                title="Error"
              >
                <div className="playground-section">

                  <Select
                    label="Error"
                    error="Please select a valid option."
                    options={selectOptions}
                    placeholder="Error state"
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Select
        ================================================== */}

        <Collapse
          id="select-controlled"
          title="Controlled Select"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Select
              </h2>

              <p>
                Select can be controlled using
                React state.
              </p>
            </div>

            <ControlledSelectDemo />

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}


/* =========================================================
   Controlled Select Demo
========================================================= */

function ControlledSelectDemo() {
  const [value, setValue] =
    useState<string>("");

  return (
    <>
      <Select
        label="Controlled Framework"
        value={value}
        onChange={setValue}
        options={selectOptions}
        clearable
        placeholder="Select a framework..."
      />

      <p className="playground-value">
        Current value:{" "}
        <strong>
          {value || "Empty"}
        </strong>
      </p>
    </>
  );
}