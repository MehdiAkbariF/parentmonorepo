import React, { ReactNode } from "react";
import { HeaderProps } from "../../molecules/Header";
import { SidebarProps } from "../../organisms/Sidebar";
export interface AdminPageLayoutProps {
    isMobileMenuOpen?: boolean;
    onMobileMenuClose?: () => void;
    isSidebarPinned?: boolean;
    sidebarProps: Omit<SidebarProps, 'isExpanded'>;
    headerProps: HeaderProps;
    children: ReactNode;
    direction?: 'rtl' | 'ltr';
}
export declare const AdminPageLayout: React.FC<AdminPageLayoutProps>;
