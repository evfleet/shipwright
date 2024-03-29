/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback, useEffect } from "react";
import { Ship, Loader2 } from "lucide-react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  render: () => <Button>Shipwright</Button>,
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Intents: Story = {
  render: () => (
    <div className="grid w-1/3 grid-cols-3 grid-rows-3 gap-4">
      <Button>Primary</Button>
      <Button variant="outline">Primary</Button>
      <Button variant="ghost">Primary</Button>
      <Button intent="success">Success</Button>
      <Button intent="success" variant="outline">
        Success
      </Button>
      <Button intent="success" variant="ghost">
        Success
      </Button>
      <Button intent="danger">Danger</Button>
      <Button intent="danger" variant="outline">
        Danger
      </Button>
      <Button intent="danger" variant="ghost">
        Danger
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button leadingIcon={<Ship className="h-4 w-4" />}>Leading</Button>
      <Button trailingIcon={<Ship className="h-4 w-4" />}>Trailing</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>Primary</Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  name: "Loading State",
  render: () => {
    const [loading, setLoading] = useState(false);
    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;

      if (loading) {
        timeout = setTimeout(() => setLoading(false), 2000);
      }

      return () => clearTimeout(timeout);
    }, [loading]);

    return (
      <Button
        loading={loading}
        onClick={onClick}
        disabled={loading}
        loadingIcon={<Loader2 className="h-4 w-4 animate-spin" />}
      >
        Load
      </Button>
    );
  },
};
