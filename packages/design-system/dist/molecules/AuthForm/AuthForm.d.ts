import React, { ReactNode } from 'react';
export interface AuthFormProps {
    title: string;
    description: string;
    children: ReactNode;
    error?: string;
}
export declare const AuthForm: React.FC<AuthFormProps>;
