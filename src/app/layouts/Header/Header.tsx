import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import "./Header.css";

export default function Header() {
  return (
    <header className="ff-header">
      <div className="ff-header__container">
        <Link
          to="/"
          className="ff-header__brand"
          aria-label="FlowForge home"
        >
          <img
            src="/branding/flowforge-engine.svg"
            alt="FlowForge Engine"
            className="ff-header__logo"
          />
        </Link>

        <nav className="ff-header__nav" aria-label="Main navigation">
          <NavLink
            to="/docs"
            className={({ isActive }) =>
              clsx(
                "ff-header__link",
                isActive && "ff-header__link--active",
              )
            }
          >
            Documentation
          </NavLink>

          <NavLink
            to="/playground"
            className={({ isActive }) =>
              clsx(
                "ff-header__link",
                isActive && "ff-header__link--active",
              )
            }
          >
            Playground
          </NavLink>

          <a
            href="https://github.com/elaheShoja/flowforge-engine"
            target="_blank"
            rel="noreferrer"
            className="ff-header__link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}