import React from 'react';

export function Drawer({
    open,
    position = 'left',
    overlay = false,
    children,
    className = ''
}: React.PropsWithChildren<{ open: boolean; position?: 'left' | 'right'; overlay?: boolean; className?: string }>) {
    const _subClass = position === 'right' ? 'right-0' : 'left-0';
    const _unactiveSubClass = position === 'right' ? 'translate-x-full' : '-translate-x-full';
    const _activeSubClass = position === 'right' ? 'translate-x-0' : 'translate-x-0';

    return (
        <>
            {open && overlay && <div className={`absolute top-0 bottom-0 right-0 left-0 bg-black/50   ${open ? 'visible' : ' invisible'}`} />}

            <div
                className={`top-0  absolute h-full  shadow-2xl ease-in-out duration-300  ${_subClass}
            ${open ? _activeSubClass : _unactiveSubClass}   ${className}`}
            >
                <div className=" h-full w-full"> {children}</div>
            </div>
        </>
    );
}
