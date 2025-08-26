"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from '../../atoms/Card/Card';
import { Label } from '../../atoms/Label/Label';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';
import { FiCheck, FiX, FiExternalLink } from 'react-icons/fi';
/**
 * ApprovalCard یک مولکول برای نمایش وضعیت تایید یک مدرک و انجام عملیات روی آن است.
 */
export const ApprovalCard = ({ title, isConfirmed, rejectionDescription, documentUrl, onApprove, onReject, isLoading = false, }) => {
    // منطق هوشمند برای تعیین وضعیت
    const getStatus = () => {
        if (isConfirmed) {
            return { label: "تایید شده", variant: "success" };
        }
        // اگر تایید نشده، اما توضیحات رد وجود دارد، پس "رد شده" است
        if (rejectionDescription) {
            return { label: "رد شده", variant: "danger" };
        }
        // در غیر این صورت، "در انتظار بررسی" است
        return { label: "در انتظار بررسی", variant: "warning" };
    };
    const status = getStatus();
    // دکمه‌ها فقط در حالت "در انتظار بررسی" نمایش داده می‌شوند
    const showActionButtons = status.variant === 'warning';
    return (_jsxs(Card, { className: "approval-card", children: [_jsxs("div", { className: "approval-card__main", children: [_jsx(Label, { text: title, size: "md" }), _jsx(Badge, { label: status.label, variant: status.variant })] }), _jsxs("div", { className: "approval-card__actions", children: [documentUrl && (_jsx("a", { href: `https://api.yadakchi.com${documentUrl}`, target: "_blank", rel: "noreferrer", children: _jsxs(Button, { variant: "ghost", children: [_jsx(FiExternalLink, {}), " \u0645\u0634\u0627\u0647\u062F\u0647"] }) })), showActionButtons && (_jsxs(_Fragment, { children: [_jsxs(Button, { variant: "secondary", onClick: onReject, isLoading: isLoading, children: [_jsx(FiX, {}), " \u0631\u062F"] }), _jsxs(Button, { variant: "primary", onClick: onApprove, isLoading: isLoading, children: [_jsx(FiCheck, {}), " \u062A\u0627\u06CC\u06CC\u062F"] })] }))] })] }));
};
