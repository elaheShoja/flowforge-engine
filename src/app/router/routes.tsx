import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "@/pages/Home/HomePage";

import DocumentationLayout from "@/pages/Documentation/DocumentationLayout";
import Documentation from "@/pages/Documentation/Documentation";
import ComponentDocumentation from "@/pages/Documentation/ComponentDocumentation";

import Playground from "@/pages/Playground/Playground";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* =========================
            Home
        ========================= */}

        <Route
          index
          element={<HomePage />}
        />

        {/* =========================
            Documentation
        ========================= */}

        <Route
          path="docs"
          element={<DocumentationLayout />}
        >
          <Route
            index
            element={<Documentation />}
          />

          <Route
            path="components/:componentId"
            element={<ComponentDocumentation />}
          />
        </Route>

        {/* =========================
            Playground
        ========================= */}

        <Route
          path="playground"
          element={<Playground />}
        />

        <Route
          path="playground/:componentId"
          element={<Playground />}
        />

      </Route>
    </Routes>
  );
}