import React, { useCallback } from 'react';
export const AccordionHeader = (props) => {
    const { className } = props;
    let _className = 'accordion-header cursor-pointer transition flex justify-between items-center';
    if (className)
        _className = _className + ' ' + className;
    const handleClick = useCallback((e) => {
        const current = e.currentTarget.parentNode;
        toggle(current);
        const parent = current.closest('.accordion');
        const currentIndex = Array.prototype.indexOf.call(parent === null || parent === void 0 ? void 0 : parent.children, current);
        if (parent) {
            parent.childNodes.forEach((el, i) => {
                if (i !== currentIndex) {
                    collapse(el);
                }
            });
        }
    }, []);
    function toggle(el) {
        const accordionContent = el.querySelector('.accordion-content');
        if (accordionContent.style.maxHeight === '0px' || accordionContent.style.maxHeight.length === 0)
            spend(el);
        else
            collapse(el);
    }
    function collapse(el) {
        const accordionContent = el.querySelector('.accordion-content');
        const accordionMaxHeight = accordionContent === null || accordionContent === void 0 ? void 0 : accordionContent.style.maxHeight;
        const icon = el.querySelector('.fas');
        // Condition handling
        if (accordionMaxHeight != '0px' || accordionMaxHeight.length != 0) {
            accordionContent.style.maxHeight = `0px`;
            icon.style.transform = 'rotate(0deg)';
        }
    }
    function spend(el) {
        const content = el === null || el === void 0 ? void 0 : el.querySelector('.accordion-content');
        const icon = el.querySelector('.fas');
        // Condition handling
        if (content.style.maxHeight == '0px' || content.style.maxHeight.length == 0) {
            content.style.maxHeight = `${content.scrollHeight + 32}px`;
            icon.style.transform = 'rotate(180deg)';
        }
    }
    return (React.createElement("div", Object.assign({}, props, { onClick: handleClick, className: _className }),
        props.children,
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "fas w-3 h-3" },
            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))));
};
export const AccordionBody = (props) => {
    const { className } = props;
    let _className = `accordion-content overflow-hidden max-h-0 
    transition-max-height duration-300 ease-out`;
    if (className)
        _className = _className + ' ' + className;
    return (React.createElement("div", Object.assign({}, props, { className: _className }), props.children));
};
export const AccordionItem = (props) => {
    const { className } = props;
    let _className = `accordion-item transition`;
    if (className)
        _className = _className + ' ' + className;
    return (React.createElement("div", Object.assign({}, props, { className: _className }), props.children));
};
export const Accordion = (props) => {
    const { className } = props;
    let _className = `accordion`;
    if (className)
        _className = _className + ' ' + className;
    return (React.createElement("div", Object.assign({}, props, { className: _className }), props.children));
};
Accordion.ItemHeader = AccordionHeader;
Accordion.ItemBody = AccordionBody;
Accordion.Item = AccordionItem;
export default Accordion;
//# sourceMappingURL=Accordion.js.map