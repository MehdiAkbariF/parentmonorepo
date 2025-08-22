"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Label } from "../../atoms/Label/Label";
import { Avatar } from "../../atoms/Avatar/Avatar"; // ایمپورت آواتار
// نام کامپوننت را تغییر می‌دهیم
export const AvatarDropdown = ({ avatar, items, align = "right", }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleItemClick = (itemOnClick) => {
        itemOnClick?.();
        setIsOpen(false);
    };
    return (
    // نام کلاس‌ها را تغییر می‌دهیم
    _jsxs("div", { className: "avatar-dropdown-container", ref: menuRef, dir: "rtl", children: [_jsx("div", { className: "avatar-dropdown-trigger", onClick: () => setIsOpen(!isOpen), children: _jsx(Avatar, { ...avatar }) }), isOpen && (_jsx("div", { className: `avatar-dropdown avatar-dropdown--${align}`, children: _jsx("ul", { children: items.map((item, index) => (_jsxs("li", { className: "avatar-dropdown__item", onClick: () => handleItemClick(item.onClick), children: [item.icon && _jsx("span", { className: "avatar-dropdown__item-icon", children: item.icon }), _jsx(Label, { ...item.label })] }, index))) }) }))] }));
};
