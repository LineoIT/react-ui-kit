import React from 'react';
import { Variant } from './helper';
export type NotifyOptions = {
    message: string;
    timeout?: number;
    variant?: Variant;
    timer?: number;
    id?: number;
};
export declare function NotifyProvider({ children }: React.PropsWithChildren): React.JSX.Element;
export declare function NotifyContainer(): React.JSX.Element;
export declare function useNotify(): {
    push: (toast: NotifyOptions) => void;
};
export declare function Notify(props: NotifyOptions & {
    onRemove?: (id: number, timer: number) => void;
}): React.JSX.Element;
