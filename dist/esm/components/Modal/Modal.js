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
import React from 'react';
import ReactDom from 'react-dom';
export const BaseModal = (props) => {
    const { children, visible, setVisible, name, dismissible = true, zIndex = 20, className = '', overlayClassName } = props, rest = __rest(props, ["children", "visible", "setVisible", "name", "dismissible", "zIndex", "className", "overlayClassName"]);
    const modal = React.useRef(null);
    function handleDismiss(e) {
        const target = e.target;
        if (dismissible && target.id && target.id === name) {
            if (setVisible)
                setVisible(false);
        }
    }
    return (React.createElement("div", Object.assign({}, rest, { className: `fixed top-0 right-0 bottom-0 left-0 flex items-center transition-opacity-visibility ease-in-out duration-300  outline-0 bg-black/60 
       ${visible ? ' visible opacity-100' : 'invisible opacity-0'} ${overlayClassName}`, ref: modal, id: name, onClick: handleDismiss, style: { zIndex: zIndex } }),
        React.createElement("div", { className: `relative m-auto transition-opacity-visibility-transform ease-in-out duration-300 flex flex-col outline-none ${visible ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible opacity-0 scale-50 '} ${className}` }, children)));
};
export const Modal = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    return ReactDom.createPortal(React.createElement(BaseModal, Object.assign({}, rest), children), document.body);
};
//# sourceMappingURL=Modal.js.map