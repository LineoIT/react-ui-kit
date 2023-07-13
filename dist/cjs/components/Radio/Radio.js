"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const react_1 = __importDefault(require("react"));
const Radio = (props) => {
    return (react_1.default.createElement("label", { className: "cursor-pointer " },
        react_1.default.createElement("input", Object.assign({}, props, { type: "radio", className: "peer sr-only" })),
        react_1.default.createElement("div", { className: "rounded-full border border-gray-400 bg-white dark:bg-transparent\n         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow \n      peer-checked:text-primary-dark peer-checked:ring-accent  peer-checked:border-transparent\n      dark:peer-checked:text-accent  \n      peer-disabled:border-gray-300 dark:peer-disabled:border-gray-600\n      peer-disabled:bg-transparent \n      peer-disabled:text-slate-100 dark:peer-disabled:text-transparent\n      peer-disabled:cursor-not-allowed\n     " },
            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                react_1.default.createElement("svg", { style: { margin: '2px', width: '14px', height: '14px' }, viewBox: "0 0 24 24" },
                    react_1.default.createElement("circle", { cx: "12", cy: "12", r: "12", fill: "currentColor" }))))));
};
exports.Radio = Radio;
//# sourceMappingURL=Radio.js.map