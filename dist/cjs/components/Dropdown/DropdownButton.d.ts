import React from 'react';
export type DropButtonProps = {
    items?: string[];
    onSelect?: (item: string) => void;
    className?: string;
    dropClassName?: string;
    searchable?: boolean;
};
export declare const DropButton: ({ items, onSelect, className, dropClassName, searchable }: DropButtonProps) => React.JSX.Element;
