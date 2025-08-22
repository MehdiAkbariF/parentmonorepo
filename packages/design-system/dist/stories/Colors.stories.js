import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "../styles/index.scss";
export default {
    title: "Design System/Colors",
};
const colorVars = [
    "--color-brand-primary",
    "--color-brand-secondary",
    "--color-brand-accent",
    "--color-text-primary",
    "--color-text-secondary",
    "--color-bg-body",
    "--color-bg-surface",
    "--color-bg-secondary",
    "--color-utility-success",
    "--color-utility-error",
    "--color-utility-warning",
    "--color-utility-info",
];
export const PaletteWithToggle = () => {
    const [theme, setTheme] = useState("light");
    // تغییر کلاس body وقتی theme تغییر می‌کنه
    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
    }, [theme]);
    return (_jsxs("div", { style: { padding: "1rem" }, children: [_jsxs("button", { onClick: () => setTheme(theme === "light" ? "dark" : "light"), style: {
                    padding: "0.5rem 1rem",
                    marginBottom: "1rem",
                    cursor: "pointer",
                    background: "var(--color-brand-primary)",
                    color: "var(--color-text-on-brand)",
                    border: "none",
                    borderRadius: "4px",
                }, children: ["Switch to ", theme === "light" ? "Dark" : "Light", " Mode"] }), _jsx("div", { style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "1rem",
                }, children: colorVars.map((variable) => (_jsxs("div", { style: {
                        border: "1px solid var(--color-border-primary)",
                        borderRadius: "8px",
                        overflow: "hidden",
                    }, children: [_jsx("div", { style: { background: `var(${variable})`, height: "80px" } }), _jsx("div", { style: { padding: "0.5rem", fontSize: "0.8rem" }, children: variable })] }, variable))) })] }));
};
