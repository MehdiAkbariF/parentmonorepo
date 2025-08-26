import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "./Badge";
import { FaCheckCircle, FaExclamationTriangle, FaBan } from "react-icons/fa";
const meta = {
    title: "Atoms/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        variant: {
            control: "select",
            options: ['info', 'success', 'warning', 'danger', 'neutral'],
        },
        icon: { control: "boolean" }, // برای سادگی، یک boolean برای نمایش/عدم نمایش آیکون
    },
};
export default meta;
// استوری پایه
export const Default = {
    name: "Default (Neutral)",
    args: {
        label: "وضعیت خنثی",
        variant: "neutral",
    },
};
// نمایش تمام واریانت‌ها
export const AllVariants = {
    name: "All Variants",
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Badge, { label: "Info", variant: "info" }), _jsx(Badge, { label: "Success", variant: "success" }), _jsx(Badge, { label: "Warning", variant: "warning" }), _jsx(Badge, { label: "Danger", variant: "danger" }), _jsx(Badge, { label: "Neutral", variant: "neutral" })] })),
};
// نمایش با آیکون
export const WithIcon = {
    name: "With Icon",
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Badge, { label: "\u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647", variant: "success", icon: _jsx(FaCheckCircle, {}) }), _jsx(Badge, { label: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631", variant: "warning", icon: _jsx(FaExclamationTriangle, {}) }), _jsx(Badge, { label: "\u0645\u0633\u062F\u0648\u062F", variant: "danger", icon: _jsx(FaBan, {}) })] })),
};
