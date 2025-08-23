import React, { ReactNode } from "react";
/**
 * پراپرتی‌های کامپوننت SidebarMenuItem
 */
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
/**
 * SidebarMenuItem یک مولکول برای نمایش یک آیتم قابل کلیک در سایدبار است.
 * این کامپوننت می‌تواند حالت فعال، زیرمنو و سطوح تو در تو را مدیریت کند.
 */
export declare const SidebarMenuItem: React.FC<SidebarMenuItemProps>;
