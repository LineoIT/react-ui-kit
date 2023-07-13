import React, { FC } from 'react';

export const RippleIndicator: FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
        color?: string;
        rippleClass?: string;
    }
> = (props) => {
    const { className = 'flex h-3 w-3', style, color, rippleClass = 'bg-sky-400' } = props;

    let _style: React.CSSProperties = style || {};
    if (color) _style.backgroundColor = color;

    return (
        <span className={className}>
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ${rippleClass}`} style={_style}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${rippleClass}`} style={_style}></span>
        </span>
    );
};
