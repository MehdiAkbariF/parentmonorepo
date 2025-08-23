import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "../../atoms/Label/Label";
/**
 * PageHeader برای نمایش عنوان و توضیحات اصلی در بالای هر صفحه استفاده می‌شود.
 */
export const PageHeader = ({ title, description, actions }) => {
    return (_jsxs("div", { className: "page-header", children: [_jsxs("div", { className: "page-header__main", children: [_jsx(Label, { text: title, size: "3x" }), description && (_jsx("p", { className: "page-header__description", children: description }))] }), actions && (_jsx("div", { className: "page-header__actions", children: actions }))] }));
};
