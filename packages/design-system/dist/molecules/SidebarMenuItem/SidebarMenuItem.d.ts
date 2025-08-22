import React, { ReactNode } from "react";
export interface SidebarMenuItemProps {
    label: string;
    icon?: ReactNode;
    isActive?: boolean;
    isExpanded?: boolean;
    hasSubmenu?: boolean;
    isSubmenuOpen?: boolean;
    level?: number;
    onClick?: () => void;
    children?: ReactNode;
}
export declare const SidebarMenuItem: React.FC<SidebarMenuItemProps>;
