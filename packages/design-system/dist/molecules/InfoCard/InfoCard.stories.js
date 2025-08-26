import { jsx as _jsx } from "react/jsx-runtime";
import { InfoCard } from "./InfoCard";
import { Label } from "../../atoms/Label/Label";
const meta = {
    title: "Molecules/InfoCard",
    component: InfoCard,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "اطلاعات اصلی فروشگاه",
        items: [
            { label: "نام فروشگاه", value: "یدکچی مرکزی" },
            { label: "نام فروشنده", value: "مهدی اکبری" },
            { label: "وضعیت", value: _jsx(Label, { text: "\u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647", size: "sm", variant: "primary" }) },
            { label: "تاریخ ثبت", value: "1403/05/20" },
            { label: "نوع شخص", value: "حقیقی" },
            { label: "وب‌سایت", value: "https://yadakchi.com" },
            { label: "شماره تماس", value: null }, // این آیتم نباید رندر شود
        ]
    },
};
