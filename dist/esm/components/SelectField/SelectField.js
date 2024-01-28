import React, { useEffect, useMemo, useRef, useState } from 'react';
export const SelectField = ({ placeholder = '', items = [], error = false, searchPlaceholder = 'search item', onChange, value, dropClass = 'max-h-[600px]', drop = 'bottom' }) => {
    const [inputValue, setInputValue] = useState('');
    const [open, setOpen] = useState(false);
    const divRef = useRef(null);
    const defaultSpace = useMemo(() => {
        if (placeholder === '')
            if ((value === null || value === void 0 ? void 0 : value.toString()) === '')
                return ' py-[0.73rem]';
        return '';
    }, [value, placeholder]);
    const normalizedTitle = useMemo(() => {
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
    const filteredItems = useMemo(() => {
        if (inputValue.length > 0)
            return items.filter((item) => item === null || item === void 0 ? void 0 : item.title.toLowerCase().startsWith(inputValue.toLowerCase()));
        return items;
    }, [items, inputValue]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (React.createElement("div", { className: "relative min-w-[180px] font-medium", ref: divRef },
        React.createElement("div", { onClick: () => setOpen(!open), className: ` w-full border select-none ${error && 'border-red-700 text-red-700'} dark:text-gray-300 p-[0.4rem] flex items-center justify-between rounded  
        ${!value ? 'text-gray-500' : 'text-gray-500'}
        ${open ? ` dark:bg-white/10 ring-1 ${error ? 'border-red-700 ring-red-700' : 'border-primary ring-primary'}` : 'border-gray-400 dark:border-gray-500'}` },
            React.createElement("span", { className: `${defaultSpace}` }, normalizedTitle),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `w-[14px] h-[14px] ${open && 'rotate-180'}` },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        React.createElement("ul", { className: `absolute z-50 text-gray-500  bg-white dark:bg-slate-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1 overflow-y-auto overflow-x-hidden transition-all duration-200  select-none  ${
            // open ? "max-h-60  ring-accent ring-1" : "max-h-0"
            open ? 'visible' : ' hidden'} 
                    ${drop === 'top' ? 'bottom-12' : drop === 'top-right' ? 'bottom-12 right-0' : drop === 'bottom-right' ? 'right-0' : ''}  
                    ${dropClass}` },
            React.createElement("div", { className: "mx-2 my-2 flex items-center px-2 sticky top-0 border rounded dark:border-white/20 focus-within:border-primary bg-white dark:bg-gray-900  " },
                React.createElement("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "w-4 h-4  text-gray-500 dark:text-gray-400" },
                    React.createElement("path", { fillRule: "evenodd", d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z", clipRule: "evenodd" })),
                React.createElement("input", { type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value.toLowerCase()), placeholder: searchPlaceholder, className: "flex-1 placeholder:text-gray-400 px-2 py-2 outline-none placeholder:font-light   bg-transparent" })), filteredItems === null || filteredItems === void 0 ? void 0 :
            filteredItems.map((item) => {
                var _a;
                return (React.createElement("li", { key: item === null || item === void 0 ? void 0 : item.title, className: ` text-left p-2  cursor-default text-sm hover:bg-slate-50 dark:hover:bg-white/5 flex justify-between items-center
            ${(item === null || item === void 0 ? void 0 : item.value.toString()) === (value === null || value === void 0 ? void 0 : value.toString()) && ' font-bold text-primary dark:text-sky-200'}
            ${((_a = item === null || item === void 0 ? void 0 : item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(inputValue)) ? 'block' : 'hidden'} `, onClick: () => {
                        if ((item === null || item === void 0 ? void 0 : item.value.toString()) !== value.toString()) {
                            if (onChange)
                                onChange(item === null || item === void 0 ? void 0 : item.value);
                            setOpen(false);
                            setInputValue('');
                        }
                    } },
                    React.createElement("span", { className: "flex-1 truncate" }, item === null || item === void 0 ? void 0 : item.title),
                    (item === null || item === void 0 ? void 0 : item.value.toString()) === (value === null || value === void 0 ? void 0 : value.toString()) && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "w-3 h-3 font-bold " },
                        React.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", fill: "currentColor" })))));
            }))));
};
//# sourceMappingURL=SelectField.js.map