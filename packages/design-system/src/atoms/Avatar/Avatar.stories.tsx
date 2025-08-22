import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", // یک سرویس برای آواتارهای تصادفی
    alt: "User Name",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Avatar fallback="RR" size="sm" />
      <Avatar fallback="RR" size="md" />
      <Avatar fallback="RR" size="lg" />
    </div>
  ),
};