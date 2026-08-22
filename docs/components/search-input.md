# Search Input

The `SearchInput` component is a reusable search field built on top of the FlowForge `Input` component.

It provides a consistent search experience with a built-in search icon, native search input behavior, clearable support, sizing, validation states, and the same form integration capabilities provided by `Input`.

---

## Overview

`SearchInput` is designed for search fields throughout FlowForge applications.

It extends the `Input` component while providing search-specific behavior:

- Native `search` input type
- Built-in search icon
- Custom start adornment support
- Clearable search
- Labels
- Helper text
- Validation errors
- Required state
- Disabled state
- Small, medium, and large sizes
- Full-width layout
- Controlled and uncontrolled usage
- Native input attributes
- React ref support
- Field wrapper integration

Because `SearchInput` is built on top of `Input`, it inherits the common input behavior and visual system of the FlowForge form components.

---

## Import

```tsx
import { SearchInput } from "@/engine/components";
```

---

## Basic Usage

The simplest way to use `SearchInput` is to provide a label and placeholder.

```tsx
<SearchInput
  label="Search"
  placeholder="Search..."
/>
```

The component automatically displays a search icon at the beginning of the input.

[Open Basic Usage in Playground](/playground/search-input?focusId=search-input-basic-usage)

---

## Controlled Search

`SearchInput` supports the standard React controlled input pattern.

```tsx
import { useState } from "react";
import { SearchInput } from "@/engine/components";

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <SearchInput
      label="Search"
      value={value}
      onChange={(event) =>
        setValue(event.target.value)
      }
      placeholder="Search..."
    />
  );
}
```

The value is controlled by React state and updated through the native `onChange` event.

This pattern is useful when the search value needs to be connected to filtering, API requests, or other application state.

[Open Controlled Search in Playground](/playground/search-input?focusId=search-input-controlled)

---

## Search Input Type

`SearchInput` always renders the underlying native input with:

```tsx
type="search"
```

This behavior is intentionally built into the component.

Unlike a generic `Input`, consumers do not need to specify the input type themselves.

```tsx
<SearchInput
  label="Search products"
  placeholder="Search products..."
/>
```

The `type` property is excluded from `SearchInputProps` to prevent accidentally changing the component into another type of input.

---

## Search Icon

`SearchInput` provides a search icon automatically.

```tsx
<SearchInput
  label="Search"
  placeholder="Search..."
/>
```

The default icon is provided by `lucide-react`:

```tsx
<Search size={18} />
```

This means consumers do not need to manually add a search icon for the common search-input case.

---

## Custom Start Adornment

The default search icon can be replaced using `startAdornment`.

```tsx
<SearchInput
  label="Search"
  startAdornment={<CustomIcon />}
  placeholder="Search..."
/>
```

When `startAdornment` is provided, it takes precedence over the default search icon.

This allows applications to customize the visual representation of the search field while keeping the underlying search behavior.

---

## Clearable Search

Use `clearable` to display a clear action when the input contains a value.

```tsx
<SearchInput
  label="Search"
  value="FlowForge"
  clearable
  onClear={() => {
    console.log("Search cleared");
  }}
  placeholder="Search..."
/>
```

The clear action is provided by the underlying `Input` component.

When activated, the `onClear` callback is called and the input value can be cleared by the parent component.

A common controlled implementation is:

```tsx
import { useState } from "react";
import { SearchInput } from "@/engine/components";

export default function Example() {
  const [value, setValue] =
    useState("FlowForge");

  return (
    <SearchInput
      label="Search"
      value={value}
      onChange={(event) =>
        setValue(event.target.value)
      }
      clearable
      onClear={() => setValue("")}
      placeholder="Search..."
    />
  );
}
```

[Open Clearable Search in Playground](/playground/search-input?focusId=search-input-clearable)

---

## Sizes

`SearchInput` supports the same three sizes as `Input`.

| Size | Description |
| --- | --- |
| `sm` | Small search input |
| `md` | Medium search input |
| `lg` | Large search input |

### Small

```tsx
<SearchInput
  size="sm"
  label="Small Search"
  placeholder="Search..."
/>
```

### Medium

```tsx
<SearchInput
  size="md"
  label="Medium Search"
  placeholder="Search..."
/>
```

### Large

```tsx
<SearchInput
  size="lg"
  label="Large Search"
  placeholder="Search..."
/>
```

[Open Search Input Sizes in Playground](/playground/search-input?focusId=search-input-sizes)

---

## Disabled State

Use `disabled` when the search field should not be interactive.

```tsx
<SearchInput
  label="Search"
  value="FlowForge"
  disabled
/>
```

Disabled behavior is inherited from the underlying `Input` component.

The field cannot be edited or focused by the user.

[Open Disabled State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-disabled)

---

## Error State

Use `error` to display validation feedback.

```tsx
<SearchInput
  label="Search"
  placeholder="Search..."
  error="Please enter a valid search value."
/>
```

The visual error state and error message are handled by the underlying `Input` and `FieldWrapper` components.

[Open Error State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-error)

---

## Default State

The default state provides the standard SearchInput appearance and behavior.

```tsx
<SearchInput
  label="Search"
  placeholder="Search..."
/>
```

[Open Default State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-default)

---

## Full Width

Use `fullWidth` when the search input should occupy the available width of its parent container.

```tsx
<SearchInput
  label="Search"
  placeholder="Search..."
  fullWidth
/>
```

The `fullWidth` behavior is inherited from `Input`.

```tsx
<SearchInput
  label="Search"
  fullWidth={false}
/>
```

When disabled, the input keeps the non-full-width layout defined by the surrounding component styles.

[Open Interactive SearchInput in Playground](/playground/search-input?focusId=search-input-interactive)

---

## Required Search

`SearchInput` supports the native `required` attribute and the corresponding FlowForge field-wrapper behavior.

```tsx
<SearchInput
  label="Search"
  placeholder="Search..."
  required
/>
```

This is useful when a search field is part of a larger form where a value is required.

---

## Labels and Helper Text

Because `SearchInput` is built on top of `Input`, it supports labels and helper text.

```tsx
<SearchInput
  label="Product Search"
  placeholder="Search products..."
  helperText="Enter a product name or SKU."
/>
```

The field wrapper is responsible for displaying the label and supporting text.

---

## Ref Support

`SearchInput` forwards its ref to the underlying native HTML input element.

```tsx
import { useRef } from "react";
import { SearchInput } from "@/engine/components";

export default function Example() {
  const searchRef =
    useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    searchRef.current?.focus();
  };

  return (
    <>
      <SearchInput
        ref={searchRef}
        label="Search"
        placeholder="Search..."
      />

      <button
        type="button"
        onClick={handleFocus}
      >
        Focus Search
      </button>
    </>
  );
}
```

This allows consumers to use native input methods such as `focus()`.

---

## Without Field Wrapper

`SearchInput` inherits the `withWrapper` property from `Input`.

```tsx
<SearchInput
  placeholder="Search..."
  withWrapper={false}
/>
```

This is useful when the surrounding UI already provides its own label, layout, or field structure.

---

## Input States

`SearchInput` supports common input states through the underlying `Input` component:

- Default
- Focus
- Hover
- Disabled
- Error
- Clearable

### Default

[Open Default State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-default)

### Disabled

[Open Disabled State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-disabled)

### Error

[Open Error State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-error)

[Open Search Input States in Playground](/playground/search-input?focusId=search-input-states)

---

## API

### SearchInputProps

```tsx
interface SearchInputProps
  extends Omit<InputProps, "type"> {
  clearable?: boolean;
}
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `clearable` | `boolean` | `false` | Enables the clear action |
| `startAdornment` | `ReactNode` | Search icon | Custom content displayed before the input |
| `label` | `string` | — | Label displayed for the input |
| `helperText` | `string` | — | Supporting text displayed below the input |
| `error` | `string` | — | Validation error message |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the input size |
| `fullWidth` | `boolean` | `true` | Makes the input occupy the available width |
| `onClear` | `() => void` | — | Callback triggered when the input is cleared |
| `withWrapper` | `boolean` | `true` | Enables or disables the FieldWrapper |

In addition to these properties, `SearchInput` inherits the other supported properties of `Input`.

The native `type` property is intentionally omitted because `SearchInput` always uses:

```tsx
type="search"
```

---

## Native Input Attributes

`SearchInput` inherits the native input attributes supported by `Input`.

For example:

```tsx
<SearchInput
  name="productSearch"
  autoComplete="off"
  maxLength={100}
  placeholder="Search products..."
/>
```

Common properties include:

- `name`
- `value`
- `defaultValue`
- `onChange`
- `disabled`
- `required`
- `readOnly`
- `placeholder`
- `autoComplete`
- `maxLength`

The `type` property is intentionally excluded from `SearchInputProps`.

---

## Accessibility

`SearchInput` uses the native HTML search input behavior provided by:

```tsx
type="search"
```

Labels should clearly describe what the user can search for.

```tsx
<SearchInput
  label="Search products"
  placeholder="Search by name or SKU"
/>
```

The default search icon is decorative UI and does not need to provide additional semantic information.

When replacing the default icon with a custom `startAdornment`, ensure that decorative content does not expose unnecessary information to assistive technologies.

Validation errors and helper text should also be provided through the component's existing field semantics.

---

## Responsive Behavior

`SearchInput` follows the responsive behavior of the underlying `Input` component.

When `fullWidth` is enabled:

```tsx
<SearchInput
  label="Search"
  fullWidth
/>
```

the search field uses the available width of its parent container.

Higher-level layouts are responsible for controlling columns, spacing, and responsive positioning.

---

## Form Engine Integration

`SearchInput` can be used as a reusable field component within the FlowForge Form Engine.

A form definition can describe a search field using configuration such as:

```ts
{
  type: "search-input",
  name: "search",
  label: "Search",
}
```

The Form Builder can resolve the field definition through the component registry.

```text
Form Definition
      ↓
Form Builder
      ↓
Field Registry
      ↓
SearchInput
      ↓
Input
      ↓
Form Engine
      ↓
Validation / State / Dependencies
```

The SearchInput component remains independent from business-specific search logic.

For example, API requests, filtering strategies, debouncing, and server-side search behavior should be handled by higher-level application or form logic.

---

## Search Behavior

`SearchInput` provides the UI primitive for entering search values.

It does not automatically perform:

- API requests
- Filtering
- Debouncing
- Server-side searching
- Query management
- Result rendering
- Pagination

For example:

```tsx
<SearchInput
  value={query}
  onChange={(event) =>
    setQuery(event.target.value)
  }
/>
```

The parent application can use `query` to perform the appropriate search operation.

This separation keeps the component reusable across different search scenarios.

---

## Validation

Validation is intentionally separated from the SearchInput component.

SearchInput is responsible for displaying the validation state:

```tsx
<SearchInput
  label="Search"
  error="Please enter a valid search value."
/>
```

Higher-level form logic can define and execute validation rules.

This allows the same component to be used both independently and as part of a generated FlowForge form.

[Open Validation State in Playground](/playground/search-input?focusId=search-input-states&innerFocusId=search-input-state-error)

---

## Design Considerations

`SearchInput` is intentionally implemented as a specialized wrapper around `Input`.

Its primary responsibilities are:

1. Providing a native search input.
2. Providing a default search icon.
3. Allowing the search icon to be replaced.
4. Supporting clearable search values.
5. Preserving the common Input API.
6. Supporting validation and field states.
7. Supporting React ref access.
8. Integrating with the FlowForge form system.

Search-specific business logic should remain outside the component.

---

## Architecture

The relationship between `SearchInput` and `Input` can be represented as:

```text
┌──────────────────────────────┐
│       FlowForge UI           │
│                              │
│       SearchInput            │
│             ↓                │
│           Input              │
│             ↓                │
│        FieldWrapper          │
│                              │
└──────────────┬───────────────┘
               │
               ↓
┌──────────────────────────────┐
│        Form Engine           │
│                              │
│ Validation / State /         │
│ Dependencies / Configuration │
└──────────────────────────────┘
```

`SearchInput` adds search-specific behavior while reusing the common input infrastructure.

This avoids duplicating input rendering, validation states, sizing, field wrappers, loading behavior, and other shared functionality.

---

## Related Components

- [Input](/docs/components/input)
- [PasswordInput](/docs/components/password-input)
- [Textarea](/docs/components/textarea)
- [Select](/docs/components/select)
- [Checkbox](/docs/components/checkbox)
- [FieldWrapper](/docs/components/field-wrapper)

---

## Future Improvements

Potential future capabilities include:

- Search debounce helpers
- Async search integration
- Advanced search states
- Search suggestions
- Autocomplete integration
- Result interaction patterns
- Form Engine search configuration

These capabilities should remain outside the core SearchInput component unless they become part of the FlowForge component architecture.