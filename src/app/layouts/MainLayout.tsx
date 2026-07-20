

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-16 border-b flex items-center px-6">
        <h1 className="text-xl font-bold">
          FlowForge
        </h1>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="h-12 border-t flex items-center justify-center text-sm">
        © 2026 FlowForge
      </footer>
    </div>
  );
}