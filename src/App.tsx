import React from "react";
import MainLayout from "./layouts/Main";
import UIComponents from "./ui";
import LoginPage from "./ui/page/Login";
import { ToastProvider} from "./components/Toast/Toast2"

function App() {
  return <div className=" h-screen w-screen overflow-hidden  ">
     {/* <LoginPage/> */}
     <ToastProvider>
    <MainLayout>
       <UIComponents/>
    </MainLayout>
    </ToastProvider>
  </div>
}

export default App;
