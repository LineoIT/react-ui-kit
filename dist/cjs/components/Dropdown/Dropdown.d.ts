import React, { FC, PropsWithChildren } from 'react';
type ButtonProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare function Toggle(props: ButtonProps): React.JSX.Element;
declare function Wrapper(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    activeClass?: string;
    desactiveClass?: string;
}): React.JSX.Element;
export declare function DropdownItem(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.JSX.Element;
declare const Dropdown: FC<PropsWithChildren> & {
    Toggle: typeof Toggle;
    Wrapper: typeof Wrapper;
    Item: typeof DropdownItem;
};
export { Dropdown };
