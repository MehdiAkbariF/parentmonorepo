"use client";

import React, { ReactNode, useMemo, useState } from "react";
import { ActionButtons, ActionButtonsProps } from "../ActionButtons/ActionButtons";

type MobileDisplayPosition = 'primary' | 'secondary' | 'status';

export interface ColumnDefinition<T> {
  accessorKey: keyof T;
  header: string;
  cell?: (item: T) => ReactNode;
  mobileDisplay?: MobileDisplayPosition;
}

export interface TableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  emptyStateMessage?: string;
  rowActions?: (item: T) => ActionButtonsProps;
}

export const Table = <T extends { id?: string | number }>({
  data,
  columns,
  emptyStateMessage = "هیچ داده‌ای برای نمایش وجود ندارد.",
  rowActions,
}: TableProps<T>) => {
  
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());
  const toggleRow = (rowId: string | number) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) newSet.delete(rowId);
      else newSet.add(rowId);
      return newSet;
    });
  };

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
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            {tableColumns.map((column) => <th key={column.accessorKey as string}>{column.header}</th>)}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, rowIndex) => {
            const rowId = item.id || rowIndex;
            const isExpanded = expandedRows.has(rowId);

            return (
              <React.Fragment key={rowId}>
                <tr 
                  className={`table__row ${isExpanded ? 'table__row--expanded' : ''}`}
                  onClick={() => toggleRow(rowId)}
                >
                  {/* ۱. ✨ ما همیشه تمام ستون‌ها را رندر می‌کنیم */}
                  {tableColumns.map((column) => {
                    const cellContent = column.cell ? column.cell(item) : (item[column.accessorKey as keyof T] as ReactNode);
                    // ۲. ✨ کلاس داینامیک را بر اساس mobileDisplay اضافه می‌کنیم
                    const cellClass = `table__cell table__cell--${column.mobileDisplay || 'hidden'}`;
                    
                    return (
                      <td key={column.accessorKey as string} data-label={column.header} className={cellClass}>
                        {cellContent}
                      </td>
                    );
                  })}
                </tr>

                <tr className={`table__details-row ${isExpanded ? 'table__details-row--expanded' : ''}`}>
                  <td colSpan={tableColumns.length}>
                    <div className="table__details-content">
                      <ul>
                        {tableColumns.map(col => (
                           <li key={col.accessorKey as string}>
                               <strong>{col.header}:</strong> 
                               <span>{col.cell ? col.cell(item) : (item[col.accessorKey as keyof T] as ReactNode)}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};