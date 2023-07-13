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
import React, { useMemo } from 'react';
export function TimelineTracker(props) {
    // const { disabled = false, active = false, strokeWidth = 4 } = props;
    const { disabled = false, active = false } = props;
    // const border = useMemo(() => `border-[${strokeWidth}px]`, [strokeWidth])
    // const border = useMemo(() => `border-[4px]`, [strokeWidth]);
    return (React.createElement("div", { className: ` relative rounded-full flex items-center justify-center w-[20px] h-[20px] border-[4px] ]
      ${disabled ? 'border-gray-300' : active ? 'border-lime-500 ' : 'border-primary dark:border-accent'}` }, active && (React.createElement("span", { className: "absolute flex h-[7px] w-[7px] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]" },
        React.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" }),
        React.createElement("span", { className: "relative inline-flex rounded-full h-[7px] w-[7px] bg-lime-500" })))));
}
export function Timeline(props) {
    const { strokeWidth = 4, strokeHeight = 20, orientation = 'vertical', last = false } = props, rest = __rest(props, ["strokeWidth", "strokeHeight", "orientation", "last"]);
    const sizeClass = useMemo(() => {
        // if(orientation === 'horizontal') return `w-[${strokeHeight}px] h-[${strokeWidth}px]`
        if (orientation === 'horizontal')
            return `w-[20px] h-[4px]`;
        // return `w-[${strokeWidth}px] h-[${strokeHeight}px]`
        return `w-[4px] h-[20px]`;
    }, [orientation, strokeHeight, strokeWidth]);
    return (React.createElement("div", { className: `flex items-center ${orientation === 'vertical' && 'flex-col'}` }, !last ? (React.createElement(React.Fragment, null,
        React.createElement(TimelineTracker, Object.assign({}, rest, { strokeWidth: strokeWidth })),
        React.createElement("div", { className: `flex-1 ${sizeClass} ${props.disabled ? 'bg-gray-300' : 'bg-primary dark:bg-accent'}` }))) : (React.createElement("div", { className: `w-[20px] h-[10px] bg-primary dark:bg-accent` }))));
}
//# sourceMappingURL=Timeline.js.map