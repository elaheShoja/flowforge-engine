import { useState } from "react";

import {
  Collapse,
  CollapseGroup,
} from "@/engine/components";

interface CollapseGroupDemoProps {
  focusId?: string;
}

export default function CollapseGroupDemo({
  focusId,
}: CollapseGroupDemoProps) {
  /* =========================
     Section Group
  ========================= */

  const sectionIds = [
    "collapse-group-interactive",
    "collapse-group-default-active",
    "collapse-group-controlled",
    "collapse-group-multiple",
    "collapse-group-single",
    "collapse-group-empty",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId && sectionIds.includes(focusId)
        ? focusId
        : "collapse-group-interactive",
    ]);

  /* =========================
     Interactive Playground
  ========================= */

  const interactiveIds = [
    "collapse-group-interactive-one",
    "collapse-group-interactive-two",
    "collapse-group-interactive-three",
  ];

  const [
    interactiveActiveIds,
    setInteractiveActiveIds,
  ] = useState<string[]>([
    "collapse-group-interactive-one",
    "collapse-group-interactive-two",
  ]);

  const [
    interactiveMultiple,
    setInteractiveMultiple,
  ] = useState(true);

  /* =========================
     Controlled Group
  ========================= */

  const [controlledIds, setControlledIds] =
    useState<string[]>([
      "collapse-group-controlled-one",
    ]);

  /* =========================
     Interactive Helpers
  ========================= */

  const handleInteractiveOpenAll = () => {
    setInteractiveActiveIds(
      interactiveMultiple
        ? [...interactiveIds]
        : [interactiveIds[0]]
    );
  };

  const handleInteractiveCloseAll = () => {
    setInteractiveActiveIds([]);
  };

  const handleMultipleChange = (
    enabled: boolean
  ) => {
    setInteractiveMultiple(enabled);

    if (!enabled) {
      setInteractiveActiveIds(
        (currentIds) =>
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
          id="collapse-group-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Interactive Playground
              </h2>

              <p>
                Experiment with CollapseGroup and
                control how multiple Collapse items
                behave together.
              </p>
            </div>

            <div className="playground-controls">

              {/* Multiple Open */}

              <label className="playground-checkbox">
                <input
                  type="checkbox"
                  checked={interactiveMultiple}
                  onChange={(event) =>
                    handleMultipleChange(
                      event.target.checked
                    )
                  }
                />

                Multiple Open
              </label>

              {/* Open All */}

              <button
                type="button"
                onClick={
                  handleInteractiveOpenAll
                }
              >
                Open All
              </button>

              {/* Close All */}

              <button
                type="button"
                onClick={
                  handleInteractiveCloseAll
                }
              >
                Close All
              </button>

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
                  id="collapse-group-interactive-one"
                  title="Interactive Item One"
                >
                  <p>
                    This is the first Collapse
                    managed by the group.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-interactive-two"
                  title="Interactive Item Two"
                >
                  <p>
                    This is the second Collapse
                    managed by the group.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-interactive-three"
                  title="Interactive Item Three"
                >
                  <p>
                    This is the third Collapse
                    managed by the group.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Default Active Items
        ================================================== */}

        <Collapse
          id="collapse-group-default-active"
          title="Default Active Items"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Default Active Items
              </h2>

              <p>
                Use defaultActiveIds to define
                which Collapse items are
                initially open.
              </p>
            </div>

            <div className="playground-preview">

              <CollapseGroup
                defaultActiveIds={[
                  "collapse-group-default-one",
                  "collapse-group-default-two",
                ]}
                multiple
              >

                <Collapse
                  id="collapse-group-default-one"
                  title="Initially Open One"
                >
                  <p>
                    This item is open when the
                    group is initially rendered.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-default-two"
                  title="Initially Open Two"
                >
                  <p>
                    This item is also initially
                    open because multiple mode
                    is enabled.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-default-three"
                  title="Initially Closed"
                >
                  <p>
                    This item starts closed.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Controlled Group
        ================================================== */}

        <Collapse
          id="collapse-group-controlled"
          title="Controlled Group"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Controlled Group
              </h2>

              <p>
                The active Collapse items can
                be controlled externally using
                React state.
              </p>
            </div>

            <div className="playground-controls">

              <button
                type="button"
                onClick={() =>
                  setControlledIds([
                    "collapse-group-controlled-one",
                  ])
                }
              >
                Open First
              </button>

              <button
                type="button"
                onClick={() =>
                  setControlledIds([
                    "collapse-group-controlled-two",
                  ])
                }
              >
                Open Second
              </button>

              <button
                type="button"
                onClick={() =>
                  setControlledIds([
                    "collapse-group-controlled-three",
                  ])
                }
              >
                Open Third
              </button>

              <button
                type="button"
                onClick={() =>
                  setControlledIds([])
                }
              >
                Close All
              </button>

            </div>

            <div className="playground-preview">

              <CollapseGroup
                activeIds={controlledIds}
                multiple={false}
                onChange={
                  setControlledIds
                }
              >

                <Collapse
                  id="collapse-group-controlled-one"
                  title="Controlled Item One"
                >
                  <p>
                    The first Collapse is
                    controlled by external
                    React state.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-controlled-two"
                  title="Controlled Item Two"
                >
                  <p>
                    The second Collapse is
                    controlled by external
                    React state.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-controlled-three"
                  title="Controlled Item Three"
                >
                  <p>
                    The third Collapse is
                    controlled by external
                    React state.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Multiple Open
        ================================================== */}

        <Collapse
          id="collapse-group-multiple"
          title="Multiple Open"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Multiple Open
              </h2>

              <p>
                When multiple is enabled, several
                Collapse items can remain open at
                the same time.
              </p>
            </div>

            <div className="playground-preview">

              <CollapseGroup
                defaultActiveIds={[
                  "collapse-group-multiple-one",
                  "collapse-group-multiple-two",
                ]}
                multiple
              >

                <Collapse
                  id="collapse-group-multiple-one"
                  title="First Item"
                >
                  <p>
                    This item can remain open
                    together with other items.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-multiple-two"
                  title="Second Item"
                >
                  <p>
                    Multiple items can stay open
                    at the same time.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-multiple-three"
                  title="Third Item"
                >
                  <p>
                    Try opening this item while
                    the others are still open.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Single Open
        ================================================== */}

        <Collapse
          id="collapse-group-single"
          title="Single Open"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                Single Open
              </h2>

              <p>
                When multiple is disabled,
                opening one item automatically
                closes the others.
              </p>
            </div>

            <div className="playground-preview">

              <CollapseGroup
                defaultActiveIds={[
                  "collapse-group-single-one",
                ]}
                multiple={false}
              >

                <Collapse
                  id="collapse-group-single-one"
                  title="First Item"
                >
                  <p>
                    Only one item can remain open.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-single-two"
                  title="Second Item"
                >
                  <p>
                    Opening this item closes
                    the first item.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-single-three"
                  title="Third Item"
                >
                  <p>
                    The group keeps only one
                    item open.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>


        {/* ==================================================
            Empty State
        ================================================== */}

        <Collapse
          id="collapse-group-empty"
          title="No Active Items"
        >
          <div className="playground-section">

            <div className="playground-section__header">
              <h2>
                No Active Items
              </h2>

              <p>
                A CollapseGroup can start with
                all items closed.
              </p>
            </div>

            <div className="playground-preview">

              <CollapseGroup
                defaultActiveIds={[]}
                multiple
              >

                <Collapse
                  id="collapse-group-empty-one"
                  title="First Item"
                >
                  <p>
                    This item starts closed.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-empty-two"
                  title="Second Item"
                >
                  <p>
                    This item also starts closed.
                  </p>
                </Collapse>

                <Collapse
                  id="collapse-group-empty-three"
                  title="Third Item"
                >
                  <p>
                    All items in this group start
                    closed.
                  </p>
                </Collapse>

              </CollapseGroup>

            </div>

          </div>
        </Collapse>

      </CollapseGroup>

    </div>
  );
}