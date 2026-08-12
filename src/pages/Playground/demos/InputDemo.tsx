import { useState } from "react";

import { Input } from "@/shared/ui";

import "./InputDemo.css";

export default function InputDemo() {
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

      {/* =========================
          Interactive Controls
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>Interactive Playground</h2>

          <p>
            Experiment with the main Input properties
            and see the result immediately.
          </p>
        </div>

        <div className="playground-controls">

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

          <label className="playground-checkbox">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) =>
                setDisabled(event.target.checked)
              }
            />

            Disabled
          </label>

          <label className="playground-checkbox">
            <input
              type="checkbox"
              checked={loading}
              onChange={(event) =>
                setLoading(event.target.checked)
              }
            />

            Loading
          </label>

          <label className="playground-checkbox">
            <input
              type="checkbox"
              checked={clearable}
              onChange={(event) =>
                setClearable(event.target.checked)
              }
            />

            Clearable
          </label>

          <label className="playground-checkbox">
            <input
              type="checkbox"
              checked={fullWidth}
              onChange={(event) =>
                setFullWidth(event.target.checked)
              }
            />

            Full Width
          </label>

          <label className="playground-checkbox">
            <input
              type="checkbox"
              checked={required}
              onChange={(event) =>
                setRequired(event.target.checked)
              }
            />

            Required
          </label>

          <label className="playground-checkbox">
            <input
              type="checkbox"
              checked={showError}
              onChange={(event) =>
                setShowError(event.target.checked)
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
              setValue(event.target.value)
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

      </section>

      {/* =========================
          Basic Usage
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>Basic Usage</h2>

          <p>
            A basic Input with a label and placeholder.
          </p>
        </div>

        <Input
          label="Name"
          placeholder="Enter your name"
        />

      </section>

      {/* =========================
          Controlled Input
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>Controlled Input</h2>

          <p>
            Input can be controlled using React state.
          </p>
        </div>

        <Input
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

      </section>

      {/* =========================
          Sizes
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>Sizes</h2>

          <p>
            Input supports small, medium, and large sizes.
          </p>
        </div>

        <div className="playground-stack">

          <Input
            size="sm"
            label="Small"
            placeholder="Small input"
          />

          <Input
            size="md"
            label="Medium"
            placeholder="Medium input"
          />

          <Input
            size="lg"
            label="Large"
            placeholder="Large input"
          />

        </div>

      </section>

      {/* =========================
          States
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>States</h2>

          <p>
            Common Input states.
          </p>
        </div>

        <div className="playground-stack">

          <Input
            label="Required"
            placeholder="Required input"
            required
          />

          <Input
            label="Disabled"
            placeholder="Disabled input"
            disabled
          />

          <Input
            label="Loading"
            placeholder="Loading..."
            loading
            loadingText="Loading..."
          />

          <Input
            label="Error"
            placeholder="Input with error"
            error="Please enter a valid value."
          />

        </div>

      </section>

      {/* =========================
          Clearable
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>Clearable Input</h2>

          <p>
            The clear button appears when the input
            contains a value.
          </p>
        </div>

        <Input
          label="Search"
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          clearable
          onClear={() => setValue("")}
          placeholder="Search..."
        />

      </section>

      {/* =========================
          Prefix & Suffix
      ========================= */}

      <section className="playground-section">

        <div className="playground-section__header">
          <h2>Prefix and Suffix</h2>

          <p>
            Add content before or after the input value.
          </p>
        </div>

        <div className="playground-stack">

          <Input
            label="Website"
            prefix="https://"
            placeholder="example.com"
          />

          <Input
            label="Price"
            suffix="USD"
            placeholder="100"
          />

        </div>

      </section>

    </div>
  );
}