import React, { useState, memo, useMemo, useRef, useEffect, ReactNode } from 'react';

const Item = memo((prop: React.HTMLAttributes<HTMLDivElement>) => {
    const { children, ...rest } = prop;
    return (
        <div className="p-2 px-4 hover:bg-black/5 cursor-default  w-full" {...rest}>
            {children}
        </div>
    );
});

export type DropButtonProps = {
    items?: string[];
    onSelect?: (item: string) => void;
    className?: string;
    dropClassName?: string;
    searchable?: boolean;
    valueClassName?: string;
    textComponent?: ReactNode;
    initialIndex?: number;
};

export const DropdownButton = ({
    items = [],
    onSelect,
    className = 'py-2 px-4 hover:bg-black/5',
    dropClassName = ' max-h-[800px] z-50 ',
    valueClassName = '',
    searchable = false,
    textComponent,
    initialIndex = 0
}: DropButtonProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const [active, setActive] = useState(false);
    const [index, setIndex] = useState(initialIndex);
    const [search, setSearch] = useState('');

    const handleClick = (i: number) => {
        setIndex(i);
        // if (onSelect) onSelect(items[i])
        setActive(false);
    };

    const toogle = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (index >= 0 && onSelect && items.length > initialIndex) onSelect(items[index]);
    }, [index]);

    const filtered = useMemo(() => {
        if (search !== '') return items.filter((c) => c.toLocaleLowerCase().match(search.toLocaleLowerCase()));
        return items;
    }, [items, search]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="block relative" ref={divRef}>
            <label className={`cursor-pointe flex items-center flex-none ${className}`} onClick={toogle}>
                {textComponent ? textComponent : items.length && <span className={valueClassName}>{items[index]}</span>}
                <div className="w-2" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 cursor-pointer">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" fill="currentColor" />
                </svg>
            </label>
            {active && (
                <div className={`block shadow-md absolute overflow-y-auto bg-white dark:bg-slate-800 border-[1px] border-black/[3%] select-none  ${dropClassName}`}>
                    {searchable && (
                        <div className="relative mx-4 py-2">
                            <input
                                type="search"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                placeholder="rechercher"
                                className={`border dark:border-white/10 bg-transparent ring-0 outline-none h-full w-full pl-2 py-2 ${search.length === 0 ? 'pr-6' : 'pr-2'}`}
                            />
                            {search.length === 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 fill-black/50 dark:fill-white/50 absolute right-1 top-1/2  -translate-y-1/2">
                                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                </svg>
                            )}
                        </div>
                    )}
                    {filtered.map((item, i) => (
                        <Item key={i} onClick={() => handleClick(i)}>
                            <div className={`flex items-center justify-between w-full  ${index === i ? 'text-primary dark:text-sky-200' : ''}`}>
                                <div>
                                    <span className="truncate w-[90%]">{item}</span>
                                </div>
                                {index === i && (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 font-bold ">
                                            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" fill="currentColor" />
                                        </svg>
                                    </>
                                )}
                            </div>
                        </Item>
                    ))}
                </div>
            )}
        </div>
    );
};

export const Dropper = (
    prop: React.HTMLAttributes<HTMLDivElement> & {
        button: ReactNode;
        dropClassName?: string;
        active: boolean;
        setActive: React.Dispatch<React.SetStateAction<boolean>>;
    }
) => {
    const { button, dropClassName = 'block shadow absolute z-50  overflow-y-auto bg-white dark:bg-slate-900 border-[1px] border-black/[3%] select-none', children, active, setActive, ...rest } = prop;
    const divRef = useRef<HTMLDivElement>(null);

    const toogle = () => {
        setActive(!active);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="block relative" ref={divRef}>
            <div {...rest} onClick={toogle}>
                {button}
            </div>
            {active && <div className={dropClassName}>{children}</div>}
        </div>
    );
};
