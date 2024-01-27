var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Spinner } from '../Spinner';
const RaisedButton = (_a) => {
    var { children, className, color = 'primary', variant = 'contained', isLoading = false, loadingText = '' } = _a, rest = __rest(_a, ["children", "className", "color", "variant", "isLoading", "loadingText"]);
    const _class = color === 'danger'
        ? `${variant === 'filled'
            ? 'text-white bg-rose-500 hover:bg-rose-600 dark:text-rose-300 dark:bg-rose-700 dark:hover:bg-rose-800'
            : 'text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-300 dark:bg-slate-700 dark:hover:bg-black/20'}
  ${variant === 'outlined' ? ' border-rose-400 dark:border-rose-300' : 'border-transparent'}`
        : color === 'success'
            ? `${variant === 'filled'
                ? 'text-white bg-green-500 hover:bg-green-600 dark:text-green-300 dark:bg-green-700 dark:hover:bg-green-800'
                : 'text-green-600 bg-green-50 hover:bg-green-100 dark:text-green-300 dark:bg-slate-700 dark:hover:bg-black/20'} 
  ${variant === 'outlined' ? ' border-green-500 dark:border-green-400' : 'border-transparent'}`
            : `${variant === 'filled'
                ? 'text-white bg-primary hover:bg-primary-dark dark:text-sky-300 dark:bg-sky-700 dark:hover:bg-sky-800'
                : 'text-primary bg-sky-50 hover:bg-sky-100 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-black/20 '}
  ${variant === 'outlined' ? ' border-primary dark:border-sky-400' : 'border-transparent'}`;
    return (React.createElement("button", Object.assign({}, rest, { className: `flex items-center cursor-pointer transition-all px-4 py-2 rounded border ${_class} ${className}` }), isLoading ? (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "pr-1" }, loadingText),
        React.createElement(Spinner, null))) : (children)));
};
export const RaisedTextButton = (_a) => {
    var { children, color = 'primary', isLoading = false, loadingText = 'Wait', className } = _a, props = __rest(_a, ["children", "color", "isLoading", "loadingText", "className"]);
    const _class = color === 'danger'
        ? 'text-rose-600 hover:bg-rose-50 hover:dark:bg-white/5 hover:dark:text-red-500'
        : color === 'success'
            ? 'text-green-600 hover:bg-green-50'
            : 'text-primary hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-600';
    return (React.createElement("button", Object.assign({ className: `flex items-center py-1 px-3 transition-all border ${_class} ${className}` }, props), isLoading ? (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "pr-1" }, loadingText),
        React.createElement(Spinner, null))) : (children)));
};
export const RaisedLinkButton = (_a) => {
    var { children, className, color = 'primary', variant = 'contained' } = _a, rest = __rest(_a, ["children", "className", "color", "variant"]);
    const _class = color === 'danger'
        ? `text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-300 dark:bg-slate-700 dark:hover:bg-black/20 ${variant === 'outlined' && 'border border-rose-400 dark:border-rose-300'}`
        : color === 'success'
            ? `text-green-600 bg-green-50 hover:bg-green-100  dark:text-green-300 dark:bg-slate-700 dark:hover:bg-black/20 ${variant === 'outlined' && 'border border-green-500 dark:border-green-400'}`
            : `text-primary bg-sky-50 hover:bg-sky-100 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-black/20 ${variant === 'outlined' && 'border border-primary dark:border-sky-400'}`;
    return (React.createElement("a", Object.assign({}, rest, { className: `flex items-center cursor-pointer  transition-all px-4 py-2 rounded ${_class} ${className}` }), children));
};
export default RaisedButton;
//# sourceMappingURL=RaisedButton.js.map