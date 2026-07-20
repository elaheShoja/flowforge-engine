
import type { ReactNode } from "react";

import QueryProvider from "./QueryProvider";
import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";

interface Props {
  children: ReactNode;
}
export default function AppProviders({ children }: Props) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}