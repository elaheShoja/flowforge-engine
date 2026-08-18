import { Link } from "react-router-dom";

import { documentationGroups } from "@/config/documentationRegistry";

export default function Documentation() {
  const componentGroup = documentationGroups.find(
    (group) => group.id === "components",
  );

  const componentItems =
    componentGroup?.items
      .slice()
      .sort(
        (a, b) =>
          (a.order ?? 0) - (b.order ?? 0),
      ) ?? [];

  return (
    <div className="ff-docs-home">
      <section className="ff-docs-home__hero">
        
        <h1 className="ff-docs-home__title">
          Build scalable applications faster
        </h1>

        <p className="ff-docs-home__description">
          Explore the architecture, components, form
          engine, and engineering decisions behind
          FlowForge.
        </p>

        <div className="ff-docs-home__actions">
          <Link
            to="/playground"
            className="ff-docs-home__primary-action"
          >
            Open Playground
          </Link>

          {componentItems.length > 0 && (
            <Link
              to={componentItems[0].path}
              className="ff-docs-home__secondary-action"
            >
              Explore Components
            </Link>
          )}
        </div>
      </section>

      <section className="ff-docs-home__section">
        <div className="ff-docs-home__section-header">
          <h2>Explore FlowForge</h2>

          <p>
            Learn how the platform is structured and how
            its building blocks work together.
          </p>
        </div>

        <div className="ff-docs-home__cards">
          <article className="ff-docs-home__card">
            <h3>Components</h3>

            <p>
              Explore reusable UI components and their
              APIs through documentation and live examples.
            </p>

            {componentItems.length > 0 && (
              <Link
                to={componentItems[0].path}
                className="ff-docs-home__card-link"
              >
                Explore components →
              </Link>
            )}
          </article>

          <article className="ff-docs-home__card ff-docs-home__card--planned">
            <h3>Form Engine</h3>

            <p>
              Learn how FlowForge transforms metadata and
              definitions into dynamic forms.
            </p>

            <span>Coming later</span>
          </article>

          <article className="ff-docs-home__card ff-docs-home__card--planned">
            <h3>Architecture</h3>

            <p>
              Understand the architectural decisions,
              boundaries, and evolution of the platform.
            </p>

            <span>Coming later</span>
          </article>

          <article className="ff-docs-home__card ff-docs-home__card--planned">
            <h3>Engineering</h3>

            <p>
              Explore technical challenges, design
              decisions, and solutions behind FlowForge.
            </p>

            <span>Coming later</span>
          </article>
        </div>
      </section>
    </div>
  );
}