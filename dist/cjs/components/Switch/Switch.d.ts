import * as React from 'react';
export declare const Switch: React.FC<{
    onChange?: (value: boolean) => void;
    value?: boolean;
    size?: 'small' | 'medium' | 'large';
}>;
export declare const Switch2: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    className?: string;
}>;
