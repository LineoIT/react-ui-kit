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
import * as React from 'react';
export const Select = (_a) => {
    var { error = false, inputClass, children } = _a, rest = __rest(_a, ["error", "inputClass", "children"]);
    const color = React.useMemo(() => error
        ? 'text-red-500 border-red-400 focus-within:text-red-700 focus-within:ring-red-500  focus-within:border-red-500'
        : 'text-gray-500 border-gray-400 focus-within:text-gray-700 focus-within:ring-primary  focus-within:border-primary ', [error]);
    return (React.createElement("div", { className: ` rounded px-2 border dark:border-gray-500 focus-within:ring-1 bg-white dark:bg-black dark:text-gray-300 dark:bg-opacity-30 dark:focus-within:bg-opacity-10 dark:focus-within:text-gray-200   ${color}` },
        React.createElement("select", Object.assign({}, rest, { className: `w-full px-2 py-[0.6rem]  ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent dark:placeholder-gray-400` + inputClass }), children)));
};
//# sourceMappingURL=Select.js.map