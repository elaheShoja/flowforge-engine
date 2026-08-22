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
  status:
    | "stable"
    | "experimental"
    | "deprecated";
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
    id: "search-input",
    name: "Search Input",
    category: "form",
    description:
      "A specialized input component for search interactions with optional clear functionality.",
    docsPath: "/docs/components/search-input",
    playgroundPath: "/playground/search-input",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "password-input",
    name: "Password Input",
    category: "form",
    description:
      "A specialized input component for entering and managing password values.",
    docsPath: "/docs/components/password-input",
    playgroundPath: "/playground/password-input",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "select",
    name: "Select",
    category: "form",
    description:
      "A flexible single and multi-value selection component for FlowForge forms.",
    docsPath: "/docs/components/select",
    playgroundPath: "/playground/select",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "checkbox",
    name: "Checkbox",
    category: "form",
    description:
      "A flexible checkbox component for selecting boolean values in FlowForge forms.",
    docsPath: "/docs/components/checkbox",
    playgroundPath: "/playground/checkbox",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "radio",
    name: "Radio",
    category: "form",
    description:
      "A flexible radio component for selecting one option from a group of mutually exclusive values.",
    docsPath: "/docs/components/radio",
    playgroundPath: "/playground/radio",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "switch",
    name: "Switch",
    category: "form",
    description:
      "A flexible switch component for toggling boolean values in FlowForge forms.",
    docsPath: "/docs/components/switch",
    playgroundPath: "/playground/switch",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "button",
    name: "Button",
    category: "general",
    description:
      "A flexible button component with multiple variants, sizes, states, and icon support.",
    docsPath: "/docs/components/button",
    playgroundPath: "/playground/button",
    status: "stable",
    showInPlayground: true,
  },

  {
    id: "spinner",
    name: "Spinner",
    category: "feedback",
    description:
      "A reusable loading indicator for displaying asynchronous progress and loading states.",
    docsPath: "/docs/components/spinner",
    playgroundPath: "/playground/spinner",
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
): ComponentMeta | undefined {
  return componentRegistry.find(
    (component) =>
      component.id === componentId
  );
}