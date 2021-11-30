import React, { FunctionComponent, useState } from "react";

const App: FunctionComponent = () => {
  const [text] = useState("/* World with only imagination */");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <p className="font-sans font-light text-2xl tracking-wider py-4">
          LIANG Yi
        </p>
        <p className="text-gray-500 font-extralight tracking-widest">{text}</p>
      </div>
    </div>
  );
};

export default App;
