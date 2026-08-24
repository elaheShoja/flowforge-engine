# Flag

The `Flag` component is a reusable visual component for displaying country flags from the FlowForge flag registry.

It provides a consistent API for rendering flags by country code while keeping flag assets separated from the component implementation.

The component is designed to be reusable across FlowForge components and applications that consume the FlowForge UI layer.

---

## Overview

`Flag` is part of the FlowForge UI component system.

Instead of importing individual flag assets directly into components, `Flag` provides a centralized API for resolving and rendering registered country flags.

This allows components such as phone selectors, country selectors, address components, and other future components to reuse the same flag infrastructure.

### Key Features

- Country flag support
- Centralized flag registry
- Type-based flag resolution
- Strongly typed country codes
- Configurable size
- Custom CSS classes
- Custom inline styles
- Accessible labels
- Optional titles
- Reusable across FlowForge components
- Extensible for future flag types

[Open Flag Playground](/playground/flag)

---

## Import

```tsx
import { Flag } from "@/engine/components";
```

---

## Basic Usage

The simplest way to render a country flag is to provide its type and country code.

```tsx
<Flag
  type="country"
  code="DE"
/>
```

[Open Basic Usage in Playground](/playground/flag?focusId=flag-basic-usage)

---

## Interactive Playground

The interactive playground allows consumers to experiment with the `Flag` component without changing application code.

The playground provides controls for:

- Flag type
- Country code
- Size
- Title
- ARIA label

The selected country and size are reflected immediately in the preview.

[Open Interactive Playground](/playground/flag?focusId=flag-interactive)

---

## Flag Types

The `Flag` component uses a type-based architecture.

```ts
export type FlagType =
  | "country";
```

The `type` property determines which flag registry is used to resolve the requested asset.

For example:

```tsx
<Flag
  type="country"
  code="DE"
/>
```

The type-based architecture allows additional flag categories to be introduced in the future without changing the basic component API.

---

## Country Flags

Country flags are currently supported through the `country` flag type.

```tsx
<Flag
  type="country"
  code="DE"
/>
```

Several country flags can be displayed together:

```tsx
<Flag
  type="country"
  code="DE"
/>

<Flag
  type="country"
  code="IR"
/>

<Flag
  type="country"
  code="US"
/>

<Flag
  type="country"
  code="GB"
/>
```

The playground includes examples grouped into common countries, Europe, and Asia.

[Open Country Flags in Playground](/playground/flag?focusId=flag-country-flags&innerFocusId=flag-country-common)

### Common Countries

[Open Common Countries in Playground](/playground/flag?focusId=flag-country-flags&innerFocusId=flag-country-common)

### Europe

[Open Europe in Playground](/playground/flag?focusId=flag-country-flags&innerFocusId=flag-country-europe)

### Asia

[Open Asia in Playground](/playground/flag?focusId=flag-country-flags&innerFocusId=flag-country-asia)

---

## Sizes

The `size` property controls the rendered width and height of the flag.

```tsx
<Flag
  type="country"
  code="DE"
  size={24}
/>
```

The default size is `18`.

The playground demonstrates three common sizes.

### Small

```tsx
<Flag
  type="country"
  code="DE"
  size={16}
/>
```

[Open Small Size in Playground](/playground/flag?focusId=flag-sizes&innerFocusId=flag-size-small)

### Medium

```tsx
<Flag
  type="country"
  code="DE"
  size={24}
/>
```

[Open Medium Size in Playground](/playground/flag?focusId=flag-sizes&innerFocusId=flag-size-medium)

### Large

```tsx
<Flag
  type="country"
  code="DE"
  size={36}
/>
```

[Open Large Size in Playground](/playground/flag?focusId=flag-sizes&innerFocusId=flag-size-large)

[Open Flag Sizes in Playground](/playground/flag?focusId=flag-sizes)

---

## Country Flag Codes

Country flags are strongly typed through `CountryFlagCode`.

```ts
export type CountryFlagCode =
  keyof typeof countryFlags;
```

This means consumers can only provide country codes that are registered in the FlowForge country flag registry when using TypeScript.

For example:

```tsx
<Flag
  type="country"
  code="DE"
/>
```

An unsupported code produces a TypeScript error when the component is used in a TypeScript project.

[Open Country Flags in Playground](/playground/flag?focusId=flag-country-flags)

---

## Flag Asset Architecture

Flag assets are separated from the `Flag` component.

The current structure is based on the country flag registry:

```text
src/
└── engine/
    └── assets/
        └── flags/
            ├── index.ts
            └── country/
                └── index.ts
```

The `country` registry exposes the available country flag components.

The root `flags/index.ts` exposes the available flag registries to the rest of the engine.

This keeps the flag assets independent from the `Flag` component implementation.

---

## Country Flag Registry

Country flags are registered through the country flag index.

The registry is built from the country flag components provided by `country-flag-icons`.

```ts
import {
  DE,
  IR,
  US,
  GB,
} from "country-flag-icons/react/3x2";

export const countryFlags = {
  DE,
  IR,
  US,
  GB,
} as const;

export type CountryFlagCode =
  keyof typeof countryFlags;
```

The actual registry contains the supported country codes.

The `Flag` component resolves the requested country code through this registry:

```ts
const FlagComponent = countryFlags[code];
```

This keeps individual flag assets out of consuming components.

---

## Custom Class

Use `className` when additional styling is required.

```tsx
<Flag
  type="country"
  code="DE"
  className="my-flag"
/>
```

The class is applied to the rendered SVG element together with the default `ff-flag` class.

---

## Custom Style

Inline styles can also be provided.

```tsx
<Flag
  type="country"
  code="DE"
  size={24}
  style={{
    marginRight: 8,
  }}
/>
```

The `style` property is forwarded to the rendered SVG element.

---

## Title

Use `title` when a textual title is useful for the rendered flag.

```tsx
<Flag
  type="country"
  code="DE"
  title="Germany"
/>
```

The title value is also used as the fallback accessible label when `ariaLabel` is not provided.

---

## Accessibility

The rendered flag uses:

```html
role="img"
```

and the accessible label is resolved in the following order:

```text
ariaLabel
    ↓
title
```

For example:

```tsx
<Flag
  type="country"
  code="DE"
  ariaLabel="Germany flag"
/>
```

If only `title` is provided:

```tsx
<Flag
  type="country"
  code="DE"
  title="Germany"
/>
```

the title value is used as the accessible label.

If the flag is purely decorative and the surrounding UI already communicates the same information, no accessible label needs to be provided.

For example:

```tsx
<div>
  <Flag
    type="country"
    code="DE"
  />

  <span>Germany</span>
</div>
```

In this case, the visible text already communicates the country name.

The playground includes a dedicated accessibility example.

[Open Accessibility Example in Playground](/playground/flag?focusId=flag-accessibility)

---

## API

### FlagProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"country"` | — | Determines the flag registry used by the component |
| `code` | `CountryFlagCode` | — | Registered country flag code |
| `size` | `number` | `18` | Controls the rendered width and height |
| `className` | `string` | — | Additional CSS class |
| `title` | `string` | — | Optional textual title and accessible-label fallback |
| `ariaLabel` | `string` | — | Accessible label for the rendered flag |
| `style` | `React.CSSProperties` | — | Inline SVG styles |
| `children` | `ReactNode` | — | Reserved for future extensibility |

---

## CountryFlagCode

`CountryFlagCode` is generated directly from the registered country flag assets.

```ts
export type CountryFlagCode =
  keyof typeof countryFlags;
```

This keeps the public TypeScript API synchronized with the available country flag registry.

For example:

```tsx
<Flag
  type="country"
  code="DE"
/>
```

---

## Usage in Other Components

`Flag` is intentionally implemented as a general-purpose visual component rather than a phone-specific component.

For example, a future phone selector can reuse it:

```tsx
<Flag
  type="country"
  code="DE"
  size={18}
/>
```

The phone component is responsible for country selection and phone-specific behavior, while `Flag` remains responsible only for rendering the visual flag.

This allows other components to reuse the same flag infrastructure.

[Open Interactive Playground](/playground/flag?focusId=flag-interactive)

---

## Design Considerations

The `Flag` component intentionally separates three responsibilities:

```text
Flag Component
      ↓
Flag Registry
      ↓
Flag Assets
```

The component handles rendering.

The registry handles resolving a country code to a flag component.

The assets provide the actual SVG resources.

This separation prevents individual components from importing and managing flag assets directly.

---

## Form Engine Integration

`Flag` is not itself a form field.

It is a reusable visual primitive that can be consumed by form components and Form Engine implementations.

For example, a future phone field could internally use:

```text
Phone Field
    ↓
Country Selector
    ↓
Flag
    ↓
Country Flag Registry
```

This keeps the flag rendering system independent from phone-specific behavior.

---

## Architecture

The flag system follows the FlowForge UI architecture:

```text
┌──────────────────────────────┐
│        FlowForge UI          │
│                              │
│            Flag              │
│             ↓                │
│       Flag Registry          │
│             ↓                │
│        Flag Assets           │
└──────────────┬───────────────┘
               │
               ↓
┌──────────────────────────────┐
│       Reusable Components    │
│                              │
│ Phone Selector               │
│ Country Selector             │
│ Address Components           │
│ Other Future Components      │
└──────────────────────────────┘
```

The `Flag` component therefore remains independent of higher-level business logic.

---

## Future Improvements

Potential future capabilities include:

- Additional flag categories
- Shared country metadata
- Reusable country selectors
- Optimized asset loading
- Lazy-loaded flag registries
- Additional accessibility helpers
- A dedicated FlowForge tooltip implementation

These capabilities can be introduced without coupling `Flag` to a specific business component.

---

## Related Components

- [Input](/docs/components/input)
- [InputType](/docs/components/input-type)
- [Select](/docs/components/select)
- [FieldWrapper](/docs/components/field-wrapper)
- [Collapse](/docs/components/collapse)
- [Collapse Group](/docs/components/collapse-group)

[Open Flag Playground](/playground/flag)