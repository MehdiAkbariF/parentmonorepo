import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ListPageHeader } from "../../../molecules/ListPageHeader/ListPageHeader";
import { Table } from "../../../molecules/Table/Table";
/**
 * ListPageLayout یک الگوی ساده برای نمایش یک جدول با Breadcrumb،
 * حالت‌های لودینگ و خطا است.
 */
export const ListPageLayout = ({ tableProps, isLoading = false, error = null, listPageHeaderProps, }) => {
    const renderContent = () => {
        if (isLoading) {
            return _jsx("div", { className: "list-page-layout__state", children: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627..." });
        }
        if (error) {
            return _jsx("div", { className: "list-page-layout__state list-page-layout__state--error", children: error });
        }
        return (_jsx("div", { className: "list-page-layout__table-container", children: _jsx(Table, { ...tableProps }) }));
    };
    return (_jsxs("div", { className: "list-page-layout", children: [_jsx(ListPageHeader, { ...listPageHeaderProps }), renderContent()] }));
};
