// packages/design-system/src/atoms/IconButton/IconButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  args: {
    icon: "🔔",
    size: "md",
    variant: "default",
  'aria-label': "Notifications" 
  }
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <IconButton icon="🔔" size="sm" aria-label="Bell small" />
      <IconButton icon="🔔" size="md" aria-label="Bell medium" />
      <IconButton icon="🔔" size="lg" aria-label="Bell large" />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <IconButton icon="🔔" variant="default" aria-label="Bell default" />
      <IconButton icon="🔔" variant="primary" aria-label="Bell primary" />
      <IconButton icon="🔔" variant="secondary" aria-label="Bell secondary" />
      <IconButton icon="🔔" variant="danger" aria-label="Bell danger" />
    </div>
  )
};
