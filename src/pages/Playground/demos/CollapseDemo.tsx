import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
} from "@/engine/components";

import "../Playground.css";

interface CollapseDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function CollapseDemo({
  focusId,
}: CollapseDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "collapse-interactive",
    "collapse-basic-usage",
    "collapse-controlled",
    "collapse-default-open",
    "collapse-disabled",
    "collapse-custom-icons",
    "collapse-end-content",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId && sectionIds.includes(focusId)
        ? focusId
        : "collapse-interactive",
    ]);

  /* ==================================================
     Interactive Playground State
  ================================================== */

  const [
    interactiveActiveIds,
    setInteractiveActiveIds,
  ] = useState<string[]>([
    "collapse-interactive-preview-1",
  ]);

  const [
    interactiveMultiple,
    setInteractiveMultiple,
  ] = useState(true);

  /* ==================================================
     Controlled Collapse State
  ================================================== */

  const [controlledOpen, setControlledOpen] =
    useState(false);

  /* ==================================================
     Interactive Helpers
  ================================================== */

  const handleInteractiveOpenChange = (
    enabled: boolean
  ) => {
    const id =
      "collapse-interactive-preview-1";

    setInteractiveActiveIds((currentIds) => {
      if (enabled) {
        if (currentIds.includes(id)) {
          return currentIds;
        }

        return interactiveMultiple
          ? [...currentIds, id]
          : [id];
      }

      return currentIds.filter(
        (currentId) => currentId !== id
      );
    });
  };

  const handleMultipleChange = (
    enabled: boolean
  ) => {
    setInteractiveMultiple(enabled);

    if (!enabled) {
      setInteractiveActiveIds((currentIds) =>
        currentIds.length > 0
          ? [currentIds[0]]
          : []
      );
    }
  };

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
          id="collapse-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-controls">

              <Checkbox
                label="Open"
                checked={interactiveActiveIds.includes(
                  "collapse-interactive-preview-1"
                )}
                onChange={
                  handleInteractiveOpenChange
                }
              />

              <Checkbox
                label="Multiple Open"
                checked={interactiveMultiple}
                onChange={
                  handleMultipleChange
                }
              />

            </div>

            <div className="playground-preview">

              <CollapseGroup
                activeIds={
                  interactiveActiveIds
                }
                multiple={
                  interactiveMultiple
                }
                onChange={
                  setInteractiveActiveIds
                }
              >

                <Collapse
                  id="collapse-interactive-preview-1"
                  title="Interactive Collapse 1"
                >
                  <p>
                    This is the first
                    interactive Collapse.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-interactive-preview-2"
                  title="Interactive Collapse 2"
                >
                  <p>
                    This is the second
                    interactive Collapse.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-interactive-preview-3"
                  title="Interactive Collapse 3"
                >
                  <p>
                    This is the third
                    interactive Collapse.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="collapse-basic-usage"
          title="Basic Usage"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Basic Usage
              </h2>

              <p>
                A basic Collapse with a
                title and content.
              </p>
            </div>

            <Collapse
              id="collapse-basic-example"
              title="Basic Collapse"
              defaultOpen
            >
              <p>
                This is the content of a
                basic Collapse component.
              </p>
            </Collapse>

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Collapse
        ================================================== */}

        <Collapse
          id="collapse-controlled"
          title="Controlled Collapse"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Collapse
              </h2>

              <p>
                Collapse can be controlled
                externally using the open
                property.
              </p>
            </div>

            <div className="playground-controls">

              <Checkbox
                label="Open Collapse"
                checked={controlledOpen}
                onChange={setControlledOpen}
              />

            </div>

            <Collapse
              id="collapse-controlled-example"
              title="Controlled Collapse"
              open={controlledOpen}
              onOpenChange={(_, open) =>
                setControlledOpen(open)
              }
            >
              <p>
                The open state of this
                Collapse is controlled by
                React state.
              </p>
            </Collapse>

          </div>
        </Collapse>


        {/* ==================================================
            Default Open
        ================================================== */}

        <Collapse
          id="collapse-default-open"
          title="Default Open"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Default Open
              </h2>

              <p>
                Use defaultOpen to initially
                display the Collapse content.
              </p>
            </div>

            <Collapse
              id="collapse-default-open-example"
              title="Initially Open"
              defaultOpen
            >
              <p>
                This Collapse is open when
                the component is initially
                rendered.
              </p>
            </Collapse>

          </div>
        </Collapse>


        {/* ==================================================
            Disabled
        ================================================== */}

        <Collapse
          id="collapse-disabled"
          title="Disabled"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Disabled
              </h2>

              <p>
                Disabled Collapse components
                cannot be opened or closed by
                the user.
              </p>
            </div>

            <Collapse
              id="collapse-disabled-example"
              title="Disabled Collapse"
              disabled
            >
              <p>
                This content cannot be opened
                through user interaction.
              </p>
            </Collapse>

          </div>
        </Collapse>


        {/* ==================================================
            Custom Icons
        ================================================== */}

        <Collapse
          id="collapse-custom-icons"
          title="Custom Icons"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Custom Icons
              </h2>

              <p>
                Replace the default indicator
                with custom open and close
                icons.
              </p>
            </div>

            <Collapse
              id="collapse-custom-icons-example"
              title="Custom Icons"
              openIcon={
                <span aria-hidden="true">
                  −
                </span>
              }
              closeIcon={
                <span aria-hidden="true">
                  +
                </span>
              }
            >
              <p>
                This Collapse uses custom
                indicators for its open and
                closed states.
              </p>
            </Collapse>

          </div>
        </Collapse>


        {/* ==================================================
            End Content
        ================================================== */}

        <Collapse
          id="collapse-end-content"
          title="End Content"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                End Content
              </h2>

              <p>
                Use endContent to display
                additional content on the
                right side of the header.
              </p>
            </div>

            <Collapse
              id="collapse-end-content-example"
              title="Additional Content"
              endContent={
                <span>
                  Optional
                </span>
              }
            >
              <p>
                Additional content can be
                displayed at the end of the
                Collapse header.
              </p>
            </Collapse>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}