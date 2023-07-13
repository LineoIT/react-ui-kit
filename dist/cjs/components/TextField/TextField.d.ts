import * as React from 'react';
export type TextFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    inputClass?: string;
    error?: boolean;
    shape?: 'rounded' | 'flat';
};
export declare const TextField: React.FC<TextFieldProps>;
