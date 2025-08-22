import React from "react";
import { LabelProps } from "../../atoms/Label/Label";
import { AvatarProps } from "../../atoms/Avatar/Avatar";
export interface AvatarDropdownItem {
    label: LabelProps;
    icon?: React.ReactNode;
    onClick?: () => void;
}
export interface AvatarDropdownProps {
    /**
     * اطلاعات آواتار که به عنوان trigger استفاده می‌شود
     */
    avatar: AvatarProps;
    /**
     * آرایه‌ای از آیتم‌هایی که در منو نمایش داده می‌شوند
     */
    items: AvatarDropdownItem[];
    /**
     * جهت باز شدن منو
     */
    align?: "left" | "right";
}
export declare const AvatarDropdown: React.FC<AvatarDropdownProps>;
