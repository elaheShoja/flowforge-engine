import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
};

export default MainLayout;