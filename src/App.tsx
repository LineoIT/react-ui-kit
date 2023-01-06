import Dialog from "./components/Dialog";
import CustomTheme from "./CustomTheme";

function App() {
  return (
    <div className="p-10 min-h-screen flex flex-wrap justify-center items-center bg-indigo-500 gap-8">
      <div className=" w-full">
       
      </div>
      <Dialog />
      <Dialog className="dark" />
    </div>
  );
}

export default App;
