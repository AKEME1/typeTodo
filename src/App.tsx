import React from "react";
import AppContainer from "./component/AppContainer/AppContainer";
import AppStateProvider from "./component/state/AppStateContext";
// import { useAppState } from "./component/state/AppStateContext";
// import Count from "./component/reducer/Count";
import "./App.css";

function App() {
  
  return (
    <div className="bg-red-400 ">
      <AppStateProvider>
        <AppContainer />
      </AppStateProvider>
    </div>
  );
}

export default App;
