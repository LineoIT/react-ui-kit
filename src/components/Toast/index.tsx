import { useCallback, useState } from "react";
import { BaseToast } from "./Base";
import { Variant } from "./types";
import { Toast } from "./Toast";

function useToast() {
  const [messages, setMessages] = useState<
    { id: number; text: string; variant?: Variant; timeout?: number  }[]
  >([]);

  const  show = (
    text: string,
    variant: Variant = "default",
    timeout: number = 3000
  ) => {
    const msg = { id: new Date().getTime(), text, variant, timeout };
    setMessages([...messages, msg]);
  }

  const remove = (id: number) => {
    setMessages(messages.filter((e) => e.id !== id));
  }

  const onClose = (index?: number) => {
    if (index) remove(index);
  }

  function ToastProvider() {
    return (
      <div className="toast fixed top-8 right-8  gap-1 flex flex-col">
        {messages.map((m) => (
          <BaseToast
            key={m.id}
            variant={m.variant}
            content={m.text}
            onClose={onClose}
            index={m.id}
            timeout={m.timeout}
            initialValue
          />
        ))}
      </div>
    );
  }

  return {ToastProvider, toast: {show}};
}

export { useToast, Toast };
