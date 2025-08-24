"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo, useState } from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";
export const Table = ({ data, columns, emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.", rowActions, }) => {
    const [expandedRows, setExpandedRows] = useState(new Set());
    const toggleRow = (rowId) => {
        setExpandedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(rowId))
                newSet.delete(rowId);
            else
                newSet.add(rowId);
            return newSet;
        });
    };
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
    return (_jsx("div", { className: "table-wrapper", children: _jsxs("table", { className: "table", children: [_jsx("thead", { className: "table__head", children: _jsx("tr", { children: tableColumns.map((column) => _jsx("th", { children: column.header }, column.accessorKey)) }) }), _jsx("tbody", { className: "table__body", children: data.map((item, rowIndex) => {
                        const rowId = item.id || rowIndex;
                        const isExpanded = expandedRows.has(rowId);
                        return (_jsxs(React.Fragment, { children: [_jsx("tr", { className: `table__row ${isExpanded ? 'table__row--expanded' : ''}`, onClick: () => toggleRow(rowId), children: tableColumns.map((column) => {
                                        const cellContent = column.cell ? column.cell(item) : item[column.accessorKey];
                                        // ۲. ✨ کلاس داینامیک را بر اساس mobileDisplay اضافه می‌کنیم
                                        const cellClass = `table__cell table__cell--${column.mobileDisplay || 'hidden'}`;
                                        return (_jsx("td", { "data-label": column.header, className: cellClass, children: cellContent }, column.accessorKey));
                                    }) }), _jsx("tr", { className: `table__details-row ${isExpanded ? 'table__details-row--expanded' : ''}`, children: _jsx("td", { colSpan: tableColumns.length, children: _jsx("div", { className: "table__details-content", children: _jsx("ul", { children: tableColumns.map(col => (_jsxs("li", { children: [_jsxs("strong", { children: [col.header, ":"] }), _jsx("span", { children: col.cell ? col.cell(item) : item[col.accessorKey] })] }, col.accessorKey))) }) }) }) })] }, rowId));
                    }) })] }) }));
};
