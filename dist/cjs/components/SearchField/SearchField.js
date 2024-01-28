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
exports.SearchField = void 0;
const React = __importStar(require("react"));
const SearchField = (props) => {
    const { variant = 'default' } = props, rest = __rest(props, ["variant"]);
    return (React.createElement("label", { className: `flex items-center rounded 
    text-gray-400 dark:text-gray-200 border dark:border-gray-500 border-gray-400 
     focus-within:text-gray-700 focus-within:ring-primary focus-within:ring-1 focus-within:border-primary
     dark:focus-within:bg-white/10
     dark:focus-within:text-gray-200 dark:placeholder-gray-500  dark:placeholder-opacity-100` },
        React.createElement("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "ml-2 w-4 h-4" },
            React.createElement("path", { fillRule: "evenodd", d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z", clipRule: "evenodd" })),
        React.createElement("input", Object.assign({}, rest, { className: "px-2 py-2 flex-1 ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent", type: "search" }))));
};
exports.SearchField = SearchField;
//# sourceMappingURL=SearchField.js.map