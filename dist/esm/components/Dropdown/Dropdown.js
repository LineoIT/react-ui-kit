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
import React, { createContext, useContext, useState } from 'react';
const Context = createContext({ open: false, setOpen: (v) => { } });
function Toggle(props) {
    const { open, setOpen } = useContext(Context);
    return (React.createElement("div", Object.assign({}, props, { onClick: () => setOpen(!open) }), props.children));
}
function Wrapper(props) {
    const { open } = useContext(Context);
    const { activeClass = 'max-h-60  ring-accent ring-1', desactiveClass = 'max-h-0', className = 'text-gray-500  bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1' } = props, rest = __rest(props, ["activeClass", "desactiveClass", "className"]);
    return (React.createElement("div", Object.assign({}, rest, { className: `absolute overflow-y-auto transition-all duration-200 ${className} ${open ? activeClass : desactiveClass} ` }), props.children));
}
export function DropdownItem(props) {
    const { setOpen } = useContext(Context);
    return (React.createElement("div", Object.assign({}, props, { onClick: (e) => {
            setOpen(false);
            if (props.onClick)
                props.onClick(e);
        } }), props.children));
}
const Dropdown = (props) => {
    const [open, setOpen] = useState(true);
    return (React.createElement(Context.Provider, { value: { open, setOpen } },
        React.createElement("div", { className: "relative" }, props.children)));
};
Dropdown.Toggle = Toggle;
Dropdown.Item = DropdownItem;
Dropdown.Wrapper = Wrapper;
export { Dropdown };
//# sourceMappingURL=Dropdown.js.map