// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<h1>ddddd</h1>} ></Route>
    </Route>
  </Routes>

);

export default AppRouter;
