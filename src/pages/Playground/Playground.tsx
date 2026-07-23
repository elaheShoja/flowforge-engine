import Button  from "@/shared/ui/Button";
import Spinner from "@/shared/ui/Spinner";

export default function Playground() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>FlowForge UI Playground</h1>

      <h2>Buttons</h2>

      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="danger">
        Delete
      </Button>

      <Button loading>
        Saving...
      </Button>

      <Button fullWidth>
        Full Width
      </Button>

      <hr />

      <h2>Spinner</h2>

      <Spinner />

      <Spinner size="lg" />

      <Spinner variant="secondary" />
    </div>
  );
}