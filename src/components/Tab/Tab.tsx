import React, { FC } from 'react';

const TabContext = React.createContext<{
    currentTab: number;
    setCurrentTab?: (tab: number) => void;
    onTabItemChange?: (tab: number) => void;
}>({
    currentTab: 0
});

type BaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const TabHeader: FC<
    BaseProps & {
        tab: number;
        activeClass?: string;
        slaveClass?: string;
    }
> = (props) => {
    const {
        children,
        tab = 0,
        className = 'cursor-pointer py-2 px-7 first:border-l border-t last:border-r last:rounded-tr first:rounded-tl  border-primary',
        activeClass = 'bg-white dark:bg-gray-600 text-primary dark:text-accent border-b-0 ',
        slaveClass = 'text-primary dark:text-gray-400'
    } = props;

    const { currentTab, setCurrentTab, onTabItemChange } = React.useContext(TabContext);
    return (
        <div
            className={`${className} ${tab === currentTab ? activeClass : slaveClass}`}
            onClick={() => {
                if (setCurrentTab) setCurrentTab(tab);
                if (onTabItemChange) onTabItemChange(tab);
            }}
        >
            {children}
        </div>
    );
};

const TabItem: FC<
    BaseProps & {
        tab: number;
    }
> = (props) => {
    const { children, tab = 0, className = 'py-4 bg-white border-x border-b border-primary rounded-br rounded-bl dark:bg-gray-600 w-full min-h-[100px] ' } = props;
    const { currentTab } = React.useContext(TabContext);
    if (tab === currentTab)
        return (
            <div {...props} className={className}>
                {children}
            </div>
        );
    return null;
};

const Tab: FC<
    BaseProps & {
        onTabItemChange?: (tab: number) => void;
    }
> & {
    Header: typeof TabHeader;
    Content: typeof TabItem;
} = (props) => {
    const { children, onTabItemChange, className = 'flex flex-col' } = props;
    const [currentTab, setCurrentTab] = React.useState<number>(0);

    return (
        <TabContext.Provider value={{ currentTab, setCurrentTab, onTabItemChange }}>
            <div className={className}>{children}</div>
        </TabContext.Provider>
    );
};

Tab.Header = TabHeader;
Tab.Content = TabItem;

export { Tab };
