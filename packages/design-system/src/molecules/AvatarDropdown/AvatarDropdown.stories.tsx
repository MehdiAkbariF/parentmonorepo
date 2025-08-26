import type { Meta, StoryObj } from "@storybook/react";
// ۱. تایپ‌ها و کامپوننت‌های لازم را وارد می‌کنیم
import { AvatarDropdown, AvatarDropdownItem } from "./AvatarDropdown";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Label } from "../../atoms/Label/Label";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import React from 'react'; // ایمپورت React برای JSX

// ۲. ✨ آبجکت meta را به درستی تعریف می‌کنیم
const meta: Meta<typeof AvatarDropdown> = {
  title: "Molecules/AvatarDropdown",
  component: AvatarDropdown,
  decorators: [
    (Story) => (
      // ایجاد فاصله برای نمایش بهتر منوی باز شده
      <div style={{ padding: '5rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

// ۳. ✨ آبجکت meta را به عنوان خروجی پیش‌فرض export می‌کنیم
export default meta;

// ۴. تایپ استوری را تعریف می‌کنیم
type Story = StoryObj<typeof AvatarDropdown>;

// داده‌های نمونه برای استوری
const sampleItems: AvatarDropdownItem[] = [
  {
    label: { as: 'span', text: "پروفایل من", size: "sm" },
    icon: <FiUser />,
    onClick: () => alert("Profile clicked"),
  },
  {
    label: { as: 'span', text: "تنظیمات", size: "sm" },
    icon: <FiSettings />,
    onClick: () => alert("Settings clicked"),
  },
  {
    label: { as: 'span', text: "خروج", size: "sm", variant: "error" },
    icon: <FiLogOut />,
    onClick: () => alert("Logout clicked"),
  },
];

// ۵. استوری‌های خود را تعریف و export می‌کنیم
export const Default: Story = {
  args: {
    avatar: {
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      alt: "آواتار کاربر",
      size: "md",
    },
    items: sampleItems,
    align: "right",
  },
};

export const AlignLeft: Story = {
  name: "Align Left",
  args: {
    ...Default.args, // پراپ‌های استوری قبلی را به ارث می‌برد
    align: "left",
  },
};