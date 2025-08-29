"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ContentContainer } from "../../atoms/ContentContainer/ContentContainer";
// ۱. وارد کردن الگوی پایه، کامپوننت‌ها و تایپ‌های لازم از خود دیزاین سیستم
import { AdminPageLayout, Label, } from "../../index"; // دیگر LayoutDirection را ایمپورت نمی‌کنیم
// ۲. تمام آیکون‌ها مستقیماً از کتابخانه‌های خودشان وارد می‌شوند
import { FaCog, FaListAlt, FaStore, FaTicketAlt, FaUser, FaShieldAlt, // <-- FaShieldAlt به اینجا منتقل شد
 } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// داده‌های ثابت و مختص این لی‌آوت (بدون تغییر)
const menuItems = [
    {
        label: "گارانتی",
        icon: FaStore,
        submenu: [
            { href: "/warranty", label: "گارانتی", icon: FaListAlt },
        ],
    },
    {
        label: "تیکت‌ها",
        icon: FaTicketAlt,
        submenu: [{ href: "/tickets", label: "لیست تیکت‌ها", icon: FaListAlt }, { href: "/ticket-categories", label: "مدیریت دسته بندی", icon: FaListAlt }],
    },
];
const footerItems = [
    { href: "/settings", label: "تنظیمات", icon: FaCog },
];
const profileItems = [
    {
        label: { text: "مشاهده پروفایل" },
        icon: _jsx(FaUser, {}), // به جای FaUser، از <FaUser /> استفاده می‌کنیم
        onClick: () => alert("رفتن به صفحه پروفایل..."),
    },
    {
        label: { text: "خروج از حساب", variant: "error" },
        icon: _jsx(FiLogOut, {}), // به جای FiLogOut، از <FiLogOut /> استفاده می‌کنیم
        onClick: () => alert("خارج شدن از حساب..."),
    },
];
export const YadakchiAdminLayout = ({ children, currentPath, renderLink, }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    // ۳. جهت به صورت ثابت در useEffect تعریف می‌شود
    useEffect(() => {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "fa";
    }, []); // فقط یک بار در ابتدا اجرا می‌شود
    const sidebarProps = {
        appName: "پنل یدکی ران",
        logo: _jsx(FaShieldAlt, {}),
        menuItems: menuItems,
        footerItems: footerItems,
        currentPath: currentPath,
        renderLink: renderLink,
        isPinned: isPinned,
        onPinToggle: () => setIsPinned((prev) => !prev),
    };
    const headerProps = {
        title: _jsx(Label, { text: "\u067E\u0646\u0644 \u0645\u062F\u06CC\u0631\u06CC\u062A", size: "lg" }),
        showThemeSwitch: true,
        showNotificationButton: true,
        avatarDropdownItems: profileItems,
        userAvatar: {
            src: "https://i.pravatar.cc/150?u=yadakchi-admin",
            alt: "آواتار مدیر",
        },
        onMenuButtonClick: () => setMobileMenuOpen(true),
        showBackButton: true,
    };
    return (_jsx(AdminPageLayout
    // ۴. پراپ direction حذف شد، چون لی‌آوت حالا همیشه RTL است
    , { 
        // ۴. پراپ direction حذف شد، چون لی‌آوت حالا همیشه RTL است
        isMobileMenuOpen: isMobileMenuOpen, onMobileMenuClose: () => setMobileMenuOpen(false), isSidebarPinned: isPinned, sidebarProps: sidebarProps, headerProps: headerProps, children: _jsx(ContentContainer, { children: children }) }));
};
