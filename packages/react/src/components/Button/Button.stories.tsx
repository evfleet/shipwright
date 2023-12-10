/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback } from "react";
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
  /*
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>Primary</Button>
        <Button variant="outline">Primary</Button>
        <Button variant="ghost">Primary</Button>
      </div>

      <div className="flex gap-4">
        <Button intent="success">Success</Button>
        <Button intent="success" variant="outline">
          Success
        </Button>
        <Button intent="success" variant="ghost">
          Success
        </Button>
      </div>

      <div className="flex gap-4">
        <Button intent="danger">Danger</Button>
        <Button intent="danger" variant="outline">
          Danger
        </Button>
        <Button intent="danger" variant="ghost">
          Danger
        </Button>
      </div>
    </div>
  ),
  */
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
      <Button leadingIcon={<Ship />}>Leading</Button>
      <Button trailingIcon={<Ship />}>Trailing</Button>
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

    return (
      <Button
        loading={loading}
        onClick={onClick}
        disabled={loading}
        loadingIcon={<Loader2 className="animate-spin" />}
      >
        Load
      </Button>
    );
  },
};
