export type Variant = 'default' | 'info' | 'error' | 'warning' | 'success';
export type ToastOptions = {
    timeout?: number;
    closable?: boolean;
};
export declare function addItemHTML(content: string, id: any, variant: Variant, closable?: boolean): string;
export declare const getTheming: (variant: Variant) => "bg-rose-100 border-rose-200 text-rose-700 shadow-rose-400/10" | "bg-green-100 border-green-200 text-green-700 shadow-green-400/10" | "bg-amber-100 border-amber-200 text-amber-700 shadow-amber-400/10" | "bg-sky-100 border-sky-200 text-sky-700 shadow-sky-400/10" | "bg-gray-100 border-gray-200 text-gray-700 shadow-gray-400/10";
export declare const getAccentTheming: (variant: Variant) => "border-rose-200 hover:bg-rose-200" | "border-green-200 hover:bg-green-200" | "border-amber-200 hover:bg-amber-200" | "border-gray-200 hover:bg-gray-200";
