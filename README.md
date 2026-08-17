<p align="center">
  <img src="./public/branding/flowforge-engine.svg" alt="FlowForge Engine" width="600">
</p>

<h1 align="center">FlowForge Engine</h1>

<p align="center">
  A reusable foundation for building scalable, data-driven business applications.
</p>

<p align="center">
  <strong>Build once. Reuse across projects. Ship faster.</strong>
</p>

---

# What is FlowForge?

FlowForge is an open-source, reusable application foundation designed to make the development of large and scalable business applications faster and easier.

Its primary goal is to provide reusable building blocks for complex applications such as:

- ERP systems
- SaaS platforms
- CRM systems
- Internal business applications
- Workflow-driven applications
- Enterprise dashboards and admin platforms

Instead of rebuilding the same form components, validation logic, dynamic field behavior, documentation, and eventually workflow capabilities for every project, FlowForge aims to provide these capabilities as reusable infrastructure.

```text
                    FlowForge Engine
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
         ERP              SaaS             CRM
          │                │                │
          └────────────────┼────────────────┘
                           │
                    Reusable Foundation
```

The goal is not simply to provide a collection of UI components.

The goal is to **reduce development time, reduce duplication, and make scalable business applications easier to build and maintain.**

---

# Why FlowForge?

Large business applications repeatedly require the same types of infrastructure:

- Dynamic forms
- Complex field dependencies
- Validation
- Conditional logic
- Reusable UI components
- Data-driven interfaces
- Documentation
- Workflow management
- Submission handling
- File management
- Reporting and dashboards

Building these capabilities independently for every ERP, SaaS, or enterprise application increases development time and creates duplicated maintenance costs.

FlowForge aims to solve this problem by providing a reusable foundation that can be integrated into different applications.

```text
Traditional Approach

Project A ──► Build Form System
Project B ──► Build Form System
Project C ──► Build Form System
Project D ──► Build Form System


FlowForge Approach

                 ┌──► ERP
                 │
FlowForge ───────┼──► SaaS
                 │
                 ├──► CRM
                 │
                 └──► Enterprise App
```

Build the foundation once, improve it centrally, and reuse it across multiple products.

---

# Vision

FlowForge is evolving toward a reusable form and workflow foundation for scalable business applications.

The long-term vision includes:

- Dynamic Form Engine
- Form Builder
- Workflow Engine
- Rule Engine
- Submission Engine
- File Management
- Dashboard & Analytics
- Versioned Form Definitions
- Multi-Tenant Architecture
- API-first Design

The project is being developed incrementally, starting with a reusable component and form-engine foundation.

---

# Architecture

FlowForge separates the reusable engine layer from application infrastructure and application-facing pages.

```text
                         FlowForge
                            │
             ┌──────────────┴──────────────┐
             │                             │
        Application                      Engine
             │                             │
     ┌───────┼────────┐              Reusable Core
     │       │        │                    │
    app    pages    config           components
     │       │        │                    │
     │       │        │             ┌──────┼──────┐
     │       │        │             │      │      │
     │       │        │           form   layout primitives
     │       │        │
     │       ├── Documentation
     │       └── Playground
     │
     └── Application Infrastructure

                            │
                         shared
                            │
                  Cross-cutting utilities
                  and reusable infrastructure
```

The architecture is designed to keep the reusable engine independent from application-specific pages such as Documentation and Playground.

This separation is essential for the long-term goal of consuming the engine inside independent ERP, SaaS, CRM, and enterprise applications.

---

# Frontend Architecture

The frontend is organized into the following major layers:

```text
src/
│
├── app/
│   ├── layouts/
│   ├── providers/
│   ├── router/
│   └── App.tsx
│
├── config/
│   ├── i18n/
│   ├── componentRegistry.ts
│   ├── documentationRegistry.ts
│   ├── queryClient.ts
│   ├── supabase.ts
│   └── theme.ts
│
├── engine/
│   ├── components/
│   │   ├── form/
│   │   ├── layout/
│   │   └── primitives/
│   └── index.ts
│
├── pages/
│   ├── Documentation/
│   └── Playground/
│
├── shared/
│   ├── components/
│   │   └── MarkdownRenderer/
│   ├── hooks/
│   └── lib/
│       └── documentation/
│
├── styles/
│
└── main.tsx
```

---

# Application Layer

## `app`

The `app` layer contains application-level infrastructure and composition.

Responsibilities include:

- Application providers
- Routing
- Layouts
- Application shell
- Composing the application entry point

The application layer should not contain reusable component implementations.

---

## `pages`

The `pages` layer contains application-facing pages.

Current pages include:

- Documentation
- Playground

### Documentation

The Documentation page provides structured documentation for FlowForge components.

### Playground

The Playground provides interactive demonstrations of components and allows component behavior and APIs to be explored visually.

---

# Configuration Layer

## `config`

The `config` layer contains application configuration and metadata registries.

Important files include:

### Component Registry

`componentRegistry.ts`

The component registry provides metadata about available components, including:

- Component ID
- Name
- Category
- Description
- Documentation path
- Playground path
- Status
- Playground visibility

### Documentation Registry

`documentationRegistry.ts`

The documentation registry connects components with their documentation resources.

Keeping registries separate from component implementations allows application tooling to discover components without coupling the component implementation to Documentation or Playground.

---

# Engine Layer

## `engine`

The `engine` layer contains the reusable core of FlowForge.

This layer is the foundation for the Form Engine and provides reusable components that can be consumed by the application.

The component architecture is organized into three categories:

```text
engine/components/
│
├── primitives/
├── form/
└── layout/
```

The engine is intentionally separated from the application layer so that its capabilities can eventually be packaged and consumed by independent applications.

---

## Primitives

Primitive components provide the lowest-level reusable building blocks.

Examples include:

- Button
- Spinner
- Typography

Primitive components should remain small, reusable, and independent from application-specific concerns.

---

## Form Components

Form components provide reusable building blocks for dynamic forms.

Examples include:

- Input
- Textarea
- Select
- SearchInput
- PasswordInput
- Dropdown
- FieldWrapper

These components form the foundation for the Dynamic Form Engine.

---

## Layout Components

Layout components provide reusable structural UI behavior.

Examples include:

- Collapse
- CollapseGroup

---

# Component Independence

Components in the engine should not depend on:

- Documentation pages
- Playground pages
- Application routing
- Application-specific state
- Documentation rendering

Instead, application tooling discovers components through configuration and registries.

```text
                    Engine Component
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
      Component Registry          Component Implementation
             │
       ┌─────┴─────┐
       ▼           ▼
 Documentation  Playground
```

This keeps the engine reusable and allows the application layer to evolve independently.

---

# Shared Layer

## `shared`

The `shared` layer contains cross-cutting reusable functionality that is not part of the core engine itself.

Current areas include:

- Shared infrastructure
- Hooks
- Documentation utilities
- Markdown rendering

For example:

```text
shared/
├── components/
│   └── MarkdownRenderer/
├── hooks/
└── lib/
    └── documentation/
```

The `shared` layer should remain focused on infrastructure and utilities rather than becoming a second component library.

---

# Integration & Reuse

FlowForge is designed to be reusable beyond the FlowForge application itself.

The `engine` layer is intentionally separated from application-specific concerns such as Documentation, Playground, routing, and application state.

This allows the FlowForge Engine to evolve into a reusable package that can be integrated into different types of applications.

```text
                         FlowForge Engine
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
          ERP App           SaaS App       Business Application
             │                  │                  │
             └──────────────────┼──────────────────┘
                                │
                         Shared Form Engine
```

## Example Use Cases

FlowForge can be integrated into applications such as:

- ERP systems
- SaaS platforms
- CRM systems
- Internal business applications
- Workflow-based applications
- Admin panels
- Enterprise applications

The consuming application should depend on the reusable engine and its public APIs rather than the internal application structure of FlowForge.

---

# Future Package Model

The long-term goal is to make the engine consumable as a package.

For example:

```text
my-erp/
├── src/
│   ├── modules/
│   ├── pages/
│   └── ...
│
└── package.json
```

The application could consume FlowForge components and form-engine capabilities through a public package API:

```tsx
import {
  Input,
  Select,
  Textarea,
  FormEngine,
} from "@flowforge/engine";
```

The exact package name and distribution strategy may evolve as the project approaches a reusable library release.

The example above represents the intended public API direction and does not imply that the package is currently published.

---

# Application Independence

A consuming application should not need to include:

- FlowForge Documentation pages
- FlowForge Playground
- FlowForge-specific routing
- FlowForge application layouts
- Internal development tooling

Only the required engine capabilities should be consumed.

This separation is one of the main architectural goals of FlowForge.

---

# Documentation Architecture

FlowForge uses Markdown-based documentation for reusable components.

Documentation is stored under:

```text
docs/
└── components/
    ├── input.md
    ├── textarea.md
    ├── collapse.md
    └── collapse-group.md
```

The documentation system consists of:

1. Markdown documentation
2. Documentation Registry
3. Documentation Loader
4. Markdown Renderer
5. Playground integration

This allows documentation to remain separate from component implementation.

---

# Playground Architecture

The Playground provides interactive demonstrations of FlowForge components.

The Playground maintains a dedicated demo registry.

```text
pages/Playground/
├── demos/
├── demoRegistry.ts
├── Playground.tsx
└── Playground.css
```

The registry maps component IDs to their interactive demos.

```text
Component ID
     │
     ▼
Demo Registry
     │
     ▼
Interactive Demo
     │
     ▼
Playground
```

Documentation can reference Playground demonstrations through component metadata and Playground links.

---

# Documentation ↔ Playground

FlowForge intentionally keeps documentation and interactive demonstrations separate while allowing them to be connected.

```text
                    Component
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
 Documentation Registry        Component Registry
          │                           │
          ▼                           ▼
    Documentation               Playground
                                      │
                                      ▼
                                Demo Registry
```

This enables:

- Documentation without embedding demo implementation
- Playground demos without coupling them to Markdown
- Reusable component metadata
- Direct navigation between documentation and interactive examples

---

# Current Components

The current component foundation includes:

### Primitives

- Button
- Spinner
- Typography

### Form

- Input
- Textarea
- Select
- SearchInput
- PasswordInput
- Dropdown
- FieldWrapper

### Layout

- Collapse
- CollapseGroup

Not every component currently has complete documentation or Playground coverage.

---

# Documentation Coverage

Current component documentation includes:

- Input
- Textarea
- Collapse
- CollapseGroup

Additional documentation will be added as components and their APIs stabilize.

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- i18next

## Backend & Data

- Supabase
- PostgreSQL

## Documentation

- Markdown
- React Markdown
- GitHub Flavored Markdown
- Syntax Highlighting

## Styling

- CSS
- Tailwind CSS *(planned)*
- Ant Design *(planned integration)*

---

# Engineering Principles

FlowForge follows the following principles:

- Separation of Concerns
- Single Responsibility
- Component Independence
- Reusability
- Type Safety
- Configuration over Hardcoding
- Registry-based Composition
- Clear Dependency Boundaries
- Incremental Architecture
- Maintainable Documentation
- Minimal Coupling
- Scalable Structure

The architecture should grow only when new complexity provides clear value.

---

# Current Status

FlowForge is currently in active development.

The current focus is establishing a stable and reusable component foundation together with the Documentation and Playground infrastructure.

## Implemented

- React application foundation
- Application routing
- Application providers
- Layout foundation
- Internationalization foundation
- Engine component architecture
- Component registry
- Documentation registry
- Documentation loader
- Documentation page
- Playground page
- Playground demo registry
- Markdown renderer
- Interactive component demonstrations
- Component documentation

## In Progress

- Expanding the component library
- Improving form component APIs
- Select enhancements
- Dynamic Form Engine
- Form validation
- Conditional fields
- Additional Playground capabilities
- Documentation coverage

---

# Roadmap

## Phase 1 — Foundation

- [x] Application architecture
- [x] Engine component architecture
- [x] Component registry
- [x] Documentation architecture
- [x] Playground architecture

## Phase 2 — Component Library

- [x] Primitive components
- [x] Form components
- [x] Layout components
- [x] Component documentation foundation
- [x] Interactive Playground
- [ ] Additional form components
- [ ] Advanced Select capabilities
- [ ] Additional component documentation

## Phase 3 — Dynamic Form Engine

- [ ] Metadata-driven form rendering
- [ ] Field configuration
- [ ] Field dependencies
- [ ] Validation system
- [ ] Conditional fields
- [ ] Form state management

## Phase 4 — Form Builder

- [ ] Visual form builder
- [ ] Form schema management
- [ ] Field configuration UI
- [ ] Form versioning

## Phase 5 — Workflow Platform

- [ ] Workflow Engine
- [ ] Rule Engine
- [ ] Submission Engine
- [ ] File Management
- [ ] Dashboard & Analytics
- [ ] Multi-Tenant Architecture

---

# Core Platform Modules

The long-term FlowForge platform is expected to include:

### Form Engine

Dynamic rendering of forms based on metadata and configuration.

### Form Builder

Visual creation and configuration of form definitions.

### Workflow Engine

Business process and state transition management.

### Rule Engine

Conditional logic and business rules.

### Submission Engine

Form submission lifecycle and processing.

### Storage Adapter

Persistence abstraction for form definitions and submissions.

---

# Why FlowForge?

FlowForge is being developed as an engineering-focused platform rather than only a collection of UI components.

The project demonstrates:

- Frontend architecture
- Component architecture
- Form engine design
- Registry-based composition
- Documentation architecture
- Interactive development tooling
- Type-safe React development
- Separation of application and reusable engine concerns
- Scalable software design

The long-term goal is to evolve the project from a reusable component and form-engine foundation into a complete dynamic form and workflow platform.

---

# License

MIT License