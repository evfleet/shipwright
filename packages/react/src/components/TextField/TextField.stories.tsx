import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
};

type Story = StoryObj<typeof TextField>;

export default meta;

export const Overview: Story = {
  render: () => <TextField name="test" label="Test" />,
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextField name="filled" label="Filled" variant="filled" />
      <TextField name="outlined" label="Outlined" variant="outlined" />
    </div>
  ),
};

export const Icons: Story = {
  render: () => <></>,
};

export const Counter: Story = {
  render: () => <></>,
};

export const Required: Story = {
  render: () => <></>,
};

export const Disabled: Story = {
  render: () => <></>,
};

export const Error: Story = {
  name: "Error State",
  render: () => <TextField name="error" label="Error State" errors={true} />,
};
