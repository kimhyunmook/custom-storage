import {
  type ToastObject,
  type ToastProvider,
  type ToastType,
} from "./types/toaster";
import { useState } from "react";
import ToasterContainer, { Toast } from "./layout/toast";
import { ToasterContext } from "./hook";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export default function ToasterProvider<T = {}>({
  children,
  tool,
  color,
}: ToastProvider<T>) {
  const [toasts, setToasts] = useState<ToastObject<T>[]>([]);

  function addToast(type: ToastType<T>, message: string) {
    const newToast = {
      id: Date.now(),
      type,
      message,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
    return newToast;
  }

  function removeToast(id: number) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  function toaster(type: ToastType<T>, message: string, timer?: number) {
    const newToast = addToast(type, message);

    setTimeout(() => removeToast(newToast.id), timer ? timer : 2000);
  }

  return (
    <ToasterContext.Provider value={{ toaster }}>
      {children}
      <ToasterContainer tool={tool} color={color}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClick={() => removeToast(toast.id)}
            color={color}
          />
        ))}
      </ToasterContainer>
    </ToasterContext.Provider>
  );
}
