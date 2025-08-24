import React from 'react';
import { UsePaginationProps } from '../../hooks/usePagination';
export interface PaginationProps extends UsePaginationProps {
    onPageChange: (page: number) => void;
    className?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
