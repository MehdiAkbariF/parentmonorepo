import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Label = ({ text, variant = "primary", size = "md", icon }) => {
    return (_jsxs("span", { className: `label label--${variant} label--${size} ${icon ? "label--with-icon" : ""}`, children: [icon && _jsx("span", { className: "label__icon", children: icon }), text] }));
};
