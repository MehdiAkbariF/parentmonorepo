import { jsx as _jsx } from "react/jsx-runtime";
// ۱. تایپ‌ها و کامپوننت‌های لازم را وارد می‌کنیم
import { AvatarDropdown } from "./AvatarDropdown";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
// ۲. ✨ آبجکت meta را به درستی تعریف می‌کنیم
const meta = {
    title: "Molecules/AvatarDropdown",
    component: AvatarDropdown,
    decorators: [
        (Story) => (
        // ایجاد فاصله برای نمایش بهتر منوی باز شده
        _jsx("div", { style: { padding: '5rem', display: 'flex', justifyContent: 'flex-end' }, children: _jsx(Story, {}) })),
    ],
    tags: ["autodocs"],
};
// ۳. ✨ آبجکت meta را به عنوان خروجی پیش‌فرض export می‌کنیم
export default meta;
// داده‌های نمونه برای استوری
const sampleItems = [
    {
        label: { as: 'span', text: "پروفایل من", size: "sm" },
        icon: _jsx(FiUser, {}),
        onClick: () => alert("Profile clicked"),
    },
    {
        label: { as: 'span', text: "تنظیمات", size: "sm" },
        icon: _jsx(FiSettings, {}),
        onClick: () => alert("Settings clicked"),
    },
    {
        label: { as: 'span', text: "خروج", size: "sm", variant: "error" },
        icon: _jsx(FiLogOut, {}),
        onClick: () => alert("Logout clicked"),
    },
];
// ۵. استوری‌های خود را تعریف و export می‌کنیم
export const Default = {
    args: {
        avatar: {
            src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            alt: "آواتار کاربر",
            size: "md",
        },
        items: sampleItems,
        align: "right",
    },
};
export const AlignLeft = {
    name: "Align Left",
    args: {
        ...Default.args, // پراپ‌های استوری قبلی را به ارث می‌برد
        align: "left",
    },
};
