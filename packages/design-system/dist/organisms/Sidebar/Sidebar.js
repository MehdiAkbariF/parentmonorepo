"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { SidebarMenuItem } from "../../molecules/SidebarMenuItem";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
// کامپوننت بازگشتی داخلی
const RecursiveMenuItem = ({ item, isExpanded, // این isExpanded از والد اصلی می‌آید
currentPath, renderLink, level = 0, }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isSubmenuActive = (submenu) => {
        return submenu.some(subItem => subItem.href === currentPath || (subItem.submenu && isSubmenuActive(subItem.submenu)));
    };
    const isActiveOrHasActiveChild = item.href === currentPath || (item.submenu && isSubmenuActive(item.submenu));
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(isActiveOrHasActiveChild);
    useEffect(() => {
        if (isActiveOrHasActiveChild)
            setIsSubmenuOpen(true);
        // ✨ یک افکت جدید: اگر سایدبار بسته شد، تمام زیرمنوها را هم ببند
        if (!isExpanded) {
            setIsSubmenuOpen(false);
        }
    }, [isExpanded, isActiveOrHasActiveChild]);
    const toggleSubmenu = () => { if (isExpanded)
        setIsSubmenuOpen(!isSubmenuOpen); };
    const IconComponent = item.icon;
    const menuItemContent = (_jsx(SidebarMenuItem, { label: item.label, icon: IconComponent ? _jsx(IconComponent, {}) : undefined, isActive: hasSubmenu ? isActiveOrHasActiveChild && !isSubmenuOpen : currentPath === item.href, isExpanded: isExpanded, hasSubmenu: hasSubmenu, isSubmenuOpen: isSubmenuOpen, onClick: toggleSubmenu, level: level, children: isExpanded && item.submenu?.map((subItem) => (_jsx(RecursiveMenuItem, { item: subItem, isExpanded: isExpanded, currentPath: currentPath, renderLink: renderLink, level: level + 1 }, subItem.href || subItem.label))) }));
    if (item.href) {
        return renderLink(item.href, menuItemContent);
    }
    return menuItemContent;
};
/**
 * Sidebar یک کامپوننت ارگانیسم برای نمایش ناوبری اصلی اپلیکیشن است.
 * این کامپوننت به صورت واکنش‌گرا طراحی شده و از طریق props کنترل می‌شود.
 */
export const Sidebar = ({ appName, logo, menuItems, footerItems, currentPath, isExpanded, isPinned = false, onPinToggle, renderLink, onMobileClose, }) => {
    return (_jsxs("aside", { className: `sidebar ${isExpanded ? "sidebar--expanded" : ""}`, children: [_jsxs("div", { className: "sidebar__header", children: [_jsx("div", { className: "sidebar__close-button", children: onMobileClose && (_jsx("button", { onClick: onMobileClose, "aria-label": "\u0628\u0633\u062A\u0646 \u0645\u0646\u0648", children: _jsx(FaTimes, {}) })) }), _jsx("div", { className: "sidebar__logo", children: logo }), _jsx("span", { className: "sidebar__app-name", children: appName }), _jsx("div", { className: "sidebar__pin-button", children: onPinToggle && (_jsx("button", { onClick: onPinToggle, "aria-label": "Pin Sidebar", children: isPinned ? _jsx(BsPinAngleFill, {}) : _jsx(BsPinAngle, {}) })) })] }), _jsx("nav", { className: "sidebar__nav", children: menuItems.map((item) => (_jsx(RecursiveMenuItem, { item: item, isExpanded: isExpanded, currentPath: currentPath, renderLink: renderLink }, item.href || item.label))) }), _jsx("div", { className: "sidebar__footer", children: footerItems?.map((item) => (_jsx(RecursiveMenuItem, { item: item, isExpanded: isExpanded, currentPath: currentPath, renderLink: renderLink }, item.href || item.label))) })] }));
};
