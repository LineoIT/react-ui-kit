import React from 'react';
type IProp = {
    disabled?: boolean;
    active?: boolean;
    last?: boolean;
    strokeWidth?: number;
};
export declare function TimelineTracker(props: IProp): React.JSX.Element;
export declare function Timeline(props: IProp & {
    strokeWidth?: number;
    strokeHeight?: number;
    orientation?: 'vertical' | 'horizontal';
    last?: boolean;
}): React.JSX.Element;
export {};
