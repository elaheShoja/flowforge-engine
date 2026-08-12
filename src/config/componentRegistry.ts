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
];

export function getComponentById(
  componentId: string
) {
  return componentRegistry.find(
    (component) => component.id === componentId
  );
}