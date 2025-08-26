import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
export declare const Input: React.FC<InputProps>;
