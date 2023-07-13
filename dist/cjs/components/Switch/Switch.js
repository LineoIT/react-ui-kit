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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch2 = exports.Switch = void 0;
const React = __importStar(require("react"));
const Switch = (prop) => {
    const skin = React.useMemo(() => {
        return prop.size === 'small' ? 'w-11 h-4 py-1 pr-1' : prop.size === 'medium' ? 'w-12 h-6 p-1' : 'w-14 h-8 p-1';
    }, [prop.size]);
    const indicator = React.useMemo(() => {
        return prop.size === 'small' ? 'w-5 h-5' : prop.size === 'medium' ? 'w-4 h-4' : 'w-6 h-6';
    }, [prop.size]);
    const activeIndicator = React.useMemo(() => {
        return prop.size === 'small' ? 'translate-x-6' : prop.size === 'medium' ? 'translate-x-6' : 'translate-x-6';
    }, [prop.size]);
    return (React.createElement("div", { className: `flex items-center  rounded-full ${skin} duration-300 cursor-pointer ${prop.value ? 'bg-primary ' : 'bg-gray-200 dark:bg-white/20'}`, onClick: () => {
            if (prop.onChange)
                prop.onChange(!prop.value);
        } },
        React.createElement("div", { className: `bg-white  dark:bg-gray-200 ${indicator} rounded-full shadow-md transform duration-300 ${prop.value ? activeIndicator : ''}` })));
};
exports.Switch = Switch;
const Switch2 = (prop) => {
    return (React.createElement("label", { htmlFor: prop.id, className: `bg-gray-200 dark:bg-white/20  relative w-14 h-8 rounded-full` },
        React.createElement("input", Object.assign({}, prop, { type: "checkbox", className: "sr-only peer" })),
        React.createElement("span", { className: "w-6 h-6 bg-white  dark:bg-gray-200 absolute shadow-md rounded-full left-1 top-1 peer-checked:bg-primary-dark\n     peer-checked:left-7 transition-all duration-300" })));
};
exports.Switch2 = Switch2;
//# sourceMappingURL=Switch.js.map