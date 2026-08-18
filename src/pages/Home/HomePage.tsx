import { Link } from "react-router-dom";

import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="ff-home">
      {/* Hero */}
      <section className="ff-home__hero">
        <div className="ff-home__hero-content">
          <span className="ff-home__eyebrow">
            REUSABLE APPLICATION FOUNDATION
          </span>

          <h1 className="ff-home__title">
            Build once.
            <br />
            <span>Reuse across projects.</span>
          </h1>

          <p className="ff-home__description">
            FlowForge is a reusable foundation for building scalable,
            data-driven business applications — from dynamic forms and
            reusable components to future workflow infrastructure.
          </p>

          <div className="ff-home__actions">
            <Link
              to="/playground"
              className="ff-home__button ff-home__button--primary"
            >
              Explore Playground
            </Link>

            <Link
              to="/docs"
              className="ff-home__button ff-home__button--secondary"
            >
              Read Documentation
            </Link>
          </div>
        </div>

        <div className="ff-home__architecture">
          <div className="ff-home__architecture-label">
            ENGINE ARCHITECTURE
          </div>

          <div className="ff-home__architecture-card">
            <div className="ff-home__architecture-title">
              FlowForge Engine
            </div>

            <div className="ff-home__architecture-line" />

            <div className="ff-home__architecture-grid">
              <div className="ff-home__architecture-item">
                <strong>Components</strong>
                <span>Reusable UI</span>
              </div>

              <div className="ff-home__architecture-item">
                <strong>Forms</strong>
                <span>Dynamic & data-driven</span>
              </div>

              <div className="ff-home__architecture-item">
                <strong>Documentation</strong>
                <span>Built into the project</span>
              </div>

              <div className="ff-home__architecture-item">
                <strong>Playground</strong>
                <span>Interactive exploration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="ff-home__section">
        <div className="ff-home__section-header">
          <span className="ff-home__eyebrow">FOUNDATION</span>

          <h2>Infrastructure designed for reuse.</h2>

          <p>
            Instead of rebuilding the same application infrastructure for
            every project, FlowForge provides reusable building blocks that
            can evolve independently and be integrated into larger systems.
          </p>
        </div>

        <div className="ff-home__capabilities">
          <article className="ff-home__capability">
            <span className="ff-home__capability-number">01</span>

            <h3>Reusable Components</h3>

            <p>
              A structured component foundation designed to remain independent
              from application-specific concerns.
            </p>
          </article>

          <article className="ff-home__capability">
            <span className="ff-home__capability-number">02</span>

            <h3>Dynamic Forms</h3>

            <p>
              A foundation for metadata-driven forms, field dependencies,
              validation and conditional behavior.
            </p>
          </article>

          <article className="ff-home__capability">
            <span className="ff-home__capability-number">03</span>

            <h3>Developer Experience</h3>

            <p>
              Documentation and interactive Playground capabilities are
              integrated directly into the development environment.
            </p>
          </article>
        </div>
      </section>

      {/* Designed for */}
      <section className="ff-home__section ff-home__section--products">
        <div className="ff-home__section-header">
          <span className="ff-home__eyebrow">DESIGNED FOR</span>

          <h2>One foundation. Multiple applications.</h2>

          <p>
            The engine is designed to become a reusable layer that can be
            integrated into different types of business applications.
          </p>
        </div>

        <div className="ff-home__applications">
          <div>ERP</div>
          <div>SaaS</div>
          <div>CRM</div>
          <div>Enterprise</div>
        </div>
      </section>

      {/* Architecture */}
      <section className="ff-home__section ff-home__architecture-section">
        <div className="ff-home__section-header">
          <span className="ff-home__eyebrow">ARCHITECTURE</span>

          <h2>Separated by responsibility.</h2>

          <p>
            The reusable engine remains independent from application pages,
            routing, documentation and development tooling.
          </p>
        </div>

        <div className="ff-home__layers">
          <div className="ff-home__layer ff-home__layer--application">
            <span>Application</span>
            <small>Pages · Routing · Layouts</small>
          </div>

          <div className="ff-home__layer-arrow">↓</div>

          <div className="ff-home__layer ff-home__layer--engine">
            <span>FlowForge Engine</span>
            <small>Components · Forms · Core Infrastructure</small>
          </div>

          <div className="ff-home__layer-arrow">↓</div>

          <div className="ff-home__layer ff-home__layer--shared">
            <span>Shared Infrastructure</span>
            <small>Utilities · Hooks · Cross-cutting concerns</small>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ff-home__cta">
        <div>
          <span className="ff-home__eyebrow">EXPLORE FLOWFORGE</span>

          <h2>See the engine in action.</h2>

          <p>
            Explore the component documentation or interact with the current
            implementation in the Playground.
          </p>
        </div>

        <div className="ff-home__actions">
          <Link
            to="/playground"
            className="ff-home__button ff-home__button--primary"
          >
            Open Playground
          </Link>

          <Link
            to="/docs"
            className="ff-home__button ff-home__button--secondary"
          >
            Documentation
          </Link>
        </div>
      </section>
    </main>
  );
}