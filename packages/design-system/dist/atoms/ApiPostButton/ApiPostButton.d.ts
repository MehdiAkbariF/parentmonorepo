import React from "react";
import "./ApiButton.scss";
export interface ApiButtonProps {
    label: string;
    endpoint: string;
    body?: Record<string, any>;
    onSuccess?: (data: any) => void;
    onError?: (error: Error) => void;
    className?: string;
    disabled?: boolean;
    apiClient: {
        post: (endpoint: string, options?: {
            body?: Record<string, any>;
        }) => Promise<any>;
    };
}
export declare const ApiButton: React.FC<ApiButtonProps>;
