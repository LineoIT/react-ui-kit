"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTextError = void 0;
const react_1 = __importDefault(require("react"));
const InputTextError = (prop) => {
    return react_1.default.createElement("small", { className: "text-[12px] mb-2 font-light text-rose-400 dark:font-normal dark:text-red-300 italic" }, prop.children);
};
exports.InputTextError = InputTextError;
//# sourceMappingURL=InputErrorText.js.map