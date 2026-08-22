import { useState } from "react";

import {
  Button,
  Checkbox,
  Collapse,
  CollapseGroup,
  Icon,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface ButtonDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function ButtonDemo({
  focusId,
  innerFocusId,
}: ButtonDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "button-interactive",
    "button-basic-usage",
    "button-variants",
    "button-sizes",
    "button-states",
    "button-icons",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "button-interactive",
    ]);

  /* ==================================================
     Variants Group
  ================================================== */

  const variantIds = [
    "button-variant-primary",
    "button-variant-secondary",
    "button-variant-outline",
    "button-variant-ghost",
    "button-variant-danger",
    "button-variant-success",
    "button-variant-warning",
  ];

  const [variantActiveIds, setVariantActiveIds] =
    useState<string[]>([
      innerFocusId &&
      variantIds.includes(innerFocusId)
        ? innerFocusId
        : "button-variant-primary",
    ]);

  /* ==================================================
     Sizes Group
  ================================================== */

  const sizeIds = [
    "button-size-xs",
    "button-size-sm",
    "button-size-md",
    "button-size-lg",
    "button-size-xl",
  ];

  const [sizeActiveIds, setSizeActiveIds] =
    useState<string[]>([
      innerFocusId &&
      sizeIds.includes(innerFocusId)
        ? innerFocusId
        : "button-size-md",
    ]);

  /* ==================================================
     States Group
  ================================================== */

  const stateIds = [
    "button-state-default",
    "button-state-disabled",
    "button-state-loading",
    "button-state-full-width",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "button-state-default",
    ]);

  /* ==================================================
     Interactive Playground
  ================================================== */

  const [variant, setVariant] =
    useState<
      | "primary"
      | "secondary"
      | "outline"
      | "ghost"
      | "danger"
      | "success"
      | "warning"
    >("primary");

  const [size, setSize] =
    useState<
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
    >("md");

  const [disabled, setDisabled] =
    useState(false);

  const [loading, setLoading] =
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
          id="button-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with the main Button
                properties and see the result
                immediately.
              </p>
            </div>

            <div className="playground-controls">

              {/* Variant */}

              <Select
                label="Variant"
                value={variant}
                onChange={(value) => {
                  setVariant(
                    value as
                      | "primary"
                      | "secondary"
                      | "outline"
                      | "ghost"
                      | "danger"
                      | "success"
                      | "warning"
                  );
                }}
                options={[
                  {
                    value: "primary",
                    label: "Primary",
                  },
                  {
                    value: "secondary",
                    label: "Secondary",
                  },
                  {
                    value: "outline",
                    label: "Outline",
                  },
                  {
                    value: "ghost",
                    label: "Ghost",
                  },
                  {
                    value: "danger",
                    label: "Danger",
                  },
                  {
                    value: "success",
                    label: "Success",
                  },
                  {
                    value: "warning",
                    label: "Warning",
                  },
                ]}
              />

              {/* Size */}

              <Select
                label="Size"
                value={size}
                onChange={(value) => {
                  setSize(
                    value as
                      | "xs"
                      | "sm"
                      | "md"
                      | "lg"
                      | "xl"
                  );
                }}
                options={[
                  {
                    value: "xs",
                    label: "Extra Small",
                  },
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
                  {
                    value: "xl",
                    label: "Extra Large",
                  },
                ]}
              />

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
              />

              {/* Loading */}

              <Checkbox
                label="Loading"
                checked={loading}
                onChange={setLoading}
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

              <Button
                variant={variant}
                size={size}
                disabled={disabled}
                loading={loading}
                fullWidth={fullWidth}
              >
                FlowForge Button
              </Button>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="button-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic Button with a label.
              </p>
            </div>

            <BasicButtonExample />

          </div>
        </Collapse>


        {/* ==================================================
            Variants
        ================================================== */}

        <Collapse
          id="button-variants"
          title="Variants"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Variants
              </h2>

              <p>
                Button supports multiple visual
                variants for different actions.
              </p>
            </div>

            <CollapseGroup
              activeIds={variantActiveIds}
              multiple
              onChange={setVariantActiveIds}
              focusId={
                innerFocusId &&
                variantIds.includes(innerFocusId)
                  ? innerFocusId
                  : undefined
              }
            >

              {/* Primary */}

              <Collapse
                id="button-variant-primary"
                title="Primary"
              >
                <div className="playground-section">

                  <Button variant="primary">
                    Primary Button
                  </Button>

                </div>
              </Collapse>


              {/* Secondary */}

              <Collapse
                id="button-variant-secondary"
                title="Secondary"
              >
                <div className="playground-section">

                  <Button variant="secondary">
                    Secondary Button
                  </Button>

                </div>
              </Collapse>


              {/* Outline */}

              <Collapse
                id="button-variant-outline"
                title="Outline"
              >
                <div className="playground-section">

                  <Button variant="outline">
                    Outline Button
                  </Button>

                </div>
              </Collapse>


              {/* Ghost */}

              <Collapse
                id="button-variant-ghost"
                title="Ghost"
              >
                <div className="playground-section">

                  <Button variant="ghost">
                    Ghost Button
                  </Button>

                </div>
              </Collapse>


              {/* Danger */}

              <Collapse
                id="button-variant-danger"
                title="Danger"
              >
                <div className="playground-section">

                  <Button variant="danger">
                    Delete
                  </Button>

                </div>
              </Collapse>


              {/* Success */}

              <Collapse
                id="button-variant-success"
                title="Success"
              >
                <div className="playground-section">

                  <Button variant="success">
                    Success
                  </Button>

                </div>
              </Collapse>


              {/* Warning */}

              <Collapse
                id="button-variant-warning"
                title="Warning"
              >
                <div className="playground-section">

                  <Button variant="warning">
                    Warning
                  </Button>

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="button-sizes"
          title="Sizes"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                Button supports five predefined
                sizes from extra small to extra large.
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

              {/* Extra Small */}

              <Collapse
                id="button-size-xs"
                title="Extra Small"
              >
                <div className="playground-section">

                  <Button size="xs">
                    Extra Small
                  </Button>

                </div>
              </Collapse>


              {/* Small */}

              <Collapse
                id="button-size-sm"
                title="Small"
              >
                <div className="playground-section">

                  <Button size="sm">
                    Small
                  </Button>

                </div>
              </Collapse>


              {/* Medium */}

              <Collapse
                id="button-size-md"
                title="Medium"
              >
                <div className="playground-section">

                  <Button size="md">
                    Medium
                  </Button>

                </div>
              </Collapse>


              {/* Large */}

              <Collapse
                id="button-size-lg"
                title="Large"
              >
                <div className="playground-section">

                  <Button size="lg">
                    Large
                  </Button>

                </div>
              </Collapse>


              {/* Extra Large */}

              <Collapse
                id="button-size-xl"
                title="Extra Large"
              >
                <div className="playground-section">

                  <Button size="xl">
                    Extra Large
                  </Button>

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="button-states"
          title="States"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Button states used in
                FlowForge applications.
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
                id="button-state-default"
                title="Default"
              >
                <div className="playground-section">

                  <Button>
                    Default Button
                  </Button>

                </div>
              </Collapse>


              {/* Disabled */}

              <Collapse
                id="button-state-disabled"
                title="Disabled"
              >
                <div className="playground-section">

                  <Button disabled>
                    Disabled Button
                  </Button>

                </div>
              </Collapse>


              {/* Loading */}

              <Collapse
                id="button-state-loading"
                title="Loading"
              >
                <div className="playground-section">

                  <Button loading>
                    Saving
                  </Button>

                </div>
              </Collapse>


              {/* Full Width */}

              <Collapse
                id="button-state-full-width"
                title="Full Width"
              >
                <div className="playground-section">

                  <Button fullWidth>
                    Full Width Button
                  </Button>

                </div>
              </Collapse>

            </CollapseGroup>

          </div>
        </Collapse>


        {/* ==================================================
            Icons
        ================================================== */}

        <Collapse
          id="button-icons"
          title="Icons"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Icons
              </h2>

              <p>
                Buttons can display FlowForge
                icons before or after their label.
              </p>
            </div>

            <div className="button-icons-demo">

                <Button
                    size="md"
                    leftIcon={
                    <Icon
                        name="add"
                        size={18}
                    />
                    }
                >
                    Add Item
                </Button>

                <Button
                    size="md"
                    rightIcon={
                    <Icon
                        name="search"
                        size={18}
                    />
                    }
                >
                    Search
                </Button>

                <Button
                    size="md"
                    leftIcon={
                    <Icon
                        name="check"
                        size={18}
                    />
                    }
                >
                    Save
                </Button>

                <Button
                    size="md"
                    leftIcon={
                    <Icon
                        name="remove"
                        size={18}
                    />
                    }
                    variant="danger"
                >
                    Remove
                </Button>

                </div>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}


/* ==========================================================
   Basic Button Example
========================================================== */

function BasicButtonExample() {
  return (
    <Button>
      Click Me
    </Button>
  );
}