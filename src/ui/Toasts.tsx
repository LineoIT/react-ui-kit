import { FC, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Toast, useToast } from "../components/Toast";
import { Toastable } from "../components/Toast/types";

const ToastUI: FC<{ className?: string }> = (prop) => {
  const toast= useRef<Toastable>()
  const {ToastProvider, toast : toaster} =  useToast()

  return (
    
    <>
      <div className={prop.className}>
        <fieldset className="border p-2">
          <legend className="p-2  dark:text-gray-400">Toasts</legend>

          <div className="w-full text-center dark:text-gray-200 mt-5">Singleton</div>
          <div className="flex items-center flex-wrap gap-2 py-2">
            <Button variant="outlined" onClick={() => toast.current?.show("Tailwind Toast To Notify Users.")}>default</Button>
            <Button variant="outlined" onClick={() => toast.current?.show("Your Uploads Are Waiting For Your Action.", "info")}>info</Button>
            <Button variant="outlined" onClick={() => toast.current?.show("Data Updated Successfully.", "success")}>success</Button>
            <Button variant="outlined" onClick={() => toast.current?.show("Your are Disconnected, Please Check.", "warning")}>warning</Button>
            <Button variant="outlined" onClick={() => toast.current?.show("Your are Disconnected, Please Check.", "error")}>error</Button>
          </div>

          <div className="w-full text-center dark:text-gray-200 mt-5">Push notifications </div>
          <div className="flex items-center flex-wrap gap-2 py-2">
            <Button onClick={() => toaster.show("Tailwind Toast To Notify Users.")}>default</Button>
            <Button onClick={() => toaster.show("Your Uploads Are Waiting For Your Action.", "info")}>info</Button>
            <Button onClick={() => toaster.show("Data Updated Successfully.", "success")}>success</Button>
            <Button onClick={() => toaster.show("Your are Disconnected, Please Check.", "warning")}>warning</Button>
            <Button onClick={() => toaster.show("Your are Disconnected, Please Check.", "error")}>error</Button>
          </div>

        </fieldset>
      </div>
      <Toast refer={toast}/>

    <ToastProvider/>
    </>
  );
};

export default ToastUI;
