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
exports.SelectLabelField = void 0;
const react_1 = __importStar(require("react"));
function SelectLabelField(props) {
    const { placeholder = '', value, items = [], setValue } = props;
    const [open, setOpen] = (0, react_1.useState)(false);
    const textCaption = (0, react_1.useMemo)(() => (typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.name), [value]);
    return (react_1.default.createElement("div", { className: "relative min-w-[180px] select-none font-medium " },
        react_1.default.createElement("div", { onClick: () => setOpen(!open), className: ` w-full border  dark:text-gray-300 p-2 flex items-center justify-between rounded  
         'text-gray-500'
        ${open ? ` ring-1 border-primary ring-primary` : 'border-gray-400 dark:border-gray-500'}` },
            react_1.default.createElement("div", { className: "flex items-center flex-1" },
                react_1.default.createElement("span", { className: "text-gray-400" }, placeholder),
                react_1.default.createElement("div", { className: "ml-2 text-center flex-1 " }, textCaption && textCaption.length > 25 ? (textCaption === null || textCaption === void 0 ? void 0 : textCaption.substring(0, 25)) + '...' : textCaption)),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `w-[14px] h-[14px] ${open && 'rotate-180'}` },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        react_1.default.createElement("div", { className: `absolute z-[99] text-gray-500 w-full bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1 overflow-y-auto transition-all duration-100  ${open ? 'max-h-60  ring-accent ring-1' : 'max-h-0'} ` },
            items.map((item, i) => (react_1.default.createElement("div", { className: "flex flex-col divide-y divide-gray-300 w-full", key: i },
                react_1.default.createElement("div", { className: `p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-accent/10 ${value === item && 'text-accent'}`, onClick: () => {
                        if (setValue)
                            setValue(item);
                        setOpen(false);
                    } }, typeof item === 'string' ? item : item === null || item === void 0 ? void 0 : item.name)))),
            props.children)));
}
exports.SelectLabelField = SelectLabelField;
//# sourceMappingURL=SelectLabelField.js.map