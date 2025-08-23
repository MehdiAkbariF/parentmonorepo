"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { SidebarMenuItem } from "../../molecules/SidebarMenuItem";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

export interface SidebarNavItem {
  label: string;
  icon?: React.FC<any>;
  href?: string;
  submenu?: SidebarNavItem[];
}

// کامپوننت بازگشتی داخلی
const RecursiveMenuItem = ({
  item,
  isExpanded, // این isExpanded از والد اصلی می‌آید
  currentPath,
  renderLink,
  level = 0,
}: {
  item: SidebarNavItem;
  isExpanded: boolean;
  currentPath: string;
  renderLink: (href: string, children: ReactNode) => ReactNode;
  level?: number;
}) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const isSubmenuActive = (submenu: SidebarNavItem[]): boolean => {
    return submenu.some(subItem => subItem.href === currentPath || (subItem.submenu && isSubmenuActive(subItem.submenu)));
  };

  const isActiveOrHasActiveChild = item.href === currentPath || (item.submenu && isSubmenuActive(item.submenu));
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(isActiveOrHasActiveChild);

  useEffect(() => {
    if (isActiveOrHasActiveChild) setIsSubmenuOpen(true);
    // ✨ یک افکت جدید: اگر سایدبار بسته شد، تمام زیرمنوها را هم ببند
    if (!isExpanded) {
        setIsSubmenuOpen(false);
    }
  }, [isExpanded, isActiveOrHasActiveChild]);

  const toggleSubmenu = () => { if (isExpanded) setIsSubmenuOpen(!isSubmenuOpen); };
  const IconComponent = item.icon;

  const menuItemContent = (
    <SidebarMenuItem
      label={item.label}
      icon={IconComponent ? <IconComponent /> : undefined}
      isActive={hasSubmenu ? isActiveOrHasActiveChild && !isSubmenuOpen : currentPath === item.href}
      isExpanded={isExpanded}
      hasSubmenu={hasSubmenu}
      isSubmenuOpen={isSubmenuOpen}
      onClick={toggleSubmenu}
      level={level}
    >
      {/* ✨ --- تغییر کلیدی و نهایی اینجاست --- */}
      {/* زیرمنو فقط زمانی رندر می‌شود که سایدبار اصلی باز باشد */}
      {isExpanded && item.submenu?.map((subItem) => (
        <RecursiveMenuItem
          key={subItem.href || subItem.label}
          item={subItem}
          isExpanded={isExpanded}
          currentPath={currentPath}
          renderLink={renderLink}
          level={level + 1}
        />
      ))}
    </SidebarMenuItem>
  );

  if(item.href) {
    return renderLink(item.href, menuItemContent);
  }
  return menuItemContent;
};


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
export const Sidebar: React.FC<SidebarProps> = ({
  appName,
  logo,
  menuItems,
  footerItems,
  currentPath,
  isExpanded,
  isPinned = false,
  onPinToggle,
  renderLink,

  onMobileClose,
  
}) => {
  return (
    <aside className={`sidebar ${isExpanded ? "sidebar--expanded" : ""}`}>
      <div className="sidebar__header">
         <div className="sidebar__close-button">
          {onMobileClose && (
            <button onClick={onMobileClose} aria-label="بستن منو">
              <FaTimes />
            </button>
          )}
        </div>
        <div className="sidebar__logo">{logo}</div>
        <span className="sidebar__app-name">{appName}</span>
        <div className="sidebar__pin-button">
          {onPinToggle && (
            <button onClick={onPinToggle} aria-label="Pin Sidebar">
              {isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
            </button>
          )}
        </div>
      </div>

      <nav className="sidebar__nav">
        {menuItems.map((item) => (
          <RecursiveMenuItem
            key={item.href || item.label}
            item={item}
            isExpanded={isExpanded}
            currentPath={currentPath}
            renderLink={renderLink}
          />
        ))}
      </nav>

      <div className="sidebar__footer">
        {footerItems?.map((item) => (
          <RecursiveMenuItem
            key={item.href || item.label}
            item={item}
            isExpanded={isExpanded}
            currentPath={currentPath}
            renderLink={renderLink}
          />
        ))}
      </div>
    </aside>
  );
};