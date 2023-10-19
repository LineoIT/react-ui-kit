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
exports.CheckBox = void 0;
const react_1 = __importDefault(require("react"));
const CheckBox = (prop) => {
    const { variant = 'normal' } = prop, rest = __rest(prop, ["variant"]);
    return (react_1.default.createElement("label", { className: "cursor-pointer " },
        react_1.default.createElement("input", Object.assign({}, rest, { type: "checkbox", className: "peer sr-only" })),
        react_1.default.createElement("div", { className: ` border border-gray-400 dark:border-white/40 peer-checked:border-transparent bg-white dark:bg-black/20
         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow 
           peer-checked:text-primary peer-checked:ring-accent
           dark:peer-checked:text-accent
         peer-disabled:border-gray-300 dark:peer-disabled:border-gray-600
           peer-disabled:bg-transparent
         peer-disabled:text-slate-100 dark:peer-disabled:text-transparent
           peer-disabled:cursor-not-allowed ${variant == 'small' ? 'rounded-[3px]' : 'rounded'} ` },
            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                react_1.default.createElement("svg", { className: `${variant == 'small' ? 'w-[0.6rem] h-[0.6rem]' : 'w-[1.15rem] h-[1.15rem]'}`, fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))))));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=CheckBox.js.map