"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { SidebarMenuItem } from "../../molecules/SidebarMenuItem";
// کامپوننت بازگشتی داخلی برای رندر آیتم‌ها
const RecursiveMenuItem = ({ item, isExpanded, currentPath, level = 0, }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    // تابع کمکی برای تشخیص آیتم فعال
    const isSubmenuActive = (submenu) => {
        return submenu.some(subItem => subItem.href === currentPath || (subItem.submenu && isSubmenuActive(subItem.submenu)));
    };
    const isActiveOrHasActiveChild = item.href === currentPath || (item.submenu && isSubmenuActive(item.submenu));
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(isActiveOrHasActiveChild);
    useEffect(() => {
        if (isActiveOrHasActiveChild) {
            setIsSubmenuOpen(true);
        }
    }, [isExpanded, isActiveOrHasActiveChild]);
    const toggleSubmenu = () => {
        if (isExpanded) {
            setIsSubmenuOpen(!isSubmenuOpen);
        }
    };
    const IconComponent = item.icon;
    // اگر آیتم یک لینک مستقیم است، محتوای داخلی آن را برمی‌گردانیم تا در <Link> قرار گیرد
    if (item.href) {
        return (_jsx(SidebarMenuItem, { label: item.label, icon: IconComponent ? _jsx(IconComponent, {}) : undefined, isActive: currentPath === item.href, isExpanded: isExpanded, level: level }));
    }
    // اگر آیتم والد یک زیرمنو است
    return (_jsx(SidebarMenuItem, { label: item.label, icon: IconComponent ? _jsx(IconComponent, {}) : undefined, isActive: isActiveOrHasActiveChild && !isSubmenuOpen, isExpanded: isExpanded, hasSubmenu: hasSubmenu, isSubmenuOpen: isSubmenuOpen, onClick: toggleSubmenu, level: level, children: item.submenu?.map((subItem, index) => (_jsx(RecursiveMenuItem, { item: subItem, isExpanded: isExpanded, currentPath: currentPath, level: level + 1 }, index))) }));
};
// کامپوننت اصلی و قابل export
export const Sidebar = ({ logo, appName, menuItems, footerItems, currentPath, isExpanded, renderLink, }) => {
    return (_jsxs("aside", { className: `sidebar ${isExpanded ? "sidebar--expanded" : ""}`, children: [_jsxs("div", { className: "sidebar__header", children: [_jsx("div", { className: "sidebar__logo", children: logo }), _jsx("span", { className: "sidebar__app-name", children: appName })] }), _jsx("nav", { className: "sidebar__nav", children: menuItems.map((item, index) => {
                    // اگر آیتم href دارد، آن را با renderLink رندر می‌کنیم
                    if (item.href) {
                        return renderLink(item.href, _jsx(RecursiveMenuItem, { item: item, isExpanded: isExpanded, currentPath: currentPath }, index));
                    }
                    // در غیر این صورت، به صورت عادی رندر می‌کنیم
                    return _jsx(RecursiveMenuItem, { item: item, isExpanded: isExpanded, currentPath: currentPath }, index);
                }) }), _jsx("div", { className: "sidebar__footer", children: footerItems?.map((item, index) => {
                    if (item.href) {
                        return renderLink(item.href, _jsx(RecursiveMenuItem, { item: item, isExpanded: isExpanded, currentPath: currentPath }, index));
                    }
                    return _jsx(RecursiveMenuItem, { item: item, isExpanded: isExpanded, currentPath: currentPath }, index);
                }) })] }));
};
