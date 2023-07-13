import React from 'react';
export const Bounce = ({ size = 20, unit = 'px', disabled = false, color = '', fill = false, strokeWidth = 2 }) => {
    const dimen = `${size}${unit}`;
    const bounceDimen = `${size / 2}${unit}`;
    return (React.createElement("div", { className: "rounded-full flex items-center justify-center", style: {
            borderColor: disabled ? 'gray' : color,
            background: fill ? color : 'transparent',
            width: dimen,
            height: dimen,
            borderWidth: `${strokeWidth}${unit}`
        } }, !disabled && !fill && (React.createElement("div", { className: "border rounded-full", style: {
            backgroundColor: disabled ? 'gray' : color,
            width: bounceDimen,
            height: bounceDimen
        } }))));
};
//# sourceMappingURL=Bounce.js.map