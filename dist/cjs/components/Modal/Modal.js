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
exports.Modal = exports.BaseModal = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const BaseModal = (props) => {
    const { children, visible, setVisible, name, dismissible = true, zIndex = 20, className = '', overlayClassName } = props, rest = __rest(props, ["children", "visible", "setVisible", "name", "dismissible", "zIndex", "className", "overlayClassName"]);
    const modal = react_1.default.useRef(null);
    function handleDismiss(e) {
        const target = e.target;
        if (dismissible && target.id && target.id === name) {
            if (setVisible)
                setVisible(false);
        }
    }
    return (react_1.default.createElement("div", Object.assign({}, rest, { className: `fixed top-0 right-0 bottom-0 left-0 flex items-center transition-opacity-visibility ease-in-out duration-300  outline-0 bg-black/60 
       ${visible ? ' visible opacity-100' : 'invisible opacity-0'} ${overlayClassName}`, ref: modal, id: name, onClick: handleDismiss, style: { zIndex: zIndex } }),
        react_1.default.createElement("div", { className: `relative m-auto transition-opacity-visibility-transform ease-in-out duration-300 flex flex-col outline-none ${visible ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible opacity-0 scale-50 '} ${className}` }, children)));
};
exports.BaseModal = BaseModal;
const Modal = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    return react_dom_1.default.createPortal(react_1.default.createElement(exports.BaseModal, Object.assign({}, rest), children), document.body);
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map