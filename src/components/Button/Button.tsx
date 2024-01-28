import React from 'react';
import { Spinner } from '../Spinner';

type Color = 'primary' | 'danger' | 'success';
type Variant = 'outlined' | 'inverted' | 'default';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: Color;
    variant?: Variant;
    isLoading?: boolean;
    loadingText?: string;
};

const _colors = (color?: Color, variant?: Variant) => {
    const _class =
        color === 'danger'
            ? `${
                  variant === 'default'
                      ? 'text-white bg-rose-500 hover:bg-rose-600 dark:text-rose-300 dark:bg-rose-700 dark:hover:bg-rose-800'
                      : 'text-rose-600 bg-rose-50 hover:bg-rose-100 dark:text-rose-300 dark:bg-slate-700 dark:hover:bg-black/20'
              }
  ${variant === 'outlined' ? ' border-rose-400 dark:border-rose-300' : 'border-transparent'}`
            : color === 'success'
              ? `${
                    variant === 'default'
                        ? 'text-white bg-green-500 hover:bg-green-600 dark:text-green-300 dark:bg-green-700 dark:hover:bg-green-800'
                        : 'text-green-600 bg-green-50 hover:bg-green-100 dark:text-green-300 dark:bg-slate-700 dark:hover:bg-black/20'
                } 
  ${variant === 'outlined' ? ' border-green-500 dark:border-green-400' : 'border-transparent'}`
              : `${
                    variant === 'default'
                        ? 'text-white bg-primary hover:bg-primary-dark dark:text-sky-300 dark:bg-sky-700 dark:hover:bg-sky-800'
                        : 'text-primary bg-sky-100/70 hover:bg-sky-100 dark:text-sky-300 dark:bg-slate-700 dark:hover:bg-black/20 '
                }
  ${variant === 'outlined' ? ' border-primary dark:border-sky-400' : 'border-transparent'}`;

    return _class;
};

const _colorsText = (color?: Color) => {
    const _class =
        color === 'danger'
            ? 'text-rose-600 dark:text-red-400 hover:bg-rose-50 hover:dark:bg-white/5 hover:dark:text-red-300'
            : color === 'success'
              ? 'text-green-600 dark:text-green-400 hover:bg-green-50 hover:dark:bg-white/5 hover:dark:text-green-300'
              : 'text-primary hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-600';
    return _class;
};

export const Button = ({ children, className, color = 'primary', variant = 'default', isLoading = false, loadingText = '', ...rest }: Props) => {
    const _class = _colors(color, variant);

    return (
        <button {...rest} className={`flex items-center justify-center cursor-pointer transition-all px-4 py-2 rounded border ${_class} ${className}`}>
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

export const TextButton = ({ children, color = 'primary', isLoading = false, loadingText = 'Wait', className, ...props }: Props) => {
    const _class = _colorsText(color);
    return (
        <button className={`flex items-center  justify-center py-1 px-3 transition-all ${_class} ${className}`} {...props}>
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

export const LinkButton = ({
    children,
    className,
    color = 'primary',
    variant = 'default',
    ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: Color;
    variant?: Variant;
}) => {
    const _class = _colors(color, variant);

    return (
        <a {...rest} className={`flex items-center justify-center cursor-pointer  transition-all px-4 py-2 rounded border ${_class} ${className}`}>
            {children}
        </a>
    );
};

export const LinkTextButton = ({
    children,
    className,
    color = 'primary',
    ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: Color;
}) => {
    const _class = _colorsText(color);
    return (
        <a {...rest} className={`flex items-center justify-center cursor-pointer  transition-all px-3 py-1 rounded  ${_class} ${className}`}>
            {children}
        </a>
    );
};

export const IconButton: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: 'inverted' | 'default' | 'contained' | 'filled';
        shape?: 'square' | 'rounded';
    }
> = (props) => {
    const { className = 'w-10 h-10', children, variant = 'default', shape = 'rounded' } = props;

    let _className = `ring-0 outline-none flex items-center justify-center 
    cursor-pointer transition-all duration-300 ease-in-out 
    ${shape === 'rounded' ? 'rounded-full' : 'rounded'}
    ${
        variant === 'contained'
            ? 'bg-white hover:text-primary text-black  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
            : variant === 'inverted'
              ? 'bg-black/10 hover:bg-black/20 text-black  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
              : variant === 'filled'
                ? 'bg-white/10 hover:bg-white/20 text-white '
                : 'text-black dark:text-white hover:bg-black/10 hover:dark:bg-white/10 '
    }`;

    if (className) _className = _className + ' ' + className;

    return (
        <button {...props} className={_className}>
            {children}
        </button>
    );
};
