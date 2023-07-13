import * as React from 'react';
type Variant = 'inverted' | 'default' | 'outlined';
type Size = 'small' | 'medium' | 'large' | 'none';
type Shape = 'flated' | 'rounded' | 'semi-rounded';
type Color = 'primary' | 'success' | 'error' | 'secondary';
export declare const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    shape?: Shape;
    className?: string;
    color?: Color;
}>;
export declare const LinkButton: React.FC<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    variant?: Variant;
    className?: string;
    onClick?: () => void;
}>;
export declare const IconButton: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    variant?: 'inverted' | 'contained';
    shape?: 'square' | 'rounded';
}>;
export {};
