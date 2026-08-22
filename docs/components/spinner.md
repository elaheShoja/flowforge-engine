# Spinner

A reusable loading indicator for displaying asynchronous progress and loading states.

The `Spinner` component provides a consistent visual indication that an operation is currently in progress. It supports multiple sizes, visual variants, accessible labels, and fullscreen display.

[Open Spinner in Playground](/playground/spinner)

---

## Overview

The Spinner component can be used whenever an application needs to communicate that content or an operation is loading.

Common use cases include:

- Loading data from an API
- Loading page content
- Submitting forms
- Processing asynchronous operations
- Waiting for background operations
- Displaying fullscreen loading states

```tsx
import { Spinner } from "@/engine/components";

export default function Example() {
  return <Spinner />;
}
```

[Open Overview in Playground](/playground/spinner?focusId=spinner-interactive)

---

## Basic Usage

The simplest way to use Spinner is to render it without any additional properties.

```tsx
import { Spinner } from "@/engine/components";

export default function Example() {
  return <Spinner />;
}
```

By default, Spinner uses the `md` size and `primary` variant.

[Open Basic Usage in Playground](/playground/spinner?focusId=spinner-basic-usage)

---

## Sizes

Spinner supports five predefined sizes:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

The default size is `md`.

```tsx
import { Spinner } from "@/engine/components";

export default function Example() {
  return (
    <div>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}
```

[Open Sizes in Playground](/playground/spinner?focusId=spinner-sizes)

### Extra Small

```tsx
<Spinner size="xs" />
```

[Open Extra Small in Playground](/playground/spinner?focusId=spinner-sizes&innerFocusId=spinner-size-xs)

### Small

```tsx
<Spinner size="sm" />
```

[Open Small in Playground](/playground/spinner?focusId=spinner-sizes&innerFocusId=spinner-size-sm)

### Medium

```tsx
<Spinner size="md" />
```

[Open Medium in Playground](/playground/spinner?focusId=spinner-sizes&innerFocusId=spinner-size-md)

### Large

```tsx
<Spinner size="lg" />
```

[Open Large in Playground](/playground/spinner?focusId=spinner-sizes&innerFocusId=spinner-size-lg)

### Extra Large

```tsx
<Spinner size="xl" />
```

[Open Extra Large in Playground](/playground/spinner?focusId=spinner-sizes&innerFocusId=spinner-size-xl)

---

## Variants

Spinner provides three visual variants:

- `primary`
- `secondary`
- `light`

The default variant is `primary`.

```tsx
import { Spinner } from "@/engine/components";

export default function Example() {
  return (
    <div>
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="light" />
    </div>
  );
}
```

[Open Variants in Playground](/playground/spinner?focusId=spinner-variants)

### Primary

The `primary` variant is intended for standard loading states.

```tsx
<Spinner variant="primary" />
```

[Open Primary in Playground](/playground/spinner?focusId=spinner-variants&innerFocusId=spinner-variant-primary)

### Secondary

The `secondary` variant provides a less prominent loading indicator.

```tsx
<Spinner variant="secondary" />
```

[Open Secondary in Playground](/playground/spinner?focusId=spinner-variants&innerFocusId=spinner-variant-secondary)

### Light

The `light` variant is useful on dark or visually strong backgrounds.

```tsx
<Spinner variant="light" />
```

[Open Light in Playground](/playground/spinner?focusId=spinner-variants&innerFocusId=spinner-variant-light)

---

## Loading State

Spinner is commonly used while an asynchronous operation is being processed.

For example, an application can display a spinner while loading data:

```tsx
import { Spinner } from "@/engine/components";

export default function CustomerList() {
  return (
    <div>
      <Spinner size="sm" />
      <span>Loading customers...</span>
    </div>
  );
}
```

The spinner can also be combined with other FlowForge components.

```tsx
import {
  Button,
  Spinner,
} from "@/engine/components";

export default function Example() {
  return (
    <Button disabled>
      <Spinner
        size="sm"
        variant="light"
      />
      Saving...
    </Button>
  );
}
```

[Open Loading State in Playground](/playground/spinner?focusId=spinner-loading)

---

## Fullscreen

Set `fullscreen` to `true` when the entire page or application needs to display a loading state.

```tsx
import { Spinner } from "@/engine/components";

export default function Example() {
  return (
    <Spinner
      fullscreen
      size="lg"
    />
  );
}
```

This is useful during:

- Initial application loading
- Route transitions
- Authentication checks
- Large data operations
- Application initialization

[Open Fullscreen in Playground](/playground/spinner?focusId=spinner-fullscreen)

---

## Accessibility

Spinner exposes its loading state through semantic accessibility attributes.

The root element uses:

```tsx
role="status"
```

and:

```tsx
aria-live="polite"
```

The component also provides an accessible label.

By default, the label is retrieved from the application's translation system:

```tsx
const spinnerLabel =
  label ?? t("loading");
```

A custom label can be provided when the loading operation needs more context.

```tsx
<Spinner
  label="Loading customer data"
/>
```

The visual loading text is hidden while remaining available to assistive technologies.

[Open Accessibility in Playground](/playground/spinner?focusId=spinner-accessibility)

---

## Custom Loading Labels

Use the `label` property when the default `Loading` label is not specific enough.

```tsx
<Spinner
  label="Loading orders"
/>
```

For example:

```tsx
<Spinner
  size="lg"
  label="Loading customer information"
/>
```

This helps users of assistive technologies understand what operation is currently in progress.

---

## Custom Styling

Spinner accepts a `className` property for additional styling.

```tsx
import { Spinner } from "@/engine/components";

export default function Example() {
  return (
    <Spinner
      size="lg"
      className="custom-spinner"
    />
  );
}
```

Because `SpinnerProps` extends `HTMLAttributes<HTMLSpanElement>`, additional standard HTML attributes can also be passed to the component.

```tsx
<Spinner
  data-testid="loading-spinner"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Controls the spinner size. |
| `variant` | `"primary" \| "secondary" \| "light"` | `"primary"` | Controls the visual appearance. |
| `label` | `string` | `t("loading")` | Accessible loading label. |
| `fullscreen` | `boolean` | `false` | Displays the spinner as a fullscreen loading indicator. |
| `className` | `string` | — | Additional CSS classes. |

Spinner also supports standard HTML attributes inherited from `HTMLAttributes<HTMLSpanElement>`.

---

## API Reference

### SpinnerProps

```tsx
export interface SpinnerProps
  extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  fullscreen?: boolean;
}
```

### SpinnerSize

```tsx
export type SpinnerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";
```

### SpinnerVariant

```tsx
export type SpinnerVariant =
  | "primary"
  | "secondary"
  | "light";
```

---

## Usage Examples

### Loading Content

```tsx
<div className="loading-container">
  <Spinner />
</div>
```

### Small Inline Spinner

```tsx
<div>
  <Spinner size="sm" />
  <span>Loading...</span>
</div>
```

### Large Loading Indicator

```tsx
<Spinner size="lg" />
```

### Fullscreen Loading

```tsx
<Spinner
  fullscreen
  size="lg"
/>
```

### Custom Accessible Label

```tsx
<Spinner
  label="Loading customer records"
/>
```

---

## Summary

Spinner provides a reusable and accessible loading indicator for FlowForge applications.

It supports:

- Five predefined sizes
- Three visual variants
- Fullscreen loading
- Custom accessibility labels
- Custom CSS classes
- Standard HTML attributes
- Integration with other FlowForge components
- Internationalized loading labels

[Open Spinner in Playground](/playground/spinner)

---

## Related Components

- [Button](/docs/components/button)
- [Input](/docs/components/input)
- [Select](/docs/components/select)
- [Search Input](/docs/components/search-input)
- [Password Input](/docs/components/password-input)

---