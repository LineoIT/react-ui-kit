import React, { PropsWithChildren } from 'react';
export type SelectLabelOption = {
    value: string;
    name: string;
} | undefined | string;
export declare function SelectLabelField(props: PropsWithChildren & {
    placeholder?: string;
    items: SelectLabelOption[];
    error?: boolean;
    value?: SelectLabelOption;
    setValue?: (value: SelectLabelOption) => void;
}): React.JSX.Element;
