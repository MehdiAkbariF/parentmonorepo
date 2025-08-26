"use client";

import React, { ReactNode, useMemo } from "react";
import { ActionButtons, ActionButtonsProps } from "../ActionButtons/ActionButtons";

// ۱. تعریف ستون ساده شد. دیگر نیازی به isMobileHighlight یا mobileDisplay نیست.
export interface ColumnDefinition<T> {
  accessorKey: keyof T;
  header: string;
  cell?: (item: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  emptyStateMessage?: string;
  rowActions?: (item: T) => ActionButtonsProps;
}

/**
 * Table یک کامپوننت داده-محور و واکنش‌گرا است که در صفحات کوچک،
 * قابلیت اسکرول افقی را فراهم می‌کند.
 */
export const Table = <T extends { id?: string | number }>({
  data,
  columns,
  emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.",
  rowActions,
}: TableProps<T>) => {
  
  const tableColumns = useMemo(() => {
    let finalColumns = [...columns];
    if (rowActions) {
      finalColumns.push({
        accessorKey: 'actions' as any,
        header: 'عملیات',
        cell: (item) => <ActionButtons {...rowActions(item)} />,
      });
    }
    return finalColumns;
  }, [columns, rowActions]);

  if (!data || data.length === 0) {
    return <div className="table-empty-state">{emptyStateMessage}</div>;
  }

  return (
    // ۲. Wrapper حالا مسئولیت اصلی واکنش‌گرایی را بر عهده دارد
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            {tableColumns.map((column) => (
              <th key={column.accessorKey as string}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, rowIndex) => (
            // ۳. ساختار JSX بسیار ساده شد. فقط یک <tr> برای هر آیتم.
            <tr key={item.id || rowIndex} className="table__row">
              {tableColumns.map((column, colIndex) => (
                <td key={colIndex} className={`table__cell ${column.accessorKey === 'actions' ? 'table__cell--actions' : ''}`}>
                  {column.cell
                    ? column.cell(item)
                    : (item[column.accessorKey as keyof T] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};