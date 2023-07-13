import React from 'react';
export const RippleIndicator = (props) => {
    const { className = 'flex h-3 w-3', style, color, rippleClass = 'bg-sky-400' } = props;
    let _style = style || {};
    if (color)
        _style.backgroundColor = color;
    return (React.createElement("span", { className: className },
        React.createElement("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ${rippleClass}`, style: _style }),
        React.createElement("span", { className: `relative inline-flex rounded-full h-3 w-3 ${rippleClass}`, style: _style })));
};
//# sourceMappingURL=RippleIndicator.js.map