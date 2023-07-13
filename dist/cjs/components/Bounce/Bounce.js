"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bounce = void 0;
const react_1 = __importDefault(require("react"));
const Bounce = ({ size = 20, unit = 'px', disabled = false, color = '', fill = false, strokeWidth = 2 }) => {
    const dimen = `${size}${unit}`;
    const bounceDimen = `${size / 2}${unit}`;
    return (react_1.default.createElement("div", { className: "rounded-full flex items-center justify-center", style: {
            borderColor: disabled ? 'gray' : color,
            background: fill ? color : 'transparent',
            width: dimen,
            height: dimen,
            borderWidth: `${strokeWidth}${unit}`
        } }, !disabled && !fill && (react_1.default.createElement("div", { className: "border rounded-full", style: {
            backgroundColor: disabled ? 'gray' : color,
            width: bounceDimen,
            height: bounceDimen
        } }))));
};
exports.Bounce = Bounce;
//# sourceMappingURL=Bounce.js.map