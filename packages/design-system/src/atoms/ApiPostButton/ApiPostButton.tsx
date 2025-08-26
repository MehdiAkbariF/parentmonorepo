"use client";

import React, { useState } from "react";
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
    post: (endpoint: string, options?: { body?: Record<string, any> }) => Promise<any>;
  };
}

export const ApiButton: React.FC<ApiButtonProps> = ({
  label,
  endpoint,
  body,
  onSuccess,
  onError,
  className = "",
  disabled = false,
  apiClient
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const result = await apiClient.post(endpoint, { body });
      onSuccess?.(result);
    } catch (err) {
      onError?.(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`ds-api-button ${className}`}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading ? "در حال ارسال..." : label}
    </button>
  );
};
