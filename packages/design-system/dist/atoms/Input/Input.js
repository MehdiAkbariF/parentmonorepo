import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '../Label';
export const Input = ({ label, id, className, ...props }) => {
    return (_jsxs("div", { className: "input__container", children: [label && (_jsx(Label
            // ما به Label می‌گوییم که خودش را به عنوان تگ <label> رندر کند
            , { 
                // ما به Label می‌گوییم که خودش را به عنوان تگ <label> رندر کند
                as: "label", htmlFor: id, text: label, size: "sm", variant: "secondary", className: "input__label" })), _jsx("input", { id: id, className: `input ${className || ''}`, ...props })] }));
};
