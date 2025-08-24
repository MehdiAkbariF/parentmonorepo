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

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] as number : 0;
  
  // ✨ --- تغییرات کلیدی در اینجا هستند ---

  const onNext = () => {
    // اگر در صفحه آخر هستیم، هیچ کاری انجام نده
    if (currentPage === lastPage) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    // اگر در صفحه اول هستیم، هیچ کاری انجام نده
    if (currentPage === 1) {
      return;
    }
    onPageChange(currentPage - 1);
  };
  
  return (
    <ul className="pagination">
      {/* 
        JSX بدون تغییر باقی می‌ماند. 
        کلاس --disabled فقط برای ظاهر است.
        منطق اصلی در توابع onNext و onPrevious قرار دارد.
      */}
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