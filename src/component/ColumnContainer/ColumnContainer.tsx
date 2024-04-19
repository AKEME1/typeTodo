import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import AddItemButton from "../AddItemButton/AddItemButton";
type ColumnProp = {
  text: string;
};

const ColumnContainer = ({ text }: ColumnProp) => {
  return (
    <div className="bg-[#ebecf0] w-[300px] min-h-10 mr-5 border rounded-sm px-2 py-2 flex-grow-0">
      <ColumnTitle text={text} />
      <CardContainer text="first" />
      <CardContainer text="second" />
      <CardContainer text="thired" />
      <AddItemButton
        toggleButtonTex="+ add another card"
        onAdd={console.log}
        dark
      />
    </div>
  );
};

export default ColumnContainer;
