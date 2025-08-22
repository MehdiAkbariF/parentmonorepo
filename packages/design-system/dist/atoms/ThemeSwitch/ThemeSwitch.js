"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export const ThemeSwitch = ({ initialTheme = "light", onToggle }) => {
    const [theme, setTheme] = useState(initialTheme);
    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        onToggle?.(theme);
    }, [theme, onToggle]);
    return (_jsx("button", { className: "theme-switch", onClick: () => setTheme(theme === "light" ? "dark" : "light"), "aria-label": "Toggle theme", children: theme === "light" ? "🌙" : "☀️" }));
};
