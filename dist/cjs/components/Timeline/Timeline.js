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
exports.Timeline = exports.TimelineTracker = void 0;
const react_1 = __importStar(require("react"));
function TimelineTracker(props) {
    // const { disabled = false, active = false, strokeWidth = 4 } = props;
    const { disabled = false, active = false } = props;
    // const border = useMemo(() => `border-[${strokeWidth}px]`, [strokeWidth])
    // const border = useMemo(() => `border-[4px]`, [strokeWidth]);
    return (react_1.default.createElement("div", { className: ` relative rounded-full flex items-center justify-center w-[20px] h-[20px] border-[4px] ]
      ${disabled ? 'border-gray-300' : active ? 'border-lime-500 ' : 'border-primary dark:border-accent'}` }, active && (react_1.default.createElement("span", { className: "absolute flex h-[7px] w-[7px] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]" },
        react_1.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" }),
        react_1.default.createElement("span", { className: "relative inline-flex rounded-full h-[7px] w-[7px] bg-lime-500" })))));
}
exports.TimelineTracker = TimelineTracker;
function Timeline(props) {
    const { strokeWidth = 4, strokeHeight = 20, orientation = 'vertical', last = false } = props, rest = __rest(props, ["strokeWidth", "strokeHeight", "orientation", "last"]);
    const sizeClass = (0, react_1.useMemo)(() => {
        // if(orientation === 'horizontal') return `w-[${strokeHeight}px] h-[${strokeWidth}px]`
        if (orientation === 'horizontal')
            return `w-[20px] h-[4px]`;
        // return `w-[${strokeWidth}px] h-[${strokeHeight}px]`
        return `w-[4px] h-[20px]`;
    }, [orientation, strokeHeight, strokeWidth]);
    return (react_1.default.createElement("div", { className: `flex items-center ${orientation === 'vertical' && 'flex-col'}` }, !last ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TimelineTracker, Object.assign({}, rest, { strokeWidth: strokeWidth })),
        react_1.default.createElement("div", { className: `flex-1 ${sizeClass} ${props.disabled ? 'bg-gray-300' : 'bg-primary dark:bg-accent'}` }))) : (react_1.default.createElement("div", { className: `w-[20px] h-[10px] bg-primary dark:bg-accent` }))));
}
exports.Timeline = Timeline;
//# sourceMappingURL=Timeline.js.map