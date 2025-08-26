import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from '../../atoms/Card/Card';
import { Label } from '../../atoms/Label';
export const AuthForm = ({ title, description, children, error }) => {
    return (_jsx("div", { className: "auth-form__page", children: _jsxs(Card, { className: "auth-form__card", children: [_jsxs("div", { className: "auth-form__header", children: [_jsx(Label, { as: "h1", text: title, size: "2x" }), _jsx("p", { className: "auth-form__description", children: description })] }), children, error && _jsx("p", { className: "auth-form__error", children: error })] }) }));
};
