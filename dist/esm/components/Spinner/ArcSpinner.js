import React from 'react';
export const ArcSpinner = ({ className = 'w-6 h-6 border-b-2 border-primary dark:border-accent ' }) => {
    return React.createElement("div", { className: `rounded-full animate-spin ${className}` });
};
export const DotSpinner = ({ className = 'w-3 h-3 bg-primary dark:bg-accent' }) => {
    return (React.createElement("div", { className: "flex items-center justify-center space-x-2 animate-pulse" },
        React.createElement("div", { className: `rounded-full ${className}` }),
        React.createElement("div", { className: `rounded-full ${className}` }),
        React.createElement("div", { className: `rounded-full ${className}` })));
};
//# sourceMappingURL=ArcSpinner.js.map