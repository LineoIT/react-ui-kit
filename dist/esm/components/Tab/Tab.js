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
import React, { createContext, useContext } from 'react';
const TabContext = createContext({
    value: 0
});
const Item = (prop) => {
    const { tab = 0, className = 'py-2 px-3', children } = prop, rest = __rest(prop, ["tab", "className", "children"]);
    const { value, onChange, variant = 'tab' } = useContext(TabContext);
    const handleClick = () => {
        if (onChange)
            onChange(tab);
    };
    const _activeSwitchClass = tab === value ? 'cursor-default bg-white dark:bg-slate-900/50 dark:text-sky-500 ' : 'cursor-pointer hover:bg-white/30 hover:dark:bg-slate-900/50 dark:text-white/30';
    const _activeTabClass = tab === value ? 'cursor-default dark:text-sky-500 text-primary border-b-2 border-primary dark:border-sky-500' : 'cursor-pointer';
    return (React.createElement("div", Object.assign({ onClick: handleClick }, rest, { className: ` ${variant === 'switch' && 'text-black/60 rounded-md'} 
    ${variant === 'switch' ? _activeSwitchClass : _activeTabClass}
  ${className}` }), children));
};
const Tab = ({ children, value, onChange, className, variant = 'tab' }) => {
    return (React.createElement(TabContext.Provider, { value: { value, onChange, variant } },
        React.createElement("div", { className: `inline-flex gap-1  
              ${variant === 'switch' ? 'rounded bg-black/5 dark:bg-white/5 p-1' : 'dark:bg-white/5   w-full border-b  border-black/[0.03]  dark:border-white/10'} 
              ${className}` }, children)));
};
Tab.Item = Item;
export { Tab };
//# sourceMappingURL=Tab.js.map