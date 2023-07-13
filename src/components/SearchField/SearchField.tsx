import * as React from 'react';

type Prop = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    // loading?: boolean
    variant?: 'default' | 'inverted';
};

export const SearchField: React.FC<Prop> = (props) => {
    const { variant = 'default', ...rest } = props;
    return (
        <label
            className={`flex items-center rounded ${variant === 'inverted' ? 'bg-gray-50' : 'bg-white'}
    text-gray-400 dark:text-gray-200 border dark:border-gray-500 border-gray-400 
     focus-within:text-gray-700 focus-within:ring-primary focus-within:ring-1 focus-within:border-primary
      dark:bg-black dark:bg-opacity-30 dark:focus-within:bg-opacity-10
     dark:focus-within:text-gray-200 dark:placeholder-gray-500  dark:placeholder-opacity-100`}
        >
            <svg viewBox="0 0 20 20" fill="currentColor" className="ml-2 w-4 h-4">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input {...rest} className="px-2 py-2 flex-1 ring-0 focus:outline-none bg-transparent focus:ring-0 dark:bg-transparent" type="search" />
        </label>
    );
};
