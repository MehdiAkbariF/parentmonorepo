import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AdminPageLayout } from "./AdminPageLayout";
// --- داده‌های نمونه برای props ها ---
import { FaShieldAlt, FaUser, FaCog, FaStore } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Label } from '../../atoms/Label/Label';
const sampleMenuItems = [
    { label: "داشبورد", icon: FaStore, href: "/" },
    // ...
];
const sampleFooterItems = [
    { label: "تنظیمات", icon: FaCog, href: "/settings" }
];
const sampleProfileItems = [
    { label: { text: "پروفایل" }, icon: _jsx(FaUser, {}) },
    { label: { text: "خروج", variant: "error" }, icon: _jsx(FiLogOut, {}) },
];
// کامپوننت کمکی برای مدیریت state در استوری‌بوک
const LayoutWithState = (args) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const sidebarProps = {
        appName: "پنل مدیریت",
        logo: _jsx(FaShieldAlt, {}),
        menuItems: sampleMenuItems,
        footerItems: sampleFooterItems,
        currentPath: "/",
        renderLink: (href, children) => _jsx("a", { href: href, children: children }),
        isPinned: isPinned,
        onPinToggle: () => setIsPinned(prev => !prev),
    };
    const headerProps = {
        title: _jsx(Label, { text: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F", size: "lg" }),
        showThemeSwitch: true,
        showNotificationButton: true,
        avatarDropdownItems: sampleProfileItems,
        userAvatar: { src: "https://i.pravatar.cc/150", alt: "User" },
        onMenuButtonClick: () => setMobileMenuOpen(true),
    };
    return (_jsx(AdminPageLayout, { ...args, isMobileMenuOpen: isMobileMenuOpen, isSidebarPinned: isPinned, onMobileMenuClose: () => setMobileMenuOpen(false), sidebarProps: sidebarProps, headerProps: headerProps, children: _jsxs("div", { style: { padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '8px' }, children: [_jsx("h1", { children: "\u0645\u062D\u062A\u0648\u0627\u06CC \u0627\u0635\u0644\u06CC \u0635\u0641\u062D\u0647" }), _jsx("p", { children: "\u0627\u06CC\u0646 \u0628\u062E\u0634 \u0645\u062D\u062A\u0648\u0627\u06CC \u0627\u0635\u0644\u06CC \u0635\u0641\u062D\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0644\u06CC\u200C\u0622\u0648\u062A \u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u062F." })] }) }));
};
const meta = {
    title: "Templates/AdminPageLayout",
    component: AdminPageLayout,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    // ما خود کامپوننت را رندر نمی‌کنیم، بلکه wrapper آن را رندر می‌کنیم
    render: (args) => _jsx(LayoutWithState, { ...args }),
};
export default meta;
export const DefaultRTL = {
    name: "Default (RTL)",
};
export const LTR = {
    name: "Left-to-Right (LTR)",
};
export const MobileView = {
    name: "Mobile View",
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};
