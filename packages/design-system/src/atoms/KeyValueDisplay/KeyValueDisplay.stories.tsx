import type { Meta, StoryObj } from "@storybook/react";
import { KeyValueDisplay } from "./KeyValueDisplay";
import { Label } from "../Label/Label";

const meta: Meta<typeof KeyValueDisplay> = {
  title: "Atoms/KeyValueDisplay",
  component: KeyValueDisplay,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof KeyValueDisplay>;

export const Default: Story = {
  name: "Horizontal (Default)",
  args: {
    label: "نام فروشگاه",
    children: "فروشگاه بزرگ یدکچی",
  },
};

export const Vertical: Story = {
  name: "Vertical",
  args: {
    label: "وضعیت",
    children: "فعال",
    orientation: 'vertical',
  },
};

export const WithComponentValue: Story = {
  name: "With Component as Value",
  args: {
    label: "وضعیت ثبت‌نام",
    children: <Label text="تایید شده" size="sm" variant="primary" />,
  },
};