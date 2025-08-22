"use client"; // این کامپوننت برای مدیریت هاور و useEffect به حالت کلاینت نیاز دارد
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
// تایپ‌های پراپرتی‌های کامپوننت‌های فرزند را وارد می‌کنیم
import { Header } from "../../molecules/Header";
import { Sidebar } from "../../organisms/Sidebar";
// تعریف کامپوننت اصلی
export const AdminPageLayout = ({ direction = 'rtl', isMobileMenuOpen = false, isSidebarPinned = false, onMobileMenuClose, sidebarProps, headerProps, children, }) => {
    // ۱. منطق داخلی: مدیریت هاور کردن موس برای باز شدن خودکار سایدبار
    const [isHovering, setIsHovering] = useState(false);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);
    // ۲. محاسبه وضعیت نهایی باز بودن سایدبار بر اساس props های ورودی و state داخلی
    const isDesktopExpanded = isSidebarPinned || isHovering;
    const shouldBeFullyOpen = isMobileMenuOpen || isDesktopExpanded;
    // ۳. محاسبه عرض سایدبار برای اعمال padding به محتوای اصلی
    const sidebarDesktopWidth = shouldBeFullyOpen ? '16rem' : '5rem';
    const mainContentStyle = {
        // در موبایل، padding صفر است تا محتوا تمام صفحه را بگیرد
        paddingInlineStart: direction === 'rtl' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
        paddingInlineEnd: direction === 'ltr' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
        transition: 'padding-inline-start 0.3s ease-in-out, padding-inline-end 0.3s ease-in-out',
    };
    return (_jsxs("div", { className: `admin-page-layout admin-page-layout--${direction}`, children: [isMobileMenuOpen && _jsx("div", { className: "admin-page-layout__overlay", onClick: onMobileMenuClose }), _jsx("div", { className: `admin-page-layout__sidebar-wrapper ${isMobileMenuOpen ? 'admin-page-layout__sidebar-wrapper--mobile-open' : ''}`, onMouseEnter: () => isClient && window.innerWidth > 768 && setIsHovering(true), onMouseLeave: () => isClient && window.innerWidth > 768 && setIsHovering(false), children: _jsx(Sidebar, { ...sidebarProps, isExpanded: shouldBeFullyOpen }) }), _jsxs("div", { className: "admin-page-layout__main", style: mainContentStyle, children: [_jsx(Header, { ...headerProps }), _jsx("main", { className: "admin-page-layout__content", children: children })] })] }));
};
