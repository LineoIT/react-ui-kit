import React from 'react';
export function Drawer({ open, position = 'left', overlay = false, children }) {
    const _subClass = position === 'right' ? 'right-0' : 'left-0';
    const _unactiveSubClass = position === 'right' ? 'translate-x-full' : '-translate-x-full';
    const _activeSubClass = position === 'right' ? 'translate-x-0' : 'translate-x-0';
    return (React.createElement(React.Fragment, null,
        open && overlay && React.createElement("div", { className: `absolute top-0 bottom-0 right-0 left-0 bg-black/50   ${open ? 'visible' : ' invisible'}` }),
        React.createElement("div", { className: `top-0  absolute h-full z-40  shadow-2xl ease-in-out duration-300  ${_subClass}
            ${open ? _activeSubClass : _unactiveSubClass}` },
            React.createElement("div", { className: " h-full w-full" },
                " ",
                children))));
}
//# sourceMappingURL=index.js.map