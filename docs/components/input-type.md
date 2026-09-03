# InputType

The `InputType` component is a semantic and reusable input abstraction designed for common input types in FlowForge forms and applications.

It provides predefined configurations for common input behaviors such as email, password, search, number, phone, and URL inputs while preserving the reusable API of the underlying `Input` component.

---

## Overview

`InputType` is a higher-level input component built on top of the FlowForge `Input` component.

Instead of manually configuring common input behaviors and adornments, developers can select a semantic input type through the `type` property.

### Supported Types

- `text`
- `email`
- `password`
- `search`
- `number`
- `phone`
- `url`

### Key Features

- Semantic input types
- Predefined input configurations
- Email icon
- Search icon
- Phone icon
- URL icon
- Password visibility toggle
- Clearable inputs
- Controlled usage
- Multiple sizes
- Full-width layout
- Required state
- Disabled state
- Loading state
- Validation error state
- Native input attributes
- `Input` component integration

[Open Interactive Playground in Playground](/playground/input-type?focusId=input-type-interactive)

---

## Import

```tsx
import { InputType } from "@/engine/components";
```

---

## Basic Usage

The `InputType` component uses the `type` property to define the semantic input behavior.

```tsx
<InputType
  type="email"
/>
```

The component automatically applies the configuration associated with the selected input type.

For example, an email input automatically receives the predefined email input behavior and email icon.

[Open Basic Usage in Playground](/playground/input-type?focusId=input-type-basic-usage)

---

## Input Types

`InputType` supports several predefined semantic input types.

### Text

The `text` type provides a standard text input without additional predefined adornments.

```tsx
<InputType
  type="text"
  label="Name"
  placeholder="Enter your name"
/>
```

Use `text` for general-purpose single-line text input.

[Open Text in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-text)

---

### Email

The `email` type is configured for email addresses and includes a predefined email icon.

```tsx
<InputType
  type="email"
/>
```

The component uses the email input type and provides the corresponding visual configuration.

[Open Email in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-email)

---

### Password

The `password` type provides password input behavior with a built-in visibility toggle.

```tsx
<InputType
  type="password"
/>
```

The visibility button allows the user to switch between masked and visible password text.

[Open Password in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-password)

---

### Search

The `search` type is configured for search input and includes a predefined search icon and clear functionality.

```tsx
<InputType
  type="search"
/>
```

The search configuration enables the clearable behavior by default.

[Open Search in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-search)

---

### Number

The `number` type is configured for numeric input.

```tsx
<InputType
  type="number"
/>
```

The underlying input uses the native HTML number input behavior.

This allows browsers to provide their native numeric input controls.

[Open Number in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-number)

---

### Phone

The `phone` type is configured for phone number input and includes a predefined phone icon.

```tsx
<InputType
  type="phone"
/>
```

The `phone` type provides a semantic input configuration for phone numbers.

It is intentionally kept as a simple input type. More advanced phone-number functionality such as country selection and country prefixes can be provided by a dedicated higher-level component.

[Open Phone in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-phone)

---

### URL

The `url` type is configured for web addresses and includes a predefined URL icon.

```tsx
<InputType
  type="url"
/>
```

Use this type when the field represents a website or other web address.

[Open URL in Playground](/playground/input-type?focusId=input-type-basic-usage&innerFocusId=input-type-url)

---

## Controlled Input

`InputType` supports the standard React controlled component pattern.

```tsx
import { useState } from "react";
import { InputType } from "@/engine/components";

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <InputType
      type="email"
      label="Controlled email"
      value={value}
      onChange={(event) =>
        setValue(event.target.value)
      }
      placeholder="Enter email..."
    />
  );
}
```

The value is controlled by React state and updated through the `onChange` callback.

This allows the parent component or form engine to manage the input value.

[Open Controlled Input in Playground](/playground/input-type?focusId=input-type-controlled)

---

## Sizes

`InputType` supports three input sizes:

- `sm`
- `md`
- `lg`

```tsx
<InputType
  type="search"
  label="Small"
  size="sm"
  placeholder="Small search"
/>

<InputType
  type="search"
  label="Medium"
  size="md"
  placeholder="Medium search"
/>

<InputType
  type="search"
  label="Large"
  size="lg"
  placeholder="Large search"
/>
```

The size is passed through to the underlying `Input` component while preserving the selected semantic input configuration.

[Open Sizes in Playground](/playground/input-type?focusId=input-type-sizes)

---

## Clearable

`InputType` supports clearable inputs through the `clearable` property.

```tsx
<InputType
  type="search"
  label="Search"
  value={value}
  onChange={(event) =>
    setValue(event.target.value)
  }
  clearable
  placeholder="Search..."
/>
```

When clear functionality is enabled and the input contains a value, a clear action is displayed.

The clear behavior is provided by the underlying `Input` component.

[Open Clearable in Playground](/playground/input-type?focusId=input-type-clearable)

---

## Full Width

`InputType` supports both content-width and full-width layouts.

```tsx
<InputType
  type="phone"
  label="Content Width"
  fullWidth={false}
  placeholder="Phone number"
/>
```

When `fullWidth` is enabled:

```tsx
<InputType
  type="url"
  label="Full Width"
  fullWidth
  placeholder="Enter URL"
/>
```

the input occupies the available width of its parent container.

[Open Full Width in Playground](/playground/input-type?focusId=input-type-full-width)

---

## Required Field

The `required` property indicates that the input is required.

```tsx
<InputType
  type="email"
  required
/>
```

The required state is passed to the underlying input and integrated with the FlowForge field wrapper.

[Open Required State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-required)

---

## Disabled State

Use `disabled` when the user should not be able to interact with the input.

```tsx
<InputType
  type="email"
  disabled
  value="FlowForge@gmail.com"
  readOnly
/>
```

Disabled inputs cannot be edited by the user.

The disabled state is handled by the underlying `Input` component and its `FieldWrapper` integration.

[Open Disabled State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-disabled)

---

## Loading State

`InputType` supports the loading state provided by the underlying `Input` component.

```tsx
<InputType
  type="email"
  loading
  loadingText="Loading..."
/>
```

When loading is enabled, the input is disabled and a loading indicator is displayed.

The loading state can be combined with the other input configuration properties.

[Open Interactive Loading State in Playground](/playground/input-type?focusId=input-type-interactive)

---

## Validation Error

The `error` property can be used to display validation feedback.

```tsx
<InputType
  type="email"
  error="Please enter a valid email address."
/>
```

`InputType` passes the error state to the underlying `Input` component, which is responsible for rendering the corresponding validation state.

Higher-level form logic can provide the validation result and error message.

[Open Error State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-error)

---

## States

`InputType` supports several common field states.

### Default

The default state represents a normal interactive input.

```tsx
<InputType
  type="email"
/>
```

[Open Default State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-default)

### Required

The required state indicates that the field must contain a value.

```tsx
<InputType
  type="email"
  required
/>
```

[Open Required State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-required)

### Disabled

The disabled state prevents user interaction.

```tsx
<InputType
  type="email"
  disabled
  value="FlowForge@gmail.com"
  readOnly
/>
```

[Open Disabled State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-disabled)

### Error

The error state displays validation feedback.

```tsx
<InputType
  type="email"
  error="Please enter a valid email address."
/>
```

[Open Error State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-error)

[Open All InputType States in Playground](/playground/input-type?focusId=input-type-states)

---

## Interactive Configuration

The Interactive Playground allows the main `InputType` configuration options to be changed dynamically.

The available controls include:

- Input type
- Size
- Disabled
- Loading
- Clearable
- Full Width
- Required
- Error

```tsx
<InputType
  type={type}
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
```

This demonstrates how `InputType` can be configured dynamically while remaining controlled by React state.

[Open Interactive Playground in Playground](/playground/input-type?focusId=input-type-interactive)

---

## Semantic Input Configuration

`InputType` uses predefined configuration for each semantic type.

The configuration determines properties such as:

- Native input type
- Default label
- Default placeholder
- Start adornment
- End adornment
- Clearable behavior
- Prefix
- Suffix

For example, the password configuration can provide password behavior together with a visibility toggle, while the search configuration can provide a search icon and clear functionality.

This keeps common input behavior centralized instead of requiring each application to manually configure the same properties.

---

## Adornments

Several input types provide predefined visual adornments.

### Email

```tsx
<InputType
  type="email"
/>
```

provides a predefined email icon.

### Search

```tsx
<InputType
  type="search"
/>
```

provides a predefined search icon.

### Phone

```tsx
<InputType
  type="phone"
/>
```

provides a predefined phone icon.

### URL

```tsx
<InputType
  type="url"
/>
```

provides a predefined URL icon.

### Password

```tsx
<InputType
  type="password"
/>
```

provides a built-in password visibility toggle.

These adornments are resolved by `InputType` and passed to the underlying `Input` component.

---

## Native Input Attributes

`InputType` is built on top of `Input`, allowing standard input attributes to be passed through.

For example:

```tsx
<InputType
  type="email"
  name="email"
  autoComplete="email"
  required
/>
```

Other native input properties such as `value`, `defaultValue`, `onChange`, `onBlur`, `readOnly`, `disabled`, `placeholder`, and `name` can also be used according to the requirements of the field.

---

## API

### InputTypeProps

The `InputType` API is based on the underlying `Input` component together with the semantic `type` configuration.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"text" \| "email" \| "password" \| "search" \| "number" \| "phone" \| "url"` | `"text"` | Defines the semantic input type |
| `label` | `string` | — | Label displayed above the input |
| `placeholder` | `string` | — | Placeholder displayed inside the input |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls input size |
| `clearable` | `boolean` | configuration-dependent | Enables the clear action |
| `fullWidth` | `boolean` | `true` | Makes the input occupy the available width |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `loading` | `boolean` | `false` | Displays a loading state |
| `loadingText` | `string` | — | Placeholder text displayed while loading |
| `required` | `boolean` | — | Marks the field as required |
| `error` | `string` | — | Validation error message |
| `startAdornment` | `ReactNode` | configuration-dependent | Custom start adornment |
| `endAdornment` | `ReactNode` | configuration-dependent | Custom end adornment |
| `prefix` | `ReactNode` | — | Content displayed before the input value |
| `suffix` | `ReactNode` | — | Content displayed after the input value |

In addition to these properties, `InputType` supports the relevant native input attributes inherited through the underlying `Input` component.

---

## Type Configuration

The semantic input types can be summarized as follows:

| Type | Purpose | Predefined Behavior |
| --- | --- | --- |
| `text` | General text | Standard text input |
| `email` | Email addresses | Email input + email icon |
| `password` | Passwords | Password input + visibility toggle |
| `search` | Search queries | Search input + search icon + clearable |
| `number` | Numeric values | Native number input behavior |
| `phone` | Phone numbers | Phone input + phone icon |
| `url` | Web addresses | URL input + URL icon |

---

## Validation

Validation is intentionally separated from the `InputType` component.

`InputType` is responsible for displaying the validation state:

```tsx
<InputType
  type="email"
  error="Please enter a valid email address."
/>
```

Higher-level FlowForge Form Engine logic can define and execute validation rules.

This separation allows `InputType` to work independently as well as inside dynamically generated forms.

[Open Validation State in Playground](/playground/input-type?focusId=input-type-states&innerFocusId=input-type-states-error)

---

## Accessibility

`InputType` relies on the underlying `Input` and `FieldWrapper` components for accessible field structure.

Meaningful labels should be provided for user-facing fields.

For example:

```tsx
<InputType
  type="email"
  label="Email"
  required
/>
```

Validation errors should provide meaningful information about what needs to be corrected.

Native attributes such as `required`, `disabled`, `readOnly`, `name`, `placeholder`, and `autoComplete` should be used according to the semantic requirements of the form.

Password visibility controls are provided with accessible labels describing whether the password can be shown or hidden.

---

## Responsive Behavior

`InputType` inherits the responsive layout behavior of the underlying `Input` component.

When `fullWidth` is enabled:

```tsx
<InputType
  type="url"
  fullWidth
/>
```

the input occupies the available width of its parent container.

When `fullWidth` is disabled:

```tsx
<InputType
  type="phone"
  fullWidth={false}
/>
```

the input uses a content-based layout while remaining constrained by its parent.

[Open Full Width Behavior in Playground](/playground/input-type?focusId=input-type-full-width)

---

## Form Builder Integration

`InputType` is intended to act as a reusable building block for the FlowForge Form Builder.

A future form definition may describe a field using a semantic input type:

```ts
{
  type: "email",
  name: "email",
  label: "Email",
  required: true
}
```

The Form Builder can resolve the field definition to the corresponding `InputType` configuration.

```text
Form Definition
      ↓
Form Builder
      ↓
Field Registry
      ↓
InputType
      ↓
Input
      ↓
Form Engine
      ↓
Validation / Dependencies / State
```

This allows common input behavior to remain centralized while keeping business-specific form logic outside the component.

---

## Design Considerations

`InputType` is intentionally positioned above the generic `Input` component.

The responsibilities of `InputType` include:

1. Providing semantic input types.
2. Resolving predefined input configurations.
3. Providing common default adornments.
4. Providing password visibility behavior.
5. Resolving default labels and placeholders when configured.
6. Passing the resolved configuration to `Input`.
7. Preserving the reusable API of the underlying input component.

The generic `Input` component remains responsible for lower-level input rendering, field layout, states, adornments, clear actions, loading behavior, and `FieldWrapper` integration.

This separation keeps the component architecture reusable and maintainable.

---

## InputType vs Input

`Input` provides the lower-level configurable input foundation.

`InputType` provides semantic presets for common input scenarios.

```text
InputType
   ↓
Semantic Configuration
   ↓
Resolved Input Props
   ↓
Input
   ↓
FieldWrapper
```

Use `Input` when detailed low-level configuration is required.

Use `InputType` when a common semantic input type with predefined behavior is sufficient.

---

## Future Improvements

Potential future capabilities include:

- Additional semantic input types
- Advanced phone input support
- Country selector integration
- Input masking
- Specialized formatting
- Schema-driven input configuration
- Form Engine validation integration
- Field dependency integration
- Additional predefined adornments
- Advanced accessibility metadata

These features will be introduced only when they are required by the FlowForge architecture.

---

## Architecture Note

`InputType` is part of the FlowForge UI layer.

It should remain independent from backend and database implementation.

```text
┌──────────────────────────────┐
│          FlowForge UI        │
│                              │
│  InputType → Input → Field   │
│             ↓                │
│        Form Builder          │
│             ↓                │
│         Form Engine          │
└──────────────┬───────────────┘
               │
               ↓
┌──────────────────────────────┐
│           Service            │
│                              │
│       API / Auth / ACL       │
│             ↓                │
│          Supabase            │
│             ↓                │
│         PostgreSQL           │
└──────────────────────────────┘
```

This separation allows the FlowForge UI layer and Service layer to evolve independently.

---

## Related Components

- [Input](/docs/components/input)
- [PasswordInput](/docs/components/password-input)
- [SearchInput](/docs/components/search-input)
- [FieldWrapper](/docs/components/field-wrapper)
- [Select](/docs/components/select)
- [Checkbox](/docs/components/checkbox)