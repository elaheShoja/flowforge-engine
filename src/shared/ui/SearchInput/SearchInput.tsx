import { forwardRef } from "react";
import { Search } from "lucide-react";

import Input from "../Input";

import type { SearchInputProps } from "./SearchInput.types";

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      clearable = false,
      startAdornment,
      type,
      ...props
    },
    ref
  ) {
    return (
      <Input
        ref={ref}
        type="search"
        clearable={clearable}
        startAdornment={
          startAdornment ?? <Search size={18} />
        }
        {...props}
      />
    );
  }
);

export default SearchInput;