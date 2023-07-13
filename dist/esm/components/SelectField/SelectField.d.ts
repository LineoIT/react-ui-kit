import { FC } from 'react';
export type SelectFieldOption = {
    value: string;
    title: string;
} | undefined;
export declare const SelectField: FC<{
    placeholder?: string;
    items: SelectFieldOption[];
    error?: boolean;
    defaultValue?: SelectFieldOption;
    value?: any;
    searchPlaceholder?: string;
    onChange?: (value: any) => void;
    isReset?: boolean;
}>;
