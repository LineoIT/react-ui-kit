import { FC, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Toast, Toastable, ToastProvider, useToast } from "../components/Toast/Toast";


const ToastUI: FC<{ className?: string }> = (prop) => {
  const toastRef= useRef<Toastable>()
  const toaster =  useToast()

  return (
    
    <>
      <div className={prop.className}>
        <fieldset className="border p-2">
          <legend className="p-2  dark:text-gray-400">Toasts</legend>

          <div className="w-full text-center dark:text-gray-200 mt-5">With Ref</div>
          <div className="flex items-center flex-wrap gap-2 py-2">
            <Button variant="outlined" onClick={() => toastRef.current?.notify("Tailwind Toast To Notify Users.")}>default</Button>
            <Button variant="outlined" onClick={() => toastRef.current?.notify("Your Uploads Are Waiting For Your Action.", "info")}>info</Button>
            <Button variant="outlined" onClick={() => toastRef.current?.notify("Data Updated Successfully.", "success")}>success</Button>
            <Button variant="outlined" onClick={() => toastRef.current?.notify("Your are Disconnected, Please Check.", "warning")}>warning</Button>
            <Button variant="outlined" onClick={() => toastRef.current?.notify("Your are Disconnected, Please Check.", "error")}>error</Button>
          </div>

          <div className="w-full text-center dark:text-gray-200 mt-5">With provider</div>
          <div className="flex items-center flex-wrap gap-2 py-2">
            <Button onClick={() => toaster.notify("Tailwind Toast To Notify Users.")}>default</Button>
            <Button onClick={() => toaster.notify("Your Uploads Are Waiting For Your Action.", "info")}>info</Button>
            <Button onClick={() => toaster.notify("Data Updated Successfully.", "success")}>success</Button>
            <Button onClick={() => toaster.notify("Your are Disconnected, Please Check.", "warning")}>warning</Button>
            <Button onClick={() => toaster.notify("Your are Disconnected, Please Check.", "error")}>error</Button>
          </div>

        </fieldset>
      </div>
      <Toast refer={toastRef}/>
      <ToastProvider/>
    </>
  );
};

export default ToastUI;
