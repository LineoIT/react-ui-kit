import React, { FC } from 'react';

export const InputTextError: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = (prop) => {
    return <small className="text-[12px] mb-2 font-light text-rose-400 dark:font-normal dark:text-red-300 italic">{prop.children}</small>;
};
