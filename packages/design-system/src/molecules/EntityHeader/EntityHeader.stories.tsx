import type { Meta, StoryObj } from "@storybook/react";
import { EntityHeader } from "./EntityHeader";
import { Badge } from "../../atoms/Badge/Badge";
import { FaBan } from "react-icons/fa";

const meta: Meta<typeof EntityHeader> = {
  title: "Molecules/EntityHeader",
  component: EntityHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EntityHeader>;

export const Default: Story = {
  name: "Default",
  args: {
    title: "فروشگاه بزرگ یدکچی مرکزی",
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    children: <Badge label="تایید شده" variant="success" />,
  },
};

export const WithFallbackAvatar: Story = {
  name: "With Fallback Avatar",
  args: {
    title: "فروشگاه بدون لوگو",
    avatarFallback: "ف", // نمایش حرف اول
    children: <Badge label="در حال بررسی" variant="warning" />,
  },
};

export const BannedStatus: Story = {
  name: "Banned Status",
  args: {
    title: "فروشگاه متخلف",
    children: <Badge label="مسدود" variant="danger" icon={<FaBan />} />,
  },
};