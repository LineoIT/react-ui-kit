import React, { ReactNode, useState } from 'react';
import { Spinner } from '../Spinner';
import { XMarkIcon } from '../Icons';

export type FloatingLoaderType = HTMLDivElement & {
    setState: (state: 'loading' | 'success' | 'error' | 'none') => void;
    setContent: (content: ReactNode) => void;
};

export const FloatingLoader = ({ refer, className = 'bottom-[10px] right-[10px]' }: { refer?: React.Ref<any>; className?: string }) => {
    const modal = React.useRef<FloatingLoaderType>() as React.MutableRefObject<FloatingLoaderType>;
    const [_state, setState] = useState<'loading' | 'success' | 'error' | 'none'>('none');
    const [_content, setContent] = useState<ReactNode>(<div>Loading</div>);

    React.useImperativeHandle(refer, () => ({
        setState(state: 'loading' | 'success' | 'error' | 'none') {
            setState(state);
            if (state === 'success') {
                const t = setTimeout(() => {
                    setState('none');
                    clearTimeout(t);
                }, 3000);
            }
        },
        setContent(content: ReactNode) {
            setContent(content);
        }
    }));

    return (
        <div
            ref={modal}
            className={`absolute  flex items-center shadow-lg drop-shadow-2xl transition-all ease-out duration-700 p-3 bg-white ${className} 
    ${_state !== 'none' ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className={`${_state === 'error' && 'text-rose-500'}`}>{_content}</div>
            <div className="w-[10px]" />
            {_state == 'loading' && <Spinner size="20px" />}
            {_state == 'error' && (
                <div className="w-[20px] h-[20px] rounded-full bg-rose-500 text-white flex items-center justify-center">
                    <XMarkIcon />
                </div>
            )}

            {_state == 'success' && (
                <div className="w-[20px] h-[20px] rounded-full bg-green-500 text-white flex items-center justify-center">
                    <svg className="w-[1.0rem] h-[1.0rem]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
            )}
        </div>
    );
};
