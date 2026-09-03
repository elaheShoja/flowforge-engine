import {
  Check,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  CircleX,
  Eye,
  EyeOff,
  Info,
  Link,
  LoaderCircle,
  Mail,
  Phone,
  Minus,
  Plus,
  Search,
  X,
} from "lucide-react";

export const iconRegistry = {
  /* =========================
     Navigation
  ========================= */

  expand: ChevronDown,
  collapse: ChevronUp,

  /* =========================
     Actions
  ========================= */

  add: Plus,
  remove: Minus,
  clear: X,
  close: X,
  check: Check,

  /* =========================
     Input Types
  ========================= */

  email: Mail,
  url: Link,
  phone: Phone,
  search: Search,

  /* =========================
     Password
  ========================= */

  showPassword: Eye,
  hidePassword: EyeOff,

  /* =========================
     Feedback
  ========================= */

  success: CircleCheck,
  error: CircleX,
  warning: CircleAlert,
  info: Info,

  /* =========================
     Status
  ========================= */

  loading: LoaderCircle,
} as const;

export type IconName =
  keyof typeof iconRegistry;