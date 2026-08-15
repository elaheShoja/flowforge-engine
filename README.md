<div align="center">

     <img
     src="./public/flowforge-engine.svg"
     alt="FlowForge Engine"
     width="600"
     />

     <p>
     A workflow-driven dynamic form platform built with
     React, TypeScript, Supabase, and PostgreSQL.
     </p>

</div>

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

```
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

---

# Frontend Architecture

The React application is organized using a feature-based architecture.

```
src
│
├── app
│   ├── router
│   ├── providers
│   ├── layouts
│   └── hooks
│
├── modules
│   ├── form-builder
│   ├── form-engine
│   ├── workflow
│   ├── auth
│   └── dashboard
│
├── shared
│   ├── components
│   ├── ui
│   ├── hooks
│   ├── services
│   ├── lib
│   ├── types
│   └── utils
│
├── config
│
├── styles
│
└── main.tsx
```

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
- Feature-based Structure
- Separation of Concerns
- Single Responsibility Principle
- Dependency Inversion
- Configuration over Hardcoding
- Reusable Components
- Type Safety
- Scalable Folder Structure
- Clean Code

---

# Current Status

Current version focuses on building the project foundation.

Implemented:

- Project Architecture
- React Application Structure
- Routing
- Providers
- Internationalization (i18n)

In Progress:

- Dynamic Form Engine

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

Detailed documentation will be available inside the `docs/` directory.

- System Architecture
- Database Design
- API Design
- Development Guide
- Contribution Guide

---

# Why FlowForge?

The purpose of this project is to demonstrate software engineering practices rather than only frontend implementation.

The project showcases architectural thinking, scalable design, clean code principles, and modern full-stack development using React, TypeScript, Supabase, and PostgreSQL.

---

# License

MIT License