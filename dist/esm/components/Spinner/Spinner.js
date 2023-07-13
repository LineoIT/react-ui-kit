import React from 'react';
export const Spinner = (props) => {
    const { variant = 'default', stroke = '2px', size = '1.5rem' } = props;
    let _style = {};
    _style.borderWidth = stroke;
    _style.height = size;
    _style.width = size;
    if (props.style)
        _style = Object.assign(Object.assign({}, _style), props.style);
    let borderStyle = variant === 'inverted' ? `border-white dark:border-gray-400` : `border-primary dark:border-accent`;
    return (React.createElement("div", Object.assign({}, props, { className: `
    border-solid rounded-full animate-spin 
    border-t-transparent dark:border-t-transparent 
    ${borderStyle}`, style: _style })));
};
//# sourceMappingURL=Spinner.js.map