import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "../../atoms/Label/Label";
export const SidebarMenuItem = ({ label, icon, isActive = false, isExpanded = true, hasSubmenu = false, isSubmenuOpen = false, level = 0, onClick, children, }) => {
    const indentStyle = {
        paddingInlineStart: `${level * 1.5}rem`, // تو رفتگی منطقی برای RTL/LTR
    };
    return (_jsxs("div", { className: `sidebar-menu-item ${isActive ? "sidebar-menu-item--active" : ""}`, style: indentStyle, children: [_jsxs("div", { className: "sidebar-menu-item__trigger", onClick: onClick, children: [icon && _jsx("span", { className: "sidebar-menu-item__icon", children: icon }), _jsx("div", { className: `sidebar-menu-item__label-wrapper ${isExpanded ? "sidebar-menu-item__label-wrapper--expanded" : ""}`, children: _jsx(Label, { text: label, size: "sm" }) }), hasSubmenu && isExpanded && (_jsx("span", { className: `sidebar-menu-item__chevron ${isSubmenuOpen ? "sidebar-menu-item__chevron--open" : ""}`, children: "\u25BE" }))] }), hasSubmenu && (_jsx("div", { className: `sidebar-menu-item__submenu ${isSubmenuOpen && isExpanded ? "sidebar-menu-item__submenu--open" : ""}`, children: children }))] }));
};
