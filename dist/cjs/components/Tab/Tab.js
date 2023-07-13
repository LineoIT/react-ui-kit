"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const react_1 = __importDefault(require("react"));
const TabContext = react_1.default.createContext({
    currentTab: 0
});
const TabHeader = (props) => {
    const { children, tab = 0, className = 'cursor-pointer py-2 px-7 first:border-l border-t last:border-r last:rounded-tr first:rounded-tl  border-primary', activeClass = 'bg-white dark:bg-gray-600 text-primary dark:text-accent border-b-0 ', slaveClass = 'text-primary dark:text-gray-400' } = props;
    const { currentTab, setCurrentTab, onTabItemChange } = react_1.default.useContext(TabContext);
    return (react_1.default.createElement("div", { className: `${className} ${tab === currentTab ? activeClass : slaveClass}`, onClick: () => {
            if (setCurrentTab)
                setCurrentTab(tab);
            if (onTabItemChange)
                onTabItemChange(tab);
        } }, children));
};
const TabItem = (props) => {
    const { children, tab = 0, className = 'py-4 bg-white border-x border-b border-primary rounded-br rounded-bl dark:bg-gray-600 w-full min-h-[100px] ' } = props;
    const { currentTab } = react_1.default.useContext(TabContext);
    if (tab === currentTab)
        return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
    return null;
};
const Tab = (props) => {
    const { children, onTabItemChange, className = 'flex flex-col' } = props;
    const [currentTab, setCurrentTab] = react_1.default.useState(0);
    return (react_1.default.createElement(TabContext.Provider, { value: { currentTab, setCurrentTab, onTabItemChange } },
        react_1.default.createElement("div", { className: className }, children)));
};
exports.Tab = Tab;
Tab.Header = TabHeader;
Tab.Content = TabItem;
//# sourceMappingURL=Tab.js.map