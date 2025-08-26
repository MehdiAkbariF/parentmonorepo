import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { FaCheckCircle, FaExclamationTriangle, FaBan } from "react-icons/fa";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ['info', 'success', 'warning', 'danger', 'neutral'],
    },
    icon: { control: "boolean" }, // برای سادگی، یک boolean برای نمایش/عدم نمایش آیکون
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// استوری پایه
export const Default: Story = {
  name: "Default (Neutral)",
  args: {
    label: "وضعیت خنثی",
    variant: "neutral",
  },
};

// نمایش تمام واریانت‌ها
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="Info" variant="info" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Danger" variant="danger" />
      <Badge label="Neutral" variant="neutral" />
    </div>
  ),
};

// نمایش با آیکون
export const WithIcon: Story = {
  name: "With Icon",
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="تایید شده" variant="success" icon={<FaCheckCircle />} />
      <Badge label="در انتظار" variant="warning" icon={<FaExclamationTriangle />} />
      <Badge label="مسدود" variant="danger" icon={<FaBan />} />
    </div>
  ),
};