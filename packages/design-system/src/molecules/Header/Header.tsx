"use client";

import React, { ReactNode } from "react";
import { IconButton } from "../../atoms/IconButton";
import { BackIcon, NotificationIcon } from "../../atoms/icons";
import { ThemeSwitch } from "../../atoms/ThemeSwitch/ThemeSwitch";
import { Avatar, AvatarProps } from "../../atoms/Avatar/Avatar";
import { AvatarDropdown, AvatarDropdownItem } from "../AvatarDropdown/AvatarDropdown";

/**
 * پراپرتی‌های کامپوننت Header
 */
export interface HeaderProps {
title?: ReactNode;
  showBackButton?: boolean;
  showNotificationButton?: boolean;
  showThemeSwitch?: boolean;

  /**
   * اطلاعات یک آواتار ساده برای نمایش.
   * این پراپرتی تنها در صورتی استفاده می‌شود که `avatarDropdownItems` ارائه نشده باشد.
   */
  userAvatar?: AvatarProps;
  /**
   * تابعی که هنگام کلیک روی آواتار ساده اجرا می‌شود.
   */
  onAvatarClick?: () => void;

  /**
   * آرایه‌ای از آیتم‌ها برای منوی پروفایل کاربر.
   * ارائه این پراپرتی باعث نمایش یک AvatarDropdown کامل می‌شود و بر `userAvatar` اولویت دارد.
   */
  avatarDropdownItems?: AvatarDropdownItem[];

  onBackClick?: () => void;
  onNotificationClick?: () => void;
  actions?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  showNotificationButton = true,
  showThemeSwitch = false,
  userAvatar,
  onAvatarClick,
  avatarDropdownItems,
  onBackClick = () => window.history.back(),
  onNotificationClick,
  actions,
  
}) => {
  return (
    <header className="header">
      <div className="header__start">
        {showBackButton && (
          <IconButton
            icon={<BackIcon />}
            size="md"
            variant="default"
            onClick={onBackClick}
            aria-label="Back"
          />
        )}
      </div>
        <div className="header__center">
        {/* ✨ دیگر از تگ h1 استفاده نمی‌کنیم، چون کامپوننت Label خودش تگ span است */}
        {/* این باعث می‌شود هر چیزی که به عنوان title پاس داده شود، رندر شود */}
        {title}
      </div>
      <div className="header__end">
        <div className="header__actions">
          {actions}
          {showNotificationButton && (
            <IconButton
              icon={<NotificationIcon />}
              size="md"
              variant="default"
              onClick={onNotificationClick}
              aria-label="Notifications"
            />
          )}
          {showThemeSwitch && <ThemeSwitch />}

          {/* --- منطق جدید و کامل برای نمایش آواتار --- */}
          
          {/* حالت اول: اگر آیتم‌های دراپ‌داون وجود دارد، منو را نمایش بده */}
          {avatarDropdownItems ? (
            <AvatarDropdown
              align="right"
              items={avatarDropdownItems}
              // اطلاعات آواتار را به دراپ‌داون پاس می‌دهیم
              avatar={userAvatar || { 
                  src: "https://i.pravatar.cc/150?u=default-user", 
                  alt: "User Profile" 
              }}
            />
          ) : // حالت دوم: اگر آیتم دراپ‌داون نیست ولی آواتار ساده هست، آن را نمایش بده
          userAvatar ? (
            <div
              onClick={onAvatarClick}
              style={{ cursor: onAvatarClick ? "pointer" : "default" }}
            >
              <Avatar {...userAvatar} />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};