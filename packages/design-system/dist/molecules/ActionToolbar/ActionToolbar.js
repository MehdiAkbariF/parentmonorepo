import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../../atoms/Button/Button';
import { FiArrowRight } from 'react-icons/fi'; // یا هر آیکون دیگری
/**
 * ActionToolbar یک نوار ابزار استاندارد برای نمایش دکمه‌های عملیاتی اصلی یک صفحه است.
 */
export const ActionToolbar = ({ onBackClick, children }) => {
    return (_jsxs("div", { className: "action-toolbar", children: [_jsx("div", { className: "action-toolbar__start", children: onBackClick && (_jsxs(Button, { variant: "ghost", onClick: onBackClick, children: [_jsx(FiArrowRight, {}), _jsx("span", { children: "\u0628\u0627\u0632\u06AF\u0634\u062A" })] })) }), _jsx("div", { className: "action-toolbar__end", children: children })] }));
};
