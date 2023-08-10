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
exports.SelectField = void 0;
const react_1 = __importStar(require("react"));
const SelectField = ({ placeholder = '', items = [], error = false, searchPlaceholder = 'search item', onChange, value }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [open, setOpen] = (0, react_1.useState)(false);
    const defaultSpace = (0, react_1.useMemo)(() => {
        if (placeholder === '')
            if ((value === null || value === void 0 ? void 0 : value.toString()) === '')
                return ' py-[0.73rem]';
        return '';
    }, [value, placeholder]);
    const normalizedTitle = (0, react_1.useMemo)(() => {
        var _a;
        if (value) {
            const title = ((_a = items.find((item) => (item === null || item === void 0 ? void 0 : item.value.toString()) === value.toString())) === null || _a === void 0 ? void 0 : _a.title) || '';
            if ((title === null || title === void 0 ? void 0 : title.length) > 25)
                return (title === null || title === void 0 ? void 0 : title.substring(0, 25)) + '...';
            else if ((title === null || title === void 0 ? void 0 : title.length) > 0 && (title === null || title === void 0 ? void 0 : title.length) < 25)
                return title;
        }
        return placeholder;
    }, [value]);
    // const filteredItems = useMemo(() => {
    //   if(inputValue.length > 0) return items.filter(
    //     item => item?.title.toLowerCase().startsWith(inputValue.toLowerCase())
    //   )
    //   return items
    // }, [items, inputValue])
    return (react_1.default.createElement("div", { className: "relative min-w-[180px] font-medium" },
        react_1.default.createElement("div", { onClick: () => setOpen(!open), className: ` w-full border select-none ${error && 'border-red-700 text-red-700'} bg-white  dark:bg-black/30 dark:text-gray-300 p-[0.4rem] flex items-center justify-between rounded  
        ${!value ? 'text-gray-500' : 'text-gray-500'}
        ${open ? ` ring-1 ${error ? 'border-red-700 ring-red-700' : 'border-primary ring-primary'}` : 'border-gray-400 dark:border-gray-500'}` },
            react_1.default.createElement("span", { className: `${defaultSpace}` }, normalizedTitle),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `w-[14px] h-[14px] ${open && 'rotate-180'}` },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        react_1.default.createElement("ul", { className: `absolute z-10 text-gray-500 max-h-60 bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1 overflow-y-auto transition-all duration-200   ${
            // open ? "max-h-60  ring-accent ring-1" : "max-h-0"
            open ? 'visible ring-accent ring-1' : ' hidden'} ` },
            react_1.default.createElement("div", { className: "flex items-center px-2 sticky top-0 border-b dark:border-b-white/30 focus-within:border-primary bg-white dark:bg-gray-900  " },
                react_1.default.createElement("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "w-4 h-4  text-gray-500 dark:text-gray-400" },
                    react_1.default.createElement("path", { fillRule: "evenodd", d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z", clipRule: "evenodd" })),
                react_1.default.createElement("input", { type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value.toLowerCase()), placeholder: searchPlaceholder, className: "placeholder:text-gray-400 p-2 outline-none font-thin placeholder:italic bg-transparent" })), items === null || items === void 0 ? void 0 :
            items.map((item) => {
                var _a;
                return (react_1.default.createElement("li", { key: item === null || item === void 0 ? void 0 : item.title, className: ` text-left p-2  cursor-default text-sm hover:bg-accent hover:text-white
            ${(item === null || item === void 0 ? void 0 : item.value.toString()) === (value === null || value === void 0 ? void 0 : value.toString()) && 'bg-primary text-white'}
            ${((_a = item === null || item === void 0 ? void 0 : item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(inputValue)) ? 'block' : 'hidden'}`, onClick: () => {
                        if ((item === null || item === void 0 ? void 0 : item.value.toString()) !== value.toString()) {
                            if (onChange)
                                onChange(item === null || item === void 0 ? void 0 : item.value);
                            setOpen(false);
                            setInputValue('');
                        }
                    } }, item === null || item === void 0 ? void 0 : item.title));
            }))));
};
exports.SelectField = SelectField;
//# sourceMappingURL=SelectField.js.map