import React, { ReactNode } from 'react';
export type FloatingLoaderType = HTMLDivElement & {
    setState: (state: 'loading' | 'success' | 'error' | 'none') => void;
    setContent: (content: ReactNode) => void;
};
export declare const FloatingLoader: ({ refer, className }: {
    refer?: React.Ref<any> | undefined;
    className?: string | undefined;
}) => React.JSX.Element;
