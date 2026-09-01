# GroupInput

The `GroupInput` component is a reusable form layout component for grouping multiple FlowForge components into a single logical field.

It allows different form components such as `Input`, `Select`, `Checkbox`, `Radio`, and `Switch` to be combined while exposing their values through a single grouped value object.

---

## Overview

`GroupInput` is designed for form fields that contain multiple related controls.

For example, a phone number can combine a country selector with a phone input, while a personal information field can combine multiple inputs and a select.

### Key Features

- Multiple child components
- Shared grouped value
- Controlled and uncontrolled usage
- Horizontal and vertical layouts
- Configurable item proportions
- Dividers between items
- Full-width and content-based layouts
- Disabled state
- Required state
- Validation error
- Helper text
- Field wrapper integration
- Support for different FlowForge components
- Per-item component props

---

## Import

```tsx
import { GroupInput } from "@/engine/components";
```

---

## Basic Usage

The simplest way to use `GroupInput` is to provide a label and a list of items.

```tsx
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
      options: countryOptions,
    },
  ]}
/>
```

Each named item contributes its value to the grouped value object.

For example:

```ts
{
  firstName: "Elahe",
  lastName: "Shoja",
  country: "ir"
}
```

[Open Basic Usage in Playground](/playground/group-input?focusId=group-input-basic)

---

## Grouped Value

Each item can define a `name` property.

The `name` determines the key used for that item's value inside the GroupInput value object.

```tsx
<GroupInput
  name="person"
  items={[
    {
      componentName: "Input",
      name: "firstName",
    },
    {
      componentName: "Input",
      name: "lastName",
    },
    {
      componentName: "Select",
      name: "country",
      options={countryOptions},
    },
  ]}
/>
```

The resulting value has the following structure:

```ts
{
  firstName: "...",
  lastName: "...",
  country: "..."
}
```

This allows several related controls to behave as a single logical form field.

---

## Controlled GroupInput

`GroupInput` supports the standard React controlled component pattern.

```tsx
import { useState } from "react";
import { GroupInput } from "@/engine/components";

export default function Example() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    country: "ir",
  });

  return (
    <GroupInput
      name="person"
      label="Personal Information"
      value={value}
      onChange={setValue}
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
      ]}
    />
  );
}
```

The complete grouped value is controlled by the parent component.

[Open Controlled GroupInput in Playground](/playground/group-input?focusId=group-input-controlled)

---

## Layout Direction

`GroupInput` supports horizontal and vertical layouts through the `direction` property.

### Horizontal

```tsx
<GroupInput
  name="contact"
  direction="horizontal"
  items={[
    {
      componentName: "Input",
      name: "firstName",
    },
    {
      componentName: "Input",
      name: "lastName",
    },
    {
      componentName: "Select",
      name: "country",
      options: countryOptions,
    },
  ]}
/>
```

### Vertical

```tsx
<GroupInput
  name="address"
  direction="vertical"
  items={[
    {
      componentName: "Input",
      name: "street",
    },
    {
      componentName: "Input",
      name: "city",
    },
    {
      componentName: "Input",
      name: "postalCode",
    },
  ]}
/>
```

The default direction is `horizontal`.

[Open Layout Direction in Playground](/playground/group-input?focusId=group-input-layouts)

---

## Item Flex

Each `GroupInputItem` can define a `flex` value to control how much space the item occupies relative to the other items.

```tsx
<GroupInput
  name="phone"
  items={[
    {
      componentName: "Select",
      name: "country",
      options: countryOptions,
      flex: 1,
    },
    {
      componentName: "Input",
      name: "phone",
      placeholder: "Phone number",
      flex: 2,
    },
  ]}
/>
```

In this example, the first item receives a flex proportion of `1`, while the second item receives a flex proportion of `2`.

This means the available space is divided approximately as:

```text
┌───────────────┬──────────────────────────────┐
│    Country    │          Phone Number        │
│      1        │              2               │
└───────────────┴──────────────────────────────┘
```

The `flex` value is relative to the other items in the same GroupInput.

For example:

```tsx
flex: 1
```

and:

```tsx
flex: 2
```

produce a `1 : 2` space ratio.

The same approach can be used with more items:

```tsx
<GroupInput
  name="example"
  items={[
    {
      componentName: "Input",
      name: "first",
      flex: 1,
    },
    {
      componentName: "Input",
      name: "second",
      flex: 2,
    },
    {
      componentName: "Input",
      name: "third",
      flex: 1,
    },
  ]}
/>
```

The resulting proportion is:

```text
1 : 2 : 1
```

Items without an explicit `flex` value use the default GroupInput item distribution.

[Open Item Flex in Playground](/playground/group-input?focusId=group-input-flex)

---

## Dividers

`GroupInput` can display a divider between adjacent items.

```tsx
<GroupInput
  name="person"
  divider
  items={[
    {
      componentName: "Input",
      name: "firstName",
    },
    {
      componentName: "Input",
      name: "lastName",
    },
    {
      componentName: "Select",
      name: "country",
      options: countryOptions,
    },
  ]}
/>
```

Dividers are enabled by default.

They can be disabled using:

```tsx
<GroupInput
  name="person"
  divider={false}
  items={items}
/>
```

The divider direction follows the GroupInput layout direction.

[Open Divider Behavior in Playground](/playground/group-input?focusId=group-input-interactive)

---

## Full Width

`GroupInput` uses a full-width layout by default.

```tsx
<GroupInput
  name="person"
  fullWidth
  items={items}
/>
```

When `fullWidth` is enabled, the GroupInput occupies the available width of its parent.

To use a content-based width:

```tsx
<GroupInput
  name="person"
  fullWidth={false}
  items={items}
/>
```

[Open Full Width Behavior in Playground](/playground/group-input?focusId=group-input-interactive)

---

## Field Wrapper

`GroupInput` uses `FieldWrapper` by default.

```tsx
<GroupInput
  name="person"
  label="Personal Information"
  helperText="Enter the user's information."
  items={items}
/>
```

The wrapper can be disabled when GroupInput is already placed inside another field layout.

```tsx
<GroupInput
  name="person"
  withWrapper={false}
  items={items}
/>
```

When the wrapper is disabled, GroupInput renders only its grouped content.

---

## Required State

Use `required` when the grouped field is required.

```tsx
<GroupInput
  name="person"
  label="Personal Information"
  required
  items={items}
/>
```

The required state is handled by the surrounding `FieldWrapper`.

[Open Required State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-required)

---

## Disabled State

The `disabled` property disables the complete GroupInput.

```tsx
<GroupInput
  name="person"
  label="Personal Information"
  disabled
  items={[
    {
      componentName: "Input",
      name: "firstName",
      value: "Elahe",
    },
    {
      componentName: "Input",
      name: "lastName",
      value: "Shoja",
    },
    {
      componentName: "Select",
      name: "country",
      value: "de",
      options: countryOptions,
    },
  ]}
/>
```

The disabled state is propagated to the child components.

[Open Disabled State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-disabled)

---

## Validation Error

The `error` property displays validation feedback for the grouped field.

```tsx
<GroupInput
  name="person"
  label="Personal Information"
  error="Please check the grouped fields."
  items={items}
/>
```

The error message is rendered through `FieldWrapper`.

Higher-level form logic can determine when the GroupInput should display a validation error.

[Open Validation Error in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-error)

---

## Helper Text

Use `helperText` to provide additional information about the grouped field.

```tsx
<GroupInput
  name="person"
  label="Personal Information"
  helperText="Provide the user's personal information."
  items={items}
/>
```

---

## Combining Different Components

`GroupInput` can combine different FlowForge components within the same group.

```tsx
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
      options: countryOptions,
    },
    {
      componentName: "Switch",
      name: "active",
    },
  ]}
/>
```

Components such as `Input`, `Select`, `Checkbox`, `Radio`, and `Switch` can be combined according to the requirements of the form.

[Open Component Examples in Playground](/playground/group-input?focusId=group-input-examples)

---

## Action Group

`GroupInput` can be used to build compact action-oriented field groups where one control affects the behavior or presentation of another control.

A common example is a phone number field that combines:

- A country selector
- A phone number input
- Different space proportions using `flex`
- A dynamically calculated phone prefix
- A shared grouped value
- Automatic focus on the phone input after selecting a country

In this example, selecting a country updates the phone prefix displayed by the `Input` component.

The selected country is also stored as part of the GroupInput value.

### Example

```tsx
import {
  useRef,
  useState,
} from "react";

import {
  GroupInput,
  Input,
  Select,
} from "@/engine/components";

const countryCodes: Record<string, string> = {
  ir: "+98",
  de: "+49",
  az: "+994",
  tr: "+90",
};

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

export default function PhoneExample() {
  const phoneInputRef =
    useRef<HTMLInputElement>(null);

  const [actionCountry, setActionCountry] =
    useState("ir");

  const [actionValue, setActionValue] =
    useState<Record<string, unknown>>({
      country: "ir",
      phone: "",
    });

  const handleCountryChange = (
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

    requestAnimationFrame(() => {
      phoneInputRef.current?.focus();
    });
  };

  return (
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
          options: countryOptions,
          flex: 1,
          onChange:
            handleCountryChange,
        },
        {
          componentName: "Input",
          name: "phone",
          placeholder: "Phone number",
          prefix:
            countryCodes[actionCountry],
          ref: phoneInputRef,
          flex: 2,
        },
      ]}
    />
  );
}
```

In this example, the `country` and `phone` values are exposed through a single GroupInput value:

```ts
{
  country: "de",
  phone: "9123456789"
}
```

When the user selects Germany, for example, `actionCountry` becomes `"de"` and the phone input automatically displays:

```text
+49
```

as its prefix.

The country selector also receives `flex: 1`, while the phone input receives `flex: 2`.

Therefore, the available horizontal space is divided approximately using a `1 : 2` ratio:

```text
┌────────────────┬────────────────────────────────┐
│    Country     │          Phone Number          │
│      1         │                2               │
└────────────────┴────────────────────────────────┘
```

The `handleCountryChange` function performs three operations:

1. Updates the selected country.
2. Updates the `country` property inside the grouped value.
3. Moves focus to the phone input.

This pattern is useful when one field determines the behavior, value, or presentation of another field within the same logical group.

[Open Action Group in Playground](/playground/group-input?focusId=group-input-action)

---

## API

### GroupInputProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | — | Name of the complete grouped value |
| `label` | `string` | — | Label displayed for the GroupInput |
| `helperText` | `string` | — | Supporting text displayed below the GroupInput |
| `error` | `string` | — | Validation error message |
| `required` | `boolean` | — | Marks the GroupInput as required |
| `disabled` | `boolean` | `false` | Disables the complete GroupInput |
| `withWrapper` | `boolean` | `true` | Enables or disables the field wrapper |
| `direction` | `"horizontal" \| "vertical"` | `"horizontal"` | Controls the GroupInput layout direction |
| `divider` | `boolean` | `true` | Shows dividers between items |
| `fullWidth` | `boolean` | `true` | Makes the GroupInput occupy the available width |
| `noBorder` | `boolean` | `false` | Removes the outer GroupInput border |
| `items` | `GroupInputItem[]` | — | Items rendered inside the GroupInput |
| `value` | `Record<string, unknown>` | — | Controlled grouped value |
| `defaultValue` | `Record<string, unknown>` | `{}` | Initial grouped value |
| `onChange` | `(value: Record<string, unknown>) => void` | — | Called when a named item changes |
| `className` | `string` | — | Additional CSS class |
| `style` | `CSSProperties` | — | Inline styles |

---

### GroupInputItem

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `componentName` | `string` | — | Name of the FlowForge component to render |
| `name` | `string` | — | Key used for the item's value |
| `value` | `unknown` | — | Initial/current value of the item |
| `flex` | `number` | — | Relative space proportion of the item |
| `...` | `unknown` | — | Component-specific props |

The `flex` property controls the relative amount of available space assigned to the item.

For example:

```tsx
flex: 1
```

and:

```tsx
flex: 2
```

create a `1 : 2` space ratio.

---

## States

`GroupInput` supports several common form states.

### Default

The default state represents a normal interactive GroupInput.

[Open Default State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-default)

### Required

The required state indicates that the grouped field is required.

[Open Required State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-required)

### Disabled

The disabled state prevents interaction with the grouped components.

[Open Disabled State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-disabled)

### Error

The error state displays validation feedback for the grouped field.

[Open Error State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-error)

[Open All GroupInput States in Playground](/playground/group-input?focusId=group-input-states)

---

## Validation

Validation is intentionally separated from the visual GroupInput component.

GroupInput is responsible for displaying the validation state:

```tsx
<GroupInput
  name="person"
  label="Personal Information"
  error="Please check the grouped fields."
  items={items}
/>
```

The FlowForge Form Engine can be responsible for defining and executing validation rules for the grouped value.

This allows GroupInput to work independently as well as inside dynamically generated forms.

[Open Validation State in Playground](/playground/group-input?focusId=group-input-states&innerFocusId=group-input-states-error)

---

## Architecture

`GroupInput` acts as a composition layer around existing FlowForge components.

```text
┌──────────────────────────────┐
│         GroupInput           │
│                              │
│  ┌───────┐ ┌───────┐ ┌─────┐ │
│  │ Input │ │Select │ │ ... │ │
│  └───────┘ └───────┘ └─────┘ │
│         ↓                    │
│   Grouped Value Object       │
└──────────────┬───────────────┘
               │
               ↓
┌──────────────────────────────┐
│         Form Engine          │
│                              │
│ Validation / Dependencies     │
│ State / Submission           │
└──────────────────────────────┘
```

GroupInput owns the grouping, layout, value aggregation, and shared field-level behavior.

The individual FlowForge components remain responsible for their own rendering and component-specific behavior.

---

## Design Considerations

`GroupInput` is intentionally kept independent from business-specific form logic.

Its responsibilities are primarily:

1. Grouping multiple FlowForge components.
2. Managing grouped values.
3. Providing horizontal and vertical layouts.
4. Controlling relative item space through `flex`.
5. Supporting shared field states.
6. Providing optional dividers and borders.
7. Integrating with `FieldWrapper`.
8. Forwarding component-specific props to child components.

Higher-level concerns such as validation rules, dependencies, conditional rendering, persistence, and submission are handled by the FlowForge Form Engine.

---

## Future Improvements

Potential future capabilities include:

- Advanced responsive item sizing
- Schema-driven GroupInput configuration
- Dynamic item visibility
- Conditional item layout
- Advanced validation integration
- Form Engine dependency integration
- Additional layout strategies

These capabilities should be introduced only when required by the FlowForge architecture.

---

## Related Components

- [FieldWrapper](/docs/components/field-wrapper)
- [Input](/docs/components/input)
- [Select](/docs/components/select)
- [Checkbox](/docs/components/checkbox)
- [Radio](/docs/components/radio)
- [Switch](/docs/components/switch)