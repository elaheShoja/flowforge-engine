import AppProviders from "./providers/AppProvider";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <AppProviders>
        <AppRouter />
    </AppProviders>
  );
}