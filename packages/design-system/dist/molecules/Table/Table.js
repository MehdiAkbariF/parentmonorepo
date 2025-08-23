import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا برای نمایش اطلاعات جدولی است.
 */
export const Table = ({ data, columns, emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.", }) => {
    if (!data || data.length === 0) {
        return _jsx("div", { className: "table-empty-state", children: emptyStateMessage });
    }
    return (_jsx("div", { className: "table-wrapper", children: _jsxs("table", { className: "table", children: [_jsx("thead", { className: "table__head", children: _jsx("tr", { children: columns.map((column) => (_jsx("th", { children: column.header }, column.accessorKey))) }) }), _jsx("tbody", { className: "table__body", children: data.map((item, rowIndex) => (_jsx("tr", { children: columns.map((column, colIndex) => (_jsx("td", { "data-label": column.header, children: column.cell ? column.cell(item) : item[column.accessorKey] }, colIndex))) }, rowIndex))) })] }) }));
};
