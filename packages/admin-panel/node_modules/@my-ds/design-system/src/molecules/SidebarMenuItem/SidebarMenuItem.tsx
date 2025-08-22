import React, { ReactNode } from "react";
import { Label } from "../../atoms/Label/Label";

export interface SidebarMenuItemProps {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  isExpanded?: boolean; // برای نمایش متن در حالت باز
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  level?: number; // برای تو رفتگی
  onClick?: () => void;
  children?: ReactNode; // برای زیرمنوها
}

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
  const indentStyle = {
    paddingInlineStart: `${level * 1.5}rem`, // تو رفتگی منطقی برای RTL/LTR
  };

  return (
    <div
      className={`sidebar-menu-item ${isActive ? "sidebar-menu-item--active" : ""}`}
      style={indentStyle}
    >
      <div className="sidebar-menu-item__trigger" onClick={onClick}>
        {icon && <span className="sidebar-menu-item__icon">{icon}</span>}
        <div
          className={`sidebar-menu-item__label-wrapper ${
            isExpanded ? "sidebar-menu-item__label-wrapper--expanded" : ""
          }`}
        >
          <Label text={label} size="sm" />
        </div>
        {hasSubmenu && isExpanded && (
          <span
            className={`sidebar-menu-item__chevron ${
              isSubmenuOpen ? "sidebar-menu-item__chevron--open" : ""
            }`}
          >
            {/* شما باید یک کامپوننت ChevronIcon بسازید یا از یک کاراکتر استفاده کنید */}
            ▾
          </span>
        )}
      </div>
      {hasSubmenu && (
        <div
          className={`sidebar-menu-item__submenu ${
            isSubmenuOpen && isExpanded ? "sidebar-menu-item__submenu--open" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};