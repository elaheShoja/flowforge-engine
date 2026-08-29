import { useState } from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  GroupInput,
  Select,
} from "@/engine/components";

import "../Playground.css";

interface GroupInputDemoProps {
  focusId?: string;
  innerFocusId?: string;
}

export default function GroupInputDemo({
  focusId,
  innerFocusId,
}: GroupInputDemoProps) {
  /* ==================================================
     Section IDs
  ================================================== */

  const sectionIds = [
    "group-input-interactive",
    "group-input-basic",
    "group-input-horizontal",
    "group-input-vertical",
    "group-input-divider",
    "group-input-wrappers",
    "group-input-mixed",
    "group-input-states",
  ];

  const [sectionActiveIds, setSectionActiveIds] =
    useState<string[]>([
      focusId &&
      sectionIds.includes(focusId)
        ? focusId
        : "group-input-interactive",
    ]);

  /* ==================================================
     State IDs
  ================================================== */

  const stateIds = [
    "group-input-states-default",
    "group-input-states-disabled",
    "group-input-states-required",
    "group-input-states-error",
  ];

  const [stateActiveIds, setStateActiveIds] =
    useState<string[]>([
      innerFocusId &&
      stateIds.includes(innerFocusId)
        ? innerFocusId
        : "group-input-states-default",
    ]);

  /* ==================================================
     Interactive State
  ================================================== */

  const [direction, setDirection] =
    useState<"horizontal" | "vertical">(
      "horizontal"
    );

  const [divider, setDivider] =
    useState(false);

  const [fullWidth, setFullWidth] =
    useState(true);

  const [disabled, setDisabled] =
    useState(false);

  const [withWrapper, setWithWrapper] =
    useState(true);

  const [itemWithWrapper, setItemWithWrapper] =
    useState(false);

  const [value, setValue] = useState<
    Record<string, unknown>
  >({
    firstName: "Elahe",
    lastName: "Shoja",
    country: "ir",
  });

  /* ==================================================
     Options
  ================================================== */

  const countryOptions = [
    {
      value: "ir",
      label: "Iran",
    },
    {
      value: "de",
      label: "Germany",
    },
    {
      value: "az",
      label: "Azerbaijan",
    },
  ];

  /* ==================================================
     Shared Example
  ================================================== */

  const basicItems = [
    {
      componentName: "Input",
      name: "firstName",
      label: "First Name",
      placeholder: "First name",
    },
    {
      componentName: "Input",
      name: "lastName",
      label: "Last Name",
      placeholder: "Last name",
    },
  ];

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
          id="group-input-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">
            <div className="playground-controls">
              {/* Direction */}

              <div className="playground-control">
                <Select
                  label="Direction"
                  value={direction}
                  onChange={(value) =>
                    setDirection(
                      value as
                        | "horizontal"
                        | "vertical"
                    )
                  }
                  options={[
                    {
                      value: "horizontal",
                      label: "Horizontal",
                    },
                    {
                      value: "vertical",
                      label: "Vertical",
                    },
                  ]}
                />
              </div>

              {/* Divider */}

              <Checkbox
                label="Divider"
                checked={divider}
                onChange={setDivider}
                alignWithField
              />

              {/* Full Width */}

              <Checkbox
                label="Full Width"
                checked={fullWidth}
                onChange={setFullWidth}
                alignWithField
              />

              {/* Group Wrapper */}

              <Checkbox
                label="Group Wrapper"
                checked={withWrapper}
                onChange={setWithWrapper}
                alignWithField
              />

              {/* Item Wrappers */}

              <Checkbox
                label="Item Wrappers"
                checked={itemWithWrapper}
                onChange={setItemWithWrapper}
                alignWithField
              />

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
                alignWithField
              />
            </div>

            <div className="playground-preview">
              <GroupInput
                name="person"
                label="Person"
                helperText="Grouped form fields"
                direction={direction}
                divider={divider}
                fullWidth={fullWidth}
                disabled={disabled}
                withWrapper={withWrapper}
                value={value}
                onChange={setValue}
                items={[
                  {
                    componentName: "Input",
                    name: "firstName",
                    label: "First Name",
                    placeholder: "First name",
                    withWrapper:
                      itemWithWrapper,
                  },
                  {
                    componentName: "Input",
                    name: "lastName",
                    label: "Last Name",
                    placeholder: "Last name",
                    withWrapper:
                      itemWithWrapper,
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    label: "Country",
                    options:
                      countryOptions,
                    withWrapper:
                      itemWithWrapper,
                  },
                ]}
              />
            </div>

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {JSON.stringify(value)}
              </strong>
            </p>
          </div>
        </Collapse>

        {/* ==================================================
            Basic Usage
        ================================================== */}

        <Collapse
          id="group-input-basic"
          title="Basic Usage"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Basic Usage</h2>

              <p>
                Group multiple FlowForge form
                components into a single logical
                field group.
              </p>
            </div>

            <GroupInput
              name="person"
              label="Person"
              items={basicItems}
            />
          </div>
        </Collapse>

        {/* ==================================================
            Horizontal Layout
        ================================================== */}

        <Collapse
          id="group-input-horizontal"
          title="Horizontal Layout"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Horizontal Layout</h2>

              <p>
                GroupInput uses horizontal layout
                by default.
              </p>
            </div>

            <GroupInput
              name="horizontal"
              label="Contact"
              direction="horizontal"
              items={[
                {
                  componentName: "Input",
                  name: "firstName",
                  label: "First Name",
                  placeholder: "First name",
                  withWrapper: false,
                },
                {
                  componentName: "Input",
                  name: "lastName",
                  label: "Last Name",
                  placeholder: "Last name",
                  withWrapper: false,
                },
              ]}
            />
          </div>
        </Collapse>

        {/* ==================================================
            Vertical Layout
        ================================================== */}

        <Collapse
          id="group-input-vertical"
          title="Vertical Layout"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Vertical Layout</h2>

              <p>
                Set direction to vertical when
                grouped fields should be stacked.
              </p>
            </div>

            <GroupInput
              name="vertical"
              label="Address"
              direction="vertical"
              items={[
                {
                  componentName: "Input",
                  name: "street",
                  label: "Street",
                  placeholder: "Street",
                  withWrapper: false,
                },
                {
                  componentName: "Input",
                  name: "city",
                  label: "City",
                  placeholder: "City",
                  withWrapper: false,
                },
                {
                  componentName: "Input",
                  name: "postalCode",
                  label: "Postal Code",
                  placeholder: "Postal code",
                  withWrapper: false,
                },
              ]}
            />
          </div>
        </Collapse>

        {/* ==================================================
            Divider
        ================================================== */}

        <Collapse
          id="group-input-divider"
          title="Divider"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Divider</h2>

              <p>
                Use the divider property to
                visually separate grouped items.
              </p>
            </div>

            <div className="ff-playground-demo__grid">
              <GroupInput
                name="withoutDivider"
                label="Without Divider"
                divider={false}
                items={[
                  {
                    componentName: "Input",
                    name: "first",
                    label: "First",
                    withWrapper: false,
                  },
                  {
                    componentName: "Input",
                    name: "second",
                    label: "Second",
                    withWrapper: false,
                  },
                ]}
              />

              <GroupInput
                name="withDivider"
                label="With Divider"
                divider
                items={[
                  {
                    componentName: "Input",
                    name: "first",
                    label: "First",
                    withWrapper: false,
                  },
                  {
                    componentName: "Input",
                    name: "second",
                    label: "Second",
                    withWrapper: false,
                  },
                ]}
              />
            </div>
          </div>
        </Collapse>

        {/* ==================================================
            Wrappers
        ================================================== */}

        <Collapse
          id="group-input-wrappers"
          title="Field Wrappers"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Field Wrappers</h2>

              <p>
                GroupInput can render its own
                FieldWrapper independently from
                the wrappers of its child
                components.
              </p>
            </div>

            <div className="ff-playground-demo__grid">
              <GroupInput
                name="groupWrapper"
                label="Group Wrapper"
                withWrapper
                items={[
                  {
                    componentName: "Input",
                    name: "first",
                    label: "First",
                    withWrapper: false,
                  },
                  {
                    componentName: "Input",
                    name: "second",
                    label: "Second",
                    withWrapper: false,
                  },
                ]}
              />

              <GroupInput
                name="noGroupWrapper"
                withWrapper={false}
                items={[
                  {
                    componentName: "Input",
                    name: "first",
                    label: "First",
                    withWrapper: false,
                  },
                  {
                    componentName: "Input",
                    name: "second",
                    label: "Second",
                    withWrapper: false,
                  },
                ]}
              />
            </div>
          </div>
        </Collapse>

        {/* ==================================================
            Mixed Components
        ================================================== */}

        <Collapse
          id="group-input-mixed"
          title="Mixed Components"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Mixed Components</h2>

              <p>
                GroupInput can combine different
                FlowForge components without
                defining component-specific logic.
              </p>
            </div>

            <GroupInput
              name="mixed"
              label="User Preferences"
              direction="vertical"
              items={[
                {
                  componentName: "Input",
                  name: "username",
                  label: "Username",
                  placeholder: "Username",
                  withWrapper: false,
                },
                {
                  componentName: "Select",
                  name: "country",
                  label: "Country",
                  options:
                    countryOptions,
                  withWrapper: false,
                },
                {
                  componentName: "Checkbox",
                  name: "newsletter",
                  label: "Subscribe to newsletter",
                  withWrapper: false,
                },
                {
                  componentName: "Switch",
                  name: "notifications",
                  label: "Enable notifications",
                  withWrapper: false,
                },
              ]}
            />
          </div>
        </Collapse>

        {/* ==================================================
            States
        ================================================== */}

        <Collapse
          id="group-input-states"
          title="States"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>States</h2>

              <p>
                Common GroupInput states used in
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
                id="group-input-states-default"
                title="Default"
              >
                <div className="playground-section">
                  <GroupInput
                    name="default"
                    label="Default"
                    items={[
                      {
                        componentName: "Input",
                        name: "first",
                        label: "First Name",
                        withWrapper: false,
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        label: "Last Name",
                        withWrapper: false,
                      },
                    ]}
                  />
                </div>
              </Collapse>

              {/* Disabled */}

              <Collapse
                id="group-input-states-disabled"
                title="Disabled"
              >
                <div className="playground-section">
                  <GroupInput
                    name="disabled"
                    label="Disabled"
                    disabled
                    items={[
                      {
                        componentName: "Input",
                        name: "first",
                        label: "First Name",
                        value: "Elahe",
                        withWrapper: false,
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        label: "Last Name",
                        value: "Shoja",
                        withWrapper: false,
                      },
                    ]}
                  />
                </div>
              </Collapse>

              {/* Required */}

              <Collapse
                id="group-input-states-required"
                title="Required"
              >
                <div className="playground-section">
                  <GroupInput
                    name="required"
                    label="Required"
                    required
                    items={[
                      {
                        componentName: "Input",
                        name: "first",
                        label: "First Name",
                        withWrapper: false,
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        label: "Last Name",
                        withWrapper: false,
                      },
                    ]}
                  />
                </div>
              </Collapse>

              {/* Error */}

              <Collapse
                id="group-input-states-error"
                title="Error"
              >
                <div className="playground-section">
                  <GroupInput
                    name="error"
                    label="User"
                    error="Please check the grouped fields."
                    items={[
                      {
                        componentName: "Input",
                        name: "first",
                        label: "First Name",
                        withWrapper: false,
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        label: "Last Name",
                        withWrapper: false,
                      },
                    ]}
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