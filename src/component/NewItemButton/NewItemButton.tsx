import React from "react";

type NewItemFormProps = {
  onAdd(text: string): void;

  text: string;
};
const NewItemButton = ({ onAdd, text }: NewItemFormProps) => {
  return (
    <button
      onClick={() => onAdd(text)}
      className="bg-[#5aac44] border-none shadow-none text-white rounded-md py-[6px] px-4 text-center"
    >
      <h1>hellw world</h1>
      Create
    </button>
  );
};

export default NewItemButton;
