import { jsx as _jsx } from "react/jsx-runtime";
import { KeyValueDisplay } from "./KeyValueDisplay";
import { Label } from "../Label/Label";
const meta = {
    title: "Atoms/KeyValueDisplay",
    component: KeyValueDisplay,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    name: "Horizontal (Default)",
    args: {
        label: "نام فروشگاه",
        children: "فروشگاه بزرگ یدکچی",
    },
};
export const Vertical = {
    name: "Vertical",
    args: {
        label: "وضعیت",
        children: "فعال",
        orientation: 'vertical',
    },
};
export const WithComponentValue = {
    name: "With Component as Value",
    args: {
        label: "وضعیت ثبت‌نام",
        children: _jsx(Label, { text: "\u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647", size: "sm", variant: "primary" }),
    },
};
