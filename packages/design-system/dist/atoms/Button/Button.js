import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, variant = 'primary', isLoading = false, ...props }) => {
    return (_jsx("button", { className: `button button--${variant}`, disabled: isLoading, ...props, children: isLoading ? _jsx("span", { className: "button__loader" }) : children }));
};
