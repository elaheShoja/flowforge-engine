import { useState } from "react";

export default function useSelectSearch() {
  const [search, setSearch] = useState("");

  return {
    search,
    setSearch,
  };
}