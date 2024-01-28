import React, { ReactNode } from 'react';
export type DropButtonProps = {
    items?: string[];
    onSelect?: (item: string) => void;
    className?: string;
    dropClassName?: string;
    searchable?: boolean;
    valueClassName?: string;
    textComponent?: ReactNode;
    initialIndex?: number;
};
export declare const DropdownButton: ({ items, onSelect, className, dropClassName, valueClassName, searchable, textComponent, initialIndex }: DropButtonProps) => React.JSX.Element;
export declare const Dropper: (prop: React.HTMLAttributes<HTMLDivElement> & {
    button: ReactNode;
    dropClassName?: string;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => React.JSX.Element;
