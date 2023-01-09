import MainLayout from "./layouts/Main";
import UIComponents from "./ui";

function App() {
  return <div className=" h-screen w-screen overflow-hidden  ">
    <MainLayout>
       <UIComponents/>
    </MainLayout>
  </div>
}

export default App;
