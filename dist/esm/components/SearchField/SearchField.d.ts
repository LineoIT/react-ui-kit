import * as React from 'react';
type Prop = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    variant?: 'default' | 'inverted';
};
export declare const SearchField: React.FC<Prop>;
export {};
