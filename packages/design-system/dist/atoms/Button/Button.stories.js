import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button";
import { FiDownload, FiPlusCircle } from "react-icons/fi"; // آیکون‌های نمونه
// تعریف Meta اطلاعات برای Storybook
const meta = {
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
// --- تعریف استوری‌های مختلف ---
// استوری پایه (Primary)
export const Primary = {
    args: {
        variant: "primary",
        children: "دکمه اصلی",
    },
};
// استوری برای واریانت Secondary
export const Secondary = {
    args: {
        variant: "secondary",
        children: "دکمه ثانویه",
    },
};
// استوری برای واریانت Ghost
export const Ghost = {
    name: "Ghost (Transparent)",
    args: {
        variant: "ghost",
        children: "دکمه شفاف",
    },
};
// استوری برای حالت لودینگ
export const Loading = {
    name: "Loading State",
    args: {
        ...Primary.args, // پراپ‌های استوری Primary را به ارث می‌برد
        isLoading: true,
    },
};
// استوری برای حالت غیرفعال
export const Disabled = {
    name: "Disabled State",
    args: {
        ...Primary.args,
        disabled: true,
    },
};
// استوری برای نمایش دکمه با آیکون
export const WithIcon = {
    name: "With Icon",
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '1rem' }, children: [_jsxs(Button, { variant: "primary", children: [_jsx(FiPlusCircle, { style: { marginInlineEnd: '8px' } }), "\u0627\u0641\u0632\u0648\u062F\u0646 \u062C\u062F\u06CC\u062F"] }), _jsxs(Button, { variant: "secondary", children: [_jsx(FiDownload, { style: { marginInlineEnd: '8px' } }), "\u062F\u0627\u0646\u0644\u0648\u062F"] })] })),
};
