import { Link, useParams } from "react-router-dom";

import { getComponentById } from "@/config/componentRegistry";
import { playgroundRegistry } from "./demoRegistry";

import "./Playground.css";

export default function Playground() {
  const { componentId } = useParams();

  if (!componentId) {
    return (
      <div className="ff-playground">
        <h1>FlowForge Playground</h1>

        <p>
          Select a component to explore its interactive demo.
        </p>
      </div>
    );
  }

  const component =
    getComponentById(componentId);

  if (!component) {
    return (
      <div className="ff-playground">
        <h1>Component Not Found</h1>

        <p>
          No playground configuration was found for{" "}
          <code>{componentId}</code>.
        </p>

        <Link to="/docs">
          Back to Documentation
        </Link>
      </div>
    );
  }

  const Demo =
    playgroundRegistry[component.id];

  if (!Demo) {
    return (
      <div className="ff-playground">
        <h1>{component.name}</h1>

        <p>
          A playground demo for this component
          is not available yet.
        </p>

        <Link
          to={component.docsPath}
        >
          View Documentation
        </Link>
      </div>
    );
  }

  return (
    <div className="ff-playground">

      <div className="ff-playground__header">

        <div>
          <h1>
            {component.name} Playground
          </h1>

          <p>
            {component.description}
          </p>
        </div>

        <Link
          to={component.docsPath}
          className="ff-playground__docs-link"
        >
          View Documentation
        </Link>

      </div>

      <div className="ff-playground__content">
        <Demo />
      </div>

    </div>
  );
}