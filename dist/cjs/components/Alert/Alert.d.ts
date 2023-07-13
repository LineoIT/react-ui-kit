import * as React from 'react';
type Variant = 'info' | 'error' | 'warning' | 'success';
declare const Header: React.FC<React.PropsWithChildren>;
declare const Content: React.FC<React.PropsWithChildren>;
declare const AlertDialog: React.FC<React.PropsWithChildren<{
    variant?: Variant;
    header?: string;
    content?: string;
    closable?: boolean;
    icon?: boolean;
}>> & {
    Header: typeof Header;
    Content: typeof Content;
};
export { AlertDialog };
