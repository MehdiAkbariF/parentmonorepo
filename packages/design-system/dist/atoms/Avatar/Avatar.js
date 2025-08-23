import { jsx as _jsx } from "react/jsx-runtime";
export const Avatar = ({ src, alt = "User Avatar", size = "sm", fallback, }) => {
    return (_jsx("div", { className: `avatar avatar--${size}`, children: src ? (_jsx("img", { className: "avatar__image", src: src, alt: alt })) : (_jsx("span", { className: "avatar__fallback", children: fallback })) }));
};
