# PasswordInput

The `PasswordInput` component is a reusable password field built on top of the FlowForge `Input` component.

It provides standard input behavior while adding a built-in password visibility control that allows users to show or hide the entered password.

---

## Overview

`PasswordInput` is designed for password fields in FlowForge forms and business applications.

It inherits the common field behavior and visual API of `Input` while managing the password visibility interaction internally.

### Key Features

- Password input behavior
- Show and hide password control
- Accessible visibility button
- Labels
- Helper text
- Validation errors
- Required state
- Disabled state
- Small, medium, and large sizes
- Full-width layout
- Controlled and uncontrolled usage
- Field wrapper integration
- Native input attributes
- React ref support

---

## Import

```tsx
import { PasswordInput } from "@/engine/components";
```

---

## Basic Usage

The simplest way to use `PasswordInput` is to provide a label and placeholder.

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
/>
```

The password is hidden by default.

The visibility button allows the user to switch between hidden and visible text.

[Open Basic Usage in Playground](/playground/password-input?focusId=password-input-basic-usage)

---

## Password Visibility

`PasswordInput` automatically provides a visibility control.

The field starts in password mode:

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
/>
```

When the visibility button is activated, the entered value becomes visible.

Activating the button again hides the password.

The visibility state is managed internally by `PasswordInput`.

[Open Password Visibility in Playground](/playground/password-input?focusId=password-input-interactive)

---

## Controlled Password

`PasswordInput` supports the standard React controlled input pattern.

```tsx
import { useState } from "react";
import { PasswordInput } from "@/engine/components";

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <PasswordInput
      label="Password"
      value={value}
      onChange={(event) =>
        setValue(event.target.value)
      }
      placeholder="Enter your password"
    />
  );
}
```

The password value is controlled by React state through the native input `value` and `onChange` properties.

[Open Controlled Password in Playground](/playground/password-input?focusId=password-input-controlled)

---

## Sizes

`PasswordInput` supports the same three predefined sizes as `Input`.

| Size | Description |
| --- | --- |
| `sm` | Small password input |
| `md` | Medium password input |
| `lg` | Large password input |

### Small

```tsx
<PasswordInput
  size="sm"
  label="Small Password"
  placeholder="Enter password"
/>
```

### Medium

```tsx
<PasswordInput
  size="md"
  label="Medium Password"
  placeholder="Enter password"
/>
```

### Large

```tsx
<PasswordInput
  size="lg"
  label="Large Password"
  placeholder="Enter password"
/>
```

[Open PasswordInput Sizes in Playground](/playground/password-input?focusId=password-input-sizes)

---

## Required Password

Use `required` when a password is required as part of a form.

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
  required
/>
```

The required state is handled by the underlying `Input` and `FieldWrapper` components.

[Open Required State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-required)

---

## Disabled State

Use `disabled` when the password field should not be editable.

```tsx
<PasswordInput
  label="Password"
  value="FlowForge"
  disabled
/>
```

Disabled PasswordInputs cannot be edited or interacted with by the user.

[Open Disabled State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-disabled)

---

## Validation Error

The `error` property displays validation feedback associated with the password field.

```tsx
<PasswordInput
  label="Password"
  error="Please enter a valid password."
/>
```

The visual error state is provided by the underlying `Input` and `FieldWrapper`.

Higher-level form logic can provide the validation result and error message.

[Open Error State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-error)

---

## Helper Text

Because `PasswordInput` extends the `Input` API, it supports `helperText`.

```tsx
<PasswordInput
  label="Password"
  helperText="Use at least 8 characters."
  placeholder="Enter your password"
/>
```

Helper text is displayed below the field and can be used to communicate password requirements.

---

## Full Width

Use `fullWidth` when the password field should occupy the available width of its parent container.

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
  fullWidth
/>
```

`PasswordInput` uses the same responsive width behavior as `Input`.

[Open Interactive Playground in Playground](/playground/password-input?focusId=password-input-interactive)

---

## Without Field Wrapper

`PasswordInput` can be rendered without the surrounding `FieldWrapper`.

```tsx
<PasswordInput
  placeholder="Enter password"
  withWrapper={false}
/>
```

This is useful when the surrounding UI already manages the label, validation, and field layout.

---

## Native Input Attributes

`PasswordInputProps` extends the native React input attributes through `InputProps`.

For example:

```tsx
<PasswordInput
  name="password"
  autoComplete="current-password"
  placeholder="Enter your password"
/>
```

Common native attributes include:

- `name`
- `value`
- `defaultValue`
- `onChange`
- `required`
- `disabled`
- `readOnly`
- `placeholder`
- `autoComplete`
- `maxLength`

The `type` property is intentionally excluded from `PasswordInputProps` because `PasswordInput` manages the input type internally.

---

## Ref Support

Because `PasswordInput` passes its props to `Input`, it supports the same input ref behavior when used through the underlying component API.

For password fields that require programmatic focus, use the standard React input ref pattern supported by the FlowForge input layer.

---

## PasswordInput States

The component supports common form states:

- Default
- Required
- Disabled
- Error

[Open Default State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-default)

[Open Required State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-required)

[Open Disabled State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-disabled)

[Open Error State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-error)

[Open PasswordInput States in Playground](/playground/password-input?focusId=password-input-states)

---

## API

### PasswordInputProps

`PasswordInputProps` extends `InputProps` while excluding the `type` property.

```ts
export interface PasswordInputProps
  extends Omit<InputProps, "type"> {}
```

This means PasswordInput supports the common Input API while managing the input type internally.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Label displayed for the password field |
| `helperText` | `string` | — | Supporting text displayed below the field |
| `error` | `string` | — | Validation error message |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the password input size |
| `fullWidth` | `boolean` | `"true"`* | Makes the field occupy the available width |
| `loading` | `boolean` | `false` | Displays the loading state |
| `loadingText` | `string` | — | Text displayed while loading |
| `clearable` | `boolean` | `false` | Enables the clear action |
| `onClear` | `() => void` | — | Callback triggered when the password is cleared |
| `prefix` | `ReactNode` | — | Content displayed before the input value |
| `suffix` | `ReactNode` | — | Content displayed after the input value |
| `startAdornment` | `ReactNode` | — | Content displayed before the input |
| `withWrapper` | `boolean` | `true` | Enables or disables the FieldWrapper |

In addition to these properties, PasswordInput supports the native React input attributes inherited through `InputProps`.

The `type` property is intentionally not available because PasswordInput controls it internally.

---

## Accessibility

`PasswordInput` provides an accessible button for controlling password visibility.

The visibility button uses an `aria-label` that describes the action:

- Show password
- Hide password

The label is provided through FlowForge's translation system.

Meaningful field labels should still be provided:

```tsx
<PasswordInput
  label="Password"
  autoComplete="current-password"
/>
```

The password visibility control does not change the password value itself. It only changes how the value is presented to the user.

---

## Responsive Behavior

`PasswordInput` uses the responsive behavior of the underlying `Input` component.

For example:

```tsx
<PasswordInput
  label="Password"
  fullWidth
/>
```

allows the field to use the available width of its parent container.

Higher-level form layouts are responsible for defining columns, spacing, and responsive field positioning.

[Open Interactive Playground in Playground](/playground/password-input?focusId=password-input-interactive)

---

## Form Engine Integration

`PasswordInput` can be used as a building block for password fields in the FlowForge Form Engine.

A form definition can describe a password field using configuration similar to:

```ts
{
  type: "password",
  name: "password",
  label: "Password",
  required: true
}
```

The Form Builder can resolve the field definition to the corresponding FlowForge component.

```text
Form Definition
      ↓
Form Builder
      ↓
Field Registry
      ↓
PasswordInput
      ↓
Form Engine
      ↓
Validation / Dependencies / State
```

The PasswordInput remains responsible for presentation and password visibility, while higher-level form logic can manage validation, dependencies, persistence, and submission.

---

## Validation

Validation is intentionally separated from the PasswordInput component.

PasswordInput displays the validation result:

```tsx
<PasswordInput
  label="Password"
  error="Password must contain at least 8 characters."
/>
```

The FlowForge Form Engine can be responsible for defining and executing the corresponding validation rules.

[Open Validation State in Playground](/playground/password-input?focusId=password-input-states&innerFocusId=password-input-state-error)

---

## Architecture

`PasswordInput` is a specialized component built on top of the FlowForge `Input` component.

```text
PasswordInput
      ↓
Input
      ↓
FieldWrapper
      ↓
FlowForge UI Layer
      ↓
Form Builder / Form Engine
```

This approach keeps common field behavior centralized in `Input` while allowing PasswordInput to provide password-specific behavior such as visibility control.

---

## Related Components

- [Input](/docs/components/input)
- [FieldWrapper](/docs/components/field-wrapper)
- [SearchInput](/docs/components/search-input)
- [Textarea](/docs/components/textarea)
- [Select](/docs/components/select)
- [Checkbox](/docs/components/checkbox)