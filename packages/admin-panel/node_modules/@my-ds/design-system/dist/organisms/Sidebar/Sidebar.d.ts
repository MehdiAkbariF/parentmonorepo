import React, { ReactNode } from "react";
export interface SidebarNavItem {
    label: string;
    icon?: React.FC<any>;
    href?: string;
    submenu?: SidebarNavItem[];
}
export interface SidebarProps {
    logo?: ReactNode;
    appName?: string;
    menuItems: SidebarNavItem[];
    footerItems?: SidebarNavItem[];
    currentPath: string;
    isExpanded: boolean;
    renderLink: (href: string, children: ReactNode) => ReactNode;
}
export declare const Sidebar: React.FC<SidebarProps>;
