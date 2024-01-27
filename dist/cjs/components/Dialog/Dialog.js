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
exports.ConfirmDialogProvider = exports.DialogContext = exports.ConfirmDialog = void 0;
const React = __importStar(require("react"));
const Modal_1 = require("../Modal");
exports.ConfirmDialog = React.forwardRef((prop, ref) => {
    const [isOpen, open] = React.useState(false);
    const [options, setOptions] = React.useState({
        critical: false
    });
    React.useImperativeHandle(ref, () => ({
        open: (opt) => {
            setOptions(opt);
            open(true);
        },
        close: () => {
            open(false);
        }
    }));
    return (React.createElement(Modal_1.Modal, { visible: isOpen, setVisible: open, dismissible: false, name: prop.name, overlayClassName: "dark:bg-slate-500/80" },
        React.createElement("div", { className: `w-96 ` + prop.className },
            React.createElement("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden" },
                React.createElement("div", { className: "p-6 space-y-2" },
                    React.createElement("h2", { className: "text-lg font-bold text-gray-800 dark:text-gray-200" }, (options === null || options === void 0 ? void 0 : options.title) ? options === null || options === void 0 ? void 0 : options.title : prop.title),
                    React.createElement("div", { className: "text-sm text-gray-500 dark:text-gray-400" }, (options === null || options === void 0 ? void 0 : options.description) ? options === null || options === void 0 ? void 0 : options.description : prop.children)),
                React.createElement("div", { className: "px-6 py-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-end divide-x-2 divide-gray-400 dark:divide-gray-500 divide-dashed" },
                    React.createElement("div", { className: "pr-4" },
                        React.createElement("button", { onClick: () => {
                                open(false);
                                if (options.onCancel)
                                    options.onCancel();
                                else if (prop.onCancel)
                                    prop.onCancel();
                            }, className: "text-sm font-medium text-primary dark:text-accent hover:text-primary-dark dark:hover:text-primary/90 focus:outline-none focus:shadow-sm" }, (options === null || options === void 0 ? void 0 : options.textCancel) ? options === null || options === void 0 ? void 0 : options.textCancel : prop.textCancel)),
                    React.createElement("div", { className: "pl-4" },
                        React.createElement("button", { onClick: () => {
                                open(false);
                                if (options.onConfirm)
                                    options.onConfirm();
                                else if (prop.onOk)
                                    prop.onOk();
                            }, className: `px-4 py-1 rounded-full text-sm font-medium  transition-all
                            ${options.critical
                                ? 'text-rose-400 hover:bg-rose-50 bg-white border border-rose-200 dark:border-rose-300 dark:text-rose-300 dark:bg-slate-600 dark:hover:bg-rose-400 dark:hover:text-rose-50'
                                : 'text-gray-200 dark:text-sky-100 bg-primary dark:bg-accent hover:bg-primary-dark/80 dark:hover:bg-primary/50 dark:hover:text-gray-200'}
                            ` }, (options === null || options === void 0 ? void 0 : options.textOk) ? options === null || options === void 0 ? void 0 : options.textOk : prop.textOk)))))));
});
exports.DialogContext = React.createContext(null);
const ConfirmDialogProvider = ({ children }) => {
    const confirmDialog = React.useRef(null);
    return (React.createElement(exports.DialogContext.Provider, { value: confirmDialog.current },
        children,
        React.createElement(exports.ConfirmDialog, { ref: confirmDialog, name: "confirm-dialog" })));
};
exports.ConfirmDialogProvider = ConfirmDialogProvider;
//# sourceMappingURL=Dialog.js.map