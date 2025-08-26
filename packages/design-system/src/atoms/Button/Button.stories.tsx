import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { FiDownload, FiPlusCircle } from "react-icons/fi"; // آیکون‌های نمونه

// تعریف Meta اطلاعات برای Storybook
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  // تعریف کنترل‌ها برای props در پنل Controls استوری‌بوک
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- تعریف استوری‌های مختلف ---

// استوری پایه (Primary)
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "دکمه اصلی",
  },
};

// استوری برای واریانت Secondary
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "دکمه ثانویه",
  },
};

// استوری برای واریانت Ghost
export const Ghost: Story = {
  name: "Ghost (Transparent)",
  args: {
    variant: "ghost",
    children: "دکمه شفاف",
  },
};

// استوری برای حالت لودینگ
export const Loading: Story = {
  name: "Loading State",
  args: {
    ...Primary.args, // پراپ‌های استوری Primary را به ارث می‌برد
    isLoading: true,
  },
};

// استوری برای حالت غیرفعال
export const Disabled: Story = {
  name: "Disabled State",
  args: {
    ...Primary.args,
    disabled: true,
  },
};

// استوری برای نمایش دکمه با آیکون
export const WithIcon: Story = {
  name: "With Icon",
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">
        <FiPlusCircle style={{ marginInlineEnd: '8px' }} />
        افزودن جدید
      </Button>
      <Button variant="secondary">
        <FiDownload style={{ marginInlineEnd: '8px' }} />
        دانلود
      </Button>
    </div>
  ),
};