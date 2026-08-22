# Switch

The `Switch` component is a flexible and reusable boolean control designed for FlowForge forms and business applications.

It is used when a user needs to enable or disable a setting or feature.

The component supports labels, descriptions, controlled and uncontrolled usage, validation feedback, sizing, disabled and required states, full-width layouts, form-field alignment, and field wrapper integration.

---

## Overview

`Switch` is one of the core form components of FlowForge.

Unlike a Radio, which is used to select one option from a group, a Switch represents a single boolean value that can be turned on or off.

### Key Features

- Labels
- Descriptions
- Controlled usage
- Uncontrolled usage
- Checked state
- Default checked state
- Required state
- Disabled state
- Validation errors
- Small, medium, and large sizes
- Full-width layout
- Form-field alignment
- Field wrapper integration
- React state integration
- Native checkbox accessibility behavior

---

## Import

```tsx
import { Switch } from "@/engine/components";
```

---

## Basic Usage

The simplest way to use `Switch` is to provide a label.

```tsx
<Switch
  label="Enable notifications"
/>
```

A description can be provided to give the user additional information.

```tsx
<Switch
  label="Enable notifications"
  description="Receive notifications about account activity."
/>
```

[Open Basic Usage in Playground](/playground/switch?focusId=switch-basic-usage)

---

## Controlled Switch

`Switch` supports the standard React controlled component pattern.

```tsx
import { useState } from "react";
import { Switch } from "@/engine/components";

export default function Example() {
  const [enabled, setEnabled] =
    useState(false);

  return (
    <Switch
      label="Enable notifications"
      checked={enabled}
      onChange={setEnabled}
    />
  );
}
```

The `checked` value is controlled by React state.

The `onChange` callback receives the new boolean value.

This makes the Switch suitable for forms and application settings where the state is managed by a parent component.

[Open Controlled Switch in Playground](/playground/switch?focusId=switch-controlled)

---

## Uncontrolled Switch

`Switch` can also be used without React state.

Use `defaultChecked` to define the initial state.

```tsx
<Switch
  label="Enable notifications"
  defaultChecked
/>
```

The Switch manages its own internal state after initialization.

[Open Basic Usage in Playground](/playground/switch?focusId=switch-basic-usage)

---

## Checked State

The `checked` property controls whether the Switch is enabled.

```tsx
<Switch
  label="Dark mode"
  checked
/>
```

For controlled usage:

```tsx
const [enabled, setEnabled] =
  useState(true);

<Switch
  label="Dark mode"
  checked={enabled}
  onChange={setEnabled}
/>
```

When `checked` is `true`, the Switch is displayed in its enabled state.

---

## Sizes

The component supports three predefined sizes:

| Size | Description |
| --- | --- |
| `sm` | Small Switch |
| `md` | Medium Switch |
| `lg` | Large Switch |

### Small

```tsx
<Switch
  label="Small Switch"
  size="sm"
/>
```

### Medium

```tsx
<Switch
  label="Medium Switch"
  size="md"
/>
```

### Large

```tsx
<Switch
  label="Large Switch"
  size="lg"
/>
```

[Open Switch Sizes in Playground](/playground/switch?focusId=switch-sizes)

---

## Required State

Use `required` when enabling or selecting the Switch is required as part of a form.

```tsx
<Switch
  label="Accept terms"
  required
/>
```

The required state is passed to the native input and can be used by higher-level form validation.

[Open Required State in Playground](/playground/switch?focusId=switch-states&innerFocusId=switch-states-required)

---

## Disabled State

Use `disabled` when the user should not be able to change the Switch.

```tsx
<Switch
  label="Automatic updates"
  checked
  disabled
/>
```

Disabled Switches cannot be changed by the user.

[Open Disabled State in Playground](/playground/switch?focusId=switch-states&innerFocusId=switch-states-disabled)

---

## Validation Error

The `error` property displays validation feedback associated with the Switch.

```tsx
<Switch
  label="Accept terms"
  error="You must accept the terms."
/>
```

The Switch is responsible for displaying the visual error state.

Higher-level form logic can provide the validation result and error message when the component is used inside a generated form.

[Open Error State in Playground](/playground/switch?focusId=switch-states&innerFocusId=switch-states-error)

---

## Full Width

Use `fullWidth` when the Switch should occupy the available horizontal space of its parent container.

```tsx
<Switch
  label="Enable automatic synchronization"
  fullWidth
/>
```

The default value of `fullWidth` is `false`.

[Open Full Width in Playground](/playground/switch?focusId=switch-interactive)

---

## Form Alignment

The `alignWithField` property is designed for form layouts where a Switch should align with the control area of another form field.

This is particularly useful when different field types are placed in columns.

The default value of `alignWithField` is `false`.

```tsx
<div className="form-grid">

  <Input
    label="First Name"
    placeholder="Enter first name"
  />

  <Switch
    label="Active"
    description="User can access the application."
    alignWithField
  />

</div>
```

When `alignWithField` is enabled, the Switch aligns its content with the field control area rather than starting at the same vertical position as the field label.

This allows mixed form fields to maintain a consistent visual alignment.

### Two-column Form Example

```tsx
<div className="form-grid">

  <div>
    <Input
      label="First Name"
      placeholder="Enter first name"
    />

    <Input
      label="Last Name"
      placeholder="Enter last name"
    />

    <Input
      label="Email"
      placeholder="Enter email"
    />
  </div>

  <div>
    <Switch
      label="Active"
      description="User can access the application."
      alignWithField
    />

    <Switch
      label="Verified"
      description="The user's email address has been verified."
      alignWithField
    />

    <Switch
      label="Notifications"
      description="User can receive application notifications."
      alignWithField
    />
  </div>

</div>
```

[Open Form Alignment in Playground](/playground/switch?focusId=switch-form-alignment)

---

## Controlling Form Alignment

The `alignWithField` property can be controlled using React state.

```tsx
import { useState } from "react";
import { Checkbox, Switch } from "@/engine/components";

export default function Example() {
  const [alignWithField, setAlignWithField] =
    useState(false);

  return (
    <>
      <Checkbox
        label="Align With Field"
        checked={alignWithField}
        onChange={setAlignWithField}
      />

      <Switch
        label="Active"
        description="User can access the application."
        alignWithField={alignWithField}
      />
    </>
  );
}
```

The default value is `false`.

Set `alignWithField` to `true` when the Switch should align with the control area of another form field.

This allows the same form layout to switch between aligned and non-aligned states.

[Open Form Alignment in Playground](/playground/switch?focusId=switch-form-alignment)

---

## Description

Use `description` to provide supporting information below the Switch label.

```tsx
<Switch
  label="Automatic updates"
  description="Install available updates automatically."
/>
```

Descriptions are useful when the meaning or consequences of enabling a setting need additional explanation.

---

## Without Field Wrapper

When the Switch is used in a context where the surrounding UI already manages the field layout, the field wrapper can be disabled using `withWrapper`.

```tsx
<Switch
  label="Active"
  withWrapper={false}
/>
```

This is useful for compact control panels and custom layouts.

---

## Switch States

The component supports several common states:

- Default
- Checked
- Required
- Disabled
- Error
- Full Width

Layout features include:

- Form Alignment

[Open Switch States in Playground](/playground/switch?focusId=switch-states)

---

## API

### SwitchProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | Label displayed for the Switch |
| `description` | `ReactNode` | — | Supporting text displayed with the Switch |
| `checked` | `boolean` | — | Controls whether the Switch is enabled |
| `defaultChecked` | `boolean` | `false` | Initial enabled state for uncontrolled usage |
| `onChange` | `(checked: boolean) => void` | — | Callback triggered when the enabled state changes |
| `helperText` | `string` | — | Helper text displayed below the field |
| `error` | `string` | — | Validation error message |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the Switch size |
| `fullWidth` | `boolean` | `false` | Makes the Switch occupy the available width |
| `alignWithField` | `boolean` | `false` | Aligns the Switch with the control area of another form field |
| `required` | `boolean` | `false` | Marks the Switch as required |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `tooltip` | `ReactNode` | — | Optional tooltip displayed by FieldWrapper |
| `withWrapper` | `boolean` | `true` | Enables or disables the FieldWrapper |
| `className` | `string` | `""` | Additional class name for the Switch root |

---

## Accessibility

`Switch` uses a native HTML checkbox input internally.

This provides standard keyboard interaction and accessibility behavior.

Use meaningful labels so that the purpose of the Switch is clear to users and assistive technologies.

For example:

```tsx
<Switch
  label="Enable email notifications"
/>
```

The label is associated with the native input and can be activated by clicking the visible Switch control.

Required and disabled states are passed to the native input and should be used consistently with the surrounding form semantics.

---

## Responsive Behavior

The Switch is designed to work within responsive form layouts.

Higher-level layout systems are responsible for defining the surrounding layout and responsive behavior.

For example:

```tsx
<div className="form-grid">

  <div>
    <Input
      label="First Name"
      placeholder="Enter first name"
    />
  </div>

  <div>
    <Switch
      label="Active account"
      description="Allow this account to access the application."
    />
  </div>

</div>
```

The `fullWidth` property can be used when the Switch should occupy the available width of its parent container.

For field-to-field vertical alignment, use `alignWithField`.

[Open Full Width in Playground](/playground/switch?focusId=switch-interactive)

---

## Form Engine Integration

The Switch is designed to be used as a building block for the FlowForge Form Engine.

A form definition can describe a boolean field using configuration similar to:

```ts
{
  type: "switch",
  name: "notificationsEnabled",
  label: "Enable Notifications",
  description: "Receive notifications about account activity.",
  defaultValue: false
}
```

The Form Builder can resolve the field definition to the corresponding FlowForge Switch component.

```text
Form Definition
      ↓
Form Builder
      ↓
Field Registry
      ↓
Switch
      ↓
Form Engine
      ↓
Validation / Dependencies / State
```

This keeps the Switch component independent from business-specific form logic.

---

## Validation

Validation is intentionally separated from the visual Switch component.

The Switch is responsible for displaying the validation state:

```tsx
<Switch
  label="Accept terms"
  error="You must accept the terms."
/>
```

The Form Engine can be responsible for defining and executing validation rules.

This separation allows the same Switch component to work independently as well as inside dynamically generated forms.

[Open Error State in Playground](/playground/switch?focusId=switch-states&innerFocusId=switch-states-error)

---

## Related Components

- [FieldWrapper](/docs/components/field-wrapper)
- [Checkbox](/docs/components/checkbox)
- [Radio](/docs/components/radio)
- [Input](/docs/components/input)
- [Select](/docs/components/select)
- [Textarea](/docs/components/textarea)