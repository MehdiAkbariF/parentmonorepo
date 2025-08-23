"use client";

import React, { ReactNode } from "react";
import { IconButton } from "../../atoms/IconButton";
import { BackIcon } from "../../atoms/icons/BackIcon";
import { NotificationIcon } from "../../atoms/icons/NotificationIcon"
import { ThemeSwitch } from "../../atoms/ThemeSwitch/ThemeSwitch";
import { AvatarDropdown, AvatarDropdownItem } from "../AvatarDropdown/AvatarDropdown";
import { AvatarProps } from "../../atoms/Avatar";
import { FiMenu } from "react-icons/fi";

export interface HeaderProps {
  title?: ReactNode;
  // دکمه بازگشت حالا در انتهای هدر است
  showBackButton?: boolean;
  onBackClick?: () => void;
  onMenuButtonClick?: () => void;
  showNotificationButton?: boolean;
  showThemeSwitch?: boolean;
  avatarDropdownItems?: AvatarDropdownItem[];
  userAvatar?: AvatarProps;
  appName?: string;
  logo?: ReactNode;
  // actions دیگر کاربرد اصلی ندارد، چون اکشن‌ها به سمت راست منتقل شده‌اند
  // اما آن را برای موارد خاص نگه می‌داریم
  actions?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false, // پیش‌فرض false است تا در همه صفحات نمایش داده نشود
  onBackClick = () => typeof window !== 'undefined' && window.history.back(),
  onMenuButtonClick,
  showNotificationButton = true,
  showThemeSwitch = true,
  avatarDropdownItems,
  userAvatar,
  appName,
  logo,
  actions,
}) => {
  // به صورت ثابت rtl است
  const direction = 'rtl';

  return (
    <header className="header" dir={direction}>
      {/* ۱. ✨ بخش راست (start) حالا شامل اکشن‌ها است */}
      <div className="header__start">
        <div className="header__menu-toggle">
          {onMenuButtonClick && (
            <IconButton
              icon={<FiMenu />}
              variant="default"
              onClick={onMenuButtonClick}
              aria-label="باز کردن منو"
            />
          )}
        </div>
        
        {/* اکشن‌ها (نوتیفیکیشن، تم، پروفایل) در دسکتاپ اینجا نمایش داده می‌شوند */}
        <div className="header__desktop-actions">
          {showNotificationButton && <IconButton icon={<NotificationIcon />} variant="default" aria-label="اعلانات" />}
          {showThemeSwitch && <ThemeSwitch />}
          {avatarDropdownItems && (
            <AvatarDropdown
              align="left"
              items={avatarDropdownItems}
              avatar={userAvatar || { alt: "پروفایل کاربر" }}
            />
          )}
          {actions}
        </div>
      </div>

      <div className="header__center">
        <div className="header__brand-mobile">
          <div className="header__logo-mobile">{logo}</div>
          <span className="header__app-name-mobile">{appName}</span>
        </div>
        
        <div className="header__title-desktop">
          {title}
        </div>
      </div>

      {/* ۲. ✨ بخش چپ (end) حالا شامل دکمه بازگشت است */}
      <div className="header__end">
        {showBackButton && (
          <IconButton
            icon={<BackIcon />}
            variant="default"
            onClick={onBackClick}
            aria-label="بازگشت"
          />
        )}
      </div>
    </header>
  );
};