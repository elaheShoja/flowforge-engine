import { Link, useParams } from "react-router-dom";

import { getComponentById } from "@/config/componentRegistry";

import { getDocumentationContent } from "@/shared/lib/documentation/documentationLoader";

import MarkdownRenderer from "@/shared/components/MarkdownRenderer";

import "./ComponentDocumentation.css";

export default function ComponentDocumentation() {
  const { componentId } = useParams();

  if (!componentId) {
    return (
      <div className="ff-docs-page">
        <h1>Component Not Specified</h1>

        <p>
          No component was specified in the URL.
        </p>
      </div>
    );
  }

  const component = getComponentById(componentId);

  if (!component) {
    return (
      <div className="ff-docs-page">
        <h1>Component Not Found</h1>

        <p>
          No component documentation was found for{" "}
          <code>{componentId}</code>.
        </p>
      </div>
    );
  }

  /*
   * The registry stores the public documentation URL.
   * The documentation loader resolves that URL
   * to the corresponding Markdown file.
   */
  const documentation =
    getDocumentationContent(component.docsPath);

  if (!documentation) {
    return (
      <div className="ff-docs-page">
        <div className="ff-docs-page__header">
          <div>
            <h1>{component.name}</h1>

            <p>
              {component.description}
            </p>
          </div>

          {component.showInPlayground && (
            <Link
              to={component.playgroundPath}
              className="ff-docs-page__playground-link"
            >
              Open Playground
            </Link>
          )}
        </div>

        <div className="ff-docs-page__empty">
          Documentation content is not available yet.
        </div>
      </div>
    );
  }

  return (
    <div className="ff-docs-page">

      <div className="ff-docs-page__toolbar">

        <div className="ff-docs-page__meta">
          <span
            className={`ff-docs-page__status ff-docs-page__status--${component.status}`}
          >
            {component.status}
          </span>
        </div>

        {component.showInPlayground && (
          <Link
            to={component.playgroundPath}
            className="ff-docs-page__playground-link"
          >
            Open Playground
          </Link>
        )}

      </div>

      <MarkdownRenderer
        content={documentation}
      />

    </div>
  );
}