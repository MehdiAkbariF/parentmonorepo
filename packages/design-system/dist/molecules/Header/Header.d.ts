import React, { ReactNode } from "react";
import { AvatarDropdownItem } from "../AvatarDropdown/AvatarDropdown";
import { AvatarProps } from "../../atoms/Avatar";
export interface HeaderProps {
    title?: ReactNode;
    showBackButton?: boolean;
    onBackClick?: () => void;
    onMenuButtonClick?: () => void;
    showNotificationButton?: boolean;
    showThemeSwitch?: boolean;
    avatarDropdownItems?: AvatarDropdownItem[];
    userAvatar?: AvatarProps;
    appName?: string;
    logo?: ReactNode;
    actions?: ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
