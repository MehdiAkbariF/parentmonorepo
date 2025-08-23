import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Sidebar } from "./Sidebar";
import { FaCog, FaStore, FaListAlt } from 'react-icons/fa';
// کامپوننت کمکی برای مدیریت state در استوری‌بوک
const SidebarWithState = (args) => {
    const [isPinned, setIsPinned] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    // در استوری، هاور را با یک دکمه شبیه‌سازی می‌کنیم
    const isExpanded = isPinned || isHovering;
    const renderLink = (href, children) => (_jsx("a", { href: href, onClick: (e) => e.preventDefault(), style: { textDecoration: 'none' }, children: children }));
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }, children: [_jsxs("div", { style: { display: 'flex', gap: '1rem' }, children: [_jsxs("button", { onClick: () => setIsPinned(p => !p), children: ["Toggle Pin (", isPinned ? "Pinned" : "Unpinned", ")"] }), _jsx("button", { onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false), children: "Hover Me" })] }), _jsx("div", { style: { height: '80vh' }, children: _jsx(Sidebar, { ...args, isExpanded: isExpanded, isPinned: isPinned, onPinToggle: () => setIsPinned(p => !p), renderLink: renderLink }) })] }));
};
const meta = {
    title: "Organisms/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    render: (args) => _jsx(SidebarWithState, { ...args }),
};
export default meta;
const sampleMenuItems = [
    { label: "فروشگاه‌ها", icon: FaStore, submenu: [{ href: "/shops", label: "لیست فروشگاه‌ها", icon: FaListAlt }] },
    { label: "تیکت‌ها", icon: FaListAlt, href: "/tickets" },
];
const sampleFooterItems = [
    { label: "تنظیمات", icon: FaCog, href: "/settings" }
];
export const Default = {
    args: {
        appName: "پنل مدیریت",
        logo: _jsx(FaStore, {}),
        menuItems: sampleMenuItems,
        footerItems: sampleFooterItems,
        currentPath: "/",
    },
};
export const ActiveSubmenu = {
    args: {
        ...Default.args,
        currentPath: "/shops", // مسیر فعال را تغییر می‌دهیم
    },
};
