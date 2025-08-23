"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "../../atoms/IconButton";
import { BackIcon } from "../../atoms/icons/BackIcon";
import { NotificationIcon } from "../../atoms/icons/NotificationIcon";
import { ThemeSwitch } from "../../atoms/ThemeSwitch/ThemeSwitch";
import { AvatarDropdown } from "../AvatarDropdown/AvatarDropdown";
import { FiMenu } from "react-icons/fi";
export const Header = ({ title, showBackButton = false, // پیش‌فرض false است تا در همه صفحات نمایش داده نشود
onBackClick = () => typeof window !== 'undefined' && window.history.back(), onMenuButtonClick, showNotificationButton = true, showThemeSwitch = true, avatarDropdownItems, userAvatar, appName, logo, actions, }) => {
    // به صورت ثابت rtl است
    const direction = 'rtl';
    return (_jsxs("header", { className: "header", dir: direction, children: [_jsxs("div", { className: "header__start", children: [_jsx("div", { className: "header__menu-toggle", children: onMenuButtonClick && (_jsx(IconButton, { icon: _jsx(FiMenu, {}), variant: "default", onClick: onMenuButtonClick, "aria-label": "\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0646\u0648" })) }), _jsxs("div", { className: "header__desktop-actions", children: [showNotificationButton && _jsx(IconButton, { icon: _jsx(NotificationIcon, {}), variant: "default", "aria-label": "\u0627\u0639\u0644\u0627\u0646\u0627\u062A" }), showThemeSwitch && _jsx(ThemeSwitch, {}), avatarDropdownItems && (_jsx(AvatarDropdown, { align: "left", items: avatarDropdownItems, avatar: userAvatar || { alt: "پروفایل کاربر" } })), actions] })] }), _jsxs("div", { className: "header__center", children: [_jsxs("div", { className: "header__brand-mobile", children: [_jsx("div", { className: "header__logo-mobile", children: logo }), _jsx("span", { className: "header__app-name-mobile", children: appName })] }), _jsx("div", { className: "header__title-desktop", children: title })] }), _jsx("div", { className: "header__end", children: showBackButton && (_jsx(IconButton, { icon: _jsx(BackIcon, {}), variant: "default", onClick: onBackClick, "aria-label": "\u0628\u0627\u0632\u06AF\u0634\u062A" })) })] }));
};
