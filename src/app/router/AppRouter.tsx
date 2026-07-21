// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/shared/ui/Button";

const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={
        <>
        <h1>ddddd</h1>
        <Button  loading>save</Button>
        </>

        } ></Route>
    </Route>
  </Routes>

);

export default AppRouter;
