import { useState } from "react";

import {
  Collapse,
  CollapseGroup,
  Input,
} from "@/engine/components";

interface InputDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function InputDemo({
  focusId,
  innerFocusId,
}: InputDemoProps) {
  /* =========================
     Section Group
  ========================= */

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
      focusId && sectionIds.includes(focusId)
        ? focusId
        : "input-interactive",
    ]);

  /* =========================
     Sizes Group
  ========================= */

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

  /* =========================
     States Group
  ========================= */

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

  /* =========================
     Prefix & Suffix Group
  ========================= */

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

  /* =========================
     Interactive Playground
  ========================= */

  const [value, setValue] = useState("FlowForge");

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

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with the main Input
                properties and see the result
                immediately.
              </p>
            </div>

            <div className="playground-controls">

              {/* Size */}

              <div className="playground-control">
                <label htmlFor="input-size">
                  Size
                </label>

                <select
                  id="input-size"
                  value={size}
                  onChange={(event) =>
                    setSize(
                      event.target.value as
                        | "sm"
                        | "md"
                        | "lg"
                    )
                  }
                >
                  <option value="sm">
                    Small
                  </option>

                  <option value="md">
                    Medium
                  </option>

                  <option value="lg">
                    Large
                  </option>
                </select>
              </div>

              {/* Disabled */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(event) =>
                    setDisabled(
                      event.target.checked
                    )
                  }
                />

                Disabled
              </label>

              {/* Loading */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={loading}
                  onChange={(event) =>
                    setLoading(
                      event.target.checked
                    )
                  }
                />

                Loading
              </label>

              {/* Clearable */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={clearable}
                  onChange={(event) =>
                    setClearable(
                      event.target.checked
                    )
                  }
                />

                Clearable
              </label>

              {/* Full Width */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={fullWidth}
                  onChange={(event) =>
                    setFullWidth(
                      event.target.checked
                    )
                  }
                />

                Full Width
              </label>

              {/* Required */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={required}
                  onChange={(event) =>
                    setRequired(
                      event.target.checked
                    )
                  }
                />

                Required
              </label>

              {/* Error */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={showError}
                  onChange={(event) =>
                    setShowError(
                      event.target.checked
                    )
                  }
                />

                Error
              </label>

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

            <Input
              label="Name"
              placeholder="Enter your name"
            />

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
                <Input
                  size="sm"
                  label="Small"
                  placeholder="Small input"
                />
              </Collapse>

              <Collapse
                id="input-size-medium"
                title="Medium"
              >
                <Input
                  size="md"
                  label="Medium"
                  placeholder="Medium input"
                />
              </Collapse>

              <Collapse
                id="input-size-large"
                title="Large"
              >
                <Input
                  size="lg"
                  label="Large"
                  placeholder="Large input"
                />
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
                <Input
                  label="Default"
                  placeholder="Default input"
                />
              </Collapse>

              {/* Required */}

              <Collapse
                id="input-state-required"
                title="Required"
              >
                <Input
                  label="Required"
                  required
                  placeholder="Required input"
                />
              </Collapse>

              {/* Disabled */}

              <Collapse
                id="input-state-disabled"
                title="Disabled"
              >
                <Input
                  label="Disabled"
                  placeholder="Disabled input"
                  disabled
                />
              </Collapse>

              {/* Loading */}

              <Collapse
                id="input-state-loading"
                title="Loading"
              >
                <Input
                  label="Loading"
                  placeholder="Loading..."
                  loading
                  loadingText="Loading..."
                />
              </Collapse>

              {/* Error */}

              <Collapse
                id="input-state-error"
                title="Error"
              >
                <Input
                  label="Error"
                  placeholder="Input with error"
                  error="Please enter a valid value."
                />
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
                <Input
                  label="Website"
                  prefix="https://"
                  placeholder="example.com"
                />
              </Collapse>

              {/* Suffix */}

              <Collapse
                id="input-suffix"
                title="Suffix"
              >
                <Input
                  label="Price"
                  suffix="USD"
                  placeholder="100"
                />
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}