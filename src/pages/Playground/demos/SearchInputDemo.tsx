import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  SearchInput,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface SearchInputDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function SearchInputDemo({
  focusId,
  innerFocusId,
}: SearchInputDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "search-input-interactive",
    "search-input-basic-usage",
    "search-input-controlled",
    "search-input-sizes",
    "search-input-states",
    "search-input-clearable",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "search-input-interactive",
    ]);

  /* ==================================================
     States Group
  ================================================== */

  const stateIds = [
    "search-input-state-default",
    "search-input-state-disabled",
    "search-input-state-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "search-input-state-default",
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

  const [clearable, setClearable] =
    useState(false);

  const [fullWidth, setFullWidth] =
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
          id="search-input-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with the main
                SearchInput properties.
              </p>
            </div>

            <div className="playground-controls">

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

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
              />

              <Checkbox
                label="Clearable"
                checked={clearable}
                onChange={setClearable}
              />

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
                withWrapper={false}
              />

              <Checkbox
                label="Error"
                checked={showError}
                onChange={setShowError}
                withWrapper={false}
              />

            </div>

            <div className="playground-preview">

              <SearchInput
                label="Search"
                value={value}
                onChange={(event) =>
                  setValue(
                    event.target.value
                  )
                }
                placeholder="Search..."
                size={size}
                disabled={disabled}
                clearable={clearable}
                fullWidth={fullWidth}
                error={
                  showError
                    ? "Please enter a valid search value."
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
          id="search-input-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic SearchInput with a
                search icon and placeholder.
              </p>
            </div>

            <BasicSearchInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Search
        ================================================== */}

        <Collapse
          id="search-input-controlled"
          title="Controlled Search"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Search
              </h2>

              <p>
                SearchInput supports the
                standard React controlled
                input pattern.
              </p>
            </div>

            <ControlledSearchInputExample />

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="search-input-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                SearchInput supports small,
                medium, and large sizes.
              </p>
            </div>

            <div className="ff-playground-demo__grid">

              <SearchSizeExample
                size="sm"
              />

              <SearchSizeExample
                size="md"
              />

              <SearchSizeExample
                size="lg"
              />

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="search-input-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common SearchInput states
                used in FlowForge forms.
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

              <Collapse
                id="search-input-state-default"
                title="Default"
              >
                <div className="playground-section">

                  <StateSearchInputExample
                    label="Search"
                    placeholder="Search..."
                  />

                </div>
              </Collapse>


              <Collapse
                id="search-input-state-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <StateSearchInputExample
                    label="Disabled Search"
                    value="FlowForge"
                    disabled
                  />

                </div>
              </Collapse>


              <Collapse
                id="search-input-state-error"
                title="Error"
              >
                <div className="playground-section">

                  <StateSearchInputExample
                    label="Search"
                    placeholder="Search..."
                    error="Please enter a valid search value."
                  />

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Clearable
        ================================================== */}

        <Collapse
          id="search-input-clearable"
          title="Clearable Search"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Clearable Search
              </h2>

              <p>
                The clear action appears when
                the search input contains a value.
              </p>
            </div>

            <ClearableSearchInputExample />

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}


/* ==========================================================
   Basic SearchInput Example
========================================================== */

function BasicSearchInputExample() {
  return (
    <SearchInput
      label="Search"
      placeholder="Search..."
    />
  );
}


/* ==========================================================
   Controlled SearchInput Example
========================================================== */

function ControlledSearchInputExample() {
  const [value, setValue] =
    useState("");

  return (
    <div className="playground-stack">

      <SearchInput
        label="Controlled search"
        value={value}
        onChange={(event) =>
          setValue(
            event.target.value
          )
        }
        placeholder="Search..."
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

interface SearchSizeExampleProps {
  size: "sm" | "md" | "lg";
}

function SearchSizeExample({
  size,
}: SearchSizeExampleProps) {
  return (
    <SearchInput
      size={size}
      label={`${size.toUpperCase()} Search`}
      placeholder="Search..."
    />
  );
}


/* ==========================================================
   State Example
========================================================== */

interface StateSearchInputExampleProps {
  label: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: string;
}

function StateSearchInputExample({
  label,
  placeholder,
  value: initialValue = "",
  disabled = false,
  error,
}: StateSearchInputExampleProps) {
  const [value, setValue] =
    useState(initialValue);

  return (
    <SearchInput
      label={label}
      value={value}
      onChange={(event) =>
        setValue(
          event.target.value
        )
      }
      placeholder={placeholder}
      disabled={disabled}
      error={error}
    />
  );
}


/* ==========================================================
   Clearable SearchInput Example
========================================================== */

function ClearableSearchInputExample() {
  const [value, setValue] =
    useState("FlowForge");

  return (
    <SearchInput
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