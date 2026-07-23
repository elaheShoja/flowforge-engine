import { Button, Spinner, Typography, Input } from "@/shared/ui";

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

      <Typography variant="h2" as="h2">
        Input
      </Typography>

      <div style={{ padding: 32, maxWidth: 500 }}>
        <Input
          label="Username"
          placeholder="Enter username"
          startAdornment={<span>👤</span>}
        />

        <br />

        <Input
          label="Email"
          placeholder="Enter email"
          helperText="We'll never share your email."
        />

        <br />

        <Input
          label="Password"
          placeholder="Enter password"
          error="Password is required"
        />

        <br />

        <Input
          label="Disabled"
          disabled
          placeholder="Disabled input"
        />

        <br />

        <Input
          label="Website"
          placeholder="example.com"
          startAdornment={<span>https://</span>}
        />

        <br />

        <Input
          label="Weight"
          placeholder="70"
          endAdornment={<span>kg</span>}
        />
    </div>
    </div>
  );
}