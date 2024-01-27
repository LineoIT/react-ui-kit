import * as React from 'react';
import { Modal } from '../Modal';


type BaseProps = {
    textOk?: string;
    textCancel?: string;
    title?: string;
    critical?: boolean;
    onConfirm?: () => void
    onCancel?: () => void
}

export interface DialogOptions extends BaseProps {
    description?: React.ReactNode
}

interface Props extends React.PropsWithChildren<BaseProps> {
    name: string
    className?: string;
    onCancel?: () => void;
    onOk?: () => void;
}

export type ConfirmDialogaRef = {
    open: (option: DialogOptions) => void
    close: () => void
}

export const ConfirmDialog = React.forwardRef<ConfirmDialogaRef, Props>((prop: Props, ref) => {

    const [isOpen, open] = React.useState(false);
    const [options, setOptions] = React.useState<DialogOptions>({
        critical: false
    });

    React.useImperativeHandle(ref, () => ({
        open: (opt: DialogOptions) => {
            setOptions(opt)
            open(true)
        },
        close: () => {
            open(false)
        }
    }))

    return (
        <Modal
            visible={isOpen}
            setVisible={open}
            dismissible={false}
            name={prop.name}
            overlayClassName='dark:bg-slate-500/80'
        >
            <div className={`w-96 ` + prop.className}>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                    <div className="p-6 space-y-2">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            {options?.title ? options?.title : prop.title}
                        </h2>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {options?.description ? options?.description : prop.children}
                        </div>
                    </div>
                    <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-end divide-x-2 divide-gray-400 dark:divide-gray-500 divide-dashed">
                        <div className="pr-4">
                            <button
                                onClick={() => {
                                    open(false)
                                    if (options.onCancel) options.onCancel()
                                    else if (prop.onCancel) prop.onCancel()
                                }}
                                className="text-sm font-medium text-primary dark:text-accent hover:text-primary-dark dark:hover:text-primary/90 focus:outline-none focus:shadow-sm"
                            >
                                {options?.textCancel ? options?.textCancel : prop.textCancel}
                            </button>
                        </div>
                        <div className="pl-4">
                            <button
                                onClick={() => {
                                    open(false)
                                    if (options.onConfirm) options.onConfirm()
                                    else if (prop.onOk) prop.onOk()
                                }}
                                className={`px-4 py-1 rounded-full text-sm font-medium  transition-all
                            ${options.critical ?
                                        'text-rose-400 hover:bg-rose-50 bg-white border border-rose-200 dark:border-rose-300 dark:text-rose-300 dark:bg-slate-600 dark:hover:bg-rose-400 dark:hover:text-rose-50' :
                                        'text-gray-200 dark:text-sky-100 bg-primary dark:bg-accent hover:bg-primary-dark/80 dark:hover:bg-primary/50 dark:hover:text-gray-200'
                                    }
                            `}
                            >
                                {options?.textOk ? options?.textOk : prop.textOk}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
});


export const DialogContext = React.createContext<ConfirmDialogaRef | null>(null)
export const ConfirmDialogProvider = ({ children }: { children?: React.ReactNode }) => {
    const confirmDialog = React.useRef<ConfirmDialogaRef>(null)
    return <DialogContext.Provider value={confirmDialog.current}>
        {children}
        <ConfirmDialog ref={confirmDialog} name="confirm-dialog" />
    </DialogContext.Provider>
}