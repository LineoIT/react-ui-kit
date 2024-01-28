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
exports.Dropper = exports.DropdownButton = void 0;
const react_1 = __importStar(require("react"));
const Item = (0, react_1.memo)((prop) => {
    const { children } = prop, rest = __rest(prop, ["children"]);
    return (react_1.default.createElement("div", Object.assign({ className: "p-2 px-4 hover:bg-black/5 cursor-default  w-full" }, rest), children));
});
const DropdownButton = ({ items = [], onSelect, className = 'py-2 px-4 hover:bg-black/5', dropClassName = ' max-h-[800px] z-50 ', valueClassName = '', searchable = false, textComponent, initialIndex = 0 }) => {
    const divRef = (0, react_1.useRef)(null);
    const [active, setActive] = (0, react_1.useState)(false);
    const [index, setIndex] = (0, react_1.useState)(initialIndex);
    const [search, setSearch] = (0, react_1.useState)('');
    const handleClick = (i) => {
        setIndex(i);
        // if (onSelect) onSelect(items[i])
        setActive(false);
    };
    const toogle = () => {
        setActive(!active);
    };
    (0, react_1.useEffect)(() => {
        if (index >= 0 && onSelect && items.length > initialIndex)
            onSelect(items[index]);
    }, [index]);
    const filtered = (0, react_1.useMemo)(() => {
        if (search !== '')
            return items.filter((c) => c.toLocaleLowerCase().match(search.toLocaleLowerCase()));
        return items;
    }, [items, search]);
    (0, react_1.useEffect)(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setActive(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (react_1.default.createElement("div", { className: "block relative", ref: divRef },
        react_1.default.createElement("label", { className: `cursor-pointe flex items-center flex-none ${className}`, onClick: toogle },
            textComponent ? textComponent : items.length && react_1.default.createElement("span", { className: valueClassName }, items[index]),
            react_1.default.createElement("div", { className: "w-2" }),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "h-4 cursor-pointer" },
                react_1.default.createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", fill: "currentColor" }))),
        active && (react_1.default.createElement("div", { className: `block shadow-md absolute overflow-y-auto bg-white dark:bg-slate-800 border-[1px] border-black/[3%] select-none  ${dropClassName}` },
            searchable && (react_1.default.createElement("div", { className: "relative mx-4 py-2" },
                react_1.default.createElement("input", { type: "search", onChange: (e) => setSearch(e.target.value), value: search, placeholder: "rechercher", className: `border dark:border-white/10 bg-transparent ring-0 outline-none h-full w-full pl-2 py-2 ${search.length === 0 ? 'pr-6' : 'pr-2'}` }),
                search.length === 0 && (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "h-4 fill-black/50 dark:fill-white/50 absolute right-1 top-1/2  -translate-y-1/2" },
                    react_1.default.createElement("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }))))),
            filtered.map((item, i) => (react_1.default.createElement(Item, { key: i, onClick: () => handleClick(i) },
                react_1.default.createElement("div", { className: `flex items-center justify-between w-full  ${index === i ? 'text-primary dark:text-sky-200' : ''}` },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "truncate w-[90%]" }, item)),
                    index === i && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "w-3 h-3 font-bold " },
                            react_1.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", fill: "currentColor" }))))))))))));
};
exports.DropdownButton = DropdownButton;
const Dropper = (prop) => {
    const { button, dropClassName = 'block shadow absolute z-50  overflow-y-auto bg-white dark:bg-slate-900 border-[1px] border-black/[3%] select-none', children, active, setActive } = prop, rest = __rest(prop, ["button", "dropClassName", "children", "active", "setActive"]);
    const divRef = (0, react_1.useRef)(null);
    const toogle = () => {
        setActive(!active);
    };
    (0, react_1.useEffect)(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setActive(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (react_1.default.createElement("div", { className: "block relative", ref: divRef },
        react_1.default.createElement("div", Object.assign({}, rest, { onClick: toogle }), button),
        active && react_1.default.createElement("div", { className: dropClassName }, children)));
};
exports.Dropper = Dropper;
//# sourceMappingURL=Dropdown.js.map