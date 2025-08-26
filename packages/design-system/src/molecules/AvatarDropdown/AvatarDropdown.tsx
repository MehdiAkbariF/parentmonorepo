"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
// ۱. تایپ LabelProps را از فایل خودش وارد می‌کنیم
import { Label, LabelProps } from "../../atoms/Label/Label";
import { Avatar, AvatarProps } from "../../atoms/Avatar/Avatar";

// ۲. ✨ تغییر کلیدی و نهایی اینجاست ✨
export interface AvatarDropdownItem {
  // ما به صراحت می‌گوییم که label، پراپرتی‌های یک Label است که به عنوان <span> رندر می‌شود.
  label: LabelProps<'span'>; 
  icon?: ReactNode;
  onClick?: () => void;
}

export interface AvatarDropdownProps {
  avatar: AvatarProps;
  items: AvatarDropdownItem[];
  align?: "left" | "right";
}

export const AvatarDropdown: React.FC<AvatarDropdownProps> = ({
  avatar,
  items,
  align = "right",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (itemOnClick?: () => void) => {
    itemOnClick?.();
    setIsOpen(false);
  };

  return (
    <div className="avatar-dropdown-container" ref={wrapperRef}>
      <div className="avatar-dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        <Avatar {...avatar} />
      </div>

      {isOpen && (
        <div className={`avatar-dropdown avatar-dropdown--${align}`}>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="avatar-dropdown__item"
                onClick={() => handleItemClick(item.onClick)}
              >
                {item.icon && <span className="avatar-dropdown__item-icon">{item.icon}</span>}
                {/* کامپوننت Label پراپرتی‌های item.label را دریافت می‌کند */}
                <Label {...item.label} /> 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};