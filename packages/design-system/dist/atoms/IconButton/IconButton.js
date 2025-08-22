"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const IconButton = ({ icon, size = "md", variant = "default", ...props }) => {
    return (_jsx("button", { type: "button", className: `icon-button icon-button--${size} icon-button--${variant}`, ...props, children: icon }));
};
