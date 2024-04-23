import React from "react";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import AddItemButton from "../AddItemButton/AddItemButton";
import { useAppState } from "../state/AppStateContext";
const AppContainer = () => {
  const { lists } = useAppState();
  return (
    <div className="flex items-start bg-[#3179ba] h-screen p-5 w-full">
      <h1>hellw world</h1>
      {lists.map((list) => (
        <ColumnContainer text={list.text} key={list.id} id={list.id} />
      ))}

      <AddItemButton toggleButtonTex="+ add another list" onAdd={console.log} />
    </div>
  );
};

export default AppContainer;
