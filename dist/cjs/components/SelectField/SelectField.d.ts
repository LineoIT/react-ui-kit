import { FC } from 'react';
export type SelectFieldOption = {
    value: string;
    title: string;
} | undefined;
type SelectFieldProp = {
    placeholder?: string;
    items: SelectFieldOption[];
    error?: boolean;
    defaultValue?: SelectFieldOption;
    value?: any;
    searchPlaceholder?: string;
    onChange?: (value: any) => void;
    isReset?: boolean;
    dropClass?: string;
    drop?: 'top' | 'bottom' | 'top-right' | 'bottom-right';
};
export declare const SelectField: FC<SelectFieldProp>;
export {};
