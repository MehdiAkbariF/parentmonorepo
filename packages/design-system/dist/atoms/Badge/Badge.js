import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Badge = ({ label, variant = 'neutral', icon }) => {
    return (_jsxs("div", { className: `badge badge--${variant}`, children: [icon && _jsx("span", { className: "badge__icon", children: icon }), _jsx("span", { children: label })] }));
};
