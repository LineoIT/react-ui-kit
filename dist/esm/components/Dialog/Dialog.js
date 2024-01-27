import * as React from 'react';
import { Modal } from '../Modal';
export const ConfirmDialog = React.forwardRef((prop, ref) => {
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
    return (React.createElement(Modal, { visible: isOpen, setVisible: open, dismissible: false, name: prop.name, overlayClassName: "dark:bg-slate-500/80" },
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
export const DialogContext = React.createContext(null);
export const ConfirmDialogProvider = ({ children }) => {
    const confirmDialog = React.useRef(null);
    return (React.createElement(DialogContext.Provider, { value: confirmDialog.current },
        children,
        React.createElement(ConfirmDialog, { ref: confirmDialog, name: "confirm-dialog" })));
};
//# sourceMappingURL=Dialog.js.map