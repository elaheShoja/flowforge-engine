import { Outlet } from "react-router-dom";

import "./MainLayout.css"

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout() {
  return (
    <div className="ff-main-layout">
      <Header />

      <main className="ff-main-layout__content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}