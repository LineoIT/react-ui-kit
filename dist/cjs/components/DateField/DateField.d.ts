import React from 'react';
import { CalendarProps } from './Calendar';
export type DateFieldProps = CalendarProps & {
    error?: boolean;
    placeholder?: string;
    format?: string;
    shape?: 'rounded' | 'flat';
    dropTo?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};
export declare const DateField: React.FC<DateFieldProps>;
