import React, { FC, useMemo } from 'react';

export const Table: FC<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {}> = (prop) => {
    return (
        <table {...prop} className={`w-full  border-collapse border-spacing-0 border-inherit ${prop.className}`}>
            {prop.children}
        </table>
    );
};

export const TableHead: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & {}> = (prop) => {
    return <thead {...prop}>{prop.children}</thead>;
};

export const TableBody: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & {}> = (prop) => {
    return <tbody {...prop}>{prop.children}</tbody>;
};

export const TableRow: FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & {
        hover?: boolean;
        selected?: boolean;
    }
> = (props) => {
    const { hover = false, children, className, selected = false } = props;
    return (
        <tr
            {...props}
            className={`table-row    border-black/10 dark:border-white/10  font-[400]  border-collapse border-spacing-0 border-b 
      leading-[24px] indent-0 align-middle
      ${hover ? 'hover:text-primary' : ''}
      ${selected ? 'text-primary dark:text-accent' : 'text-black dark:text-white/70'}
    ${className}`}
        >
            {children}
        </tr>
    );
};

export const TableCell: FC<
    React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> & {
        type?: 'td' | 'th';
    }
> = (prop) => {
    const { className = 'text-left' } = prop;
    const css = useMemo(() => {
        return prop.type === 'th' ? ' md:text-[14px] text-[16px] font-[400] text-black/90 dark:text-white/50' : ' md:text-[13px] text-[14px] text-black/60 dark:text-white/50';
    }, [prop.type]);

    return (
        <td
            {...prop}
            className={` ${css} p-2  border-collapse border-spacing-0 
    leading-[20px] indent-0 
   ${className}`}
        >
            {prop.children}
        </td>
    );
};
