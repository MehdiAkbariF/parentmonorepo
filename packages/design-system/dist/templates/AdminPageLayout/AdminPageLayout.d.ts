import React, { ReactNode } from "react";
import { HeaderProps } from "../../molecules/Header";
import { SidebarProps } from "../../organisms/Sidebar";
export type LayoutDirection = 'rtl' | 'ltr';
export interface AdminPageLayoutProps {
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
    /**
     * تمام پراپرتی‌های مورد نیاز برای کامپوننت Sidebar.
     * ما از Omit استفاده می‌کنیم تا isExpanded را حذف کنیم، چون خود لی‌آوت آن را محاسبه می‌کند.
     */
    sidebarProps: Omit<SidebarProps, 'isExpanded'>;
    /**
     * تمام پراپرتی‌های مورد نیاز برای کامپوننت Header
     */
    headerProps: HeaderProps;
    /**
     * محتوای اصلی صفحه که در این لی‌آوت قرار می‌گیرد (مثلاً داشبورد، لیست کاربران و ...)
     */
    children: ReactNode;
}
export declare const AdminPageLayout: React.FC<AdminPageLayoutProps>;
