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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const React = __importStar(require("react"));
const Dialog = (prop) => {
    return (React.createElement("div", { className: `w-96 ` + prop.className },
        React.createElement("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden" },
            React.createElement("div", { className: "p-6 space-y-2" },
                React.createElement("h2", { className: "text-lg font-bold text-gray-800 dark:text-gray-200" }, prop.title),
                React.createElement("div", { className: "text-sm text-gray-500 dark:text-gray-400" }, prop.children)),
            React.createElement("div", { className: "px-6 py-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-end divide-x-2 divide-gray-400 dark:divide-gray-500 divide-dashed" },
                React.createElement("div", { className: "pr-4" },
                    React.createElement("button", { onClick: prop.onCancel, className: "text-sm font-medium text-primary dark:text-accent hover:text-primary-dark dark:hover:text-primary/90 focus:outline-none focus:shadow-sm" }, prop.textCancel)),
                React.createElement("div", { className: "pl-4" },
                    React.createElement("button", { onClick: prop.onOk, className: "px-4 py-1 rounded-full text-sm font-medium text-gray-200 dark:text-primary bg-primary/90 dark:bg-accent hover:bg-primary-dark/80 dark:hover:bg-primary/50 dark:hover:text-gray-200" }, prop.textOk))))));
};
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map