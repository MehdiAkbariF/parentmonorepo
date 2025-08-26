import React, { ReactNode } from 'react';
import { Avatar } from '../../atoms/Avatar';
import { Label } from '../../atoms/Label';

export interface EntityHeaderProps {
  title: string;
  avatarSrc?: string;
  avatarFallback?: string;
  children: ReactNode; // برای قرار دادن Badge یا اطلاعات دیگر
}

export const EntityHeader: React.FC<EntityHeaderProps> = ({ title, avatarSrc, avatarFallback, children }) => {
    return (
        <header className="entity-header">
            <div className="entity-header__main">
                <Avatar src={avatarSrc} fallback={avatarFallback || title.charAt(0)} size="lg" />
                <Label as="h1" text={title} size="3x" />
            </div>
            <div className="entity-header__status">
                {children}
            </div>
        </header>
    );
};