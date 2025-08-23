"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";
/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا است که فقط ساختار جدول را فراهم می‌کند.
 * مسئولیت ظاهر محتوای سلول‌ها بر عهده مصرف‌کننده است.
 */
export const Table = ({ data, columns, emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.", rowActions, }) => {
    const tableColumns = useMemo(() => {
        let finalColumns = [...columns];
        if (rowActions) {
            finalColumns.push({
                accessorKey: 'actions',
                header: 'عملیات',
                cell: (item) => {
                    const actionProps = rowActions(item);
                    return _jsx(ActionButtons, { ...actionProps });
                },
            });
        }
        return finalColumns;
    }, [columns, rowActions]);
    if (!data || data.length === 0) {
        return _jsx("div", { className: "table-empty-state", children: emptyStateMessage });
    }
    return (_jsx("div", { className: "table-wrapper", children: _jsxs("table", { className: "table", children: [_jsx("thead", { className: "table__head", children: _jsx("tr", { children: tableColumns.map((column) => (_jsx("th", { children: column.header }, column.accessorKey))) }) }), _jsx("tbody", { className: "table__body", children: data.map((item, rowIndex) => (_jsx("tr", { children: tableColumns.map((column, colIndex) => {
                            const cellClasses = [
                                column.accessorKey === 'actions' ? 'table__cell--actions' : ''
                            ].filter(Boolean).join(' ');
                            // کامپوننت دقیقاً همان چیزی را رندر می‌کند که در cell تعریف شده
                            // یا مقدار خام داده را اگر cell تعریف نشده باشد.
                            const cellContent = column.cell
                                ? column.cell(item)
                                : item[column.accessorKey];
                            return (_jsx("td", { "data-label": column.header, className: cellClasses, children: cellContent }, colIndex));
                        }) }, item.id || rowIndex))) })] }) }));
};
