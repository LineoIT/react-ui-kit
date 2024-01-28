import React, { ReactNode } from 'react';
export interface CalendarProps {
    locale?: 'fr' | 'en';
    className?: string;
    value?: Date;
    onChange: (value: Date) => void;
}
export declare const IconChevron: (prop: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
export declare const Calendar: React.FC<CalendarProps & {
    children?: ReactNode;
}>;
