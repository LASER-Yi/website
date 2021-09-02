import React, { FunctionComponent } from "react";
import Footer from "../components/Footer";
import DemoScene from "../Three/Scene/demo";

const App: FunctionComponent = () => {
  return (
    <div className="flex flex-col-reverse items-center min-h-screen">
      <div className="absolute right-1/2 top-1/2 z-50 text-white">
        <p className="font-bold text-3xl">Yi Liang</p>
        <p className="font-light text-lg">Technical Game Designer</p>
      </div>
      <div className="absolute mx-auto bottom-3 z-50">
        <Footer></Footer>
      </div>
      <div className="h-screen w-full z-0">
        <DemoScene></DemoScene>
      </div>
    </div>
  );
};

export default App;
