import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * DetailPageLayout یک الگوی استاندارد برای صفحات نمایش جزئیات یک موجودیت است.
 * این الگو یک چیدمان دو ستونی واکنش‌گرا را برای محتوا فراهم می‌کند.
 */
export const DetailPageLayout = ({ header, toolbar, children, aside, }) => {
    return (_jsxs("div", { className: "detail-page-layout", children: [header, toolbar, _jsxs("div", { className: "detail-page-layout__body", children: [_jsx("main", { className: "detail-page-layout__main-content", children: children }), aside && (_jsx("aside", { className: "detail-page-layout__aside", children: aside }))] })] }));
};
