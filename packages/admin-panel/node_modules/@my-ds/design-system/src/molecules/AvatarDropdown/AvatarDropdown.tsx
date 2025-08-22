"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Label, LabelProps } from "../../atoms/Label/Label";
import { Avatar, AvatarProps } from "../../atoms/Avatar/Avatar"; // ایمپورت آواتار

// نام اینترفیس‌ها را هم تغییر می‌دهیم
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

// نام کامپوننت را تغییر می‌دهیم
export const AvatarDropdown: React.FC<AvatarDropdownProps> = ({
  avatar,
  items,
  align = "right",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (itemOnClick?: () => void) => {
    itemOnClick?.();
    setIsOpen(false);
  };

  return (
    // نام کلاس‌ها را تغییر می‌دهیم
    <div className="avatar-dropdown-container" ref={menuRef} dir="rtl">
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
                <Label {...item.label} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};