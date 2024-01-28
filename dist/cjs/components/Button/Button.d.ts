import React from 'react';
type Color = 'primary' | 'danger' | 'success';
type Variant = 'outlined' | 'inverted' | 'default';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: Color;
    variant?: Variant;
    isLoading?: boolean;
    loadingText?: string;
};
export declare const Button: ({ children, className, color, variant, isLoading, loadingText, ...rest }: Props) => React.JSX.Element;
export declare const TextButton: ({ children, color, isLoading, loadingText, className, ...props }: Props) => React.JSX.Element;
export declare const LinkButton: ({ children, className, color, variant, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: Color | undefined;
    variant?: Variant | undefined;
}) => React.JSX.Element;
export declare const LinkTextButton: ({ children, className, color, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: Color | undefined;
}) => React.JSX.Element;
export declare const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'inverted' | 'default' | 'contained' | 'filled';
    shape?: 'square' | 'rounded';
}>;
export {};
