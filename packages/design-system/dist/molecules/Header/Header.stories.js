import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from "./Header";
// فرض می‌کنیم یک کامپوننت Button دارید
const meta = {
    title: "Molecules/Header",
    component: Header,
    parameters: {
        layout: "fullscreen", // برای نمایش بهتر هدر در عرض کامل
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "Page Title",
        showBackButton: true,
        showNotificationButton: true,
    },
};
export const WithTitleOnly = {
    args: {
        title: "Settings",
        showBackButton: false,
        showNotificationButton: false,
    },
};
export const BackButtonOnly = {
    args: {
        title: "",
        showBackButton: true,
        showNotificationButton: false,
    },
};
export const WithCustomActions = {
    args: {
        title: "Dashboard",
        showBackButton: false,
        showNotificationButton: false, // مخفی کردن دکمه پیش‌فرض
        // کامپوننت یا JSX سفارشی خود را اینجا قرار دهید
        actions: (_jsx("div", { style: { display: "flex", gap: "0.5rem" }, children: _jsx("span", { children: "User Profile" }) })),
    },
};
