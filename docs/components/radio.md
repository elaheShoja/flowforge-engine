# Radio

The `Radio` component is a flexible and reusable selection control designed for FlowForge forms and business applications.

It is used when a user must select one option from a group of mutually exclusive choices.

The component supports labels, descriptions, controlled usage, validation feedback, sizing, disabled and required states, responsive layouts, and form-field alignment.

---

## Overview

`Radio` is one of the core selection components of FlowForge.

Radio buttons use the native HTML radio behavior, allowing multiple Radio components with the same `name` to form a single selection group.

### Key Features

- Labels
- Descriptions
- Radio groups
- Controlled usage
- Selected state
- Required state
- Disabled state
- Validation errors
- Small, medium, and large sizes
- Full-width layout
- Alignment with other form fields
- Field wrapper integration
- React state integration
- Native radio group behavior

---

## Import

```tsx
import { Radio } from "@/engine/components";
```

---

## Basic Usage

The simplest way to use `Radio` is to provide a label.

```tsx
<Radio
  name="notification"
  value="email"
  label="Email notifications"
/>
```

A description can be provided to give the user additional information.

```tsx
<Radio
  name="notification"
  value="email"
  label="Email notifications"
  description="Receive notifications by email."
/>
```

[Open Basic Usage in Playground](/playground/radio?focusId=radio-basic-usage)

---

## Radio Groups

Radio buttons that share the same `name` belong to the same group.

Only one option in a native radio group can be selected at a time.

```tsx
<Radio
  name="billing-cycle"
  value="monthly"
  label="Monthly"
/>

<Radio
  name="billing-cycle"
  value="yearly"
  label="Yearly"
/>

<Radio
  name="billing-cycle"
  value="enterprise"
  label="Enterprise"
/>
```

The `name` property is passed to the native radio input and controls the grouping behavior.

The `value` property identifies the selected option.

[Open Radio Group in Playground](/playground/radio?focusId=radio-group)

---

## Controlled Radio Group

`Radio` supports the standard React controlled component pattern.

```tsx
import { useState } from "react";
import { Radio } from "@/engine/components";

export default function Example() {
  const [value, setValue] =
    useState("monthly");

  return (
    <>
      <Radio
        name="billing"
        value="monthly"
        label="Monthly"
        checked={value === "monthly"}
        onChange={(checked) => {
          if (checked) {
            setValue("monthly");
          }
        }}
      />

      <Radio
        name="billing"
        value="yearly"
        label="Yearly"
        checked={value === "yearly"}
        onChange={(checked) => {
          if (checked) {
            setValue("yearly");
          }
        }}
      />
    </>
  );
}
```

The `checked` value is controlled by React state.

The `onChange` callback receives the new boolean checked value.

For a Radio group, the application can use that callback to update the selected group value.

---

## Sizes

The component supports three predefined sizes:

| Size | Description |
| --- | --- |
| `sm` | Small Radio |
| `md` | Medium Radio |
| `lg` | Large Radio |

### Small

```tsx
<Radio
  name="size"
  value="sm"
  size="sm"
  label="Small Radio"
/>
```

### Medium

```tsx
<Radio
  name="size"
  value="md"
  size="md"
  label="Medium Radio"
/>
```

### Large

```tsx
<Radio
  name="size"
  value="lg"
  size="lg"
  label="Large Radio"
/>
```

[Open Radio Sizes in Playground](/playground/radio?focusId=radio-sizes)

---

## Selected State

The `checked` property controls whether the Radio is selected.

```tsx
<Radio
  name="plan"
  value="professional"
  label="Professional"
  checked
/>
```

For controlled usage:

```tsx
const [value, setValue] =
  useState("professional");

<Radio
  name="plan"
  value="professional"
  label="Professional"
  checked={value === "professional"}
  onChange={(checked) => {
    if (checked) {
      setValue("professional");
    }
  }}
/>
```

---

## Required State

Use `required` when a Radio selection is required as part of a form.

```tsx
<Radio
  name="account-type"
  value="business"
  label="Business account"
  required
/>
```

[Open Required State in Playground](/playground/radio?focusId=radio-states&innerFocusId=radio-states-required)

---

## Disabled State

Use `disabled` when the user should not be able to interact with a Radio.

```tsx
<Radio
  name="plan"
  value="enterprise"
  label="Enterprise"
  checked
  disabled
/>
```

Disabled Radios cannot be changed by the user.

[Open Disabled State in Playground](/playground/radio?focusId=radio-states&innerFocusId=radio-states-disabled)

---

## Validation Error

The `error` property displays validation feedback associated with the Radio.

```tsx
<Radio
  name="account-type"
  value="business"
  label="Business account"
  error="Please select an account type."
/>
```

The Radio is responsible for displaying the visual error state.

Higher-level form logic can provide the validation result and error message when the component is used inside a generated form.

[Open Error State in Playground](/playground/radio?focusId=radio-states&innerFocusId=radio-states-error)

---

## Full Width

Use `fullWidth` when the Radio should occupy the available horizontal space of its parent container.

```tsx
<Radio
  name="plan"
  value="professional"
  label="Professional"
  fullWidth
/>
```

The default value of `fullWidth` is `false`.

[Open Full Width in Playground](/playground/radio?focusId=radio-interactive)

---

## Form Alignment

The `alignWithField` property is designed for form layouts where a Radio should align with the control area of another form field.

This is particularly useful when different field types are placed in columns.

```tsx
<div className="form-grid">

  <Input
    label="First Name"
    placeholder="Enter first name"
  />

  <Radio
    name="role"
    value="administrator"
    label="Administrator"
    description="Full access to the application."
    alignWithField
  />

</div>
```

When `alignWithField` is enabled, the Radio aligns its content with the field control area rather than starting at the same vertical position as the field label.

[Open Form Alignment in Playground](/playground/radio?focusId=radio-form-alignment)

---

## Description

Use `description` to provide supporting information below the Radio label.

```tsx
<Radio
  name="plan"
  value="professional"
  label="Professional"
  description="For professional users and small teams."
/>
```

Descriptions are useful when the meaning or consequences of an option need additional explanation.

---

## Without Field Wrapper

When the Radio is used in a context where the surrounding UI already manages the field layout, the field wrapper can be disabled using `withWrapper`.

```tsx
<Radio
  name="status"
  value="active"
  label="Active"
  withWrapper={false}
/>
```

This is useful for compact control panels and custom layouts.

---

## Radio States

The component supports several common states:

- Default
- Selected
- Required
- Disabled
- Error
- Full Width
- Form Alignment

[Open Radio States in Playground](/playground/radio?focusId=radio-states)

---

## API

### RadioProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | Label displayed for the Radio |
| `description` | `ReactNode` | — | Supporting text displayed with the Radio |
| `name` | `string` | — | Native radio group name |
| `value` | `string` | — | Value associated with the Radio |
| `checked` | `boolean` | — | Controls whether the Radio is selected |
| `defaultChecked` | `boolean` | — | Initial selected state for uncontrolled usage |
| `onChange` | `(checked: boolean) => void` | — | Callback triggered when the selected state changes |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the Radio size |
| `required` | `boolean` | `false` | Marks the Radio as required |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `error` | `string` | — | Validation error message |
| `fullWidth` | `boolean` | `false` | Makes the Radio occupy the available width |
| `alignWithField` | `boolean` | `true` | Aligns the Radio with the control area of another form field |
| `withWrapper` | `boolean` | `true` | Enables or disables the FieldWrapper |
| `tooltip` | `ReactNode` | — | Optional tooltip displayed by FieldWrapper |
| `className` | `string` | `""` | Additional class name for the Radio root |

---

## Accessibility

`Radio` is built on top of the native HTML radio input.

Use meaningful labels and values so that the purpose of each option is clear to users and assistive technologies.

Radio groups should use the same `name` value for all mutually exclusive options.

For example:

```tsx
<Radio
  name="language"
  value="english"
  label="English"
/>

<Radio
  name="language"
  value="german"
  label="German"
/>

<Radio
  name="language"
  value="french"
  label="French"
/>
```

Required and disabled states are passed to the native input and should be used consistently with the surrounding form semantics.

---

## Responsive Behavior

The Radio is designed to work within responsive form layouts.

Higher-level layout systems are responsible for defining the number of columns and responsive behavior.

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
    <Radio
      name="role"
      value="administrator"
      label="Administrator"
      alignWithField
    />
  </div>

</div>
```

The `alignWithField` property controls the vertical relationship between the Radio and other field controls.

[Open Form Alignment in Playground](/playground/radio?focusId=radio-form-alignment)

---

## Form Engine Integration

The Radio is designed to be used as a building block for the FlowForge Form Engine.

A form definition can describe a selection field using configuration similar to:

```ts
{
  type: "radio",
  name: "accountType",
  label: "Account Type",
  options: [
    {
      value: "personal",
      label: "Personal"
    },
    {
      value: "business",
      label: "Business"
    }
  ],
  required: true
}
```

The Form Builder can resolve the field definition to the corresponding FlowForge Radio component.

```text
Form Definition
      ↓
Form Builder
      ↓
Field Registry
      ↓
Radio
      ↓
Form Engine
      ↓
Validation / Dependencies / State
```

This keeps the Radio component independent from business-specific form logic.

---

## Validation

Validation is intentionally separated from the visual Radio component.

The Radio is responsible for displaying the validation state:

```tsx
<Radio
  name="account-type"
  value="business"
  label="Business account"
  error="Please select an account type."
/>
```

The Form Engine can be responsible for defining and executing validation rules.

This separation allows the same Radio component to work independently as well as inside dynamically generated forms.

[Open Error State in Playground](/playground/radio?focusId=radio-states&innerFocusId=radio-states-error)

---

## Related Components

- [FieldWrapper](/docs/components/field-wrapper)
- [Checkbox](/docs/components/checkbox)
- [Input](/docs/components/input)
- [Select](/docs/components/select)
- [Textarea](/docs/components/textarea)