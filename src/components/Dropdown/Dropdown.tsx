import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

const Context = createContext({ open: false, setOpen: (v: boolean) => {} });

type ButtonProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Toggle(props: ButtonProps) {
    const { open, setOpen } = useContext(Context);

    return (
        <div {...props} onClick={() => setOpen(!open)}>
            {props.children}
        </div>
    );
}

function Wrapper(
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        activeClass?: string;
        desactiveClass?: string;
    }
) {
    const { open } = useContext(Context);
    const {
        activeClass = 'max-h-60  ring-accent ring-1',
        desactiveClass = 'max-h-0',
        className = 'text-gray-500  bg-white dark:bg-gray-700 dark:text-gray-300 shadow drop-shadow-2xl  rounded  mt-1',
        ...rest
    } = props;

    return (
        <div {...rest} className={`absolute overflow-y-auto transition-all duration-200 ${className} ${open ? activeClass : desactiveClass} `}>
            {props.children}
        </div>
    );
}

export function DropdownItem(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    const { setOpen } = useContext(Context);
    return (
        <div
            {...props}
            onClick={(e) => {
                setOpen(false);
                if (props.onClick) props.onClick(e);
            }}
        >
            {props.children}
        </div>
    );
}

const Dropdown: FC<PropsWithChildren> & {
    Toggle: typeof Toggle;
    Wrapper: typeof Wrapper;
    Item: typeof DropdownItem;
} = (props) => {
    const [open, setOpen] = useState(true);

    return (
        <Context.Provider value={{ open, setOpen }}>
            <div className="relative">{props.children}</div>
        </Context.Provider>
    );
};

Dropdown.Toggle = Toggle;
Dropdown.Item = DropdownItem;
Dropdown.Wrapper = Wrapper;

export { Dropdown };
