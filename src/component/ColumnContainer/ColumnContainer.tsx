import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import AddItemButton from "../AddItemButton/AddItemButton";
import { useAppState } from "../state/AppStateContext";

type ColumnProp = {
  text: string;
  id: string;
};

const ColumnContainer = ({ text, id }: ColumnProp) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <div className="bg-[#ebecf0] w-[300px] min-h-10 mr-5 border rounded-sm px-2 py-2 flex-grow-0">
      <h1>hellw world</h1>
      {tasks.map((task) => (
        <CardContainer text={task.text} key={task.id} id={task.id} />
      ))}
      <ColumnTitle text={text} />

      <AddItemButton
        toggleButtonTex="+ add another card"
        onAdd={console.log}
        dark
      />
    </div>
  );
};

export default ColumnContainer;
