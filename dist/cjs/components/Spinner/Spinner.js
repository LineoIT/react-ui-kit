"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const react_1 = __importDefault(require("react"));
const Spinner = (props) => {
    const { variant = 'default', stroke = '2px', size = '1.5rem' } = props;
    let _style = {};
    _style.borderWidth = stroke;
    _style.height = size;
    _style.width = size;
    if (props.style)
        _style = Object.assign(Object.assign({}, _style), props.style);
    let borderStyle = variant === 'inverted' ? `border-white dark:border-gray-400` : `border-primary dark:border-accent`;
    return (react_1.default.createElement("div", Object.assign({}, props, { className: `
    border-solid rounded-full animate-spin 
    border-t-transparent dark:border-t-transparent 
    ${borderStyle}`, style: _style })));
};
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map