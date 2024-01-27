import React from 'react';
import { Spinner } from '../Spinner';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: 'primary' | 'danger' | 'success';
    variant?: 'outlined' | 'contained' | 'filled';
    isLoading?: boolean;
    loadingText?: string;
};

const RaisedButton = ({ children, className, color = 'primary', variant = 'contained', isLoading = false, loadingText = '', ...rest }: Props) => {
    const _class =
        color === 'danger'
            ? `${variant === 'filled'
                ? 'text-white bg-rose-500 hover:bg-rose-600 dark:text-rose-300 dark:bg-rose-700 dark:hover:bg-rose-800'
                : 'text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-300 dark:bg-slate-700 dark:hover:bg-black/20'
            }
  ${variant === 'outlined' ? ' border-rose-400 dark:border-rose-300' : 'border-transparent'}`
            : color === 'success'
                ? `${variant === 'filled'
                    ? 'text-white bg-green-500 hover:bg-green-600 dark:text-green-300 dark:bg-green-700 dark:hover:bg-green-800'
                    : 'text-green-600 bg-green-50 hover:bg-green-100 dark:text-green-300 dark:bg-slate-700 dark:hover:bg-black/20'
                } 
  ${variant === 'outlined' ? ' border-green-500 dark:border-green-400' : 'border-transparent'}`
                : `${variant === 'filled'
                    ? 'text-white bg-primary hover:bg-primary-dark dark:text-sky-300 dark:bg-sky-700 dark:hover:bg-sky-800'
                    : 'text-primary bg-sky-50 hover:bg-sky-100 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-black/20 '
                }
  ${variant === 'outlined' ? ' border-primary dark:border-sky-400' : 'border-transparent'}`;

    return (
        <button {...rest} className={`flex items-center cursor-pointer transition-all px-4 py-2 rounded border ${_class} ${className}`}>
            {isLoading ? (
                <>
                    <span className="pr-1">{loadingText}</span>
                    <Spinner />
                </>
            ) : (
                children
            )}
        </button>
    );
};

export const RaisedTextButton = ({ children, color = 'primary', isLoading = false, loadingText = 'Wait', className, ...props }: Props) => {
    const _class =
        color === 'danger'
            ? 'text-rose-600 hover:bg-rose-50 hover:dark:bg-white/5 hover:dark:text-red-500'
            : color === 'success'
                ? 'text-green-600 hover:bg-green-50'
                : 'text-primary hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-600';
    return (
        <button className={`flex items-center py-1 px-3 transition-all border ${_class} ${className}`} {...props}>
            {isLoading ? (
                <>
                    <span className="pr-1">{loadingText}</span>
                    <Spinner />
                </>
            ) : (
                children
            )}
        </button>
    );
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: 'primary' | 'danger' | 'success';
    variant?: 'outlined' | 'contained';
};

export const RaisedLinkButton = ({ children, className, color = 'primary', variant = 'contained', ...rest }: LinkProps) => {
    const _class =
        color === 'danger'
            ? `text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-300 dark:bg-slate-700 dark:hover:bg-black/20 ${variant === 'outlined' && 'border border-rose-400 dark:border-rose-300'}`
            : color === 'success'
                ? `text-green-600 bg-green-50 hover:bg-green-100  dark:text-green-300 dark:bg-slate-700 dark:hover:bg-black/20 ${variant === 'outlined' && 'border border-green-500 dark:border-green-400'}`
                : `text-primary bg-sky-50 hover:bg-sky-100 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-black/20 ${variant === 'outlined' && 'border border-primary dark:border-sky-400'}`;
    return (
        <a {...rest} className={`flex items-center cursor-pointer  transition-all px-4 py-2 rounded ${_class} ${className}`}>
            {children}
        </a>
    );
};


export function RaiseIconButton(prop: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    const { children, className, ...props } = prop
    return <button className={`hover:bg-white/10 rounded-full outline-none  ${className}`} {...props}>
        {children}
    </button>
}

export default RaisedButton;
