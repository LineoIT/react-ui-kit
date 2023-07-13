import * as React from 'react';

export const Switch: React.FC<{
    onChange?: (value: boolean) => void;
    value?: boolean;
    size?: 'small' | 'medium' | 'large';
}> = (prop) => {
    const skin = React.useMemo(() => {
        return prop.size === 'small' ? 'w-11 h-4 py-1 pr-1' : prop.size === 'medium' ? 'w-12 h-6 p-1' : 'w-14 h-8 p-1';
    }, [prop.size]);

    const indicator = React.useMemo(() => {
        return prop.size === 'small' ? 'w-5 h-5' : prop.size === 'medium' ? 'w-4 h-4' : 'w-6 h-6';
    }, [prop.size]);

    const activeIndicator = React.useMemo(() => {
        return prop.size === 'small' ? 'translate-x-6' : prop.size === 'medium' ? 'translate-x-6' : 'translate-x-6';
    }, [prop.size]);

    return (
        <div
            className={`flex items-center  rounded-full ${skin} duration-300 cursor-pointer ${prop.value ? 'bg-primary ' : 'bg-gray-200 dark:bg-white/20'}`}
            onClick={() => {
                if (prop.onChange) prop.onChange(!prop.value);
            }}
        >
            <div className={`bg-white  dark:bg-gray-200 ${indicator} rounded-full shadow-md transform duration-300 ${prop.value ? activeIndicator : ''}`}></div>
        </div>
    );
};

export const Switch2: React.FC<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
        className?: string;
    }
> = (prop) => {
    return (
        <label htmlFor={prop.id} className={`bg-gray-200 dark:bg-white/20  relative w-14 h-8 rounded-full`}>
            <input {...prop} type="checkbox" className="sr-only peer" />
            <span
                className="w-6 h-6 bg-white  dark:bg-gray-200 absolute shadow-md rounded-full left-1 top-1 peer-checked:bg-primary-dark
     peer-checked:left-7 transition-all duration-300"
            />
        </label>
    );
};
