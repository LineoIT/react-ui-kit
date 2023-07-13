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
exports.TableCell = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = void 0;
const react_1 = __importStar(require("react"));
const Table = (prop) => {
    return (react_1.default.createElement("table", Object.assign({}, prop, { className: `w-full  border-collapse border-spacing-0 border-inherit ${prop.className}` }), prop.children));
};
exports.Table = Table;
const TableHead = (prop) => {
    return react_1.default.createElement("thead", Object.assign({}, prop), prop.children);
};
exports.TableHead = TableHead;
const TableBody = (prop) => {
    return react_1.default.createElement("tbody", Object.assign({}, prop), prop.children);
};
exports.TableBody = TableBody;
const TableRow = (props) => {
    const { hover = false, children, className, selected = false } = props;
    return (react_1.default.createElement("tr", Object.assign({}, props, { className: `table-row    border-gray-200 dark:border-gray-500  font-[400]  border-collapse border-spacing-0 border-b 
      leading-[24px] indent-0 align-middle
      ${hover ? 'hover:text-primary' : ''}
      ${selected ? 'text-primary dark:text-accent' : 'text-gray-600 dark:text-gray-200'}
    ${className}` }), children));
};
exports.TableRow = TableRow;
const TableCell = (prop) => {
    const { className = 'text-left' } = prop;
    const css = (0, react_1.useMemo)(() => {
        return prop.type === 'th' ? ' md:text-[14px] text-[16px] font-[400] text-gray-800 dark:text-white' : ' md:text-[13px] text-[14px]';
    }, [prop.type]);
    return (react_1.default.createElement("td", Object.assign({}, prop, { className: ` ${css} p-2  border-collapse border-spacing-0 
    leading-[20px] indent-0 
   ${className}` }), prop.children));
};
exports.TableCell = TableCell;
//# sourceMappingURL=Table.js.map