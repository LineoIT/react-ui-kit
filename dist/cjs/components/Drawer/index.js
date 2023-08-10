"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const react_1 = __importDefault(require("react"));
function Drawer({ open, position = 'left', overlay = false, children, className = '' }) {
    const _subClass = position === 'right' ? 'right-0' : 'left-0';
    const _unactiveSubClass = position === 'right' ? 'translate-x-full' : '-translate-x-full';
    const _activeSubClass = position === 'right' ? 'translate-x-0' : 'translate-x-0';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        open && overlay && react_1.default.createElement("div", { className: `absolute top-0 bottom-0 right-0 left-0 bg-black/50   ${open ? 'visible' : ' invisible'}` }),
        react_1.default.createElement("div", { className: `top-0  absolute h-full  shadow-2xl ease-in-out duration-300  ${_subClass}
            ${open ? _activeSubClass : _unactiveSubClass}   ${className}` },
            react_1.default.createElement("div", { className: " h-full w-full" },
                " ",
                children))));
}
exports.Drawer = Drawer;
//# sourceMappingURL=index.js.map