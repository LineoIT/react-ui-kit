import React from 'react';
const TabContext = React.createContext({
    currentTab: 0
});
const TabHeader = (props) => {
    const { children, tab = 0, className = 'cursor-pointer py-2 px-7 first:border-l border-t last:border-r last:rounded-tr first:rounded-tl  border-primary', activeClass = 'bg-white dark:bg-gray-600 text-primary dark:text-accent border-b-0 ', slaveClass = 'text-primary dark:text-gray-400' } = props;
    const { currentTab, setCurrentTab, onTabItemChange } = React.useContext(TabContext);
    return (React.createElement("div", { className: `${className} ${tab === currentTab ? activeClass : slaveClass}`, onClick: () => {
            if (setCurrentTab)
                setCurrentTab(tab);
            if (onTabItemChange)
                onTabItemChange(tab);
        } }, children));
};
const TabItem = (props) => {
    const { children, tab = 0, className = 'py-4 bg-white border-x border-b border-primary rounded-br rounded-bl dark:bg-gray-600 w-full min-h-[100px] ' } = props;
    const { currentTab } = React.useContext(TabContext);
    if (tab === currentTab)
        return (React.createElement("div", Object.assign({}, props, { className: className }), children));
    return null;
};
const Tab = (props) => {
    const { children, onTabItemChange, className = 'flex flex-col' } = props;
    const [currentTab, setCurrentTab] = React.useState(0);
    return (React.createElement(TabContext.Provider, { value: { currentTab, setCurrentTab, onTabItemChange } },
        React.createElement("div", { className: className }, children)));
};
Tab.Header = TabHeader;
Tab.Content = TabItem;
export { Tab };
//# sourceMappingURL=Tab.js.map