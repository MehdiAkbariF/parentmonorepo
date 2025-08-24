"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ListPageHeader } from "../../../molecules/ListPageHeader/ListPageHeader";
import { Table } from "../../../molecules/Table/Table";
import { Pagination } from "../../../molecules/Pagination/Pagination";
import { Breadcrumb } from "../../../molecules/Breadcrumb/Breadcrumb";
import { Select } from "../../../atoms/Select/Select";
/**
 * ListPageLayout یک الگوی استاندارد برای تمام صفحاتی است که یک لیست از داده‌ها را
 * در قالب یک جدول به همراه فیلتر و پجینیشن کامل نمایش می‌دهają.
 */
export const ListPageLayout = ({ listPageHeaderProps, tableProps, paginationProps, breadcrumbItems, isLoading = false, error = null, filterSection, }) => {
    // ۱. تابع renderContent حالا فقط محتوای اصلی (جدول یا state) را برمی‌گرداند
    const renderMainContent = () => {
        if (isLoading) {
            return _jsx("div", { className: "list-page-layout__state", children: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627..." });
        }
        if (error) {
            return _jsx("div", { className: "list-page-layout__state list-page-layout__state--error", children: error });
        }
        return (
        // ۲. Wrapper جدید برای جدول و فوتر
        _jsxs("div", { className: "list-page-layout__content-wrapper", children: [_jsx("div", { className: "list-page-layout__table-container", children: _jsx(Table, { ...tableProps }) }), paginationProps && (_jsxs("div", { className: "list-page-layout__footer", children: [_jsx("div", { className: "list-page-layout__pagination-container", children: _jsx(Pagination, { ...paginationProps }) }), _jsx("div", { className: "list-page-layout__page-size-selector", children: paginationProps.pageSizeOptions && paginationProps.onPageSizeChange && (_jsxs(_Fragment, { children: [_jsx("span", { children: "\u0646\u0645\u0627\u06CC\u0634" }), _jsx(Select, { options: paginationProps.pageSizeOptions, value: paginationProps.pageSize, onChange: (e) => paginationProps.onPageSizeChange?.(Number(e.target.value)), "aria-label": "\u062A\u0639\u062F\u0627\u062F \u0622\u06CC\u062A\u0645 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647" }), _jsx("span", { children: "\u0645\u0648\u0631\u062F" })] })) })] }))] }));
    };
    return (
    // ۳. ساختار اصلی که حالا یک Flex container عمودی است
    _jsxs("div", { className: "list-page-layout", children: [breadcrumbItems && _jsx(Breadcrumb, { items: breadcrumbItems }), _jsx(ListPageHeader, { ...listPageHeaderProps }), filterSection && (_jsx("div", { className: "list-page-layout__filter-section", children: filterSection })), renderMainContent()] }));
};
