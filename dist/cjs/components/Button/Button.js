"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = exports.LinkTextButton = exports.LinkButton = exports.TextButton = exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Spinner_1 = require("../Spinner");
const _colors = (color, variant) => {
    const _class = color === 'danger'
        ? `${variant === 'default'
            ? 'text-white bg-rose-500 hover:bg-rose-600 dark:text-rose-300 dark:bg-rose-700 dark:hover:bg-rose-800'
            : 'text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-300 dark:bg-slate-700 dark:hover:bg-black/20'}
  ${variant === 'outlined' ? ' border-rose-400 dark:border-rose-300' : 'border-transparent'}`
        : color === 'success'
            ? `${variant === 'default'
                ? 'text-white bg-green-500 hover:bg-green-600 dark:text-green-300 dark:bg-green-700 dark:hover:bg-green-800'
                : 'text-green-600 bg-green-50 hover:bg-green-100 dark:text-green-300 dark:bg-slate-700 dark:hover:bg-black/20'} 
  ${variant === 'outlined' ? ' border-green-500 dark:border-green-400' : 'border-transparent'}`
            : `${variant === 'default'
                ? 'text-white bg-primary hover:bg-primary-dark dark:text-sky-300 dark:bg-sky-700 dark:hover:bg-sky-800'
                : 'text-primary bg-sky-100/70 hover:bg-sky-100 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-black/20 '}
  ${variant === 'outlined' ? ' border-primary dark:border-sky-400' : 'border-transparent'}`;
    return _class;
};
const _colorsText = (color) => {
    const _class = color === 'danger'
        ? 'text-rose-600 dark:text-red-400 hover:bg-rose-50 hover:dark:bg-white/5 hover:dark:text-red-300'
        : color === 'success'
            ? 'text-green-600 dark:text-green-400 hover:bg-green-50 hover:dark:bg-white/5 hover:dark:text-green-300'
            : 'text-primary hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-600';
    return _class;
};
const Button = (_a) => {
    var { children, className, color = 'primary', variant = 'default', isLoading = false, loadingText = '' } = _a, rest = __rest(_a, ["children", "className", "color", "variant", "isLoading", "loadingText"]);
    const _class = _colors(color, variant);
    return (react_1.default.createElement("button", Object.assign({}, rest, { className: `flex items-center justify-center cursor-pointer transition-all px-4 py-2 rounded border ${_class} ${className}` }), isLoading ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: "pr-1" }, loadingText),
        react_1.default.createElement(Spinner_1.Spinner, null))) : (children)));
};
exports.Button = Button;
const TextButton = (_a) => {
    var { children, color = 'primary', isLoading = false, loadingText = 'Wait', className } = _a, props = __rest(_a, ["children", "color", "isLoading", "loadingText", "className"]);
    const _class = _colorsText(color);
    return (react_1.default.createElement("button", Object.assign({ className: `flex items-center  justify-center py-1 px-3 transition-all ${_class} ${className}` }, props), isLoading ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: "pr-1" }, loadingText),
        react_1.default.createElement(Spinner_1.Spinner, null))) : (children)));
};
exports.TextButton = TextButton;
const LinkButton = (_a) => {
    var { children, className, color = 'primary', variant = 'default' } = _a, rest = __rest(_a, ["children", "className", "color", "variant"]);
    const _class = _colors(color, variant);
    return (react_1.default.createElement("a", Object.assign({}, rest, { className: `flex items-center justify-center cursor-pointer  transition-all px-4 py-2 rounded border ${_class} ${className}` }), children));
};
exports.LinkButton = LinkButton;
const LinkTextButton = (_a) => {
    var { children, className, color = 'primary' } = _a, rest = __rest(_a, ["children", "className", "color"]);
    const _class = _colorsText(color);
    return (react_1.default.createElement("a", Object.assign({}, rest, { className: `flex items-center justify-center cursor-pointer  transition-all px-3 py-1 rounded  ${_class} ${className}` }), children));
};
exports.LinkTextButton = LinkTextButton;
const IconButton = (props) => {
    const { className = 'w-10 h-10', children, variant = 'default', shape = 'rounded' } = props;
    let _className = `ring-0 outline-none flex items-center justify-center 
    cursor-pointer transition-all duration-300 ease-in-out 
    ${shape === 'rounded' ? 'rounded-full' : 'rounded'}
    ${variant === 'contained'
        ? 'bg-white hover:text-primary text-black  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
        : variant === 'inverted'
            ? 'bg-black/10 hover:bg-black/20 text-black  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
            : variant === 'filled'
                ? 'bg-white/10 hover:bg-white/20 text-white '
                : 'text-black dark:text-white hover:bg-black/10 hover:dark:bg-white/10 '}`;
    if (className)
        _className = _className + ' ' + className;
    return (react_1.default.createElement("button", Object.assign({}, props, { className: _className }), children));
};
exports.IconButton = IconButton;
//# sourceMappingURL=Button.js.map