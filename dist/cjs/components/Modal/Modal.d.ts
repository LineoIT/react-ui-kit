import React from 'react';
export type DialogType = HTMLDivElement & {
    open: () => void;
    close: () => void;
};
type ModalProps = React.PropsWithChildren<{
    dismissible?: boolean;
    zIndex?: number | string;
    visible?: boolean;
    name?: string;
    setVisible?: (visible: boolean) => void;
    className?: string;
    overlayClassName?: string;
}>;
export declare const BaseModal: React.FC<ModalProps>;
export declare const Modal: React.FC<ModalProps>;
export {};
