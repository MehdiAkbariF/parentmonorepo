"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { SidebarMenuItem, SidebarMenuItemProps } from "../../molecules/SidebarMenuItem";

// تعریف ساختار یک آیتم منو (این تایپ را export می‌کنیم تا در admin-panel استفاده شود)
export interface SidebarNavItem {
  label: string;
  icon?: React.FC<any>; // تایپ آیکون
  href?: string;
  submenu?: SidebarNavItem[];
}

// کامپوننت بازگشتی داخلی برای رندر آیتم‌ها
const RecursiveMenuItem = ({
  item,
  isExpanded,
  currentPath,
  level = 0,
}: {
  item: SidebarNavItem;
  isExpanded: boolean;
  currentPath: string;
  level?: number;
}) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  // تابع کمکی برای تشخیص آیتم فعال
  const isSubmenuActive = (submenu: SidebarNavItem[]): boolean => {
    return submenu.some(subItem => subItem.href === currentPath || (subItem.submenu && isSubmenuActive(subItem.submenu)));
  };

  const isActiveOrHasActiveChild = item.href === currentPath || (item.submenu && isSubmenuActive(item.submenu));
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(isActiveOrHasActiveChild);

  useEffect(() => {
    if (isActiveOrHasActiveChild) {
      setIsSubmenuOpen(true);
    }
  }, [isExpanded, isActiveOrHasActiveChild]);

  const toggleSubmenu = () => {
    if (isExpanded) {
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  const IconComponent = item.icon;

  // اگر آیتم یک لینک مستقیم است، محتوای داخلی آن را برمی‌گردانیم تا در <Link> قرار گیرد
  if (item.href) {
    return (
      <SidebarMenuItem
        label={item.label}
        icon={IconComponent ? <IconComponent /> : undefined}
        isActive={currentPath === item.href}
        isExpanded={isExpanded}
        level={level}
      />
    );
  }

  // اگر آیتم والد یک زیرمنو است
  return (
    <SidebarMenuItem
      label={item.label}
      icon={IconComponent ? <IconComponent /> : undefined}
      isActive={isActiveOrHasActiveChild && !isSubmenuOpen}
      isExpanded={isExpanded}
      hasSubmenu={hasSubmenu}
      isSubmenuOpen={isSubmenuOpen}
      onClick={toggleSubmenu}
      level={level}
    >
      {item.submenu?.map((subItem, index) => (
        <RecursiveMenuItem
          key={index}
          item={subItem}
          isExpanded={isExpanded}
          currentPath={currentPath}
          level={level + 1}
        />
      ))}
    </SidebarMenuItem>
  );
};


// پراپرتی‌های کامپوننت اصلی Sidebar
export interface SidebarProps {
  logo?: ReactNode;
  appName?: string;
  menuItems: SidebarNavItem[];
  footerItems?: SidebarNavItem[];
  currentPath: string; // مسیر فعلی صفحه
  isExpanded: boolean; // آیا سایدبار باز است؟
  // یک رندر پراپ (render prop) برای کامپوننت Link
  // این کار باعث می‌شود کامپوننت ما مستقل از فریمورک باشد
  renderLink: (href: string, children: ReactNode) => ReactNode;
}

// کامپوننت اصلی و قابل export
export const Sidebar: React.FC<SidebarProps> = ({
  logo,
  appName,
  menuItems,
  footerItems,
  currentPath,
  isExpanded,
  renderLink,
}) => {
  return (
    <aside className={`sidebar ${isExpanded ? "sidebar--expanded" : ""}`}>
      <div className="sidebar__header">
        <div className="sidebar__logo">{logo}</div>
        <span className="sidebar__app-name">{appName}</span>
      </div>
      <nav className="sidebar__nav">
        {menuItems.map((item, index) => {
          // اگر آیتم href دارد، آن را با renderLink رندر می‌کنیم
          if(item.href) {
            return renderLink(
              item.href, 
              <RecursiveMenuItem key={index} item={item} isExpanded={isExpanded} currentPath={currentPath} />
            );
          }
          // در غیر این صورت، به صورت عادی رندر می‌کنیم
          return <RecursiveMenuItem key={index} item={item} isExpanded={isExpanded} currentPath={currentPath} />;
        })}
      </nav>
      <div className="sidebar__footer">
        {footerItems?.map((item, index) => {
          if(item.href) {
            return renderLink(
              item.href,
              <RecursiveMenuItem key={index} item={item} isExpanded={isExpanded} currentPath={currentPath} />
            );
          }
          return <RecursiveMenuItem key={index} item={item} isExpanded={isExpanded} currentPath={currentPath} />;
        })}
      </div>
    </aside>
  );
};