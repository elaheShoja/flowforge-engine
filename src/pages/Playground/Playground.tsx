import {
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

import {
  componentRegistry,
  getComponentById,
} from "@/config/componentRegistry";

import { playgroundRegistry } from "./demoRegistry";

import "./Playground.css";

function getComponentIcon(componentId: string) {
  switch (componentId) {
    case "input":
      return "T";

    case "textarea":
      return "▤";

    case "select":
      return "☷";

    case "collapse":
      return "⌄";

    case "collapse-group":
      return "▣";

    default:
      return "◆";
  }
}

export default function Playground() {
  const { componentId } = useParams();

  const [searchParams] = useSearchParams();

  const focusId =
    searchParams.get("focusId") ?? undefined;

  const innerFocusId =
    searchParams.get("innerFocusId") ?? undefined;

  /*
   * =========================================================
   * Playground Landing
   * =========================================================
   */

  if (!componentId) {
    const playgroundComponents =
      componentRegistry.filter(
        (component) =>
          component.showInPlayground
      );

    return (
      <div className="ff-playground">
        {/* =================================================
            Landing Hero
        ================================================= */}

        <section className="ff-playground__hero">
          <span className="ff-playground__eyebrow">
            PLAYGROUND
          </span>

          <h1 className="ff-playground__title">
            FlowForge Playground
          </h1>

          <p className="ff-playground__description">
            Explore FlowForge components through interactive
            examples. Test their behavior, experiment with
            different states, and see them in action.
          </p>

          <div className="ff-playground__hero-actions">
            <Link
              to="/docs"
              className="ff-playground__primary-action"
            >
              <span
                className="ff-playground__action-icon"
                aria-hidden="true"
              >
                ♧
              </span>

              View Documentation

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* =================================================
            Components
        ================================================= */}

        <section className="ff-playground__components">
          <div className="ff-playground__section-header">
            <h2>
              Explore Components
            </h2>

            <p>
              Try available FlowForge components interactively.
            </p>
          </div>

          <div className="ff-playground__component-grid">
            {playgroundComponents.map(
              (component) => {
                const hasDemo =
                  Boolean(
                    playgroundRegistry[
                      component.id
                    ]
                  );

                return (
                  <article
                    key={component.id}
                    className="ff-playground__component-card"
                  >
                    {/* =========================
                        Card Header
                    ========================= */}

                    <div className="ff-playground__card-header">
                      <div className="ff-playground__card-title">
                        <span
                          className="ff-playground__card-icon"
                          aria-hidden="true"
                        >
                          {getComponentIcon(
                            component.id
                          )}
                        </span>

                        <h3>
                          {component.name}
                        </h3>
                      </div>

                      <span
                        className={[
                          "ff-playground__status",
                          `ff-playground__status--${component.status}`,
                        ].join(" ")}
                      >
                        {component.status}
                      </span>
                    </div>

                    {/* =========================
                        Card Description
                    ========================= */}

                    <p className="ff-playground__card-description">
                      {component.description}
                    </p>

                    {/* =========================
                        Card Actions
                    ========================= */}

                    <div className="ff-playground__card-actions">
                      {hasDemo ? (
                        <Link
                          to={
                            component.playgroundPath
                          }
                          className="ff-playground__card-playground"
                        >
                          Open Playground
                          <span aria-hidden="true">
                            {" "}→
                          </span>
                        </Link>
                      ) : (
                        <Link
                          to={component.docsPath}
                          className="ff-playground__card-playground"
                        >
                          View Documentation
                          <span aria-hidden="true">
                            {" "}→
                          </span>
                        </Link>
                      )}

                      <Link
                        to={component.docsPath}
                        className="ff-playground__card-docs"
                      >
                        Documentation
                        <span aria-hidden="true">
                          {" "}→
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </section>
      </div>
    );
  }

  /*
   * =========================================================
   * Component Lookup
   * =========================================================
   */

  const component =
    getComponentById(componentId);

  if (!component) {
    return (
      <div className="ff-playground ff-playground--state">
        <h1>
          Component Not Found
        </h1>

        <p>
          No playground configuration was found for{" "}
          <code>{componentId}</code>.
        </p>

        <Link
          to="/playground"
          className="ff-playground__secondary-action"
        >
          <span aria-hidden="true">
            ←
          </span>

          Back to Playground
        </Link>
      </div>
    );
  }

  /*
   * =========================================================
   * Demo Lookup
   * =========================================================
   */

  const Demo =
    playgroundRegistry[component.id];

  /*
   * =========================================================
   * Component Without Demo
   * =========================================================
   */

  if (!Demo) {
    return (
      <div className="ff-playground ff-playground--state">
        <Link
          to="/playground"
          className="ff-playground__back-link"
        >
          <span aria-hidden="true">
            ←
          </span>

          Back to Playground
        </Link>

        <h1>
          {component.name}
        </h1>

        <p>
          A playground demo for this component
          is not available yet.
        </p>

        <Link
          to={component.docsPath}
          className="ff-playground__primary-action"
        >
          View Documentation

          <span aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    );
  }

  /*
   * =========================================================
   * Component Playground
   * =========================================================
   */

  return (
    <div className="ff-playground ff-playground--component">

      {/* =====================================================
          Back Navigation
      ===================================================== */}

      <div className="ff-playground__component-navigation">
        <Link
          to="/playground"
          className="ff-playground__back-link"
        >
          <span aria-hidden="true">
            ←
          </span>

          Back to Playground
        </Link>
      </div>

      {/* =====================================================
          Component Hero
      ===================================================== */}

      <section className="ff-playground__component-hero">
        <h1 className="ff-playground__title">
          {component.name} Playground
        </h1>

        <p className="ff-playground__description">
          {component.description}
        </p>

        <div className="ff-playground__component-actions">
          <Link
            to={component.docsPath}
            className="ff-playground__documentation-action"
          >
            <span
              className="ff-playground__action-icon"
              aria-hidden="true"
            >
              ♧
            </span>

            View Documentation

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          Interactive Playground
      ===================================================== */}

      <section className="ff-playground__demo-wrapper">
        <div className="ff-playground__demo-header">
          <h2>
            Interactive Playground
          </h2>

          <p>
            Experiment with the component properties
            and see the result immediately.
          </p>
        </div>

        <div className="ff-playground__demo-content">
          <Demo
            focusId={focusId}
            innerFocusId={innerFocusId}
          />
        </div>
      </section>
    </div>
  );
}