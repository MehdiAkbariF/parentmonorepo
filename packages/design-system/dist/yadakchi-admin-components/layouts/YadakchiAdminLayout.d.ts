import React, { ReactNode } from "react";
export interface YadakchiAdminLayoutProps {
    children: ReactNode;
    currentPath: string;
    renderLink: (href: string, children: ReactNode) => ReactNode;
}
export declare const YadakchiAdminLayout: React.FC<YadakchiAdminLayoutProps>;
