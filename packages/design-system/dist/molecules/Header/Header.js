"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "../../atoms/IconButton";
import { BackIcon, NotificationIcon } from "../../atoms/icons";
import { ThemeSwitch } from "../../atoms/ThemeSwitch/ThemeSwitch";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { AvatarDropdown } from "../AvatarDropdown/AvatarDropdown";
export const Header = ({ title, showBackButton = true, showNotificationButton = true, showThemeSwitch = false, userAvatar, onAvatarClick, avatarDropdownItems, onBackClick = () => window.history.back(), onNotificationClick, actions, }) => {
    return (_jsxs("header", { className: "header", children: [_jsx("div", { className: "header__start", children: showBackButton && (_jsx(IconButton, { icon: _jsx(BackIcon, {}), size: "md", variant: "default", onClick: onBackClick, "aria-label": "Back" })) }), _jsx("div", { className: "header__center", children: title }), _jsx("div", { className: "header__end", children: _jsxs("div", { className: "header__actions", children: [actions, showNotificationButton && (_jsx(IconButton, { icon: _jsx(NotificationIcon, {}), size: "md", variant: "default", onClick: onNotificationClick, "aria-label": "Notifications" })), showThemeSwitch && _jsx(ThemeSwitch, {}), avatarDropdownItems ? (_jsx(AvatarDropdown, { align: "right", items: avatarDropdownItems, 
                            // اطلاعات آواتار را به دراپ‌داون پاس می‌دهیم
                            avatar: userAvatar || {
                                src: "https://i.pravatar.cc/150?u=default-user",
                                alt: "User Profile"
                            } })) : // حالت دوم: اگر آیتم دراپ‌داون نیست ولی آواتار ساده هست، آن را نمایش بده
                            userAvatar ? (_jsx("div", { onClick: onAvatarClick, style: { cursor: onAvatarClick ? "pointer" : "default" }, children: _jsx(Avatar, { ...userAvatar }) })) : null] }) })] }));
};
