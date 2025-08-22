import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "./Avatar";
const meta = {
    title: "Atoms/Avatar",
    component: Avatar,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", // یک سرویس برای آواتارهای تصادفی
        alt: "User Name",
        size: "md",
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [_jsx(Avatar, { src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", size: "sm" }), _jsx(Avatar, { src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", size: "md" }), _jsx(Avatar, { src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", size: "lg" })] })),
};
export const WithFallback = {
    render: () => (_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [_jsx(Avatar, { fallback: "RR", size: "sm" }), _jsx(Avatar, { fallback: "RR", size: "md" }), _jsx(Avatar, { fallback: "RR", size: "lg" })] })),
};
