import React, { FC, ReactNode } from 'react';
type Props = {
    value: number;
    onChange?: (index: number) => void;
    variant?: 'tab' | 'switch';
};
declare const Item: (prop: React.PropsWithChildren<{
    tab: number;
    className?: string;
}>) => React.JSX.Element;
declare const Tab: FC<Props & {
    children?: ReactNode;
    className?: string;
}> & {
    Item: typeof Item;
};
export { Tab };
