"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotSpinner = exports.ArcSpinner = void 0;
const react_1 = __importDefault(require("react"));
const ArcSpinner = ({ className = 'w-6 h-6 border-b-2 border-primary dark:border-accent ' }) => {
    return react_1.default.createElement("div", { className: `rounded-full animate-spin ${className}` });
};
exports.ArcSpinner = ArcSpinner;
const DotSpinner = ({ className = 'w-3 h-3 bg-primary dark:bg-accent' }) => {
    return (react_1.default.createElement("div", { className: "flex items-center justify-center space-x-2 animate-pulse" },
        react_1.default.createElement("div", { className: `rounded-full ${className}` }),
        react_1.default.createElement("div", { className: `rounded-full ${className}` }),
        react_1.default.createElement("div", { className: `rounded-full ${className}` })));
};
exports.DotSpinner = DotSpinner;
//# sourceMappingURL=ArcSpinner.js.map