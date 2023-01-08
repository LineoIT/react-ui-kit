import * as React from "react";
import { addItemHTML, getTheming, ToastOptions, Variant } from "./helper";

const toastProviderId = "toasty";

export type Toastable = HTMLDivElement & {
  hide: () => void;
  notify: (m: string, variant?: Variant) => void;
};

export const ToastProvider: React.FC<{
  refer?: React.Ref<any>;
}> = (prop) => {
  return (
    <div
      ref={prop.refer}
      id={toastProviderId}
      className="fixed z-40 top-8 right-8"
    />
  );
};

export function useToast(
  options: ToastOptions = {
    timeout: 3000,
    closable: true,
  }
) {

  function notify(
    text: string,
    variant: Variant = "default",
    opts: ToastOptions = options
  ) {
    const id = new Date().getTime();
    const theming = getTheming(variant);
    const el = document.createElement("div");
    el.id = id.toString();
    el.className = `max-w-lg rounded-lg my-5 px-4 py-3 border  shadow-lg animate-toast ${theming}`;
    el.innerHTML = addItemHTML(text, id, variant, opts?.closable);
    document.getElementById(toastProviderId)?.appendChild(el);
    const t = setTimeout(() => {
      document.getElementById(id.toString())?.remove();
      clearTimeout(t);
    }, opts.timeout);
  }

  return { notify };
}

export const Toast: React.FC<
  React.PropsWithChildren<{
    closable?: boolean;
    refer?: React.Ref<any>;
    interval?: number;
  }>
> = ({ closable = true, interval = 3000, refer }) => {
  const modal = React.useRef<Toastable>() as React.MutableRefObject<Toastable>;

  React.useImperativeHandle(refer, () => ({
    notify(text: string, variant: Variant = "default") {
      const id = new Date().getTime();
      const theming = getTheming(variant);
      const el = document.createElement("div");
      el.id = id.toString();
      el.className = `max-w-lg rounded-lg px-4 py-3 my-5 border shadow-lg animate-toast ${theming}`;
      el.innerHTML = addItemHTML(text, id, variant, closable);
      modal.current.appendChild(el);

      const t = setTimeout(() => {
        document.getElementById(id.toString())?.remove();
        clearTimeout(t);
      }, interval);
    },
  }));

  return <ToastProvider refer={modal} />;
  // return <div ref={modal} className="fixed z-40 top-8 right-8" />;
};
