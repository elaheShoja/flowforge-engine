import { Search } from "lucide-react";

import Input from "../Input";

import type { SearchInputProps } from "./SearchInput.types";

export default function SearchInput({
  clearable = false,
  startAdornment,
  type,
  ...props
}: SearchInputProps) {
  return (
    <Input
      type="search"
      clearable={clearable}
      startAdornment={
        startAdornment ?? <Search size={18} />
      }
      {...props}
    />
  );
}