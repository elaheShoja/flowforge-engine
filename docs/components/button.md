# Button

The `Button` component is a reusable action control designed for FlowForge applications.

It provides a consistent API for common button requirements while supporting variants, sizes, loading states, icons, disabled behavior, full-width layouts, and native HTML button attributes.

---

## Overview

`Button` is one of the core general-purpose components of FlowForge.

It can be used independently or as part of larger FlowForge forms, workflows, dialogs, and business application interfaces.

### Key Features

- Multiple visual variants
- Five predefined sizes
- Loading state
- Disabled state
- Full-width layout
- Left and right icons
- Native HTML button attributes
- Custom class name support
- Accessible loading and disabled states
- Native button types

---

## Import

```tsx
import { Button } from "@/engine/components";
```

---

## Basic Usage

The simplest way to use `Button` is to provide button content.

```tsx
<Button>
  Save
</Button>
```

[Open Basic Usage in Playground](/playground/button?focusId=button-basic-usage)

---

## Variants

`Button` supports several predefined visual variants.

| Variant | Description |
| --- | --- |
| `primary` | Primary action |
| `secondary` | Secondary action |
| `outline` | Outlined button |
| `ghost` | Minimal button without a filled background |
| `danger` | Destructive or dangerous action |
| `success` | Successful or positive action |
| `warning` | Warning or attention action |

### Primary

```tsx
<Button variant="primary">
  Primary
</Button>
```

[Open Primary Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-primary)


### Secondary

```tsx
<Button variant="secondary">
  Secondary
</Button>
```

[Open Secondary Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-secondary)


### Outline

```tsx
<Button variant="outline">
  Outline
</Button>
```

[Open Outline Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-outline)


### Ghost

```tsx
<Button variant="ghost">
  Ghost
</Button>
```

[Open Ghost Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-ghost)


### Danger

```tsx
<Button variant="danger">
  Delete
</Button>
```

[Open Delete Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-danger)


### Success

```tsx
<Button variant="success">
  Success
</Button>
```

[Open Success Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-success)


### Warning

```tsx
<Button variant="warning">
  Warning
</Button>
```

[Open Warning Button Variants in Playground](/playground/button?focusId=button-variants&innerFocusId=button-variant-warning)

[Open Button Variants in Playground](/playground/button?focusId=button-variants)

---

## Sizes

The component supports five predefined sizes:

| Size | Description |
| --- | --- |
| `xs` | Extra small button |
| `sm` | Small button |
| `md` | Medium button |
| `lg` | Large button |
| `xl` | Extra large button |

```tsx
<Button size="xs">
  Extra Small
</Button>

<Button size="sm">
  Small
</Button>

<Button size="md">
  Medium
</Button>

<Button size="lg">
  Large
</Button>

<Button size="xl">
  Extra Large
</Button>
```

[Open Button Sizes in Playground](/playground/button?focusId=button-sizes)

---

## Loading State

Use `loading` when an asynchronous operation is in progress.

```tsx
<Button loading>
  Save
</Button>
```

When loading is enabled:

- The button becomes disabled.
- A loading spinner is displayed.
- `aria-busy` is set to `true`.
- The button cannot be activated.

This is useful for operations such as submitting forms, saving data, or waiting for an API response.

[Open Loading State in Playground](/playground/button?focusId=button-states&innerFocusId=button-state-loading)

---

## Disabled State

Use `disabled` when the user should not be able to activate the button.

```tsx
<Button disabled>
  Save
</Button>
```

The button sets both the native `disabled` attribute and `aria-disabled`.

[Open Disabled State in Playground](/playground/button?focusId=button-states&innerFocusId=button-state-disabled)

---

## Full Width

Use `fullWidth` when the button should occupy the available horizontal space of its parent container.

```tsx
<Button fullWidth>
  Continue
</Button>
```

This is useful for mobile layouts, form actions, and vertically stacked action groups.

[Open Full Width in Playground](/playground/button?focusId=button-states&innerFocusId=button-state-full-width)

---

## Icons

Buttons can display icons before or after their content using `leftIcon` and `rightIcon`.

### Left Icon

```tsx
import { Save } from "lucide-react";

<Button
  leftIcon={<Save size={18} />}
>
  Save
</Button>
```

### Right Icon

```tsx
import { ArrowRight } from "lucide-react";

<Button
  rightIcon={<ArrowRight size={18} />}
>
  Continue
</Button>
```

### Both Icons

```tsx
import {
  ArrowRight,
  Save,
} from "lucide-react";

<Button
  leftIcon={<Save size={18} />}
  rightIcon={<ArrowRight size={18} />}
>
  Save and Continue
</Button>
```

Icons are rendered as decorative content and are hidden from assistive technologies using `aria-hidden`.

[Open Button Icons in Playground](/playground/button?focusId=button-icons)

---

## Button Without Text

Although buttons can technically be rendered without `children`, icon-only buttons should provide an accessible label through the native `aria-label` attribute.

```tsx
import { Search } from "lucide-react";

<Button
  variant="ghost"
  aria-label="Search"
  leftIcon={<Search size={18} />}
/>
```

When using icon-only buttons, always provide an accessible name.

---

## Button Types

`Button` supports the native HTML button `type` attribute.

The default type is:

```tsx
type="button"
```

### Button

```tsx
<Button type="button">
  Cancel
</Button>
```

### Submit

```tsx
<Button type="submit">
  Submit
</Button>
```

### Reset

```tsx
<Button type="reset">
  Reset
</Button>
```

The default `button` type helps prevent unintended form submission when the component is used inside a form.

---

## Click Handling

Because `ButtonProps` extends the native React button attributes, standard event handlers can be used.

```tsx
<Button
  onClick={() => {
    console.log("Button clicked");
  }}
>
  Click Me
</Button>
```

---

## Loading and Disabled Behavior

The `loading` state automatically behaves as a disabled state.

```tsx
<Button loading>
  Saving...
</Button>
```

Internally, the component treats the button as disabled when either `disabled` or `loading` is enabled.

```text
disabled = true
       OR
loading = true
       ↓
  Button disabled
```

This prevents users from triggering the same asynchronous action multiple times.

---

## Accessibility

`Button` uses the native HTML `<button>` element and preserves standard browser accessibility behavior.

The component also exposes additional state information:

- `aria-disabled` reflects the effective disabled state.
- `aria-busy` indicates when the button is loading.
- Decorative icons use `aria-hidden`.
- Native `type` behavior is preserved.

For icon-only buttons, provide an accessible name:

```tsx
<Button
  aria-label="Search"
  leftIcon={<Search size={18} />}
/>
```

Button content should clearly communicate the action that will be performed.

---

## API

### ButtonProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | Button content |
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger" \| "success" \| "warning"` | `"primary"` | Visual style of the button |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Controls the button size |
| `loading` | `boolean` | `false` | Displays the loading spinner and disables the button |
| `fullWidth` | `boolean` | `false` | Makes the button occupy the available width |
| `leftIcon` | `ReactNode` | — | Content displayed before the button label |
| `rightIcon` | `ReactNode` | — | Content displayed after the button label |
| `disabled` | `boolean` | `false` | Disables the button |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Native HTML button type |
| `className` | `string` | — | Additional CSS class |

In addition to these properties, `Button` supports the standard native React `ButtonHTMLAttributes<HTMLButtonElement>` properties.

---

## Native Button Attributes

Because `ButtonProps` extends the native React button attributes, standard HTML button properties and event handlers can also be used.

For example:

```tsx
<Button
  type="submit"
  name="action"
  value="save"
  onClick={handleClick}
>
  Save
</Button>
```

This allows `Button` to preserve familiar native button behavior while providing a consistent FlowForge API.

---

## Form Usage

`Button` can be used directly inside native forms.

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit">
    Save
  </Button>
</form>
```

For asynchronous form submission:

```tsx
<Button
  type="submit"
  loading={isSubmitting}
>
  Save
</Button>
```

This allows the form logic to control the loading state while the Button handles the corresponding visual and interaction behavior.

---

## Responsive Behavior

The `Button` component can be used within responsive layouts.

For buttons that should occupy the available width:

```tsx
<Button fullWidth>
  Continue
</Button>
```

Higher-level layout components are responsible for defining spacing, alignment, grouping, and responsive positioning.

---

## Design Considerations

`Button` is intentionally kept independent from business-specific logic.

Its primary responsibilities are:

1. Rendering the native button control.
2. Managing visual variants and sizes.
3. Managing loading and disabled states.
4. Supporting icons.
5. Providing accessible state information.
6. Preserving native button behavior.
7. Supporting responsive width behavior.

Business-specific concerns such as API requests, permissions, workflows, validation, and persistence should remain outside the component.

---

## Form Engine Integration

`Button` can be used as an action component inside FlowForge forms and higher-level application workflows.

A higher-level form configuration may eventually describe actions such as:

```ts
{
  type: "button",
  action: "submit",
  label: "Save"
}
```

The Form Builder or Form Engine can resolve the configuration to the corresponding FlowForge Button component.

```text
Form Definition
      ↓
Form Builder
      ↓
Action Registry
      ↓
Button
      ↓
Form Engine
      ↓
Workflow / Submission
```

The Button itself remains independent from the form engine implementation.

---

## Future Improvements

Potential future capabilities include:

- Icon-only button variants
- Additional visual variants
- Link-style buttons
- Button groups
- Loading text support
- Tooltip integration
- Advanced accessibility metadata
- Form Engine action integration
- Permission-aware actions

These capabilities should be introduced only when required by the FlowForge architecture.

---

## Related Components

- [Input](/docs/components/input)
- [Select](/docs/components/select)
- [Checkbox](/docs/components/checkbox)
- [Textarea](/docs/components/textarea)
- [FieldWrapper](/docs/components/field-wrapper)