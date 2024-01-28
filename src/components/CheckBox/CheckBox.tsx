import React from 'react';

export const CheckBox: React.FC<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
        variant?: 'small' | 'normal';
    }
> = (prop) => {
    const { variant = 'normal', ...rest } = prop;

    return (
        <label className="cursor-pointer ">
            <input {...rest} type="checkbox" className="peer sr-only" />
            <div
                className={` border border-gray-400 dark:border-white/40 peer-checked:border-transparent bg-white dark:bg-black/20
         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow 
           peer-checked:text-primary peer-checked:ring-accent
           dark:peer-checked:text-accent
         peer-disabled:border-gray-300 dark:peer-disabled:border-gray-600
           peer-disabled:bg-transparent
         peer-disabled:text-slate-100 dark:peer-disabled:text-transparent
           peer-disabled:cursor-not-allowed ${variant == 'small' ? 'rounded-[3px]' : 'rounded'} `}
            >
                <div className="flex items-center justify-between">
                    <svg className={`${variant == 'small' ? 'w-[0.6rem] h-[0.6rem]' : 'w-[1.15rem] h-[1.15rem]'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
            </div>
        </label>
    );
};
