import React, { useState } from 'react';
import { Spinner } from '../Spinner';
import { XMarkIcon } from '../Icons';
export const FloatingLoader = ({ refer, className = 'bottom-[10px] right-[10px]' }) => {
    const modal = React.useRef();
    const [_state, setState] = useState('none');
    const [_content, setContent] = useState(React.createElement("div", null, "Loading"));
    React.useImperativeHandle(refer, () => ({
        setState(state) {
            setState(state);
            if (state === 'success') {
                const t = setTimeout(() => {
                    setState('none');
                    clearTimeout(t);
                }, 3000);
            }
        },
        setContent(content) {
            setContent(content);
        }
    }));
    return (React.createElement("div", { ref: modal, className: `absolute  flex items-center shadow-lg drop-shadow-2xl transition-all ease-out duration-700 p-3 bg-white ${className} 
    ${_state !== 'none' ? 'opacity-100' : 'opacity-0'}` },
        React.createElement("div", { className: `${_state === 'error' && 'text-rose-500'}` }, _content),
        React.createElement("div", { className: "w-[10px]" }),
        _state == 'loading' && React.createElement(Spinner, null),
        _state == 'error' && (React.createElement("div", { className: "w-[20px] h-[20px] rounded-full bg-rose-500 text-white flex items-center justify-center" },
            React.createElement(XMarkIcon, null))),
        _state == 'success' && (React.createElement("div", { className: "w-[20px] h-[20px] rounded-full bg-green-500 text-white flex items-center justify-center" },
            React.createElement("svg", { className: "w-[1.0rem] h-[1.0rem]", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))))));
};
//# sourceMappingURL=FloatingLoader.js.map