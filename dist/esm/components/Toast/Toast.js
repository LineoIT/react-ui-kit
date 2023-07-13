import * as React from 'react';
import { addItemHTML, getTheming } from './helper';
const toastProviderId = 'toasty';
export const ToastContainer = (prop) => {
    return React.createElement("div", { ref: prop.refer, id: toastProviderId, className: "fixed z-40 top-8 right-8" });
};
export function useToast(options = {
    timeout: 3000,
    closable: true
}) {
    function notify(text, variant = 'default', opts = options) {
        var _a;
        const id = new Date().getTime();
        const theming = getTheming(variant);
        const el = document.createElement('div');
        el.id = id.toString();
        el.className = `max-w-lg rounded-lg my-5 px-4 py-3 border  shadow-lg animate-toast ${theming}`;
        el.innerHTML = addItemHTML(text, id, variant, opts === null || opts === void 0 ? void 0 : opts.closable);
        (_a = document.getElementById(toastProviderId)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
        const t = setTimeout(() => {
            var _a;
            (_a = document.getElementById(id.toString())) === null || _a === void 0 ? void 0 : _a.remove();
            clearTimeout(t);
        }, opts.timeout);
    }
    return { notify };
}
export const Toast = ({ closable = true, interval = 3000, refer }) => {
    const modal = React.useRef();
    React.useImperativeHandle(refer, () => ({
        notify(text, variant = 'default') {
            const id = new Date().getTime();
            const theming = getTheming(variant);
            const el = document.createElement('div');
            el.id = id.toString();
            el.className = `max-w-lg rounded-lg px-4 py-3 my-5 border shadow-lg animate-toast ${theming}`;
            el.innerHTML = addItemHTML(text, id, variant, closable);
            modal.current.appendChild(el);
            const t = setTimeout(() => {
                var _a;
                (_a = document.getElementById(id.toString())) === null || _a === void 0 ? void 0 : _a.remove();
                clearTimeout(t);
            }, interval);
        }
    }));
    return React.createElement(ToastContainer, { refer: modal });
    // return <div ref={modal} className="fixed z-40 top-8 right-8" />;
};
//# sourceMappingURL=Toast.js.map