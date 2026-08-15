export type ComponentCategory =
  | "general"
  | "form"
  | "feedback";

export interface ComponentMeta {
  id: string;
  name: string;
  category: ComponentCategory;
  description: string;
  docsPath: string;
  playgroundPath: string;
  status: "stable" | "experimental" | "deprecated";
  showInPlayground: boolean;
}

export const componentRegistry: ComponentMeta[] = [
  {
    id: "input",
    name: "Input",
    category: "form",
    description:
      "A flexible text input component for FlowForge forms.",
    docsPath: "/docs/components/input",
    playgroundPath: "/playground/input",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "textarea",
    name: "Textarea",
    category: "form",
    description:
      "A flexible multiline text input component for FlowForge forms.",
    docsPath: "/docs/components/textarea",
    playgroundPath: "/playground/textarea",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "collapse",
    name: "Collapse",
    category: "general",
    description:
      "A reusable collapsible content component for showing and hiding content.",
    docsPath: "/docs/components/collapse",
    playgroundPath: "/playground/collapse",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "collapse-group",
    name: "Collapse Group",
    category: "general",
    description:
      "A component for coordinating multiple Collapse components and managing their open state.",
    docsPath: "/docs/components/collapse-group",
    playgroundPath: "/playground/collapse-group",
    status: "stable",
    showInPlayground: true,
  },
];

export function getComponentById(
  componentId: string
) {
  return componentRegistry.find(
    (component) => component.id === componentId
  );
}