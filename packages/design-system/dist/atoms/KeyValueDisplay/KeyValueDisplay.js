import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "../Label/Label"; // از اتم Label برای نمایش کلید استفاده می‌کنیم
/**
 * KeyValueDisplay یک کامپوننت پایه‌ای برای نمایش یک جفت کلید-مقدار است.
 */
export const KeyValueDisplay = ({ label, children, orientation = 'horizontal', className }) => {
    return (_jsxs("div", { className: `key-value-display key-value-display--${orientation} ${className || ''}`, children: [_jsx(Label, { text: `${label}:`, size: "sm", variant: "secondary", className: "key-value-display__key" }), _jsx("dd", { className: "key-value-display__value", children: children })] }));
};
