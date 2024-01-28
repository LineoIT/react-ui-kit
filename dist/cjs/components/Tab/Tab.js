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
exports.Tab = void 0;
const react_1 = __importStar(require("react"));
const TabContext = (0, react_1.createContext)({
    value: 0
});
const Item = (prop) => {
    const { tab = 0, className = 'py-2 px-3', children } = prop, rest = __rest(prop, ["tab", "className", "children"]);
    const { value, onChange, variant = 'tab' } = (0, react_1.useContext)(TabContext);
    const handleClick = () => {
        if (onChange)
            onChange(tab);
    };
    const _activeSwitchClass = tab === value ? 'cursor-default bg-white dark:bg-slate-900/50 dark:text-sky-500 ' : 'cursor-pointer hover:bg-white/30 hover:dark:bg-slate-900/50 dark:text-white/30';
    const _activeTabClass = tab === value ? 'cursor-default dark:text-sky-500 text-primary border-b-2 border-primary dark:border-sky-500' : 'cursor-pointer';
    return (react_1.default.createElement("div", Object.assign({ onClick: handleClick }, rest, { className: ` ${variant === 'switch' && 'text-black/60 rounded-md'} 
    ${variant === 'switch' ? _activeSwitchClass : _activeTabClass}
  ${className}` }), children));
};
const Tab = ({ children, value, onChange, className, variant = 'tab' }) => {
    return (react_1.default.createElement(TabContext.Provider, { value: { value, onChange, variant } },
        react_1.default.createElement("div", { className: `inline-flex gap-1  
              ${variant === 'switch' ? 'rounded bg-black/5 dark:bg-white/5 p-1' : 'dark:bg-white/5   w-full border-b  border-black/[0.03]  dark:border-white/10'} 
              ${className}` }, children)));
};
exports.Tab = Tab;
Tab.Item = Item;
//# sourceMappingURL=Tab.js.map