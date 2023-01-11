import React from "react";
import MainLayout from "./layouts/Main";
import UIComponents from "./ui";
import LoginPage from "./ui/page/Login";

function App() {
  return <div className=" h-screen w-screen overflow-hidden  ">
     {/* <LoginPage/> */}
    <MainLayout>
       <UIComponents/>
    </MainLayout>
  </div>
}

export default App;
