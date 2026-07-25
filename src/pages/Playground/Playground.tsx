import { useState } from "react";
import "./Playground.css";
import { Search, Info } from "lucide-react";
import { Button, Spinner, 
  Typography, Input,
  PasswordInput, SearchInput} from "@/shared/ui";

export default function Playground() {

  const [searchValue, setSearchValue] = useState("John Doe");
  const [name, setName] = useState("Elahe");
  const [password, setPassword] = useState("123456");
  const [fullInput, setFullInput] = useState("1250");
 

  return (
    <div
      className="playground-stack"
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

        <Input
          label="Email"
          placeholder="Enter email"
          helperText="We'll never share your email."
        />

        <Input
          label="Password"
          placeholder="Enter password"
          error="Password is required"
        />

        <Input
          label="Disabled"
          disabled
          placeholder="Disabled input"
        />

        <Input
          label="Website"
          placeholder="example.com"
          startAdornment={<span>https://</span>}
        />

        <Input
          label="Weight"
          placeholder="70"
          endAdornment={<span>kg</span>}
        />

        <Input
            label="Loading"
            placeholder="Search..."
            loading
        />

        <Input
            label="Searching"
            placeholder="Search..."
            loading
            loadingText="Searching..."
        />

        <Input
            label="Username"
            startAdornment={<span>👤</span>}
            loading
        />

        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          clearable
          placeholder="Enter your name"
        />

        <Input
          label="Weight"
          suffix="kg"
        />

        <Input
          label="Price"
          prefix="$"
        />

        <Input
          label="Website"
          prefix="https://"
        />

        <Input
          label="Complete Input"
          placeholder="Enter amount..."

          value={fullInput}
          onChange={(e) => setFullInput(e.target.value)}

          prefix="$"

          suffix="USD"

          startAdornment={<Search size={18} />}

          endAdornment={<Info size={18} />}

          clearable

          helperText="This input demonstrates all supported features."

          fullWidth
        />

        <Input
          label="Loading Input"
          loading
          loadingText="Loading..."
          prefix="$"
          suffix="USD"
          startAdornment={<Search size={18} />}
          helperText="Loading state"
        />

        <Input
          label="Error Input"
          value={fullInput}
          onChange={(e) => setFullInput(e.target.value)}
          prefix="$"
          suffix="USD"
          clearable
          error="Amount is invalid"
        />

        <br />

        <Typography variant="h1" as="h1">
          Password Input
        </Typography>

        <br />

        <PasswordInput
          label="Password"
          placeholder="Enter password"
        />

        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          clearable
          placeholder="Enter password"
        />

        <Typography variant="h1" as="h1">
          Search Input
        </Typography>

        <SearchInput
          label="Search"
          placeholder="Search users..."
        />

        <SearchInput
          label="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          clearable
          onClear={() => console.log("cleared")}
          placeholder="Search users..."
        />
      </div>
    </div>
  );
}