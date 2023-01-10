import { useCallback, useState } from "react";

export const AccordionHeader: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {

  const { className } = props;
  let _className =
    "accordion-header cursor-pointer transition flex justify-between items-center";
  if (className) _className = _className + " " + className;

  const handleClick = useCallback((e: React.MouseEvent) => {
    const current = (e.currentTarget.parentNode as HTMLElement);

    toggle(current)

    const parent = current.closest('.accordion')
    const currentIndex = Array.prototype.indexOf.call(
      parent?.children,
      current
    );
    if(parent) {
        parent.childNodes.forEach((el, i) => {
            if(i !== currentIndex){
              collapse(el as HTMLElement)
            }
        })
    }
  }, []);

  function toggle(el: HTMLElement) {
    const accordionContent = el.querySelector(
        ".accordion-content"
      ) as HTMLDivElement;

    if(accordionContent.style.maxHeight === "0px" || accordionContent.style.maxHeight.length === 0 )
      spend(el)
    else collapse(el)
  }

  function collapse(el: HTMLElement) {
    const accordionContent = el.querySelector(
      ".accordion-content"
    ) as HTMLDivElement;

    const accordionMaxHeight = accordionContent?.style.maxHeight;
    const icon = el.querySelector(".fas") as HTMLElement;
    // Condition handling
    if (accordionMaxHeight != "0px" || accordionMaxHeight.length != 0) {
      accordionContent.style.maxHeight = `0px`;
      icon.style.transform = "rotate(0deg)";
    }
  }

  function spend(el: HTMLElement) {
    const content = el?.querySelector(
      ".accordion-content"
    ) as HTMLDivElement;

    const icon = el.querySelector(".fas") as HTMLElement;
    // Condition handling
    if (content.style.maxHeight == "0px" || content.style.maxHeight.length == 0) {
       content.style.maxHeight = `${
        content.scrollHeight + 32
      }px`;
      icon.style.transform = "rotate(180deg)";
    }
  }

  return (
    <div {...props} onClick={handleClick} className={_className}>
      {props.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="fas w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export const AccordionBody: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { className } = props;
  let _className = `accordion-content overflow-hidden max-h-0 
    transition-max-height duration-300 ease-out`;
  if (className) _className = _className + " " + className;

  return (
    <div {...props} className={_className}>
      {props.children}
    </div>
  );
};

export const AccordionItem: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>  = (props) => {
  const { className } = props;
  let _className = `accordion-item transition`;
  if (className) _className = _className + " " + className;

  return (
    <div {...props} className={_className} >
      {props.children}
    </div>
  );
};

export const Accordion: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> & {
  ItemHeader: typeof AccordionHeader;
  ItemBody: typeof AccordionBody;
  Item: typeof AccordionItem;
} = (props) => {

    const { className } = props;
    let _className = `accordion`;
    if (className) _className = _className + " " + className;
  
    return (
      <div {...props} className={_className}>
        {props.children}
      </div>
  );
};





Accordion.ItemHeader = AccordionHeader;
Accordion.ItemBody = AccordionBody;
Accordion.Item = AccordionItem;

export default Accordion;
