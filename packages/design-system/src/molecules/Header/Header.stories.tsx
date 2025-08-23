import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Label } from "../../atoms/Label/Label";
// ۱. تایپ مورد نیاز را از کامپوننت خودش ایمپورت می‌کنیم
import { type AvatarDropdownItem } from "../AvatarDropdown/AvatarDropdown"; 
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
   
    showBackButton: { control: "boolean" },
    showNotificationButton: { control: "boolean" },
    showThemeSwitch: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// ۲. به صورت صریح تایپ آرایه را مشخص می‌کنیم
const profileItems: AvatarDropdownItem[] = [
    { 
      label: { text: "مشاهده پروفایل", size: "sm" }, // TypeScript حالا می‌داند که size باید از نوع LabelSize باشد
      icon: <FaUser />, 
      onClick: () => alert("Profile!") 
    },
    { 
      label: { text: "خروج", size: "sm", variant: "error" }, // و variant باید از نوع LabelVariant باشد
      icon: <FiLogOut />, 
      onClick: () => alert("Logout!") 
    },
];

export const DefaultDesktop: Story = {
  name: "Default (Desktop)",
  args: {
    title: <Label text="داشبورد" size="lg" />,
 
    showBackButton: true,
    showNotificationButton: true,
    showThemeSwitch: true,
    avatarDropdownItems: profileItems,
    userAvatar: { src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", alt: "User" },
  },
};

export const MobileView: Story = {
  name: "Mobile View (با دکمه منو)",
  args: {
    ...DefaultDesktop.args,
    onMenuButtonClick: () => alert("Menu Button Clicked!"),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const LTRView: Story = {
  name: "Left-to-Right (LTR)",
  args: {
    ...DefaultDesktop.args,
    title: <Label text="Dashboard" size="lg" />,
 
  },
};

export const Minimal: Story = {
  name: "Minimal (فقط عنوان)",
  args: {
    title: <Label text="تنظیمات" size="lg" />,

    showBackButton: false,
    showNotificationButton: false,
    showThemeSwitch: false,
  },
};