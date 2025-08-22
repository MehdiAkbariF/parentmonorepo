import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "./IconButton";
const meta = {
    title: "Atoms/IconButton",
    component: IconButton,
    args: {
        icon: "🔔",
        size: "md",
        variant: "default",
        'aria-label': "Notifications"
    }
};
export default meta;
export const Default = {};
export const Sizes = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "12px" }, children: [_jsx(IconButton, { icon: "\uD83D\uDD14", size: "sm", "aria-label": "Bell small" }), _jsx(IconButton, { icon: "\uD83D\uDD14", size: "md", "aria-label": "Bell medium" }), _jsx(IconButton, { icon: "\uD83D\uDD14", size: "lg", "aria-label": "Bell large" })] }))
};
export const Variants = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "12px" }, children: [_jsx(IconButton, { icon: "\uD83D\uDD14", variant: "default", "aria-label": "Bell default" }), _jsx(IconButton, { icon: "\uD83D\uDD14", variant: "primary", "aria-label": "Bell primary" }), _jsx(IconButton, { icon: "\uD83D\uDD14", variant: "secondary", "aria-label": "Bell secondary" }), _jsx(IconButton, { icon: "\uD83D\uDD14", variant: "danger", "aria-label": "Bell danger" })] }))
};
