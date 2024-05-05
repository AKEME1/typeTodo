import React from "react";
import { useState } from "react";
import AppContainer from "./component/AppContainer/AppContainer";
import AppStateProvider from "./component/state/AppStateContext";
// import { useAppState } from "./component/state/AppStateContext";
// import Count from "./component/reducer/Count";
import "./App.css";

function App() {
  const [bgToggle, setBgToggle] = useState(false);

  const handleSubmit = () => {
    bgToggle ? alert("plese fill the input") : console.log("hellow");
  };

  const handleMessage = () => {
    const x = bgToggle ? console.log("hellow") : alert("plese fill the input");

    return x;
  };

  return (
    <div className=" w-full mt-10 ">
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={() => setBgToggle(!bgToggle)}
          className={`size-8 ${
            bgToggle ? "bg-blue-800" : "bg-[#F5F5F5]"
          } border  mb-2 cursor-pointer flex justify-center items-center`}
        >
          <div
            className={`bg-white size-4 rounded-xl ${
              bgToggle ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div>
          <div onClick={handleSubmit}>
            <button
              className="text-white bg-blue-700  border rounded-md px-12 py"
              onClick={handleMessage}
            >
              button
            </button>
          </div>
        </div>
      </div>
      {/* <AppStateProvider>
     
        <AppContainer />
      </AppStateProvider> */}
    </div>
  );
}

export default App;
