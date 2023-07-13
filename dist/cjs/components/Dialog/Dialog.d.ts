import * as React from 'react';
export declare const Dialog: React.FC<React.PropsWithChildren<{
    className?: string;
    title?: string;
    textOk?: string;
    textCancel?: string;
    onCancel?: () => void;
    onOk?: () => void;
}>>;
