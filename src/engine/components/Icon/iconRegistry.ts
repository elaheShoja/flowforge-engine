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
  LoaderCircle,
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
  search: Search,
  check: Check,

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