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
exports.Notify = exports.useNotify = exports.NotifyContainer = exports.NotifyProvider = void 0;
const react_1 = __importDefault(require("react"));
const helper_1 = require("./helper");
const intialValue = (toast) => { };
const NotifyContext = react_1.default.createContext({
    toastRef: { current: intialValue }
});
function NotifyProvider({ children }) {
    const toastRef = react_1.default.useRef(intialValue);
    return (react_1.default.createElement(NotifyContext.Provider, { value: { toastRef } },
        children,
        react_1.default.createElement(NotifyContainer, null)));
}
exports.NotifyProvider = NotifyProvider;
function NotifyContainer() {
    const [toasts, setToasts] = react_1.default.useState([]);
    const { toastRef } = react_1.default.useContext(NotifyContext);
    toastRef.current = (_a) => {
        var { timeout = 3000 } = _a, props = __rest(_a, ["timeout"]);
        const id = Date.now();
        const timer = setTimeout(() => {
            setToasts((v) => v.filter((t) => t.id !== id));
        }, timeout);
        setToasts((v) => [...v, Object.assign({ id, timer }, props)]);
    };
    const onRemove = (id, timer) => {
        clearTimeout(timer);
        setToasts((v) => v.filter((t) => t.id !== id));
    };
    return (react_1.default.createElement("div", { className: "toasts fixed z-99 top-8 right-8" }, toasts.map((t) => (react_1.default.createElement(Notify, Object.assign({}, t, { onRemove: onRemove, key: t.id }))))));
}
exports.NotifyContainer = NotifyContainer;
function useNotify() {
    const { toastRef } = react_1.default.useContext(NotifyContext);
    return {
        push: react_1.default.useCallback((toast) => {
            toastRef.current(toast);
        }, [toastRef])
    };
}
exports.useNotify = useNotify;
function Notify(props) {
    // const theming = getTheming(props.variant);
    const { variant = 'default', onRemove, timer, id } = props;
    const handleRemove = () => {
        if (onRemove && timer && id)
            onRemove(id, timer);
    };
    return (react_1.default.createElement("div", { className: `max-w-lg rounded-lg my-5 px-4 py-3 border  shadow-lg animate-toast flex items-center justify-between gap-2 ${(0, helper_1.getTheming)(variant)}` },
        ToastIcon(variant),
        react_1.default.createElement("p", { className: "font-medium flex-1" }, props.message),
        react_1.default.createElement("div", { className: "ml-3" },
            react_1.default.createElement("button", { className: `border  rounded-lg p-1 ${(0, helper_1.getAccentTheming)(variant)}`, onClick: handleRemove },
                react_1.default.createElement("span", { className: "sr-only" }, "Close"),
                react_1.default.createElement("svg", { className: "shrink-0 w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("path", { fill: "currentColor", d: "M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" }))))));
}
exports.Notify = Notify;
function ToastIcon(variant) {
    if (variant === 'info') {
        return (react_1.default.createElement("svg", { className: "shrink-0 w-6 h-6", viewBox: "0 0 16 16" },
            react_1.default.createElement("g", { fill: "currentColor" },
                react_1.default.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                react_1.default.createElement("path", { d: "m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" }))));
    }
    if (variant === 'success') {
        return (react_1.default.createElement("svg", { className: "shrink-0 w-6 h-6", viewBox: "0 0 24 24" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M20 16v-6h2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h8v2H8v12h12m-9.09-8.92L14 10.17l6.59-6.59L22 5l-8 8l-4.5-4.5l1.41-1.42M16 20v2H4a2 2 0 0 1-2-2V7h2v13h12Z" })));
    }
    if (variant === 'error') {
        return (react_1.default.createElement("svg", { className: "shrink-0 w-6 h-6", viewBox: "0 0 24 24" },
            react_1.default.createElement("g", { fill: "currentColor" },
                react_1.default.createElement("path", { d: "M3.707 2.293a1 1 0 0 0-1.414 1.414L15.535 16.95l2.829 2.828l1.929 1.93a1 1 0 0 0 1.414-1.415l-1.253-1.254c3.607-4.321 3.382-10.76-.676-14.817a1 1 0 0 0-1.414 1.414a9.001 9.001 0 0 1 .668 11.982l-1.425-1.425a7.002 7.002 0 0 0-.657-9.143a1 1 0 1 0-1.414 1.414a5.002 5.002 0 0 1 .636 6.294l-1.465-1.465a3 3 0 0 0-4-4l-7-7zM3.75 8.4a1 1 0 0 0-1.834-.8C.161 11.624.928 16.485 4.222 19.778a1 1 0 0 0 1.414-1.414A9.004 9.004 0 0 1 3.749 8.4zm3.32 2.766a1 1 0 0 0-1.972-.332A6.992 6.992 0 0 0 7.05 16.95a1 1 0 1 0 1.414-1.414a4.992 4.992 0 0 1-1.394-4.37z" }))));
    }
    if (variant === 'warning') {
        return (react_1.default.createElement("svg", { className: "shrink-0 w-6 h-6", viewBox: "0 0 24 24" },
            react_1.default.createElement("path", { fill: "currentColor", d: "M12 12.5ZM2.725 21q-.575 0-.85-.5t0-1l9.25-16Q11.4 3 12 3t.875.5l9.25 16q.275.5 0 1t-.85.5ZM12 10q-.425 0-.712.287Q11 10.575 11 11v3q0 .425.288.712q.287.288.712.288t.713-.288Q13 14.425 13 14v-3q0-.425-.287-.713Q12.425 10 12 10Zm0 8q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm-7.55 1h15.1L12 6Z" })));
    }
    return (react_1.default.createElement("svg", { className: "shrink-0 w-6 h-6", viewBox: "0 0 16 16" },
        react_1.default.createElement("path", { fill: "currentColor", d: "M9.68 2.75a1.54 1.54 0 0 0-.56.25a1.53 1.53 0 0 0-1.43-1a1.51 1.51 0 0 0-.92.32l-.08-.24A1.49 1.49 0 0 0 5.25 1A1.51 1.51 0 0 0 4 1.63a1.54 1.54 0 0 0-.21.45a1.6 1.6 0 0 0-2 2l1.45 4.66a2.29 2.29 0 0 0-1.92.65a1 1 0 0 0-.31.89a1.33 1.33 0 0 0 .78 1a10.8 10.8 0 0 1 3 2.44A4 4 0 0 0 7.69 15c.338 0 .675-.048 1-.14l1.78-.53a2.45 2.45 0 0 0 1.73-2c.202-1.28.305-2.574.31-3.87a19.228 19.228 0 0 0-1-4.71a1.54 1.54 0 0 0-1.83-1Zm1.52 9.46a1.429 1.429 0 0 1-1 1.16l-1.79.53a2.89 2.89 0 0 1-2.9-.9a11.38 11.38 0 0 0-3.3-2.66c-.14-.07-.21-.19-.2-.24a1.43 1.43 0 0 1 1.77-.1a.51.51 0 0 0 .7-.6L2.76 3.81a.62.62 0 0 1 .31-.74a.61.61 0 0 1 .51 0a.63.63 0 0 1 .36.37L5 6.66a.45.45 0 0 0 .16.22a.62.62 0 0 0 .33.12h.16a.47.47 0 0 0 .12-.07a.4.4 0 0 0 .23-.21a.55.55 0 0 0 0-.17a.63.63 0 0 0 0-.19L4.76 2.67a.54.54 0 0 1 .07-.46a.54.54 0 0 1 .91.15L7 6.64a.46.46 0 0 0 .17.24a.44.44 0 0 0 .31.12h.14A.5.5 0 0 0 8 6.36l-.8-2.67a.52.52 0 0 1 .08-.47a.55.55 0 0 1 1 .19l.32 1.25l.48 2a.49.49 0 0 0 .2.28a.48.48 0 0 0 .14.06h.2a.51.51 0 0 0 .38-.62l-.49-2a.58.58 0 0 1 .42-.7a.54.54 0 0 1 .66.36c.484 1.434.793 2.922.92 4.43a24.737 24.737 0 0 1-.31 3.74ZM13.8 1.1a.5.5 0 1 0-.6.8a4.19 4.19 0 0 1 1.32 4.46a.5.5 0 0 0 .34.62L15 7a.49.49 0 0 0 .48-.36A5.19 5.19 0 0 0 13.8 1.1Zm-1.186 1.41a.49.49 0 0 1 .176.08a3.37 3.37 0 0 1 1.17 2.95a.5.5 0 0 1-.5.46a.5.5 0 0 1-.46-.54a2.37 2.37 0 0 0-.8-2.06a.49.49 0 0 1-.1-.69a.49.49 0 0 1 .514-.2Z" })));
}
//# sourceMappingURL=Notify.js.map