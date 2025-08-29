"use client";
import React from 'react';
import { usePagination, DOTS, UsePaginationProps } from '../../hooks/usePagination';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export interface PaginationProps extends UsePaginationProps {
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { onPageChange, currentPage, totalCount, pageSize, siblingCount } = props;

  const paginationRange = usePagination({ currentPage, totalCount, pageSize, siblingCount });
  const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] as number : 0;

  // ✨ --- شرط اصلاح شد --- ✨
  // پجینیشن فقط زمانی نمایش داده می‌شود که بیش از یک صفحه وجود داشته باشد
  if (totalCount <= pageSize) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };
  
  return (
    <ul className="pagination">
      <li
        className={`pagination__item ${currentPage === 1 ? 'pagination__item--disabled' : ''}`}
        onClick={onPrevious}
      >
        <FiChevronRight />
      </li>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index} className="pagination__item pagination__item--dots">&#8230;</li>;
        }
        return (
          <li
            key={index}
            className={`pagination__item ${pageNumber === currentPage ? 'pagination__item--active' : ''}`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination__item ${currentPage === lastPage ? 'pagination__item--disabled' : ''}`}
        onClick={onNext}
      >
        <FiChevronLeft />
      </li>
    </ul>
  );
};