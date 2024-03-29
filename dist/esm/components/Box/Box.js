import React from 'react';
export const Box = (prop) => {
    return (React.createElement("div", Object.assign({}, prop, { style: {
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
            display: 'flex',
            flexDirection: 'column'
        } }),
        ' ',
        prop.children));
};
//# sourceMappingURL=Box.js.map