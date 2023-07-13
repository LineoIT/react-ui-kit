import React, { FC } from 'react';
export declare const Table: FC<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {}>;
export declare const TableHead: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & {}>;
export declare const TableBody: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> & {}>;
export declare const TableRow: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> & {
    hover?: boolean;
    selected?: boolean;
}>;
export declare const TableCell: FC<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> & {
    type?: 'td' | 'th';
}>;
