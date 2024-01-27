import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: 'primary' | 'danger' | 'success';
    variant?: 'outlined' | 'contained' | 'filled';
    isLoading?: boolean;
    loadingText?: string;
};
declare const RaisedButton: ({ children, className, color, variant, isLoading, loadingText, ...rest }: Props) => React.JSX.Element;
export declare const RaisedTextButton: ({ children, color, isLoading, loadingText, className, ...props }: Props) => React.JSX.Element;
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: 'primary' | 'danger' | 'success';
    variant?: 'outlined' | 'contained';
};
export declare const RaisedLinkButton: ({ children, className, color, variant, ...rest }: LinkProps) => React.JSX.Element;
export default RaisedButton;
