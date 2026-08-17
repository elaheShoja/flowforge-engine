
# Collapse

The `Collapse` component is a flexible and reusable disclosure component designed to show and hide content within FlowForge forms, interfaces, and documentation.

It provides a consistent API for expandable content while supporting controlled and uncontrolled usage, disabled state, custom icons, additional header content, and responsive layouts.

---

## Overview

`Collapse` is a core UI component of FlowForge.

It can be used independently or as part of a `CollapseGroup` when multiple Collapse items need to share and coordinate their open state.

### Key Features

- Expandable and collapsible content
- Controlled and uncontrolled usage
- Default open state
- Disabled state
- Custom open and close icons
- Additional end content
- Open state change callback
- Group integration
- Stable item IDs
- Responsive layout
- Accessible disclosure interaction

---

## Import

```tsx
import { Collapse } from "@/engine/components/layout";
```

---

## Basic Usage

The simplest way to use `Collapse` is to provide an `id`, a `title`, and content.

```tsx
<Collapse
  id="basic-collapse"
  title="Basic Collapse"
>
  <p>
    This is the content of the Collapse component.
  </p>
</Collapse>
```

The `id` provides a stable identifier for the Collapse item and is especially useful when the component is used inside a `CollapseGroup`.

[Open Basic Usage in Playground](/playground/collapse?focusId=collapse-basic-usage)

---

## Uncontrolled Collapse

By default, `Collapse` manages its own open state internally.

```tsx
<Collapse
  id="uncontrolled-collapse"
  title="Uncontrolled Collapse"
>
  <p>
    This Collapse manages its open state internally.
  </p>
</Collapse>
```

This is useful when the surrounding application does not need to control the open state.

[Open Default Open in Playground](/playground/collapse?focusId=collapse-default-open)

---

## Default Open

Use `defaultOpen` when the Collapse should initially be open.

```tsx
<Collapse
  id="default-open-collapse"
  title="Initially Open"
  defaultOpen
>
  <p>
    This Collapse is open when it is initially rendered.
  </p>
</Collapse>
```

`defaultOpen` only determines the initial state. After initialization, the Collapse manages its own state.

---

## Controlled Collapse

`Collapse` can also be controlled externally using the `open` property.

```tsx
import { useState } from "react";
import { Collapse } from "@/engine/components/layout";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        Toggle Collapse
      </button>

      <Collapse
        id="controlled-collapse"
        title="Controlled Collapse"
        open={open}
        onOpenChange={(_, nextOpen) => {
          setOpen(nextOpen);
        }}
      >
        <p>
          The open state of this Collapse is controlled
          by React state.
        </p>
      </Collapse>
    </>
  );
}
```

When `open` is provided, the parent component is responsible for managing the open state.

[Open Controlled Collapse in Playground](/playground/collapse?focusId=collapse-controlled)

---

## Open State Change

Use `onOpenChange` to respond to changes in the Collapse state.

```tsx
<Collapse
  id="collapse-events"
  title="Open State Events"
  onOpenChange={(id, open) => {
    console.log(id, open);
  }}
>
  <p>
    The callback is triggered when the Collapse state changes.
  </p>
</Collapse>
```

The callback receives:

- The Collapse `id`
- The new `open` state

---

## Disabled State

Use `disabled` when the Collapse should not be opened or closed through user interaction.

```tsx
<Collapse
  id="disabled-collapse"
  title="Disabled Collapse"
  disabled
>
  <p>
    This content cannot be opened through user interaction.
  </p>
</Collapse>
```

Disabled Collapse items should be used when the content is temporarily unavailable or the interaction should not be permitted.

[Open Disabled in Playground](/playground/collapse?focusId=collapse-disabled)

---

## Custom Icons

The default open and close indicators can be replaced with custom React elements.

### Custom Open Icon

```tsx
<Collapse
  id="custom-open-icon"
  title="Custom Icon"
  openIcon={
    <span aria-hidden="true">
      −
    </span>
  }
>
  <p>
    This Collapse uses a custom open icon.
  </p>
</Collapse>
```

### Custom Close Icon

```tsx
<Collapse
  id="custom-close-icon"
  title="Custom Icon"
  closeIcon={
    <span aria-hidden="true">
      +
    </span>
  }
>
  <p>
    This Collapse uses a custom close icon.
  </p>
</Collapse>
```

### Custom Open and Close Icons

```tsx
<Collapse
  id="custom-icons"
  title="Custom Icons"
  openIcon={
    <span aria-hidden="true">
      −
    </span>
  }
  closeIcon={
    <span aria-hidden="true">
      +
    </span>
  }
>
  <p>
    The open and close indicators are fully customized.
  </p>
</Collapse>
```

Decorative icons should be hidden from assistive technologies when they do not provide additional semantic information.

[Open Custom Icons in Playground](/playground/collapse?focusId=collapse-custom-icons)

---

## End Content

Use `endContent` to display additional content on the right side of the Collapse header.

```tsx
<Collapse
  id="end-content-collapse"
  title="Additional Content"
  endContent={
    <span>
      Optional
    </span>
  }
>
  <p>
    Additional content can be displayed at the end
    of the Collapse header.
  </p>
</Collapse>
```

This can be useful for displaying status information, metadata, badges, or other contextual content.

[Open End Content in Playground](/playground/collapse?focusId=collapse-end-content)

---

## CollapseGroup Integration

`Collapse` can be used inside a `CollapseGroup` when multiple Collapse items need coordinated state management.

```tsx
import {
  Collapse,
  CollapseGroup,
} from "@/engine/components/layout";

export default function Example() {
  return (
    <CollapseGroup>
      <Collapse
        id="group-item-one"
        title="Item One"
      >
        <p>
          Content for item one.
        </p>
      </Collapse>

      <Collapse
        id="group-item-two"
        title="Item Two"
      >
        <p>
          Content for item two.
        </p>
      </Collapse>
    </CollapseGroup>
  );
}
```

The `CollapseGroup` can control whether one or multiple items are open at the same time.

See the `CollapseGroup` documentation for group-level behavior.

---

## Multiple Collapse Items

A group can allow multiple Collapse items to remain open.

```tsx
<CollapseGroup multiple>
  <Collapse
    id="item-one"
    title="First Item"
  >
    <p>
      First item content.
    </p>
  </Collapse>

  <Collapse
    id="item-two"
    title="Second Item"
  >
    <p>
      Second item content.
    </p>
  </Collapse>
</CollapseGroup>
```

When `multiple` is enabled, opening one item does not automatically close other open items.

---

## Single Open Mode

When `multiple` is disabled, only one Collapse item can remain open at a time.

```tsx
<CollapseGroup multiple={false}>
  <Collapse
    id="item-one"
    title="First Item"
  >
    <p>
      First item content.
    </p>
  </Collapse>

  <Collapse
    id="item-two"
    title="Second Item"
  >
    <p>
      Second item content.
    </p>
  </Collapse>
</CollapseGroup>
```

Opening another item automatically closes the currently open item.

---

## Stable IDs

Each Collapse should have a stable and unique `id`.

```tsx
<Collapse
  id="account-settings"
  title="Account Settings"
>
  <p>
    Account settings content.
  </p>
</Collapse>
```

Stable IDs are important when:

- Using `CollapseGroup`
- Controlling active items
- Persisting open state
- Linking documentation sections to the Playground
- Managing programmatic focus and navigation

---

## Accessibility

`Collapse` is designed around standard disclosure interaction.

Use meaningful titles that clearly describe the content that will be revealed.

```tsx
<Collapse
  id="accessibility-example"
  title="Account Information"
>
  <p>
    Your account information is displayed here.
  </p>
</Collapse>
```

When using custom icons, decorative icons should not be exposed as meaningful content to assistive technologies.

Interactive controls should remain keyboard accessible and should provide a clear visual indication of their state.

---

## Responsive Behavior

`Collapse` is designed to work within responsive layouts.

The component does not require a fixed width and can be placed inside responsive containers.

```tsx
<div style={{ width: "100%" }}>
  <Collapse
    id="responsive-collapse"
    title="Responsive Collapse"
  >
    <p>
      This Collapse adapts to the available width.
    </p>
  </Collapse>
</div>
```

Responsive page and form layout should be handled by the surrounding FlowForge layout system.

---

## API

### CollapseProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | Stable unique identifier for the Collapse item |
| `title` | `ReactNode` | — | Content displayed in the Collapse header |
| `children` | `ReactNode` | — | Content displayed when the Collapse is open |
| `open` | `boolean` | — | Controls the open state |
| `defaultOpen` | `boolean` | `false` | Defines the initial open state |
| `onOpenChange` | `(id: string, open: boolean) => void` | — | Callback triggered when the open state changes |
| `disabled` | `boolean` | `false` | Prevents user interaction |
| `openIcon` | `ReactNode` | — | Icon displayed when the Collapse is open |
| `closeIcon` | `ReactNode` | — | Icon displayed when the Collapse is closed |
| `endContent` | `ReactNode` | — | Additional content displayed at the end of the header |

---

## Controlled vs Uncontrolled Usage

`Collapse` supports both controlled and uncontrolled state management.

### Uncontrolled

Use `defaultOpen` when only the initial state needs to be configured.

```tsx
<Collapse
  id="uncontrolled-example"
  title="Uncontrolled"
  defaultOpen
>
  <p>
    The Collapse manages its own state.
  </p>
</Collapse>
```

### Controlled

Use `open` and `onOpenChange` when the parent component needs to manage the state.

```tsx
<Collapse
  id="controlled-example"
  title="Controlled"
  open={open}
  onOpenChange={(_, nextOpen) => {
    setOpen(nextOpen);
  }}
>
  <p>
    The parent controls the open state.
  </p>
</Collapse>
```

The controlled approach is recommended when Collapse state needs to interact with other application state.

---

## Validation and Form Integration

`Collapse` is a UI interaction component and does not implement business-specific validation.

Validation, dependencies, conditional rendering, form state, and submission behavior belong to the FlowForge Form Engine.

A Collapse can nevertheless be used to organize form fields or form sections.

```tsx
<Collapse
  id="personal-information"
  title="Personal Information"
>
  <Input
    label="First name"
  />

  <Input
    label="Last name"
  />
</Collapse>
```

This separation keeps the Collapse component independent from the Form Engine implementation.

---

## Playground

The interactive Playground provides examples of the main `Collapse` capabilities without requiring changes to application code.

[Open Collapse Playground](/playground/collapse?collapse-interactive)

---

## Related Components

- [CollapseGroup](/docs/components/collapse-group)
- [Input](/docs/components/input)
- [Textarea](/docs/components/textarea)
- [Select](/docs/components/select)

---

## Design Considerations

`Collapse` is intentionally focused on disclosure behavior rather than business logic.

Its responsibilities are primarily:

1. Rendering the Collapse structure.
2. Managing or receiving the open state.
3. Providing accessible disclosure interaction.
4. Supporting controlled and uncontrolled usage.
5. Supporting disabled state.
6. Providing customizable header content and icons.
7. Integrating with `CollapseGroup`.

Higher-level concerns such as validation, dependencies, conditional rendering, persistence, and form submission are handled by the FlowForge Form Engine.

---

## Future Improvements

Potential future capabilities include:

- Advanced accessibility metadata
- Animation configuration
- Additional visual variants
- Keyboard interaction enhancements
- Persistence helpers
- Form Engine dependency integration

These capabilities should be introduced only when they are required by the broader FlowForge architecture.

---

## Architecture Note

The `Collapse` component belongs to the FlowForge UI layer.

It should remain independent from backend and database implementations.

```text
┌──────────────────────────────┐
│          FlowForge UI        │
│                              │
│   Collapse / Input / Select  │
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