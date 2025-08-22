import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
 // فرض می‌کنیم یک کامپوننت Button دارید

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "fullscreen", // برای نمایش بهتر هدر در عرض کامل
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Page Title",
    showBackButton: true,
    showNotificationButton: true,
  },
};

export const WithTitleOnly: Story = {
  args: {
    title: "Settings",
    showBackButton: false,
    showNotificationButton: false,
  },
};

export const BackButtonOnly: Story = {
  args: {
    title: "",
    showBackButton: true,
    showNotificationButton: false,
  },
};

export const WithCustomActions: Story = {
  args: {
    title: "Dashboard",
    showBackButton: false,
    showNotificationButton: false, // مخفی کردن دکمه پیش‌فرض
    // کامپوننت یا JSX سفارشی خود را اینجا قرار دهید
    actions: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {/* این یک مثال است. شما باید کامپوننت Button خود را داشته باشید. */}
        {/* <Button variant="primary" size="sm">Create New</Button> */}
        <span>User Profile</span>
      </div>
    ),
  },
};