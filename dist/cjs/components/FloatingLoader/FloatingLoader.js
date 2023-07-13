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
exports.FloatingLoader = void 0;
const react_1 = __importStar(require("react"));
const Spinner_1 = require("../Spinner");
const Icons_1 = require("../Icons");
const FloatingLoader = ({ refer, className = 'bottom-[10px] right-[10px]' }) => {
    const modal = react_1.default.useRef();
    const [_state, setState] = (0, react_1.useState)('none');
    const [_content, setContent] = (0, react_1.useState)(react_1.default.createElement("div", null, "Loading"));
    react_1.default.useImperativeHandle(refer, () => ({
        setState(state) {
            setState(state);
            if (state === 'success') {
                const t = setTimeout(() => {
                    setState('none');
                    clearTimeout(t);
                }, 3000);
            }
        },
        setContent(content) {
            setContent(content);
        }
    }));
    return (react_1.default.createElement("div", { ref: modal, className: `absolute  flex items-center shadow-lg drop-shadow-2xl transition-all ease-out duration-700 p-3 bg-white ${className} 
    ${_state !== 'none' ? 'opacity-100' : 'opacity-0'}` },
        react_1.default.createElement("div", { className: `${_state === 'error' && 'text-rose-500'}` }, _content),
        react_1.default.createElement("div", { className: "w-[10px]" }),
        _state == 'loading' && react_1.default.createElement(Spinner_1.Spinner, { size: "20px" }),
        _state == 'error' && (react_1.default.createElement("div", { className: "w-[20px] h-[20px] rounded-full bg-rose-500 text-white flex items-center justify-center" },
            react_1.default.createElement(Icons_1.XMarkIcon, null))),
        _state == 'success' && (react_1.default.createElement("div", { className: "w-[20px] h-[20px] rounded-full bg-green-500 text-white flex items-center justify-center" },
            react_1.default.createElement("svg", { className: "w-[1.0rem] h-[1.0rem]", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))))));
};
exports.FloatingLoader = FloatingLoader;
//# sourceMappingURL=FloatingLoader.js.map