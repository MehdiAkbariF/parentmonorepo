import React, { ReactNode } from "react";
import { LabelProps } from "../../atoms/Label/Label";
import { AvatarProps } from "../../atoms/Avatar/Avatar";
export interface AvatarDropdownItem {
    label: LabelProps<'span'>;
    icon?: ReactNode;
    onClick?: () => void;
}
export interface AvatarDropdownProps {
    avatar: AvatarProps;
    items: AvatarDropdownItem[];
    align?: "left" | "right";
}
export declare const AvatarDropdown: React.FC<AvatarDropdownProps>;
