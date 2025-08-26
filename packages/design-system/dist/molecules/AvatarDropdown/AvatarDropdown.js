"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
// ۱. تایپ LabelProps را از فایل خودش وارد می‌کنیم
import { Label } from "../../atoms/Label/Label";
import { Avatar } from "../../atoms/Avatar/Avatar";
export const AvatarDropdown = ({ avatar, items, align = "right", }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleItemClick = (itemOnClick) => {
        itemOnClick?.();
        setIsOpen(false);
    };
    return (_jsxs("div", { className: "avatar-dropdown-container", ref: wrapperRef, children: [_jsx("div", { className: "avatar-dropdown-trigger", onClick: () => setIsOpen(!isOpen), children: _jsx(Avatar, { ...avatar }) }), isOpen && (_jsx("div", { className: `avatar-dropdown avatar-dropdown--${align}`, children: _jsx("ul", { children: items.map((item, index) => (_jsxs("li", { className: "avatar-dropdown__item", onClick: () => handleItemClick(item.onClick), children: [item.icon && _jsx("span", { className: "avatar-dropdown__item-icon", children: item.icon }), _jsx(Label, { ...item.label })] }, index))) }) }))] }));
};
