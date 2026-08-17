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
        id: "textarea",
        title: "Textarea",
        description:
          "A flexible multiline text input component.",
        section: "components",
        path: "/docs/components/textarea",
        contentPath: "components/textarea.md",
        order: 2,
        componentId: "textarea",
        playgroundPath: "/playground/textarea",
      },

      {
        id: "select",
        title: "Select",
        description:
          "A flexible single and multi-value selection component.",
        section: "components",
        path: "/docs/components/select",
        contentPath: "components/select.md",
        order: 3,
        componentId: "select",
        playgroundPath: "/playground/select",
      },

      {
        id: "collapse",
        title: "Collapse",
        description:
          "A reusable collapsible content component for showing and hiding content.",
        section: "components",
        path: "/docs/components/collapse",
        contentPath: "components/collapse.md",
        order: 4,
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
        order: 5,
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