import React, { useMemo } from 'react';
export const Table = (prop) => {
    return (React.createElement("table", Object.assign({}, prop, { className: `w-full  border-collapse border-spacing-0 border-inherit ${prop.className}` }), prop.children));
};
export const TableHead = (prop) => {
    return React.createElement("thead", Object.assign({}, prop), prop.children);
};
export const TableBody = (prop) => {
    return React.createElement("tbody", Object.assign({}, prop), prop.children);
};
export const TableRow = (props) => {
    const { hover = false, children, className, selected = false } = props;
    return (React.createElement("tr", Object.assign({}, props, { className: `table-row    border-black/10 dark:border-white/10  font-[400]  border-collapse border-spacing-0 border-b 
      leading-[24px] indent-0 align-middle
      ${hover ? 'hover:text-primary' : ''}
      ${selected ? 'text-primary dark:text-accent' : 'text-black dark:text-white/70'}
    ${className}` }), children));
};
export const TableCell = (prop) => {
    const { className = 'text-left' } = prop;
    const css = useMemo(() => {
        return prop.type === 'th' ? ' md:text-[14px] text-[16px] font-[400] text-black/90 dark:text-white/50' : ' md:text-[13px] text-[14px]';
    }, [prop.type]);
    return (React.createElement("td", Object.assign({}, prop, { className: ` ${css} p-2  border-collapse border-spacing-0 
    leading-[20px] indent-0 
   ${className}` }), prop.children));
};
//# sourceMappingURL=Table.js.map