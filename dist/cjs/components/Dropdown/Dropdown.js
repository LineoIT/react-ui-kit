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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = exports.DropdownItem = void 0;
const react_1 = __importStar(require("react"));
const Context = (0, react_1.createContext)({ open: false, setOpen: (v) => { } });
function Toggle(props) {
    const { open, setOpen } = (0, react_1.useContext)(Context);
    return (react_1.default.createElement("div", Object.assign({}, props, { onClick: () => setOpen(!open) }), props.children));
}
function Wrapper(props) {
    const { open } = (0, react_1.useContext)(Context);
    const { activeClass = 'max-h-60  ring-accent ring-1', desactiveClass = 'max-h-0', className = 'text-gray-500  bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1' } = props, rest = __rest(props, ["activeClass", "desactiveClass", "className"]);
    return (react_1.default.createElement("div", Object.assign({}, rest, { className: `absolute overflow-y-auto transition-all duration-200 ${className} ${open ? activeClass : desactiveClass} ` }), props.children));
}
function DropdownItem(props) {
    const { setOpen } = (0, react_1.useContext)(Context);
    return (react_1.default.createElement("div", Object.assign({}, props, { onClick: (e) => {
            setOpen(false);
            if (props.onClick)
                props.onClick(e);
        } }), props.children));
}
exports.DropdownItem = DropdownItem;
const Dropdown = (props) => {
    const [open, setOpen] = (0, react_1.useState)(true);
    return (react_1.default.createElement(Context.Provider, { value: { open, setOpen } },
        react_1.default.createElement("div", { className: "relative" }, props.children)));
};
exports.Dropdown = Dropdown;
Dropdown.Toggle = Toggle;
Dropdown.Item = DropdownItem;
Dropdown.Wrapper = Wrapper;
//# sourceMappingURL=Dropdown.js.map