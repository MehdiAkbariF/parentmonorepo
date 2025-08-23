"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { Header, HeaderProps } from "../../molecules/Header";
import { Sidebar, SidebarProps } from "../../organisms/Sidebar";

export interface AdminPageLayoutProps {
  isMobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
  isSidebarPinned?: boolean;
  sidebarProps: Omit<SidebarProps, 'isExpanded'>;
  headerProps: HeaderProps;
  children: ReactNode;
  // ما پراپ direction را که قبلاً حذف کرده بودیم، دوباره اضافه می‌کنیم
  // چون برای استایل‌های واکنش‌گرا ضروری است
  direction?: 'rtl' | 'ltr';
}

export const AdminPageLayout: React.FC<AdminPageLayoutProps> = ({
  isMobileMenuOpen = false,
  onMobileMenuClose,
  isSidebarPinned = false,
  sidebarProps,
  headerProps,
  children,
  direction = 'rtl', // مقدار پیش‌فرض
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  const isDesktopExpanded = isSidebarPinned || isHovering;
  const shouldBeFullyOpen = isMobileMenuOpen || isDesktopExpanded;
  
  // محاسبه عرض برای padding محتوا (این بخش بدون تغییر است)
  const sidebarDesktopWidth = isDesktopExpanded ? '16rem' : '5rem';
  const mainContentStyle: React.CSSProperties = {
    paddingInlineStart: direction === 'rtl' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
    paddingInlineEnd: direction === 'ltr' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
    transition: 'padding-inline-start 0.3s ease-in-out, padding-inline-end 0.3s ease-in-out',
  };

  return (
    <div 
      className={`admin-page-layout admin-page-layout--${direction} ${isDesktopExpanded ? "admin-page-layout--sidebar-expanded" : ""}`}
    >
      {isMobileMenuOpen && <div className="admin-page-layout__overlay" onClick={onMobileMenuClose} />}
      
      <div 
        className={`admin-page-layout__sidebar ${isMobileMenuOpen ? 'admin-page-layout__sidebar--mobile-open' : ''}`}
        onMouseEnter={() => isClient && window.innerWidth >= 1024 && setIsHovering(true)}
        onMouseLeave={() => isClient && window.innerWidth >= 1024 && setIsHovering(false)}
      >
        {/* ✨ --- تغییر کلیدی و نهایی اینجاست --- */}
        <Sidebar 
            {...sidebarProps} 
            isExpanded={shouldBeFullyOpen} 
            // تابع بستن منوی موبایل را به Sidebar پاس می‌دهیم
            onMobileClose={onMobileMenuClose}
        />
      </div>
      
      <div className="admin-page-layout__header">
        <Header {...headerProps} />
      </div>
      
      <main className="admin-page-layout__content">
        {children}
      </main>
    </div>
  );
};