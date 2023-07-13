import React, { FC } from 'react';

export const ArcSpinner: FC<{
    className?: string;
}> = ({ className = 'w-6 h-6 border-b-2 border-primary dark:border-accent ' }) => {
    return <div className={`rounded-full animate-spin ${className}`}></div>;
};
export const DotSpinner: FC<{
    className?: string;
}> = ({ className = 'w-3 h-3 bg-primary dark:bg-accent' }) => {
    return (
        <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className={`rounded-full ${className}`}></div>
            <div className={`rounded-full ${className}`}></div>
            <div className={`rounded-full ${className}`}></div>
        </div>
    );
};
