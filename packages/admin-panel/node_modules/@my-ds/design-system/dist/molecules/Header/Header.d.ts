import React, { ReactNode } from "react";
import { AvatarProps } from "../../atoms/Avatar/Avatar";
import { AvatarDropdownItem } from "../AvatarDropdown/AvatarDropdown";
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
export declare const Header: React.FC<HeaderProps>;
