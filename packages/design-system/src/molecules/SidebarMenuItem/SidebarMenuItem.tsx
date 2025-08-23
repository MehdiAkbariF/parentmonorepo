"use client";

import React, { ReactNode } from "react";
import { Label } from "../../atoms/Label/Label";
import { FiChevronDown } from "react-icons/fi"; // استفاده از یک آیکون استاندارد

/**
 * پراپرتی‌های کامپوننت SidebarMenuItem
 */
export interface SidebarMenuItemProps {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  isExpanded?: boolean; // کنترل نمایش کامل آیتم (آیکون + متن)
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  level?: number; // برای تو رفتگی زیرمنوها
  onClick?: () => void;
  children?: ReactNode; // محتوای زیرمنو
}

/**
 * SidebarMenuItem یک مولکول برای نمایش یک آیتم قابل کلیک در سایدبار است.
 * این کامپوننت می‌تواند حالت فعال، زیرمنو و سطوح تو در تو را مدیریت کند.
 */
export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  label,
  icon,
  isActive = false,
  isExpanded = true,
  hasSubmenu = false,
  isSubmenuOpen = false,
  level = 0,
  onClick,
  children,
}) => {
  // ۱. استایل تو رفتگی را به خود آیتم اصلی اعمال می‌کنیم
  const itemStyle = {
    paddingInlineStart: `${level * 1.25}rem`, // 20px تو رفتگی برای هر سطح
  };

  return (
    <div
      className={`sidebar-menu-item ${isActive ? "sidebar-menu-item--active" : ""}`}
      style={itemStyle}
    >
      <div className="sidebar-menu-item__trigger" onClick={onClick}>
        {icon && (
          <div className="sidebar-menu-item__icon-wrapper">
            {icon}
          </div>
        )}
        
        <div className="sidebar-menu-item__content">
          <Label text={label} size="md" variant="secondary"/>
          {hasSubmenu && (
            <div className={`sidebar-menu-item__chevron ${isSubmenuOpen ? "sidebar-menu-item__chevron--open" : ""}`}>
              <FiChevronDown />
            </div>
          )}
        </div>
      </div>

      {hasSubmenu && (
        <div className={`sidebar-menu-item__submenu ${isSubmenuOpen ? "sidebar-menu-item__submenu--open" : ""}`}>
          <div className="sidebar-menu-item__submenu-content">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};