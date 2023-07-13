"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const react_1 = __importDefault(require("react"));
const CheckBox = (prop) => {
    return (react_1.default.createElement("label", { className: "cursor-pointer " },
        react_1.default.createElement("input", Object.assign({}, prop, { type: "checkbox", className: "peer sr-only" })),
        react_1.default.createElement("div", { className: "rounded border border-gray-400 dark:border-white/40 peer-checked:border-transparent bg-white dark:bg-black/20\n         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow \n      peer-checked:text-primary peer-checked:ring-accent\n       dark:peer-checked:text-accent\n       peer-disabled:border-gray-300 dark:peer-disabled:border-gray-600\n       peer-disabled:bg-transparent  \n       peer-disabled:text-slate-100 dark:peer-disabled:text-transparent\n       peer-disabled:cursor-not-allowed" },
            react_1.default.createElement("div", { className: "flex items-center justify-between " },
                react_1.default.createElement("svg", { className: "w-[1.15rem] h-[1.15rem]", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))))));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=CheckBox.js.map