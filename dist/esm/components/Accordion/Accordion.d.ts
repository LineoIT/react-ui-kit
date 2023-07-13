import React from 'react';
export declare const AccordionHeader: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const AccordionBody: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const AccordionItem: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Accordion: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & {
    ItemHeader: typeof AccordionHeader;
    ItemBody: typeof AccordionBody;
    Item: typeof AccordionItem;
};
export default Accordion;
