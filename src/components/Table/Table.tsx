

import { FC, useMemo } from "react";

export const Table: FC<React.DetailedHTMLProps<
React.TableHTMLAttributes<HTMLTableElement>, 
HTMLTableElement> & {
 
}> = (prop) => {
  return (
   <table {...prop} className={`w-full  border-collapse border-spacing-0 border-inherit ${prop.className}`}>
   {prop.children}
    </table>
  );
};


export const TableHead: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>& {
 
}> = (prop) => {
  return (
    <thead {...prop}>{prop.children}</thead>
  );
};


export const TableBody: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>& {
 
}> = (prop) => {
  return (
    <tbody {...prop}>
      {prop.children}
    </tbody>
  );
};


export const TableRow: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & {
 hover?:boolean
}> = ({hover=false, ...prop}) => {
  return (
    <tr {...prop} className={`table-row text-gray-600 dark:text-gray-200  border-gray-200 dark:border-gray-500  font-[400]  border-collapse border-spacing-0 border-b 
      leading-[24px] indent-0 align-middle
      ${hover ? 'hover:bg-primary/10': ''}
    ${prop.className}`}>
      {prop.children}
    </tr>
  );
};

export const TableCell: FC<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>& {
 type?: "td" | "th"
}> = (prop) => {
  const css = useMemo(() => {
   return prop.type === "th" ? " md:text-[14px] text-[16px] font-[400] text-gray-800 dark:text-white": " md:text-[13px] text-[14px]"
  }, [prop.type])

  return (
    <td {...prop} className={` ${css} p-2  border-collapse border-spacing-0 
    leading-[20px] indent-0 text-left 
   ${prop.className}`}>
      {prop.children}
    </td>
  );
};
