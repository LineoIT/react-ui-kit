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
exports.Toast = exports.useToast = exports.ToastContainer = void 0;
const React = __importStar(require("react"));
const helper_1 = require("./helper");
const toastProviderId = 'toasty';
const ToastContainer = (prop) => {
    return React.createElement("div", { ref: prop.refer, id: toastProviderId, className: "fixed z-40 top-8 right-8" });
};
exports.ToastContainer = ToastContainer;
function useToast(options = {
    timeout: 3000,
    closable: true
}) {
    function notify(text, variant = 'default', opts = options) {
        var _a;
        const id = new Date().getTime();
        const theming = (0, helper_1.getTheming)(variant);
        const el = document.createElement('div');
        el.id = id.toString();
        el.className = `max-w-lg rounded-lg my-5 px-4 py-3 border  shadow-lg animate-toast ${theming}`;
        el.innerHTML = (0, helper_1.addItemHTML)(text, id, variant, opts === null || opts === void 0 ? void 0 : opts.closable);
        (_a = document.getElementById(toastProviderId)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
        const t = setTimeout(() => {
            var _a;
            (_a = document.getElementById(id.toString())) === null || _a === void 0 ? void 0 : _a.remove();
            clearTimeout(t);
        }, opts.timeout);
    }
    return { notify };
}
exports.useToast = useToast;
const Toast = ({ closable = true, interval = 3000, refer }) => {
    const modal = React.useRef();
    React.useImperativeHandle(refer, () => ({
        notify(text, variant = 'default') {
            const id = new Date().getTime();
            const theming = (0, helper_1.getTheming)(variant);
            const el = document.createElement('div');
            el.id = id.toString();
            el.className = `max-w-lg rounded-lg px-4 py-3 my-5 border shadow-lg animate-toast ${theming}`;
            el.innerHTML = (0, helper_1.addItemHTML)(text, id, variant, closable);
            modal.current.appendChild(el);
            const t = setTimeout(() => {
                var _a;
                (_a = document.getElementById(id.toString())) === null || _a === void 0 ? void 0 : _a.remove();
                clearTimeout(t);
            }, interval);
        }
    }));
    return React.createElement(exports.ToastContainer, { refer: modal });
    // return <div ref={modal} className="fixed z-40 top-8 right-8" />;
};
exports.Toast = Toast;
//# sourceMappingURL=Toast.js.map