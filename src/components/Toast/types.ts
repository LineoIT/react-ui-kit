export type Variant = "default" | "info" | "error" | "warning" | "success";
export type Toastable = HTMLDivElement & {
  hide: () => void;
  show: (m: string, variant?: Variant) => void;
};
