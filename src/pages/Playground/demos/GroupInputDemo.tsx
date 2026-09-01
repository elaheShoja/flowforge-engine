import {
  useRef,
  useState,
} from "react";

import {
  Checkbox,
  Collapse,
  CollapseGroup,
  Flag,
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
    "group-input-controlled",
    "group-input-states",
    "group-input-layouts",
    "group-input-action",
    "group-input-flex",
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
     Interactive Playground
  ================================================== */

  const [direction, setDirection] =
    useState<"horizontal" | "vertical">(
      "horizontal"
    );

  const [divider, setDivider] =
    useState(true);

  const [fullWidth, setFullWidth] =
    useState(true);

  const [disabled, setDisabled] =
    useState(false);

  const [withWrapper, setWithWrapper] =
    useState(true);

  const [interactiveValue, setInteractiveValue] =
    useState<Record<string, unknown>>({
      firstName: "Elahe",
      lastName: "Shoja",
      country: "ir",
    });

  /* ==================================================
     Controlled Select
  ================================================== */

  const [controlledCountry, setControlledCountry] =
    useState("de");

  const [controlledValue, setControlledValue] =
    useState<Record<string, unknown>>({
      country: "de",
      language: "de",
    });

  /* ==================================================
     Action Group
  ================================================== */

  const phoneInputRef =
    useRef<HTMLInputElement>(null);

  const countryCodes: Record<string, string> = {
    ir: "+98",
    de: "+49",
    az: "+994",
    tr: "+90",
  };

  const [actionCountry, setActionCountry] =
    useState("ir");

  const [actionValue, setActionValue] =
    useState<Record<string, unknown>>({
      country: "ir",
      phone: "",
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
    {
      value: "tr",
      label: "Turkey",
    },
  ];

  const languageOptions = [
    {
      value: "fa",
      label: "Persian",
    },
    {
      value: "de",
      label: "German",
    },
    {
      value: "en",
      label: "English",
    },
  ];

  /* ==================================================
     Action Country Options
  ================================================== */

  const actionCountryOptions = [
    {
      value: "ir",
      label: (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-xs)",
          }}
        >
          <Flag
            type="country"
            code="IR"
            size={16}
          />

          <span>Iran</span>
        </span>
      ),
    },
    {
      value: "de",
      label: (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-xs)",
          }}
        >
          <Flag
            type="country"
            code="DE"
            size={16}
          />

          <span>Germany</span>
        </span>
      ),
    },
    {
      value: "az",
      label: (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-xs)",
          }}
        >
          <Flag
            type="country"
            code="AZ"
            size={16}
          />

          <span>Azerbaijan</span>
        </span>
      ),
    },
    {
      value: "tr",
      label: (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-xs)",
          }}
        >
          <Flag
            type="country"
            code="TR"
            size={16}
          />

          <span>Turkey</span>
        </span>
      ),
    },
  ];

  /* ==================================================
     Action Country Change
  ================================================== */

  const handleActionCountryChange = (
    value: unknown
  ) => {
    const nextCountry =
      value as string;

    setActionCountry(nextCountry);

    setActionValue(
      (previous) => ({
        ...previous,
        country: nextCountry,
      })
    );

    /*
     * Focus the phone input after
     * selecting a country.
     */
    requestAnimationFrame(() => {
      phoneInputRef.current?.focus();
    });
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
          id="group-input-interactive"
          title="Interactive Playground"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Interactive Playground</h2>

              <p>
                Experiment with GroupInput layout,
                divider, width, wrapper, and disabled
                states.
              </p>
            </div>

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
                label="With Wrapper"
                checked={withWrapper}
                onChange={setWithWrapper}
              />

              {/* Disabled */}

              <Checkbox
                label="Disabled"
                checked={disabled}
                onChange={setDisabled}
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
                value={interactiveValue}
                onChange={setInteractiveValue}
                items={[
                  {
                    componentName: "Input",
                    name: "firstName",
                    placeholder: "First name",
                  },
                  {
                    componentName: "Input",
                    name: "lastName",
                    placeholder: "Last name",
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    options:
                      countryOptions,
                  },
                ]}
              />
            </div>

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {JSON.stringify(
                  interactiveValue
                )}
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
                Group multiple form components
                into a single logical value.
              </p>
            </div>

            <GroupInput
              name="person"
              label="Personal Information"
              items={[
                {
                  componentName: "Input",
                  name: "firstName",
                  placeholder: "First name",
                },
                {
                  componentName: "Input",
                  name: "lastName",
                  placeholder: "Last name",
                },
                {
                  componentName: "Select",
                  name: "country",
                  options:
                    countryOptions,
                },
              ]}
            />
          </div>
        </Collapse>

        {/* ==================================================
            Controlled Select
        ================================================== */}

        <Collapse
          id="group-input-controlled"
          title="Controlled Select"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Controlled Select</h2>

              <p>
                GroupInput can control values of
                different child components while
                exposing a single value object.
              </p>
            </div>

            <GroupInput
              name="preferences"
              label="Preferences"
              value={controlledValue}
              onChange={setControlledValue}
              items={[
                {
                  componentName: "Select",
                  name: "country",
                  value: controlledCountry,
                  options:
                    countryOptions,
                  onChange: (
                    value: unknown
                  ) => {
                    const nextCountry =
                      value as string;

                    setControlledCountry(
                      nextCountry
                    );
                  },
                },
                {
                  componentName: "Select",
                  name: "language",
                  options:
                    languageOptions,
                },
              ]}
            />

            <p className="playground-value">
              Selected country:{" "}
              <strong>
                {controlledCountry}
              </strong>
              {" — "}
              Value:{" "}
              <strong>
                {JSON.stringify(
                  controlledValue
                )}
              </strong>
            </p>
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
                Common GroupInput states used
                in FlowForge forms.
              </p>
            </div>

            <CollapseGroup
              activeIds={stateActiveIds}
              multiple
              onChange={setStateActiveIds}
              focusId={
                innerFocusId &&
                stateIds.includes(
                  innerFocusId
                )
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
                        placeholder:
                          "First name",
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        placeholder:
                          "Last name",
                      },
                      {
                        componentName: "Select",
                        name: "country",
                        options:
                          countryOptions,
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
                        value: "Elahe",
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        value: "Shoja",
                      },
                      {
                        componentName: "Select",
                        name: "country",
                        value: "de",
                        options:
                          countryOptions,
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
                    label="Required Information"
                    required
                    items={[
                      {
                        componentName: "Input",
                        name: "first",
                        placeholder:
                          "First name",
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        placeholder:
                          "Last name",
                      },
                      {
                        componentName: "Select",
                        name: "country",
                        options:
                          countryOptions,
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
                        placeholder:
                          "First name",
                      },
                      {
                        componentName: "Input",
                        name: "last",
                        placeholder:
                          "Last name",
                      },
                      {
                        componentName: "Select",
                        name: "country",
                        options:
                          countryOptions,
                      },
                    ]}
                  />
                </div>
              </Collapse>
            </CollapseGroup>
          </div>
        </Collapse>

        {/* ==================================================
            Flex
        ================================================== */}

        <Collapse
          id="group-input-flex"
          title="Flex"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Flex</h2>

              <p>
                Control the relative width of GroupInput
                items using the flex property.
              </p>
            </div>

            <div className="playground-stack--spaced " >
              <GroupInput
                name="flex"
                label="Flex Layout 1.2.1"
                direction="horizontal"
                items={[
                  {
                    componentName: "Input",
                    name: "firstName",
                    placeholder: "First name",
                    flex: 1,
                  },
                  {
                    componentName: "Input",
                    name: "lastName",
                    placeholder: "Last name",
                    flex: 2,
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    options: countryOptions,
                    flex: 1,
                  },
                ]}
              />

              <GroupInput
                name="flex"
                label="Flex Layout 1.1.2 "
                direction="horizontal"
                items={[
                  {
                    componentName: "Input",
                    name: "firstName",
                    placeholder: "First name",
                    flex: 1,
                  },
                  {
                    componentName: "Input",
                    name: "lastName",
                    placeholder: "Last name",
                    flex: 1,
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    options: countryOptions,
                    flex: 2,
                  },
                ]}
              />
            </div>
          </div>
        </Collapse>

        {/* ==================================================
            Vertical & Horizontal
        ================================================== */}

        <Collapse
          id="group-input-layouts"
          title="Vertical & Horizontal"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Vertical & Horizontal</h2>

              <p>
                GroupInput supports both compact
                horizontal groups and stacked
                vertical groups.
              </p>
            </div>

            <div className="playground-stack--spaced " >
              {/* Horizontal */}

              <GroupInput
                name="contact"
                label="Contact"
                direction="horizontal"
                items={[
                  {
                    componentName: "Input",
                    name: "firstName",
                    placeholder: "First name",
                  },
                  {
                    componentName: "Input",
                    name: "lastName",
                    placeholder: "Last name",
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    options: countryOptions,
                  },
                  {
                    componentName: "Radio",
                    name: "visibility",
                    label: "Public Profile",
                  },
                ]}
              />

              {/* Vertical */}

              <GroupInput
                name="address"
                label="Address"
                direction="vertical"
                items={[
                  {
                    componentName: "Input",
                    name: "street",
                    placeholder:
                      "Street address",
                  },
                  {
                    componentName: "Input",
                    name: "city",
                    placeholder: "City",
                  },
                  {
                    componentName: "Input",
                    name: "postalCode",
                    placeholder:
                      "Postal code",
                  },
                  {
                    componentName: "Radio",
                    name: "visibility",
                    label: "Public Profile",
                  },
                ]}
              />
            </div>
          </div>
        </Collapse>

        {/* ==================================================
            Action Group
        ================================================== */}

        <Collapse
          id="group-input-action"
          title="Action Group"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Action Group</h2>

              <p>
                Combine a compact country selector
                with a phone input. Selecting a
                country updates the phone prefix and
                automatically focuses the input.
              </p>
            </div>

            <div className="playground-preview">
              <GroupInput
                name="phone"
                direction="horizontal"
                fullWidth={false}
                value={actionValue}
                onChange={setActionValue}
                items={[
                  {
                    componentName: "Select",
                    name: "country",
                    value:
                      actionCountry,
                    options:
                      actionCountryOptions,
                    onChange:
                      handleActionCountryChange,
                  },
                  {
                    componentName: "Input",
                    name: "phone",
                    placeholder:
                      "Phone number",
                    prefix:
                      countryCodes[
                        actionCountry
                      ],
                    ref:
                      phoneInputRef,
                    flex: 2
                  },
                ]}
              />
            </div>

            <p className="playground-value">
              Current value:{" "}
              <strong>
                {JSON.stringify(
                  actionValue
                )}
              </strong>
            </p>
          </div>
        </Collapse>

        {/* ==================================================
            Examples
        ================================================== */}

        <Collapse
          id="group-input-examples"
          title="Examples"
        >
          <div className="playground-section">
            <div className="playground-section__header">
              <h2>Examples</h2>

              <p>
                GroupInput can combine many different
                FlowForge components in the same
                logical field.
              </p>
            </div>

            <div className="playground-stack--spaced " >

              {/* User Profile */}

              <GroupInput
                name="profile"
                label="User Profile"
                items={[
                  {
                    componentName: "Input",
                    name: "name",
                    placeholder: "Full name",
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    options:
                      countryOptions,
                  },
                  {
                    componentName: "Switch",
                    name: "active",
                  },
                ]}
              />

              {/* Notifications */}

              <GroupInput
                name="notifications"
                label="Notifications"
                items={[
                  {
                    componentName: "Checkbox",
                    name: "email",
                    label: "Email",
                  },
                  {
                    componentName: "Checkbox",
                    name: "sms",
                    label: "SMS",
                  },
                  {
                    componentName: "Switch",
                    name: "push",
                    label: "Push",
                  },
                ]}
              />

              {/* Shipping */}

              <GroupInput
                name="shipping"
                label="Shipping Address"
                direction="vertical"
                items={[
                  {
                    componentName: "Input",
                    name: "street",
                    placeholder: "Street address",
                  },
                  {
                    componentName: "Input",
                    name: "city",
                    placeholder: "City",
                  },
                  {
                    componentName: "Select",
                    name: "country",
                    options:
                      countryOptions,
                  },
                  {
                    componentName: "Input",
                    name: "postalCode",
                    placeholder:
                      "Postal code",
                  },
                ]}
              />

              {/* Account Settings */}

              <GroupInput
                name="account"
                label="Account Settings"
                items={[
                  {
                    componentName: "Input",
                    name: "username",
                    placeholder: "Username",
                  },
                  {
                    componentName: "Select",
                    name: "language",
                    options:
                      languageOptions,
                  },
                  {
                    componentName: "Radio",
                    name: "visibility",
                    label: "Public Profile",
                  },
                ]}
              />

              {/* Contact Preference */}

              <GroupInput
                name="contactPreference"
                label="Contact Preference"
                items={[
                  {
                    componentName: "Radio",
                    name: "preferred",
                    label: "Email",
                  },
                  {
                    componentName: "Radio",
                    name: "secondary",
                    label: "Phone",
                  },
                  {
                    componentName: "Switch",
                    name: "allowContact",
                    label: "Active",
                  },
                ]}
              />
              </div>
          </div>
        </Collapse>
      </CollapseGroup>
    </div>
  );
}