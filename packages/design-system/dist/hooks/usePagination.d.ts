export declare const DOTS = "...";
export interface UsePaginationProps {
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    currentPage: number;
}
export declare const usePagination: ({ totalCount, pageSize, siblingCount, currentPage, }: UsePaginationProps) => (string | number)[] | undefined;
