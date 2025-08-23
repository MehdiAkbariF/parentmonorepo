"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Header } from "../../molecules/Header";
import { Sidebar } from "../../organisms/Sidebar";
export const AdminPageLayout = ({ isMobileMenuOpen = false, onMobileMenuClose, isSidebarPinned = false, sidebarProps, headerProps, children, direction = 'rtl', // مقدار پیش‌فرض
 }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);
    const isDesktopExpanded = isSidebarPinned || isHovering;
    const shouldBeFullyOpen = isMobileMenuOpen || isDesktopExpanded;
    // محاسبه عرض برای padding محتوا (این بخش بدون تغییر است)
    const sidebarDesktopWidth = isDesktopExpanded ? '16rem' : '5rem';
    const mainContentStyle = {
        paddingInlineStart: direction === 'rtl' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
        paddingInlineEnd: direction === 'ltr' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
        transition: 'padding-inline-start 0.3s ease-in-out, padding-inline-end 0.3s ease-in-out',
    };
    return (_jsxs("div", { className: `admin-page-layout admin-page-layout--${direction} ${isDesktopExpanded ? "admin-page-layout--sidebar-expanded" : ""}`, children: [isMobileMenuOpen && _jsx("div", { className: "admin-page-layout__overlay", onClick: onMobileMenuClose }), _jsx("div", { className: `admin-page-layout__sidebar ${isMobileMenuOpen ? 'admin-page-layout__sidebar--mobile-open' : ''}`, onMouseEnter: () => isClient && window.innerWidth >= 1024 && setIsHovering(true), onMouseLeave: () => isClient && window.innerWidth >= 1024 && setIsHovering(false), children: _jsx(Sidebar, { ...sidebarProps, isExpanded: shouldBeFullyOpen, 
                    // تابع بستن منوی موبایل را به Sidebar پاس می‌دهیم
                    onMobileClose: onMobileMenuClose }) }), _jsx("div", { className: "admin-page-layout__header", children: _jsx(Header, { ...headerProps }) }), _jsx("main", { className: "admin-page-layout__content", children: children })] }));
};
