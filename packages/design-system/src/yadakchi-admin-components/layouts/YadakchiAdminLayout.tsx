"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { ContentContainer } from "../../atoms/ContentContainer/ContentContainer";
// ۱. وارد کردن الگوی پایه، کامپوننت‌ها و تایپ‌های لازم از خود دیزاین سیستم
import {
  AdminPageLayout,
  Label,
  type SidebarNavItem,
  type AvatarDropdownItem,
} from "../../index"; // دیگر LayoutDirection را ایمپورت نمی‌کنیم

// ۲. تمام آیکون‌ها مستقیماً از کتابخانه‌های خودشان وارد می‌شوند
import {
  FaAward, FaClipboardList, FaCog, FaComments, FaFlag, FaGavel, FaImages, FaLayerGroup, FaListAlt,
  FaQuestionCircle, FaSitemap, FaStore, FaTicketAlt, FaUser, FaVideo, FaShieldAlt // <-- FaShieldAlt به اینجا منتقل شد
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

// داده‌های ثابت و مختص این لی‌آوت (بدون تغییر)
const menuItems: SidebarNavItem[] = [
  { label: "فروشگاه‌ها", icon: FaStore, submenu: [ { href: "/shops", label: "لیست فروشگاه‌ها", icon: FaListAlt }, { href: "/shops/badges", label: "بج ها", icon: FaAward }, { href: "/shops/comments", label: "کامنت ها", icon: FaComments }, { href: "/shops/category", label: "دسته بندی فروشندگان", icon: FaSitemap }, { href: "/shops/rules", label: "قوانین تایید فروشگاه", icon: FaGavel }, { href: "/shops/images", label: "عکس های ارسالی", icon: FaImages }, { href: "/shops/videos", label: "ویدیو های ارسالی", icon: FaVideo }, { label: "گزارش‌ها", icon: FaFlag, submenu: [ { href: "/shops/reports/types", label: "انواع گزارش", icon: FaLayerGroup }, { href: "/shops/reports/list", label: "گزارش ها", icon: FaFlag }, { href: "/shops/reports/subjects", label: "موضوعات گزارش ها", icon: FaClipboardList }, ], }, ], },
  { label: "تیکت‌ها", icon: FaTicketAlt, submenu: [{ href: "/tickets", label: "لیست تیکت‌ها", icon: FaListAlt }] },
  { label: "بانک", icon: FaStore, submenu: [ { href: "/bank/banks", label: "لیست بانک ها", icon: FaListAlt }, { href: "/bank/currencies", label: "ارز ها", icon: FaListAlt }, ] },
  { label: "سوالات متداول", icon: FaQuestionCircle, submenu: [ { href: "/faq", label: "مدیریت سوالات متداول", icon: FaQuestionCircle }, ] },
];
const footerItems: SidebarNavItem[] = [ { href: "/settings", label: "تنظیمات", icon: FaCog } ];
const profileItems: AvatarDropdownItem[] = [
    { 
      label: { text: "مشاهده پروفایل" }, 
      icon: <FaUser />, // به جای FaUser، از <FaUser /> استفاده می‌کنیم
      onClick: () => alert("رفتن به صفحه پروفایل...") 
    },
    { 
      label: { text: "خروج از حساب", variant: "error" }, 
      icon: <FiLogOut />, // به جای FiLogOut، از <FiLogOut /> استفاده می‌کنیم
      onClick: () => alert("خارج شدن از حساب...") 
    },
];

// Props های جدید و مستقل از فریمورک
export interface YadakchiAdminLayoutProps {
  children: ReactNode;
  currentPath: string;
  renderLink: (href: string, children: ReactNode) => ReactNode;
}

export const YadakchiAdminLayout: React.FC<YadakchiAdminLayoutProps> = ({ 
  children,
  currentPath,
  renderLink,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  
  // ۳. جهت به صورت ثابت در useEffect تعریف می‌شود
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'fa';
  }, []); // فقط یک بار در ابتدا اجرا می‌شود
  
  const sidebarProps = {
    appName: "پنل یدکچی",
    logo: <FaShieldAlt />,
    menuItems: menuItems,
    footerItems: footerItems,
    currentPath: currentPath,
    renderLink: renderLink,
    isPinned: isPinned,
    onPinToggle: () => setIsPinned(prev => !prev),
  };

  const headerProps = {
    title: <Label text="پنل مدیریت" size="lg" />,
    showThemeSwitch: true,
    showNotificationButton: true,
    avatarDropdownItems: profileItems,
    userAvatar: { src: "https://i.pravatar.cc/150?u=yadakchi-admin", alt: "آواتار مدیر" },
    onMenuButtonClick: () => setMobileMenuOpen(true),
     showBackButton: true,
    
  };

  return (
    <AdminPageLayout
        // ۴. پراپ direction حذف شد، چون لی‌آوت حالا همیشه RTL است
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={() => setMobileMenuOpen(false)}
        isSidebarPinned={isPinned}
        sidebarProps={sidebarProps}
        headerProps={headerProps}
    >
       <ContentContainer>
          {children}
        </ContentContainer>
    </AdminPageLayout>
  );
};