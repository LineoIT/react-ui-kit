import React, { FC } from 'react';
type BaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const TabHeader: FC<BaseProps & {
    tab: number;
    activeClass?: string;
    slaveClass?: string;
}>;
declare const TabItem: FC<BaseProps & {
    tab: number;
}>;
declare const Tab: FC<BaseProps & {
    onTabItemChange?: (tab: number) => void;
}> & {
    Header: typeof TabHeader;
    Content: typeof TabItem;
};
export { Tab };
