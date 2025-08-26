import type { Meta, StoryObj } from "@storybook/react";
import { InfoCard } from "./InfoCard";
import { Label } from "../../atoms/Label/Label";

const meta: Meta<typeof InfoCard> = {
  title: "Molecules/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: "اطلاعات اصلی فروشگاه",
    items: [
      { label: "نام فروشگاه", value: "یدکچی مرکزی" },
      { label: "نام فروشنده", value: "مهدی اکبری" },
      { label: "وضعیت", value: <Label text="تایید شده" size="sm" variant="primary" /> },
      { label: "تاریخ ثبت", value: "1403/05/20" },
      { label: "نوع شخص", value: "حقیقی" },
      { label: "وب‌سایت", value: "https://yadakchi.com" },
      { label: "شماره تماس", value: null }, // این آیتم نباید رندر شود
    ]
  },
};