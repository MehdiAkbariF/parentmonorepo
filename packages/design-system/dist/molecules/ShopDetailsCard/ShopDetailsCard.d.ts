import React from 'react';
import { BadgeVariant } from '../../atoms/Badge/Badge';
export interface ShopDetailsItem {
    title: string;
    value: string;
}
export interface ShopDetailsCardProps {
    shopLogo?: string | null;
    shopTitle: string;
    shopStatus: string;
    shopStatusVariant?: BadgeVariant;
    items: ShopDetailsItem[];
}
/**
 * ShopDetailsCard یک کامپوننت برای نمایش اطلاعات خلاصه یک فروشگاه در یک کارت است.
 */
export declare const ShopDetailsCard: React.FC<ShopDetailsCardProps>;
