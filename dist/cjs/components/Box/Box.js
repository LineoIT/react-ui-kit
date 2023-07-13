"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const react_1 = __importDefault(require("react"));
const Box = (prop) => {
    return (react_1.default.createElement("div", Object.assign({}, prop, { style: {
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
            display: 'flex',
            flexDirection: 'column'
        } }),
        ' ',
        prop.children));
};
exports.Box = Box;
//# sourceMappingURL=Box.js.map