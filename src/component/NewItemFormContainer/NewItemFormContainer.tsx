import React from "react";
import NewItemButton from "../NewItemButton/NewItemButton";
import NewItemInput from "../NewItemInput/NewItemInput";
import { useState } from "react";
type NewItemFormProps = {
  onAdd(text: string): void;
};
const NewItemFormContainer = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  return (
    <div className="max-w-[300px] flex flex-col w-full items-start">
      <h1>hellw world</h1>
      <NewItemInput text={text} setText={setText} onAdd={onAdd} />
      <NewItemButton onAdd={onAdd} text={text} />
    </div>
  );
};

export default NewItemFormContainer;
