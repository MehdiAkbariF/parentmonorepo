import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from '../../atoms/Avatar';
import { Label } from '../../atoms/Label';
export const EntityHeader = ({ title, avatarSrc, avatarFallback, children }) => {
    return (_jsxs("header", { className: "entity-header", children: [_jsxs("div", { className: "entity-header__main", children: [_jsx(Avatar, { src: avatarSrc, fallback: avatarFallback || title.charAt(0), size: "lg" }), _jsx(Label, { as: "h1", text: title, size: "3x" })] }), _jsx("div", { className: "entity-header__status", children: children })] }));
};
