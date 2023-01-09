import React, { FC,  useState } from "react";
import Sidebar, { Breadcrumb } from "./Sidebar";

const MainLayout : FC<React.PropsWithChildren> = (prop) => {

    return <div className="relative w-full h-full  bg-skin dark:bg-skin-dark">
        <Sidebar />
        <Breadcrumb className="absolute top-0 right-0 left-0 ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]  bg-skin dark:bg-skin-dark z-10"/>
        <main className=" ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-full overflow-y-auto  bg-skin dark:bg-gray-900">
          {prop.children}
      </main>
    </div>
}
 
export default MainLayout;