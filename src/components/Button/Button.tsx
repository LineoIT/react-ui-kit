import * as React from 'react';

type Variant = 'inverted' | 'default' | 'outlined';
type Size = 'small' | 'medium' | 'large' | 'none';
type Shape = 'flated' | 'rounded' | 'semi-rounded';
type Color = 'primary' | 'success' | 'error' | 'secondary';

export const Button: React.FC<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        variant?: Variant;
        size?: Size;
        shape?: Shape;
        className?: string;
        color?: Color;
    }
> = (props) => {
    const { variant = 'default', children, size = 'medium', shape = 'rounded', className } = props;

    const borderRadius = React.useMemo(() => {
        if (shape === 'semi-rounded') return 'rounded';
        if (shape === 'rounded') return 'rounded-full';
        return '';
    }, [shape]);

    let _className = `px-4 ${size === 'small' ? 'py-1' : size === 'large' ? 'py-3' : size === 'none' ? '' : 'py-2'}
 ${borderRadius} text-sm font-medium transition-all ease-in-out
 ${
     variant === 'outlined'
         ? 'border border-primary text-primary dark:text-gray-200  bg-transparent hover:bg-primary disabled:border-gray-200 disabled:text-gray-300 hover:text-white disabled:hover:bg-transparent dark:hover:bg-black/10 dark:hover:text-gray-200 dark:disabled:border-gray-500 dark:disabled:text-gray-400 dark:disabled:hover:bg-transparent'
         : ''
 }
 ${
     variant === 'default'
         ? ` text-white dark:text-gray-200 dark:hover:text-gray-200  dark:disabled:text-gray-400
 bg-primary  dark:bg-primary disabled:bg-gray-200 hover:bg-primary-dark  dark:disabled:bg-gray-500   `
         : ''
 }`;

    if (props.className) _className = _className + ' ' + className;

    return (
        <>
            <button {...props} className={_className}>
                {children}
            </button>
        </>
    );
};

export const LinkButton: React.FC<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
        variant?: Variant;
        className?: string;
        onClick?: () => void;
    }
> = ({ variant = 'default', children, className, ...rest }) => {
    let _className = variant === 'inverted' ? 'text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover  ' : 'text-skin-base bg-skin-button-muted bg-opacity-60 hover:bg-opacity-70';
    if (className) _className = _className + ' ' + className;

    return (
        <>
            <a
                {...rest}
                className={
                    `flex items-center justify-center px-4 py-3 border border-transparent 
            text-base font-medium rounded-md shadow-sm sm:px-8 ` + _className
                }
            >
                {children}
            </a>
        </>
    );
};

export const IconButton: React.FC<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        variant?: 'inverted' | 'contained';
        shape?: 'square' | 'rounded';
    }
> = (props) => {
    const { className = 'w-10 h-10', children, variant = 'inverted', shape = 'rounded' } = props;

    let _className = `ring-0 outline-none flex items-center justify-center 
    cursor-pointer transition-all duration-300 ease-in-out 
    ${shape === 'rounded' ? 'rounded-full' : 'rounded'}
    
  ${
      variant === 'inverted'
          ? 'text-white bg-white/10 hover:bg-white/20 '
          : 'bg-white  text-gray-600 dark:text-white hover:text-primary dark:bg-white/30 hover:bg-white/60  dark:hover:bg-white/10 dark:hover:text-white'
  }`;
    if (className) _className = _className + ' ' + className;

    return (
        <button {...props} className={_className}>
            {children}
        </button>
    );
};
