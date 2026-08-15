# CollapseGroup

The `CollapseGroup` component is a reusable state-management component designed to coordinate multiple `Collapse` items within FlowForge interfaces and forms.

It provides a consistent API for managing active Collapse items while supporting single-open and multiple-open behavior, controlled and uncontrolled usage, default active items, stable item IDs, and documentation-friendly navigation.

---

## Overview

`CollapseGroup` is a core UI component of FlowForge.

It is designed to coordinate multiple `Collapse` components that belong to the same logical group.

Instead of managing each Collapse independently, `CollapseGroup` provides a single place to manage which items are currently active.

### Key Features

- Coordinates multiple `Collapse` items
- Single-open mode
- Multiple-open mode
- Controlled active state
- Uncontrolled active state
- Default active items
- Empty active state
- Active state change callback
- Stable Collapse IDs
- Programmatic control
- Responsive layout
- Integration with FlowForge Playground navigation

---

## Import

```tsx
import {
  Collapse,
  CollapseGroup,
} from "@/shared/ui";
```

---

## Basic Usage

The simplest way to use `CollapseGroup` is to place multiple `Collapse` components inside it.

```tsx
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
```

The `CollapseGroup` coordinates the state of its child Collapse items.

---

## Multiple Open

Use `multiple` when several Collapse items should be allowed to remain open at the same time.

```tsx
<CollapseGroup multiple>
  <Collapse
    id="multiple-one"
    title="First Item"
  >
    <p>
      First item content.
    </p>
  </Collapse>

  <Collapse
    id="multiple-two"
    title="Second Item"
  >
    <p>
      Second item content.
    </p>
  </Collapse>

  <Collapse
    id="multiple-three"
    title="Third Item"
  >
    <p>
      Third item content.
    </p>
  </Collapse>
</CollapseGroup>
```

When `multiple` is enabled, opening one item does not close other active items.

[Open Multiple Open in Playground](/playground/collapse-group?focusId=collapse-group-multiple)

---

## Single Open Mode

When `multiple` is disabled, only one Collapse item can remain open.

```tsx
<CollapseGroup multiple={false}>
  <Collapse
    id="single-one"
    title="First Item"
  >
    <p>
      First item content.
    </p>
  </Collapse>

  <Collapse
    id="single-two"
    title="Second Item"
  >
    <p>
      Second item content.
    </p>
  </Collapse>

  <Collapse
    id="single-three"
    title="Third Item"
  >
    <p>
      Third item content.
    </p>
  </Collapse>
</CollapseGroup>
```

Opening another item automatically removes the previously active item.

[Open Single Open in Playground](/playground/collapse-group?focusId=collapse-group-single)

---

## Default Active Items

Use `defaultActiveIds` to define which Collapse items should initially be open.

```tsx
<CollapseGroup
  defaultActiveIds={[
    "default-one",
    "default-two",
  ]}
  multiple
>
  <Collapse
    id="default-one"
    title="Initially Open One"
  >
    <p>
      This item starts open.
    </p>
  </Collapse>

  <Collapse
    id="default-two"
    title="Initially Open Two"
  >
    <p>
      This item also starts open.
    </p>
  </Collapse>

  <Collapse
    id="default-three"
    title="Initially Closed"
  >
    <p>
      This item starts closed.
    </p>
  </Collapse>
</CollapseGroup>
```

When `multiple` is disabled, only one initial ID should be active.

[Open Default Active Items in Playground](/playground/collapse-group?focusId=collapse-group-default-active)

---

## No Active Items

A group can start with all Collapse items closed.

```tsx
<CollapseGroup
  defaultActiveIds={[]}
  multiple
>
  <Collapse
    id="empty-one"
    title="First Item"
  >
    <p>
      This item starts closed.
    </p>
  </Collapse>

  <Collapse
    id="empty-two"
    title="Second Item"
  >
    <p>
      This item also starts closed.
    </p>
  </Collapse>
</CollapseGroup>
```

This is useful when the user should explicitly choose which section to open.

[Open No Active Items in Playground](/playground/collapse-group?focusId=collapse-group-empty)

---

## Controlled Group

`CollapseGroup` supports controlled state through `activeIds` and `onChange`.

```tsx
import { useState } from "react";
import {
  Collapse,
  CollapseGroup,
} from "@/shared/ui";

export default function Example() {
  const [activeIds, setActiveIds] =
    useState<string[]>([
      "controlled-one",
    ]);

  return (
    <CollapseGroup
      activeIds={activeIds}
      multiple={false}
      onChange={setActiveIds}
    >
      <Collapse
        id="controlled-one"
        title="First Item"
      >
        <p>
          First item content.
        </p>
      </Collapse>

      <Collapse
        id="controlled-two"
        title="Second Item"
      >
        <p>
          Second item content.
        </p>
      </Collapse>
    </CollapseGroup>
  );
}
```

The parent component becomes responsible for the active state.

[Open Controlled Group in Playground](/playground/collapse-group?focusId=collapse-group-controlled)

---

## Programmatic Control

A controlled `CollapseGroup` can be manipulated programmatically.

For example, buttons can explicitly select which item is active.

```tsx
import { useState } from "react";
import {
  Collapse,
  CollapseGroup,
} from "@/shared/ui";

export default function Example() {
  const [activeIds, setActiveIds] =
    useState<string[]>([]);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() =>
            setActiveIds([
              "item-one",
            ])
          }
        >
          Open First
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveIds([
              "item-two",
            ])
          }
        >
          Open Second
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveIds([])
          }
        >
          Close All
        </button>
      </div>

      <CollapseGroup
        activeIds={activeIds}
        multiple={false}
        onChange={setActiveIds}
      >
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
    </>
  );
}
```

This pattern is useful when external application state needs to determine which section is visible.

---

## Open All and Close All

When `multiple` is enabled, a controlled group can open all items at once.

```tsx
const ids = [
  "item-one",
  "item-two",
  "item-three",
];

setActiveIds(ids);
```

To close all items:

```tsx
setActiveIds([]);
```

For single-open mode, only one ID should be provided:

```tsx
setActiveIds([
  "item-one",
]);
```

---

## Active State Change

Use `onChange` to receive changes to the active Collapse IDs.

```tsx
<CollapseGroup
  onChange={(activeIds) => {
    console.log(activeIds);
  }}
>
  <Collapse
    id="item-one"
    title="First Item"
  >
    <p>
      First item.
    </p>
  </Collapse>

  <Collapse
    id="item-two"
    title="Second Item"
  >
    <p>
      Second item.
    </p>
  </Collapse>
</CollapseGroup>
```

The callback receives the complete list of currently active Collapse IDs.

---

## Stable Collapse IDs

Every Collapse inside a group should have a unique and stable `id`.

```tsx
<CollapseGroup>
  <Collapse
    id="profile"
    title="Profile"
  >
    <p>
      Profile content.
    </p>
  </Collapse>

  <Collapse
    id="security"
    title="Security"
  >
    <p>
      Security content.
    </p>
  </Collapse>
</CollapseGroup>
```

Stable IDs are important for:

- Controlled state
- Default active state
- Programmatic navigation
- Documentation Playground links
- External state management
- Future persistence mechanisms

---

## Controlled vs Uncontrolled Usage

`CollapseGroup` supports both controlled and uncontrolled state management.

### Uncontrolled

Use `defaultActiveIds` when the group only needs an initial state.

```tsx
<CollapseGroup
  defaultActiveIds={[
    "item-one",
  ]}
>
  <Collapse
    id="item-one"
    title="First Item"
  >
    <p>
      First item is initially open.
    </p>
  </Collapse>

  <Collapse
    id="item-two"
    title="Second Item"
  >
    <p>
      Second item starts closed.
    </p>
  </Collapse>
</CollapseGroup>
```

The group manages its state internally after initialization.

### Controlled

Use `activeIds` and `onChange` when the parent needs to manage the active state.

```tsx
<CollapseGroup
  activeIds={activeIds}
  onChange={setActiveIds}
>
  <Collapse
    id="item-one"
    title="First Item"
  >
    <p>
      First item.
    </p>
  </Collapse>

  <Collapse
    id="item-two"
    title="Second Item"
  >
    <p>
      Second item.
    </p>
  </Collapse>
</CollapseGroup>
```

---

## Interactive Example

A common use case is providing controls that change the behavior of the group.

```tsx
import { useState } from "react";
import {
  Collapse,
  CollapseGroup,
} from "@/shared/ui";

export default function Example() {
  const ids = [
    "item-one",
    "item-two",
    "item-three",
  ];

  const [activeIds, setActiveIds] =
    useState<string[]>([
      "item-one",
    ]);

  const [multiple, setMultiple] =
    useState(true);

  const handleMultipleChange = (
    enabled: boolean
  ) => {
    setMultiple(enabled);

    if (!enabled) {
      setActiveIds((currentIds) =>
        currentIds.length > 0
          ? [currentIds[0]]
          : []
      );
    }
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={multiple}
          onChange={(event) =>
            handleMultipleChange(
              event.target.checked
            )
          }
        />

        Multiple Open
      </label>

      <button
        type="button"
        onClick={() =>
          setActiveIds(
            multiple
              ? ids
              : [ids[0]]
          )
        }
      >
        Open All
      </button>

      <button
        type="button"
        onClick={() =>
          setActiveIds([])
        }
      >
        Close All
      </button>

      <CollapseGroup
        activeIds={activeIds}
        multiple={multiple}
        onChange={setActiveIds}
      >
        <Collapse
          id="item-one"
          title="Item One"
        >
          <p>
            First item.
          </p>
        </Collapse>

        <Collapse
          id="item-two"
          title="Item Two"
        >
          <p>
            Second item.
          </p>
        </Collapse>

        <Collapse
          id="item-three"
          title="Item Three"
        >
          <p>
            Third item.
          </p>
        </Collapse>
      </CollapseGroup>
    </>
  );
}
```

[Open Interactive Example in Playground](/playground/collapse-group?focusId=collapse-group-interactive)

---

## Focused Playground Sections

The FlowForge Playground supports opening a specific documentation section through its `focusId`.

Each Playground section has a stable `focusId` that maps directly to the corresponding outer `Collapse` in the `CollapseGroupDemo`.

The focused Playground links are placed alongside the relevant documentation sections so that each example can be opened directly.

---

## Inner Focus

Some Playground sections may contain multiple independently addressable examples.

In those cases, the route can provide both `focusId` and `innerFocusId`.

```text
/playground/collapse-group?focusId=collapse-group-example&innerFocusId=example-two
```

The `focusId` identifies the main Playground section.

The `innerFocusId` identifies a specific example inside that section.

This mechanism should only be used when a section genuinely contains multiple independently addressable examples.

The current `CollapseGroup` Playground does not require `innerFocusId` because each main example already has its own stable `focusId`.

---

## Accessibility

`CollapseGroup` coordinates state but does not replace the accessibility behavior provided by the individual `Collapse` components.

Each Collapse should have:

- A meaningful title
- A stable ID
- Keyboard-accessible interaction
- A clear visual open/closed state

```tsx
<CollapseGroup>
  <Collapse
    id="accessibility-one"
    title="Personal Information"
  >
    <p>
      Personal information content.
    </p>
  </Collapse>

  <Collapse
    id="accessibility-two"
    title="Security Settings"
  >
    <p>
      Security settings content.
    </p>
  </Collapse>
</CollapseGroup>
```

---

## Responsive Behavior

`CollapseGroup` is designed to work inside responsive FlowForge layouts.

```tsx
<div style={{ width: "100%" }}>
  <CollapseGroup>
    <Collapse
      id="responsive-one"
      title="Responsive Section"
    >
      <p>
        Responsive content.
      </p>
    </Collapse>

    <Collapse
      id="responsive-two"
      title="Another Section"
    >
      <p>
        More responsive content.
      </p>
    </Collapse>
  </CollapseGroup>
</div>
```

The surrounding layout system is responsible for page-level spacing and responsive positioning.

---

## API

### CollapseGroupProps

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `false` | Allows multiple Collapse items to remain open |
| `defaultActiveIds` | `string[]` | `[]` | IDs of items initially opened |
| `activeIds` | `string[]` | — | Controls the currently active Collapse IDs |
| `onChange` | `(activeIds: string[]) => void` | — | Callback triggered when the active IDs change |
| `children` | `ReactNode` | — | Collapse components managed by the group |

---

## Group Behavior

The behavior of the group can be summarized as follows:

| Mode | Behavior |
| --- | --- |
| `multiple={false}` | Only one item can remain open |
| `multiple={true}` | Multiple items can remain open |
| `defaultActiveIds` | Defines the initial active items |
| `activeIds` | Controls the active items externally |
| `onChange` | Reports active item changes |

---

## Validation and Form Integration

`CollapseGroup` does not implement business-specific validation.

It is responsible for coordinating the visual and interaction state of Collapse components.

Form validation, dependencies, conditional rendering, persistence, and submission remain responsibilities of the FlowForge Form Engine.

A group can nevertheless be used to organize related form sections.

```tsx
<CollapseGroup>
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

  <Collapse
    id="contact-information"
    title="Contact Information"
  >
    <Input
      label="Email"
    />
  </Collapse>
</CollapseGroup>
```

---

## Playground

The interactive Playground provides examples of the main `CollapseGroup` capabilities.

[Open CollapseGroup Playground](/playground/collapse-group)

---

## Related Components

- [Collapse](/docs/components/collapse)
- [Input](/docs/components/input)
- [Textarea](/docs/components/textarea)
- [Select](/docs/components/select)

---

## Design Considerations

`CollapseGroup` is intentionally focused on coordinating Collapse state rather than implementing business logic.

Its responsibilities are primarily:

1. Managing active Collapse IDs.
2. Supporting controlled and uncontrolled usage.
3. Supporting single-open behavior.
4. Supporting multiple-open behavior.
5. Providing initial active state.
6. Reporting state changes.
7. Coordinating multiple Collapse components.
8. Providing stable state management based on Collapse IDs.

Higher-level concerns such as validation, dependencies, persistence, conditional rendering, and submission belong to the FlowForge Form Engine.

---

## Future Improvements

Potential future capabilities include:

- Persistent active state
- URL synchronization
- Advanced keyboard navigation
- Additional group interaction modes
- Animation coordination
- Form Engine dependency integration
- Schema-driven CollapseGroup configuration

These capabilities should only be introduced when required by the broader FlowForge architecture.

---

## Architecture Note

The `CollapseGroup` component belongs to the FlowForge UI layer.

It should remain independent from backend and database implementations.

```text
┌──────────────────────────────┐
│          FlowForge UI        │
│                              │
│ Collapse / CollapseGroup     │
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