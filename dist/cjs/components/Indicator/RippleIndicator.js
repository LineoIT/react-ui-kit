"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RippleIndicator = void 0;
const react_1 = __importDefault(require("react"));
const RippleIndicator = (props) => {
    const { className = 'flex h-3 w-3', style, color, rippleClass = 'bg-sky-400' } = props;
    let _style = style || {};
    if (color)
        _style.backgroundColor = color;
    return (react_1.default.createElement("span", { className: className },
        react_1.default.createElement("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ${rippleClass}`, style: _style }),
        react_1.default.createElement("span", { className: `relative inline-flex rounded-full h-3 w-3 ${rippleClass}`, style: _style })));
};
exports.RippleIndicator = RippleIndicator;
//# sourceMappingURL=RippleIndicator.js.map