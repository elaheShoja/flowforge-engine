import { Button, Spinner, Typography } from "@/shared/ui";

export default function Playground() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "grid",
        gap: "1.5rem",
      }}
    >
      <Typography variant="h1" as="h1">
        FlowForge Design System
      </Typography>

      <Typography variant="h2" as="h2">
        Typography
      </Typography>

      <Typography variant="body">
        This is body text.
      </Typography>

      <Typography variant="caption">
        Caption text
      </Typography>

      <Typography variant="error">
        This field is required.
      </Typography>

      <hr />

      <Typography variant="h2" as="h2">
        Buttons
      </Typography>

      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button loading>
        Saving...
      </Button>

      <Button fullWidth>
        Full Width
      </Button>

      <hr />

      <Typography variant="h2" as="h2">
        Spinner
      </Typography>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </div>
    </div>
  );
}