import React, { ReactNode } from 'react';
export interface EntityHeaderProps {
    title: string;
    avatarSrc?: string;
    avatarFallback?: string;
    children: ReactNode;
}
export declare const EntityHeader: React.FC<EntityHeaderProps>;
