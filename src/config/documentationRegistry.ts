export type DocumentationSection =
  | "getting-started"
  | "guides"
  | "components"
  | "form-engine"
  | "form-builder"
  | "service"
  | "api"
  | "database"
  | "architecture"
  | "design-system"
  | "decisions"
  | "challenges"
  | "screenshots"
  | "roadmap";

export interface DocumentationItem {
  id: string;
  title: string;
  description?: string;
  section: DocumentationSection;
  path: string;
  order?: number;
  componentId?: string;
  playgroundPath?: string;
  contentPath?: string;
}

export interface DocumentationGroup {
  id: DocumentationSection;
  title: string;
  items: DocumentationItem[];
  order: number;
}

export const documentationGroups: DocumentationGroup[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    order: 1,
    items: [],
  },

  {
    id: "guides",
    title: "Guides",
    order: 2,
    items: [],
  },

  {
    id: "components",
    title: "Components",
    order: 3,
    items: [
      {
        id: "input",
        title: "Input",
        description:
          "A flexible and reusable text input component.",
        section: "components",
        path: "/docs/components/input",
        contentPath: "components/input.md",
        order: 1,
        componentId: "input",
        playgroundPath: "/playground/input",
      },

      {
        id: "input-type",
        title: "Input Type",
        description:
          "A configurable input component supporting specialized input types and their associated behavior and defaults.",
        section: "components",
        path: "/docs/components/input-type",
        contentPath: "components/input-type.md",
        order: 2,
        componentId: "input-type",
        playgroundPath: "/playground/input-type",
      },

      {
        id: "textarea",
        title: "Textarea",
        description:
          "A flexible multiline text input component.",
        section: "components",
        path: "/docs/components/textarea",
        contentPath: "components/textarea.md",
        order: 3,
        componentId: "textarea",
        playgroundPath: "/playground/textarea",
      },

      {
        id: "search-input",
        title: "Search Input",
        description:
          "A specialized input component for search interactions with optional clear functionality.",
        section: "components",
        path: "/docs/components/search-input",
        contentPath: "components/search-input.md",
        order: 4,
        componentId: "search-input",
        playgroundPath: "/playground/search-input",
      },

      {
        id: "password-input",
        title: "Password Input",
        description:
          "A specialized input component for entering and managing password values.",
        section: "components",
        path: "/docs/components/password-input",
        contentPath: "components/password-input.md",
        order: 5,
        componentId: "password-input",
        playgroundPath: "/playground/password-input",
      },

      {
        id: "flag",
        title: "Flag",
        description:
          "A reusable component for displaying registered flags through the FlowForge flag asset system.",
        section: "components",
        path: "/docs/components/flag",
        contentPath: "components/flag.md",
        order: 6,
        componentId: "flag",
        playgroundPath: "/playground/flag",
      },

      {
        id: "select",
        title: "Select",
        description:
          "A flexible single and multi-value selection component.",
        section: "components",
        path: "/docs/components/select",
        contentPath: "components/select.md",
        order: 7,
        componentId: "select",
        playgroundPath: "/playground/select",
      },

      {
        id: "checkbox",
        title: "Checkbox",
        description:
          "A flexible checkbox component for selecting boolean values.",
        section: "components",
        path: "/docs/components/checkbox",
        contentPath: "components/checkbox.md",
        order: 8,
        componentId: "checkbox",
        playgroundPath: "/playground/checkbox",
      },

      {
        id: "radio",
        title: "Radio",
        description:
          "A flexible radio component for selecting one option from a group of mutually exclusive values.",
        section: "components",
        path: "/docs/components/radio",
        contentPath: "components/radio.md",
        order: 9,
        componentId: "radio",
        playgroundPath: "/playground/radio",
      },

      {
        id: "switch",
        title: "Switch",
        description:
          "A flexible switch component for toggling boolean values.",
        section: "components",
        path: "/docs/components/switch",
        contentPath: "components/switch.md",
        order: 10,
        componentId: "switch",
        playgroundPath: "/playground/switch",
      },

      {
        id: "group-input",
        title: "Group Input",
        description:
          "A composite form component for grouping multiple FlowForge components into a single field layout.",
        section: "components",
        path: "/docs/components/group-input",
        contentPath: "components/group-input.md",
        order: 11,
        componentId: "group-input",
        playgroundPath: "/playground/group-input",
      },

      {
        id: "button",
        title: "Button",
        description:
          "A flexible button component with multiple variants, sizes, states, and icon support.",
        section: "components",
        path: "/docs/components/button",
        contentPath: "components/button.md",
        order: 12,
        componentId: "button",
        playgroundPath: "/playground/button",
      },

      {
        id: "spinner",
        title: "Spinner",
        description:
          "A reusable loading indicator for displaying asynchronous progress and loading states.",
        section: "components",
        path: "/docs/components/spinner",
        contentPath: "components/spinner.md",
        order: 13,
        componentId: "spinner",
        playgroundPath: "/playground/spinner",
      },

      {
        id: "collapse",
        title: "Collapse",
        description:
          "A reusable collapsible content component for showing and hiding content.",
        section: "components",
        path: "/docs/components/collapse",
        contentPath: "components/collapse.md",
        order: 14,
        componentId: "collapse",
        playgroundPath: "/playground/collapse",
      },

      {
        id: "collapse-group",
        title: "Collapse Group",
        description:
          "A component for coordinating multiple Collapse components and managing their open state.",
        section: "components",
        path: "/docs/components/collapse-group",
        contentPath: "components/collapse-group.md",
        order: 15,
        componentId: "collapse-group",
        playgroundPath: "/playground/collapse-group",
      },
    ],
  },

  {
    id: "form-engine",
    title: "Form Engine",
    order: 4,
    items: [],
  },

  {
    id: "form-builder",
    title: "Form Builder",
    order: 5,
    items: [],
  },

  {
    id: "architecture",
    title: "Architecture",
    order: 6,
    items: [],
  },

  {
    id: "decisions",
    title: "Decisions",
    order: 7,
    items: [],
  },

  {
    id: "challenges",
    title: "Challenges",
    order: 8,
    items: [],
  },

  {
    id: "api",
    title: "API",
    order: 9,
    items: [],
  },
];

export function getDocumentationById(
  id: string
): DocumentationItem | undefined {
  for (const group of documentationGroups) {
    const item = group.items.find(
      (item) => item.id === id
    );

    if (item) {
      return item;
    }
  }

  return undefined;
}