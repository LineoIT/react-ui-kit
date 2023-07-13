"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = exports.AccordionItem = exports.AccordionBody = exports.AccordionHeader = void 0;
const react_1 = __importStar(require("react"));
const AccordionHeader = (props) => {
    const { className } = props;
    let _className = 'accordion-header cursor-pointer transition flex justify-between items-center';
    if (className)
        _className = _className + ' ' + className;
    const handleClick = (0, react_1.useCallback)((e) => {
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
    return (react_1.default.createElement("div", Object.assign({}, props, { onClick: handleClick, className: _className }),
        props.children,
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "fas w-3 h-3" },
            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))));
};
exports.AccordionHeader = AccordionHeader;
const AccordionBody = (props) => {
    const { className } = props;
    let _className = `accordion-content overflow-hidden max-h-0 
    transition-max-height duration-300 ease-out`;
    if (className)
        _className = _className + ' ' + className;
    return (react_1.default.createElement("div", Object.assign({}, props, { className: _className }), props.children));
};
exports.AccordionBody = AccordionBody;
const AccordionItem = (props) => {
    const { className } = props;
    let _className = `accordion-item transition`;
    if (className)
        _className = _className + ' ' + className;
    return (react_1.default.createElement("div", Object.assign({}, props, { className: _className }), props.children));
};
exports.AccordionItem = AccordionItem;
const Accordion = (props) => {
    const { className } = props;
    let _className = `accordion`;
    if (className)
        _className = _className + ' ' + className;
    return (react_1.default.createElement("div", Object.assign({}, props, { className: _className }), props.children));
};
exports.Accordion = Accordion;
exports.Accordion.ItemHeader = exports.AccordionHeader;
exports.Accordion.ItemBody = exports.AccordionBody;
exports.Accordion.Item = exports.AccordionItem;
exports.default = exports.Accordion;
//# sourceMappingURL=Accordion.js.map