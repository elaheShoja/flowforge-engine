<p align="center">
  <img src="./public/branding/flowforge-engine.svg" alt="FlowForge Engine" width="600">
</p>

<p align="center">
  A workflow-driven dynamic form platform built with
  React, TypeScript, Supabase, and PostgreSQL.
</p>

---

## Vision

FlowForge is not just a Form Builder.

It is a platform for building data-driven business applications where forms are only one piece of the architecture.

The long-term vision includes:

- Dynamic Form Builder
- Workflow Engine
- Rule Engine
- Submission Engine
- File Management
- Dashboard & Analytics
- Versioned Form Definitions
- Multi-Tenant Architecture
- API-first Design

---

# Architecture

The system follows a layered architecture.

```text
          Form Definition
                 │
                 ▼
            Form Engine
                 │
                 ▼
        Submission Engine
                 │
                 ▼
          Storage Adapter
```

Each layer has a single responsibility and can evolve independently.

The frontend architecture provides the application foundation for these layers while keeping reusable components, documentation, and interactive demonstrations separated from application-specific pages.

---

# Frontend Architecture

The React application is organized into application-level layers with clear separation of responsibilities.

```text
src
│
├── app
│   ├── router
│   ├── providers
│   ├── layouts
│   └── hooks
│
├── config
│   ├── componentRegistry.ts
│   ├── documentationRegistry.ts
│   ├── i18n
│   ├── queryClient.ts
│   ├── supabase.ts
│   └── theme.ts
│
├── pages
│   ├── Documentation
│   └── Playground
│
├── shared
│   ├── components
│   │   └── MarkdownRenderer
│   ├── hooks
│   └── lib
│       └── documentation
│
├── styles
│
└── main.tsx
```

### App

The `app` layer contains application-level infrastructure such as:

- Routing
- Providers
- Layouts
- Application hooks

This layer is responsible for composing the application rather than implementing individual reusable components.

### Config

The `config` layer contains application configuration and registries.

Important registries include:

- `componentRegistry.ts` — defines the components exposed by the application.
- `documentationRegistry.ts` — connects components with their documentation.

Keeping these registries separate allows component implementations, documentation, and application pages to evolve independently.

### Pages

The `pages` layer contains application-level pages.

Current pages include:

- `Documentation`
- `Playground`

The Documentation page provides component documentation, while the Playground provides interactive demonstrations.

### Shared

The `shared` layer contains reusable functionality that is not tied to a specific page.

Examples include:

- Shared components
- Markdown rendering
- Documentation loading
- Reusable hooks
- Shared libraries

---

# Component Architecture

FlowForge treats reusable UI components as an important foundation of the form engine.

The component architecture is designed around:

- Reusability
- Type safety
- Predictable APIs
- Composition
- Accessibility
- Minimal application coupling

Components should remain independent from Documentation and Playground pages.

Instead, relationships between components, documentation, and demonstrations are established through registries.

```text
Component
   │
   ├──────────────► Component Registry
   │
   └──────────────► Demo Registry
                         │
                         ▼
                    Playground


Component
   │
   ▼
Documentation Registry
   │
   ▼
Documentation
```

This separation keeps component implementations independent from the tools used to document and demonstrate them.

---

# Documentation Architecture

FlowForge includes a dedicated documentation system for reusable components.

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

1. Markdown documentation files
2. Documentation registry
3. Documentation loader
4. Markdown renderer

The documentation registry connects a component with its Markdown documentation.

The Markdown renderer is responsible for rendering documentation content and syntax-highlighted code examples.

This separation allows documentation to evolve independently from component implementations.

---

# Playground

The Playground provides interactive demonstrations of FlowForge components.

Its purpose is to:

- Demonstrate component behavior
- Test component APIs interactively
- Provide a visual development environment
- Connect documentation with live examples

The Playground uses a demo registry to associate components with their interactive demonstrations.

```text
Component
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

Documentation can also provide direct links to relevant Playground examples.

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- React Router
- i18next

## Backend

- Supabase

## Database

- PostgreSQL

## Styling

- Tailwind CSS *(planned)*
- Ant Design *(planned integration)*

## Documentation

- Markdown
- React Markdown
- GitHub Flavored Markdown
- Syntax Highlighting

---

# Core Modules

### Authentication

User authentication and authorization.

---

### Form Builder

Visual form designer.

---

### Form Engine

Dynamic form rendering based on metadata.

---

### Workflow Engine

State transitions and business processes.

---

### Submission Engine

Handles form submission lifecycle.

---

### Storage Adapter

Database abstraction for persistence.

---

# Engineering Principles

FlowForge follows modern software engineering practices.

- Modular Architecture
- Clear Separation of Responsibilities
- Separation of Concerns
- Single Responsibility Principle
- Dependency Inversion
- Configuration over Hardcoding
- Registry-based Composition
- Reusable Components
- Type Safety
- Scalable Folder Structure
- Clean Code
- Maintainable Documentation

The architecture is intentionally kept simple at the current stage so that complexity is introduced only when it provides clear value.

---

# Current Status

The current development phase focuses on establishing a stable component, documentation, and playground foundation for the FlowForge platform.

### Implemented

- Project Architecture
- React Application Structure
- Routing
- Providers
- Internationalization (i18n)
- Reusable UI Components
- Component Registry
- Documentation Registry
- Documentation Loader
- Documentation Page
- Playground Page
- Markdown Documentation Renderer
- Interactive Component Demonstrations
- Component Documentation

Current documented components include:

- Input
- Textarea
- Collapse
- CollapseGroup

### In Progress

- Expanding the component library
- Improving form-oriented component behavior
- Dynamic Form Engine
- Additional Playground capabilities
- Increasing documentation coverage

---

# Roadmap

## v0.1

- Project Foundation
- Authentication
- Form Engine

## v0.2

- Form Builder
- Dynamic Validation
- Conditional Fields

## v0.3

- Workflow Engine
- Rule Engine

## v0.4

- Dashboard
- Analytics

## v1.0

Production Ready Platform

---

# Documentation

FlowForge provides both Markdown-based component documentation and an interactive Documentation page.

Current component documentation is available under:

```text
docs/components/
```

Current documentation includes:

- Input
- Textarea
- Collapse
- CollapseGroup

The documentation system is connected to the component registry and Playground, allowing components to be documented and demonstrated independently from their implementation.

---

# Why FlowForge?

The purpose of this project is to demonstrate software engineering practices rather than only frontend implementation.

The project showcases:

- Architectural thinking
- Component architecture
- Scalable design
- Clean code principles
- Documentation architecture
- Interactive development tooling
- Type-safe React development
- Modern full-stack development using React, TypeScript, Supabase, and PostgreSQL

FlowForge is being developed as a foundation that can evolve from a reusable component and form engine into a complete dynamic form and workflow platform.

---

# License

MIT License