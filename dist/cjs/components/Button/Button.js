"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = exports.LinkButton = exports.Button = void 0;
const React = __importStar(require("react"));
const Button = (props) => {
    const { variant = 'default', children, size = 'medium', shape = 'rounded', className } = props;
    const borderRadius = React.useMemo(() => {
        if (shape === 'semi-rounded')
            return 'rounded';
        if (shape === 'rounded')
            return 'rounded-full';
        return '';
    }, [shape]);
    let _className = `px-4 ${size === 'small' ? 'py-1' : size === 'large' ? 'py-3' : size === 'none' ? '' : 'py-2'}
 ${borderRadius} text-sm font-medium transition-all ease-in-out
 ${variant === 'outlined'
        ? 'border border-primary text-primary dark:text-gray-200  bg-transparent hover:bg-primary disabled:border-gray-200 disabled:text-gray-300 hover:text-white disabled:hover:bg-transparent dark:hover:bg-black/10 dark:hover:text-gray-200 dark:disabled:border-gray-500 dark:disabled:text-gray-400 dark:disabled:hover:bg-transparent'
        : ''}
 ${variant === 'default'
        ? ` text-white dark:text-gray-200 dark:hover:text-gray-200  dark:disabled:text-gray-400
 bg-primary  dark:bg-primary disabled:bg-gray-200 hover:bg-primary-dark  dark:disabled:bg-gray-500   `
        : ''}`;
    if (props.className)
        _className = _className + ' ' + className;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", Object.assign({}, props, { className: _className }), children)));
};
exports.Button = Button;
const LinkButton = (_a) => {
    var { variant = 'default', children, className } = _a, rest = __rest(_a, ["variant", "children", "className"]);
    let _className = variant === 'inverted' ? 'text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover  ' : 'text-skin-base bg-skin-button-muted bg-opacity-60 hover:bg-opacity-70';
    if (className)
        _className = _className + ' ' + className;
    return (React.createElement(React.Fragment, null,
        React.createElement("a", Object.assign({}, rest, { className: `flex items-center justify-center px-4 py-3 border border-transparent 
            text-base font-medium rounded-md shadow-sm sm:px-8 ` + _className }), children)));
};
exports.LinkButton = LinkButton;
const IconButton = (props) => {
    const { className = 'w-10 h-10', children, variant = 'inverted', shape = 'rounded' } = props;
    let _className = `ring-0 outline-none flex items-center justify-center 
    cursor-pointer transition-all duration-300 ease-in-out 
    ${shape === 'rounded' ? 'rounded-full' : 'rounded'}
    
  ${variant === 'inverted'
        ? 'text-white bg-white/10 hover:bg-white/20 '
        : 'bg-white  text-gray-600 dark:text-white hover:text-primary dark:bg-white/30 hover:bg-white/60  dark:hover:bg-white/10 dark:hover:text-white'}`;
    if (className)
        _className = _className + ' ' + className;
    return (React.createElement("button", Object.assign({}, props, { className: _className }), children));
};
exports.IconButton = IconButton;
//# sourceMappingURL=Button.js.map