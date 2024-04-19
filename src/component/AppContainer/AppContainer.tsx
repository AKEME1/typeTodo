import React from "react";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import AddItemButton from "../AddItemButton/AddItemButton";
const AppContainer = () => {
  return (
    <div className="flex items-start bg-[#3179ba] h-screen p-5 w-full">
      <ColumnContainer text="hellow" />
      <AddItemButton toggleButtonTex="+ add another list" onAdd={console.log} />
    </div>
  );
};

export default AppContainer;
