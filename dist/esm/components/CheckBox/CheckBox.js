import React from 'react';
export const CheckBox = (prop) => {
    return (React.createElement("label", { className: "cursor-pointer " },
        React.createElement("input", Object.assign({}, prop, { type: "checkbox", className: "peer sr-only" })),
        React.createElement("div", { className: "rounded border border-gray-400 dark:border-white/40 peer-checked:border-transparent bg-white dark:bg-black/20\n         text-white dark:text-transparent ring-2 ring-transparent transition-all hover:shadow \n      peer-checked:text-primary peer-checked:ring-accent\n       dark:peer-checked:text-accent\n       peer-disabled:border-gray-300 dark:peer-disabled:border-gray-600\n       peer-disabled:bg-transparent  \n       peer-disabled:text-slate-100 dark:peer-disabled:text-transparent\n       peer-disabled:cursor-not-allowed" },
            React.createElement("div", { className: "flex items-center justify-between " },
                React.createElement("svg", { className: "w-[1.15rem] h-[1.15rem]", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))))));
};
//# sourceMappingURL=CheckBox.js.map