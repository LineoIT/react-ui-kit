import * as React from 'react';
type BaseProps = {
    textOk?: string;
    textCancel?: string;
    title?: string;
    critical?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
};
export interface DialogOptions extends BaseProps {
    description?: React.ReactNode;
}
interface Props extends React.PropsWithChildren<BaseProps> {
    name: string;
    className?: string;
    onCancel?: () => void;
    onOk?: () => void;
}
export type ConfirmDialogaRef = {
    open: (option: DialogOptions) => void;
    close: () => void;
};
export declare const ConfirmDialog: React.ForwardRefExoticComponent<Props & React.RefAttributes<ConfirmDialogaRef>>;
export declare const DialogContext: React.Context<ConfirmDialogaRef | null>;
export declare const ConfirmDialogProvider: ({ children }: {
    children?: React.ReactNode;
}) => React.JSX.Element;
export {};
