"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ۱. ایمپورت کردن الگو و تایپ‌های مورد نیاز از سیستم طراحی
import {
  AdminPageLayout,
  Label,
  type SidebarNavItem,
  type AvatarDropdownItem,
  type LayoutDirection,
} from "@my-ds/design-system";

// ۲. آیکون‌های مورد نیاز
import {
  FaAward, FaClipboardList, FaCog, FaComments, FaFlag, FaGavel, FaImages, FaLayerGroup, FaListAlt,
  FaQuestionCircle, FaShieldAlt, FaSitemap, FaStore, FaTicketAlt, FaUser, FaVideo,
} from "react-icons/fa";
import { FiLogOut, FiGlobe } from "react-icons/fi";

// ۳. داده‌های مختص اپلیکیشن (بدون تغییر)
const menuItems: SidebarNavItem[] = [
  { label: "فروشگاه‌ها", icon: FaStore, submenu: [ { href: "/pages/Shops", label: "لیست فروشگاه‌ها", icon: FaListAlt }, { href: "/pages/Shops/Badges", label: "بج ها", icon: FaAward }, { href: "/pages/Shops/Comments", label: "کامنت ها", icon: FaComments }, { href: "/pages/Shops/ShopCategory", label: "دسته بندی فروشندگان", icon: FaSitemap }, { href: "/pages/Shops/ConfirmRule", label: "قوانین تایید فروشگاه", icon: FaGavel }, { href: "/pages/Shops/Images", label: "عکس های ارسالی", icon: FaImages }, { href: "/pages/Shops/Videos", label: "ویدیو های ارسالی", icon: FaVideo }, { label: "گزارش‌ها", icon: FaFlag, submenu: [ { href: "/pages/Shops/Report/ReportType", label: "انواع گزارش", icon: FaLayerGroup }, { href: "/pages/Shops/Report/Reports", label: "گزارش ها", icon: FaFlag }, { href: "/pages/Shops/Report/ReportSubjects", label: "موضوعات گزارش ها", icon: FaClipboardList }, ], }, ], },
  { label: "تیکت‌ها", icon: FaTicketAlt, submenu: [{ href: "/pages/Tickets", label: "لیست تیکت‌ها", icon: FaListAlt }], },
  { label: "بانک", icon: FaStore, submenu: [ { href: "/pages/Bank/Banks", label: "لیست بانک ها", icon: FaListAlt }, { href: "/pages/Bank/Currencies", label: "ارز ها", icon: FaListAlt }, ], },
  { label: "سوالات متداول", icon: FaQuestionCircle, submenu: [ { href: "/pages/FAQ", label: "مدیریت سوالات متداول", icon: FaQuestionCircle }, ], },
];
const footerItems: SidebarNavItem[] = [ { href: "/settings", label: "تنظیمات", icon: FaCog } ];
const profileItems: AvatarDropdownItem[] = [ { label: { text: "مشاهده پروفایل" }, icon: <FaUser />, onClick: () => alert("رفتن به صفحه پروفایل...") }, { label: { text: "خروج از حساب", variant: "error" }, icon: <FiLogOut />, onClick: () => alert("خارج شدن از حساب...") }, ];

export default function HomePage() {
  // ۴. State و تابع برای مدیریت جهت
  const [direction, setDirection] = useState<LayoutDirection>('rtl');
  const toggleDirection = () => {
    setDirection(prevDirection => (prevDirection === 'rtl' ? 'ltr' : 'rtl'));
  };

  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    // این useEffect جهت تگ <html> را به‌روز می‌کند
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === 'rtl' ? 'fa' : 'en';
  }, [direction]);
  
  const renderNextLink = (href: string, children: ReactNode) => {
    return <Link href={href}>{children}</Link>;
  };
  
  const sidebarProps = {
    appName: "پنل مدیریت",
    logo: <FaShieldAlt />,
    menuItems: menuItems,
    footerItems: footerItems,
    currentPath: pathname,
    renderLink: renderNextLink,
    isPinned: isPinned,
    onPinToggle: () => setIsPinned(prev => !prev),
  };

  const headerProps = {
    title: <Label text="صفحه اصلی" size="lg" />,
    showThemeSwitch: true,
    showNotificationButton: true,
    avatarDropdownItems: profileItems,
    userAvatar: { src: "https://i.pravatar.cc/150?u=raven", alt: "آواتار کاربر" },
    onMenuButtonClick: () => setMobileMenuOpen(true),
    // ۵. ✨ تغییر کلیدی: onClick دکمه به تابع toggleDirection متصل شد
    actions: (
        <button 
            onClick={toggleDirection} 
            aria-label="Toggle Direction" 
            style={{ 
                color: 'var(--color-text-primary)', 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <FiGlobe size={22} />
        </button>
    )
  };

  return (
    <AdminPageLayout
        direction={direction} // ۶. جهت فعلی به لی‌آوت پاس داده می‌شود
        isMobileMenuOpen={isMobileMenuOpen}
        isSidebarPinned={isPinned}
        onMobileMenuClose={() => setMobileMenuOpen(false)}
        sidebarProps={sidebarProps}
        headerProps={headerProps}
    >
        <h1 className="text-2xl font-semibold">داشبورد</h1>
        <p className="mt-2">به پنل مدیریت خوش آمدید.</p>
    </AdminPageLayout>
  );
}