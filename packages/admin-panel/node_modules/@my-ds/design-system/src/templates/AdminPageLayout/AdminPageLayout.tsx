"use client"; // این کامپوننت برای مدیریت هاور و useEffect به حالت کلاینت نیاز دارد

import React, { ReactNode, useState, useEffect } from "react";
// تایپ‌های پراپرتی‌های کامپوننت‌های فرزند را وارد می‌کنیم
import { Header, HeaderProps } from "../../molecules/Header";
import { Sidebar, SidebarProps } from "../../organisms/Sidebar";

// یک تایپ برای جهت‌دهی تعریف می‌کنیم تا خوانایی بالا برود و بتوانیم آن را export کنیم
export type LayoutDirection = 'rtl' | 'ltr';

// این "قرارداد" یا API کامپوننت ماست.
// مشخص می‌کند که چه ورودی‌هایی را از بیرون (از admin-panel) می‌پذیرد.
export interface AdminPageLayoutProps {
  // --- Props برای کنترل خود لی‌آوت ---
  /**
   * جهت کلی چیدمان صفحه ('rtl' یا 'ltr')
   */
  direction?: LayoutDirection;
  /**
   * وضعیت باز بودن سایدبار در حالت موبایل
   */
  isMobileMenuOpen?: boolean;
  /**
   * وضعیت پین بودن سایدبار در حالت دسکتاپ
   */
  isSidebarPinned?: boolean;
  /**
   * تابعی که با کلیک روی overlay در حالت موبایل، برای بستن منو فراخوانی می‌شود
   */
  onMobileMenuClose?: () => void;

  // --- Props برای پاس دادن به کامپوننت‌های فرزند ---
  /**
   * تمام پراپرتی‌های مورد نیاز برای کامپوننت Sidebar.
   * ما از Omit استفاده می‌کنیم تا isExpanded را حذف کنیم، چون خود لی‌آوت آن را محاسبه می‌کند.
   */
  sidebarProps: Omit<SidebarProps, 'isExpanded'>;
  /**
   * تمام پراپرتی‌های مورد نیاز برای کامپوننت Header
   */
  headerProps: HeaderProps;

  // --- محتوای اصلی ---
  /**
   * محتوای اصلی صفحه که در این لی‌آوت قرار می‌گیرد (مثلاً داشبورد، لیست کاربران و ...)
   */
  children: ReactNode;
}

// تعریف کامپوننت اصلی
export const AdminPageLayout: React.FC<AdminPageLayoutProps> = ({
  direction = 'rtl',
  isMobileMenuOpen = false,
  isSidebarPinned = false,
  onMobileMenuClose,
  sidebarProps,
  headerProps,
  children,
}) => {
  // ۱. منطق داخلی: مدیریت هاور کردن موس برای باز شدن خودکار سایدبار
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  // ۲. محاسبه وضعیت نهایی باز بودن سایدبار بر اساس props های ورودی و state داخلی
  const isDesktopExpanded = isSidebarPinned || isHovering;
  const shouldBeFullyOpen = isMobileMenuOpen || isDesktopExpanded;
  
  // ۳. محاسبه عرض سایدبار برای اعمال padding به محتوای اصلی
  const sidebarDesktopWidth = shouldBeFullyOpen ? '16rem' : '5rem';
  const mainContentStyle: React.CSSProperties = {
    // در موبایل، padding صفر است تا محتوا تمام صفحه را بگیرد
    paddingInlineStart: direction === 'rtl' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
    paddingInlineEnd: direction === 'ltr' ? (isMobileMenuOpen ? '0' : sidebarDesktopWidth) : '0',
    transition: 'padding-inline-start 0.3s ease-in-out, padding-inline-end 0.3s ease-in-out',
  };

  return (
    <div className={`admin-page-layout admin-page-layout--${direction}`}>
      
      {/* Overlay که با کلیک، منوی موبایل را می‌بندد */}
      {isMobileMenuOpen && <div className="admin-page-layout__overlay" onClick={onMobileMenuClose} />}
      
      {/* Wrapper برای سایدبار که رویدادهای هاور را مدیریت می‌کند */}
      <div 
        className={`admin-page-layout__sidebar-wrapper ${isMobileMenuOpen ? 'admin-page-layout__sidebar-wrapper--mobile-open' : ''}`}
        onMouseEnter={() => isClient && window.innerWidth > 768 && setIsHovering(true)}
        onMouseLeave={() => isClient && window.innerWidth > 768 && setIsHovering(false)}
      >
        <Sidebar {...sidebarProps} isExpanded={shouldBeFullyOpen} />
      </div>

      {/* بخش اصلی که شامل هدر و محتواست */}
      <div className="admin-page-layout__main" style={mainContentStyle}>
        <Header {...headerProps} />
        <main className="admin-page-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
};