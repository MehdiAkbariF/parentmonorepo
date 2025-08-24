"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePagination, DOTS } from '../../hooks/usePagination';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
export const Pagination = (props) => {
    const { onPageChange, currentPage, totalCount, pageSize, siblingCount } = props;
    const paginationRange = usePagination({ currentPage, totalCount, pageSize, siblingCount });
    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null;
    }
    const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 0;
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
    return (_jsxs("ul", { className: "pagination", children: [_jsx("li", { className: `pagination__item ${currentPage === 1 ? 'pagination__item--disabled' : ''}`, onClick: onPrevious, children: _jsx(FiChevronRight, {}) }), paginationRange?.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return _jsx("li", { className: "pagination__item pagination__item--dots", children: "\u2026" }, index);
                }
                return (_jsx("li", { className: `pagination__item ${pageNumber === currentPage ? 'pagination__item--active' : ''}`, onClick: () => onPageChange(pageNumber), children: pageNumber }, index));
            }), _jsx("li", { className: `pagination__item ${currentPage === lastPage ? 'pagination__item--disabled' : ''}`, onClick: onNext, children: _jsx(FiChevronLeft, {}) })] }));
};
