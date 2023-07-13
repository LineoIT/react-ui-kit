import * as React from 'react';
import { ToastOptions, Variant } from './helper';
export type Toastable = HTMLDivElement & {
    hide: () => void;
    notify: (m: string, variant?: Variant) => void;
};
export declare const ToastContainer: React.FC<{
    refer?: React.Ref<any>;
}>;
export declare function useToast(options?: ToastOptions): {
    notify: (text: string, variant?: Variant, opts?: ToastOptions) => void;
};
export declare const Toast: React.FC<React.PropsWithChildren<{
    closable?: boolean;
    refer?: React.Ref<any>;
    interval?: number;
}>>;
