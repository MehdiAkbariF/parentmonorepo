import React, { ReactNode } from "react";
export interface SidebarNavItem {
    label: string;
    icon?: React.FC<any>;
    href?: string;
    submenu?: SidebarNavItem[];
}
/**
 * پراپرتی‌های کامپوننت Sidebar
 */
export interface SidebarProps {
    appName?: string;
    logo?: ReactNode;
    menuItems: SidebarNavItem[];
    footerItems?: SidebarNavItem[];
    currentPath: string;
    isExpanded: boolean;
    isPinned?: boolean;
    onPinToggle?: () => void;
    renderLink: (href: string, children: ReactNode) => ReactNode;
    onMobileClose?: () => void;
}
/**
 * Sidebar یک کامپوننت ارگانیسم برای نمایش ناوبری اصلی اپلیکیشن است.
 * این کامپوننت به صورت واکنش‌گرا طراحی شده و از طریق props کنترل می‌شود.
 */
export declare const Sidebar: React.FC<SidebarProps>;
