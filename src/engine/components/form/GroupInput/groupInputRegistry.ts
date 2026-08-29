import {
  Button,
  Checkbox,
  Flag,
  Icon,
  Input,
  InputType,
  Radio,
  Select,
  Switch,
  Textarea,
} from "@/engine/components";

export const groupInputRegistry = {
  Button,
  Checkbox,
  Flag,
  Icon,
  Input,
  InputType,
  Radio,
  Select,
  Switch,
  Textarea,
} as const;

export type GroupInputComponentName =
  keyof typeof groupInputRegistry;