import { NavLink, Outlet } from "react-router-dom";

import {
  documentationGroups,
} from "@/config/documentationRegistry";

import "./Documentation.css";

export default function DocumentationLayout() {
  const visibleGroups = documentationGroups
    .filter((group) => group.items.length > 0)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="ff-docs">
      <aside className="ff-docs__sidebar">
        <div className="ff-docs__brand">
          <img
            src="/branding/flowforge-engine.svg"
            alt="FlowForge Engine"
            className="ff-docs__logo"
          />
        </div>

        <nav className="ff-docs__nav">
          {visibleGroups.map((group) => (
            <section
              key={group.id}
              className="ff-docs__nav-group"
            >
              <h2 className="ff-docs__nav-title">
                {group.title}
              </h2>

              <div className="ff-docs__nav-items">
                {group.items
                  .sort(
                    (a, b) =>
                      (a.order ?? 0) - (b.order ?? 0)
                  )
                  .map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }) =>
                        [
                          "ff-docs__nav-link",
                          isActive
                            ? "ff-docs__nav-link--active"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
              </div>
            </section>
          ))}
        </nav>
      </aside>

      <main className="ff-docs__content">
        <Outlet />
      </main>
    </div>
  );
}