import { useEffect, useState } from "react";

import {
  Button,
  Checkbox,
  Collapse,
  CollapseGroup,
  Select,
  Spinner,
} from "@/engine/components";

import "../Playground.css";

interface SpinnerDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function SpinnerDemo({
  focusId,
  innerFocusId,
}: SpinnerDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "spinner-interactive",
    "spinner-basic-usage",
    "spinner-sizes",
    "spinner-variants",
    "spinner-states",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId && sectionIds.includes(focusId)
        ? focusId
        : "spinner-interactive",
    ]);

  /* ==================================================
     Sizes Group
  ================================================== */

  const sizeIds = [
    "spinner-size-xs",
    "spinner-size-sm",
    "spinner-size-md",
    "spinner-size-lg",
    "spinner-size-xl",
  ];

  const [sizeActiveIds, setSizeActiveIds] =
    useState<string[]>([
      innerFocusId && sizeIds.includes(innerFocusId)
        ? innerFocusId
        : "spinner-size-md",
    ]);

  /* ==================================================
     Variants Group
  ================================================== */

  const variantIds = [
    "spinner-variant-primary",
    "spinner-variant-secondary",
    "spinner-variant-light",
  ];

  const [variantActiveIds, setVariantActiveIds] =
    useState<string[]>([
      innerFocusId && variantIds.includes(innerFocusId)
        ? innerFocusId
        : "spinner-variant-primary",
    ]);

  /* ==================================================
     States Group
  ================================================== */

  const stateIds = [
    "spinner-state-default",
    "spinner-state-label",
    "spinner-state-fullscreen",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId && stateIds.includes(innerFocusId)
        ? innerFocusId
        : "spinner-state-default",
    ]);

  /* ==================================================
     Interactive Playground
  ================================================== */

  const [size, setSize] =
    useState<"xs" | "sm" | "md" | "lg" | "xl">("md");

  const [variant, setVariant] =
    useState<"primary" | "secondary" | "light">("primary");

  const [showLabel, setShowLabel] =
    useState(false);

  const [showFullscreen, setShowFullscreen] =
    useState(false);

  /* ==================================================
     Fullscreen Demo
  ================================================== */

  const openFullscreenSpinner = () => {
    setShowFullscreen(true);
  };

  useEffect(() => {
    if (!showFullscreen) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowFullscreen(false);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showFullscreen]);

  return (
    <div className="playground-stack">
      <CollapseGroup
        activeIds={sectionActiveIds}
        multiple
        onChange={setSectionActiveIds}
        focusId={
          focusId && sectionIds.includes(focusId)
            ? focusId
            : undefined
        }
      >
        {/* ==================================================
            Interactive Playground
        ================================================== */}

        <Collapse
          id="spinner-interactive"
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

              {/* Variant */}

              <Select
                label="Variant"
                value={variant}
                onChange={(value) => {
                  setVariant(
                    value as
                      | "primary"
                      | "secondary"
                      | "light"
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
                    value: "light",
                    label: "Light",
                  },
                ]}
              />

              {/* Label */}

              <Checkbox
                label="Show Label"
                checked={showLabel}
                onChange={setShowLabel}
                alignWithField
              />
            </div>

            <div className="playground-preview">
              {variant === "light" ? (
                <div className="spinner-demo-dark">
                  <Spinner
                    size={size}
                    variant={variant}
                    label={
                      showLabel
                        ? "Loading..."
                        : undefined
                    }
                  />
                </div>
              ) : (
                <Spinner
                  size={size}
                  variant={variant}
                  label={
                    showLabel
                      ? "Loading..."
                      : undefined
                  }
                />
              )}
            </div>

            <div className="playground-actions">
              <Button
                variant="outline"
                onClick={openFullscreenSpinner}
              >
                Show Fullscreen Spinner
              </Button>
            </div>
          </div>
        </Collapse>

        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="spinner-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic Spinner with the default
                size and variant.
              </p>
            </div>

            <BasicSpinnerExample />
          </div>
        </Collapse>

        {/* ==================================================
            Sizes
        ================================================== */}

        <Collapse
          id="spinner-sizes"
          title="Sizes"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>
                Sizes
              </h2>

              <p>
                Spinner supports five predefined
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
              <Collapse
                id="spinner-size-xs"
                title="Extra Small"
              >
                <div className="playground-section">
                  <Spinner size="xs" />
                </div>
              </Collapse>

              <Collapse
                id="spinner-size-sm"
                title="Small"
              >
                <div className="playground-section">
                  <Spinner size="sm" />
                </div>
              </Collapse>

              <Collapse
                id="spinner-size-md"
                title="Medium"
              >
                <div className="playground-section">
                  <Spinner size="md" />
                </div>
              </Collapse>

              <Collapse
                id="spinner-size-lg"
                title="Large"
              >
                <div className="playground-section">
                  <Spinner size="lg" />
                </div>
              </Collapse>

              <Collapse
                id="spinner-size-xl"
                title="Extra Large"
              >
                <div className="playground-section">
                  <Spinner size="xl" />
                </div>
              </Collapse>
            </CollapseGroup>
          </div>
        </Collapse>

        {/* ==================================================
            Variants
        ================================================== */}

        <Collapse
          id="spinner-variants"
          title="Variants"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>
                Variants
              </h2>

              <p>
                Spinner supports three visual
                variants for different backgrounds
                and contexts.
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
              <Collapse
                id="spinner-variant-primary"
                title="Primary"
              >
                <div className="playground-section">
                  <Spinner variant="primary" />
                </div>
              </Collapse>

              <Collapse
                id="spinner-variant-secondary"
                title="Secondary"
              >
                <div className="playground-section">
                  <Spinner variant="secondary" />
                </div>
              </Collapse>

              <Collapse
                id="spinner-variant-light"
                title="Light"
              >
                <div className="playground-section">
                  <div className="spinner-demo-dark">
                    <Spinner variant="light" />
                  </div>
                </div>
              </Collapse>
            </CollapseGroup>
          </div>
        </Collapse>

        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="spinner-states"
          title="States"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>
                States
              </h2>

              <p>
                Common Spinner states used in
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
                id="spinner-state-default"
                title="Default"
              >
                <div className="playground-section">
                  <Spinner />
                </div>
              </Collapse>

              {/* With Label */}

              <Collapse
                id="spinner-state-label"
                title="With Label"
              >
                <div className="playground-section">
                  <Spinner
                    label="Loading content..."
                  />
                </div>
              </Collapse>

              {/* Fullscreen */}

              <Collapse
                id="spinner-state-fullscreen"
                title="Fullscreen"
              >
                <div className="playground-section">
                  <p className="playground-section__header">
                    The fullscreen state displays
                    the Spinner as a fullscreen
                    loading indicator.
                  </p>
                  <div className="playground-actions">
                    <Button
                      variant="outline"
                      onClick={openFullscreenSpinner}
                    >
                      Show Fullscreen Spinner
                    </Button>
                  </div>
                </div>
              </Collapse>
            </CollapseGroup>
          </div>
        </Collapse>
      </CollapseGroup>

      {/* ==================================================
          Fullscreen Spinner
      ================================================== */}

      {showFullscreen && (
        <Spinner
          size={size}
          variant={variant}
          fullscreen
          label="Loading..."
        />
      )}
    </div>
  );
}

/* ==========================================================
   Basic Spinner Example
========================================================== */

function BasicSpinnerExample() {
  return <Spinner />;
}