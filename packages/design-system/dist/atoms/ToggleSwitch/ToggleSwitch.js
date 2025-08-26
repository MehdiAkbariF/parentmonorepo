"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ToggleSwitch = ({ label, enabled, onChange, ...props }) => {
    return (_jsxs("div", { className: "toggle-switch__container", children: [_jsx("span", { className: "toggle-switch__label", children: label }), _jsxs("button", { type: "button", role: "switch", "aria-checked": enabled, onClick: () => onChange(!enabled), className: `toggle-switch ${enabled ? 'toggle-switch--enabled' : ''}`, ...props, children: [_jsx("span", { className: "toggle-switch__sr-only", children: label }), _jsx("span", { className: "toggle-switch__knob" })] })] }));
};
