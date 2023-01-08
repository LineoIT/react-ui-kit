import * as React from "react";
import { Toastable, Variant } from "./types";



export const Toast: React.FC<React.PropsWithChildren<{
    closable?: boolean;
    refer?: React.Ref<any>,
    interval?: number
  }>>  = ({closable=true, interval=3000, refer}) => {
    const [visible, setVisible] = React.useState(false)
    const [content, setContent] = React.useState("")
    const [variant, setVariant] = React.useState<Variant>("default")
    const modal = React.useRef<Toastable>() as React.MutableRefObject<Toastable>;

    const theming = React.useMemo(() => {
        switch (variant) {
          case "error":
            return "bg-rose-100 border-rose-200 text-rose-700 shadow-rose-400/10";
          case "success":
            return "bg-green-100 border-green-200 text-green-700 shadow-green-400/10";
          case "warning":
            return "bg-amber-100 border-amber-200 text-amber-700 shadow-amber-400/10";
        case "info":
            return "bg-sky-100 border-sky-200 text-sky-700 shadow-sky-400/10"
          default:
            return "bg-gray-100 border-gray-200 text-gray-700 shadow-gray-400/10";
        }
      }, [variant]);

      const accentTheming = React.useMemo(() => {
        switch (variant) {
          case "error":
            return "border-rose-200 hover:bg-rose-200";
          case "success":
            return "border-green-200 hover:bg-green-200";
            case "warning":
              return "border-amber-200 hover:bg-amber-200";
            case "info":
                return "border-amber-200 hover:bg-amber-200";
          default:
            return "border-gray-200 hover:bg-gray-200";
        }
      }, [variant]);

      function close() {
        const t =  setTimeout(() => {
          setVisible(false)
          setContent("")
          clearTimeout(t)
        }, 200);
      };
    
      React.useImperativeHandle(refer, () => ({
        show(text: string, variant: Variant = "default") {
          setContent(text)
          setVariant(variant)
          setVisible(true)
          const t =  setTimeout(() => {
            close()
            clearTimeout(t)
          }, interval);
        },
        hide() {
          close();
        },
      }));

  return (<div ref={modal} className={`fixed z-40 top-8 right-8 max-w-lg rounded-lg  px-4 py-3 border  shadow-lg animate-toast ${theming} ${visible ? "visible": "hidden"}`}>
        <div className="flex items-center gap-2">

        {variant === "default" && <svg className="shrink-0 w-6 h-6" viewBox="0 0 16 16">
        <path fill="currentColor" d="M9.68 2.75a1.54 1.54 0 0 0-.56.25a1.53 1.53 0 0 0-1.43-1a1.51 1.51 0 0 0-.92.32l-.08-.24A1.49 1.49 0 0 0 5.25 1A1.51 1.51 0 0 0 4 1.63a1.54 1.54 0 0 0-.21.45a1.6 1.6 0 0 0-2 2l1.45 4.66a2.29 2.29 0 0 0-1.92.65a1 1 0 0 0-.31.89a1.33 1.33 0 0 0 .78 1a10.8 10.8 0 0 1 3 2.44A4 4 0 0 0 7.69 15c.338 0 .675-.048 1-.14l1.78-.53a2.45 2.45 0 0 0 1.73-2c.202-1.28.305-2.574.31-3.87a19.228 19.228 0 0 0-1-4.71a1.54 1.54 0 0 0-1.83-1Zm1.52 9.46a1.429 1.429 0 0 1-1 1.16l-1.79.53a2.89 2.89 0 0 1-2.9-.9a11.38 11.38 0 0 0-3.3-2.66c-.14-.07-.21-.19-.2-.24a1.43 1.43 0 0 1 1.77-.1a.51.51 0 0 0 .7-.6L2.76 3.81a.62.62 0 0 1 .31-.74a.61.61 0 0 1 .51 0a.63.63 0 0 1 .36.37L5 6.66a.45.45 0 0 0 .16.22a.62.62 0 0 0 .33.12h.16a.47.47 0 0 0 .12-.07a.4.4 0 0 0 .23-.21a.55.55 0 0 0 0-.17a.63.63 0 0 0 0-.19L4.76 2.67a.54.54 0 0 1 .07-.46a.54.54 0 0 1 .91.15L7 6.64a.46.46 0 0 0 .17.24a.44.44 0 0 0 .31.12h.14A.5.5 0 0 0 8 6.36l-.8-2.67a.52.52 0 0 1 .08-.47a.55.55 0 0 1 1 .19l.32 1.25l.48 2a.49.49 0 0 0 .2.28a.48.48 0 0 0 .14.06h.2a.51.51 0 0 0 .38-.62l-.49-2a.58.58 0 0 1 .42-.7a.54.54 0 0 1 .66.36c.484 1.434.793 2.922.92 4.43a24.737 24.737 0 0 1-.31 3.74ZM13.8 1.1a.5.5 0 1 0-.6.8a4.19 4.19 0 0 1 1.32 4.46a.5.5 0 0 0 .34.62L15 7a.49.49 0 0 0 .48-.36A5.19 5.19 0 0 0 13.8 1.1Zm-1.186 1.41a.49.49 0 0 1 .176.08a3.37 3.37 0 0 1 1.17 2.95a.5.5 0 0 1-.5.46a.5.5 0 0 1-.46-.54a2.37 2.37 0 0 0-.8-2.06a.49.49 0 0 1-.1-.69a.49.49 0 0 1 .514-.2Z"></path>
      </svg>}
          {variant === "info" && <svg className="shrink-0 w-6 h-6" viewBox="0 0 16 16">
        <g fill="currentColor">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
          <path d="m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"></path>
        </g>
      </svg>}
          {variant === "success" && <svg className="shrink-0 w-6 h-6" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 16v-6h2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h8v2H8v12h12m-9.09-8.92L14 10.17l6.59-6.59L22 5l-8 8l-4.5-4.5l1.41-1.42M16 20v2H4a2 2 0 0 1-2-2V7h2v13h12Z"></path>
      </svg>}
          {variant === "error" && <svg className="shrink-0 w-6 h-6" viewBox="0 0 24 24">
        <g fill="currentColor">
          <path d="M3.707 2.293a1 1 0 0 0-1.414 1.414L15.535 16.95l2.829 2.828l1.929 1.93a1 1 0 0 0 1.414-1.415l-1.253-1.254c3.607-4.321 3.382-10.76-.676-14.817a1 1 0 0 0-1.414 1.414a9.001 9.001 0 0 1 .668 11.982l-1.425-1.425a7.002 7.002 0 0 0-.657-9.143a1 1 0 1 0-1.414 1.414a5.002 5.002 0 0 1 .636 6.294l-1.465-1.465a3 3 0 0 0-4-4l-7-7zM3.75 8.4a1 1 0 0 0-1.834-.8C.161 11.624.928 16.485 4.222 19.778a1 1 0 0 0 1.414-1.414A9.004 9.004 0 0 1 3.749 8.4zm3.32 2.766a1 1 0 0 0-1.972-.332A6.992 6.992 0 0 0 7.05 16.95a1 1 0 1 0 1.414-1.414a4.992 4.992 0 0 1-1.394-4.37z"></path>
        </g>
      </svg>}
          {variant === "warning" &&  <svg className="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 12.5ZM2.725 21q-.575 0-.85-.5t0-1l9.25-16Q11.4 3 12 3t.875.5l9.25 16q.275.5 0 1t-.85.5ZM12 10q-.425 0-.712.287Q11 10.575 11 11v3q0 .425.288.712q.287.288.712.288t.713-.288Q13 14.425 13 14v-3q0-.425-.287-.713Q12.425 10 12 10Zm0 8q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm-7.55 1h15.1L12 6Z"
                ></path>
              </svg>}

          <p className="font-medium">{content}</p>
          {closable && <div className="ml-3">
            <button className={`border  rounded-lg p-1 ${accentTheming}`} onClick={close}>
              <span className="sr-only">Close</span>
              <svg className="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                ></path>
              </svg>
            </button>
          </div>}
        </div>
      </div>
  );
};
