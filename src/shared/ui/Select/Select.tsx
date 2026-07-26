import { useState } from "react";
import {
  useFloating,
  offset,
} from "@floating-ui/react";

import Dropdown from "@/shared/ui/Dropdown";

export default function Select() {
  const [open, setOpen] = useState(false);

  const floating = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [
      offset(6),
      
    ],
  });

  const {refs, floatingStyles} = floating;

  return (
    <div style={{ width: 500 }}>
      <div
        ref={refs.setReference}
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          cursor: "pointer",
          background: "#fff",
        }}
        onClick={() => setOpen(!open)}
      >
        Select country
      </div>

      {open && (
        <Dropdown
          containerRef={refs.setFloating}
          style={{
            ...floatingStyles,
            width: 500,
          }}
        >
          <div style={{ padding: 12 }}>Germany</div>
          <div style={{ padding: 12 }}>France</div>
          <div style={{ padding: 12 }}>Netherlands</div>
        </Dropdown>
      )}
    </div>
  );
}