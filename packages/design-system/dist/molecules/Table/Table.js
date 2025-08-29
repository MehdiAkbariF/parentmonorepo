"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";
/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا است که در صفحات کوچک،
 * قابلیت اسکرول افقی را فراهم می‌کند.
 */
export const Table = ({ data, columns, emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.", rowActions, }) => {
    const tableColumns = useMemo(() => {
        let finalColumns = [...columns];
        if (rowActions) {
            finalColumns.push({
                accessorKey: 'actions',
                header: 'عملیات',
                cell: (item) => _jsx(ActionButtons, { ...rowActions(item) }),
            });
        }
        return finalColumns;
    }, [columns, rowActions]);
    if (!data || data.length === 0) {
        return _jsx("div", { className: "table-empty-state", children: emptyStateMessage });
    }
    return (
    // ۲. Wrapper حالا مسئولیت اصلی واکنش‌گرایی را بر عهده دارد
    _jsx("div", { className: "table-wrapper", children: _jsxs("table", { className: "table", children: [_jsx("thead", { className: "table__head", children: _jsx("tr", { children: tableColumns.map((column) => (_jsx("th", { children: column.header }, column.accessorKey))) }) }), _jsx("tbody", { className: "table__body", children: data.map((item, rowIndex) => (
                    // ۳. ساختار JSX بسیار ساده شد. فقط یک <tr> برای هر آیتم.
                    _jsx("tr", { className: "table__row", children: tableColumns.map((column, colIndex) => (_jsx("td", { className: `table__cell ${column.accessorKey === 'actions' ? 'table__cell--actions' : ''}`, children: column.cell
                                ? column.cell(item, rowIndex)
                                : item[column.accessorKey] }, colIndex))) }, item.id || rowIndex))) })] }) }));
};
