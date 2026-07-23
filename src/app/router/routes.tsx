import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Playground from "@/pages/Playground/Playground";

function HomePage() {
  return <h1>FlowForge</h1>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route
          path="playground"
          element={<Playground />}
        />
      </Route>
    </Routes>
  );
}