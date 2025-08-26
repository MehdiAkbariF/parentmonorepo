"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import "./ApiButton.scss";
export const ApiButton = ({ label, endpoint, body, onSuccess, onError, className = "", disabled = false, apiClient }) => {
    const [loading, setLoading] = useState(false);
    const handleClick = async () => {
        try {
            setLoading(true);
            const result = await apiClient.post(endpoint, { body });
            onSuccess?.(result);
        }
        catch (err) {
            onError?.(err);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("button", { className: `ds-api-button ${className}`, onClick: handleClick, disabled: disabled || loading, children: loading ? "در حال ارسال..." : label }));
};
