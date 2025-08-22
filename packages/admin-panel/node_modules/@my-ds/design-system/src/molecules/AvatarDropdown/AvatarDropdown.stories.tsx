import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdown, AvatarDropdownItem } from "./AvatarDropdown"; // نام کامپوننت و آیتم را تغییر می‌دهیم
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const meta: Meta<typeof AvatarDropdown> = {
  title: "Molecules/AvatarDropdown", // عنوان استوری را تغییر می‌دهیم
  component: AvatarDropdown,
  decorators: [
    (Story) => (
      <div style={{ padding: '5rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

const sampleItems: AvatarDropdownItem[] = [
  {
    label: { text: "Profile", size: "sm" },
    icon: <FiUser />,
    onClick: () => alert("Profile clicked"),
  },
  {
    label: { text: "Settings", size: "sm" },
    icon: <FiSettings />,
    onClick: () => alert("Settings clicked"),
  },
  {
    label: { text: "Logout", size: "sm", variant: "error" },
    icon: <FiLogOut />,
    onClick: () => alert("Logout clicked"),
  },
];

export const Default: Story = {
  args: {
    avatar: {
      src: "https://i.pravatar.cc/150?u=raven",
      alt: "User Avatar",
      size: "md",
    },
    items: sampleItems,
    align: "right",
  },
};