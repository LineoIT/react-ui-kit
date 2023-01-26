import { FC, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Tab } from "../components/Tab";
import {
  Toast,
  Toastable,
  ToastContainer,
  useToast,
} from "../components/Toast/Toast";
import {useToasts, ToastProvider as TProvider} from "../components/Toast/Toast2"

import { Heading } from "./Heading";

const ToastUI: FC<{ className?: string }> = (prop) => {
  const toastRef = useRef<Toastable>();
  const toaster = useToast();

  const toast = useToasts()


  return (
    <>
      <div className={prop.className}>
        <Heading>Toasts</Heading>

        <div className="  py-2">
          <Tab
            onTabItemChange={(tab: number) => {
              console.log(tab);
            }}
          >
            <div className="flex">
              <Tab.Header tab={0}> Preview </Tab.Header>
              <Tab.Header tab={1}> Code </Tab.Header>
            </div>
            <div className="flex">
              <Tab.Content tab={0}>
                <div className="p-4">
                  <div className="w-full text-center dark:text-gray-200 mt-5">
                    With Ref
                  </div>
                  <div className="flex items-center flex-wrap gap-2 py-2">
                    <Button
                      variant="outlined"
                      onClick={() =>
                        toastRef.current?.notify(
                          "Tailwind Toast To Notify Users."
                        )
                      }
                    >
                      default
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        toastRef.current?.notify(
                          "Your Uploads Are Waiting For Your Action.",
                          "info"
                        )
                      }
                    >
                      info
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        toastRef.current?.notify(
                          "Data Updated Successfully.",
                          "success"
                        )
                      }
                    >
                      success
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        toastRef.current?.notify(
                          "Your are Disconnected, Please Check.",
                          "warning"
                        )
                      }
                    >
                      warning
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        toastRef.current?.notify(
                          "Your are Disconnected, Please Check.",
                          "error"
                        )
                      }
                    >
                      error
                    </Button>
                  </div>

                  <div className="w-full text-center dark:text-gray-200 mt-5">
                    With conainer
                  </div>
                  <div className="flex items-center flex-wrap gap-2 py-2">
                    <Button
                      onClick={() =>
                        toaster.notify("Tailwind Toast To Notify Users.")
                      }
                    >
                      default
                    </Button>
                    <Button
                      onClick={() =>
                        toaster.notify(
                          "Your Uploads Are Waiting For Your Action.",
                          "info"
                        )
                      }
                    >
                      info
                    </Button>
                    <Button
                      onClick={() =>
                        toaster.notify("Data Updated Successfully.", "success")
                      }
                    >
                      success
                    </Button>
                    <Button
                      onClick={() =>
                        toaster.notify(
                          "Your are Disconnected, Please Check.",
                          "warning"
                        )
                      }
                    >
                      warning
                    </Button>
                    <Button
                      onClick={() =>
                        toaster.notify(
                          "Your are Disconnected, Please Check.",
                          "error"
                        )
                      }
                    >
                      error
                    </Button>

                  </div>


                  <div className="w-full text-center dark:text-gray-200 mt-5">
                    With context provider
                  </div>
                  <div className="flex items-center flex-wrap gap-2 py-2">
                    <Button
                      onClick={() =>
                        toast.push({
                          message: 'Hello world'
                        })
                      }
                    >
                      default
                    </Button>
                    <Button
                      onClick={() =>
                        toast.push({
                          message: 'Hello world',
                          variant: "info"
                        })
                      }
                    >
                      info
                    </Button>
                    <Button
                      onClick={() =>
                        toast.push({
                          message: 'Hello world',
                          variant: "success"
                        })
                      }
                    >
                      success
                    </Button>
                    <Button
                      onClick={() =>
                        toast.push({
                          message: 'Hello world',
                          variant: "warning"
                        })
                      }
                    >
                      warning
                    </Button>
                    <Button
                      onClick={() =>
                        toast.push({
                          message: 'Hello world',
                          variant: "error"
                        })
                      }
                    >
                      error
                    </Button>

          
                  </div>
                  
                </div>
              </Tab.Content>
              <Tab.Content tab={1}>Code will be here</Tab.Content>
            </div>
          </Tab>
        </div>
      </div>
      <Toast refer={toastRef} />
      <ToastContainer />
    </>
  );
};

export default ToastUI;
