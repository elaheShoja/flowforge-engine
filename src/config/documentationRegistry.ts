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
            description: "A flexible and reusable text input component.",
            section: "components",
            path: "/docs/components/input",
            contentPath: "components/input.md",
            order: 1,
            componentId: "input",
            playgroundPath: "/playground/input",
        }
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