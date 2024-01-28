import * as React from 'react';

export const Select: React.FC<
    React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
        inputClass?: string;
        error?: boolean;
    }
> = ({ error = false, inputClass, children, ...rest }) => {
    const color = React.useMemo(
        () =>
            error
                ? 'text-red-500 border-red-400 focus-within:text-red-700 focus-within:ring-red-500  focus-within:border-red-500'
                : 'text-gray-500 border-gray-400 focus-within:text-gray-700 focus-within:ring-primary  focus-within:border-primary ',
        [error]
    );

    return (
        <div className={` rounded px-2 border dark:border-gray-500 focus-within:ring-1 dark:text-gray-300  dark:focus-within:bg-white/10 dark:focus-within:text-gray-200   ${color}`}>
            <select {...rest} className={`w-full px-2 py-[0.6rem]  ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent dark:placeholder-gray-400` + inputClass}>
                {children}
            </select>
        </div>
    );
};
