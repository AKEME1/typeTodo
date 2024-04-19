import React from "react";
import { useFocus } from "../utiles/useFoucs";
type butonForm = {
  text: string;
  setText(text: string): void;
  onAdd(text: string): void;
};
const NewItemInput = ({ text, setText, onAdd }: butonForm) => {
  const inputRef = useFocus();
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <input
      value={text}
      ref={inputRef}
      onKeyDown={handleAddText}
      onChange={(e) => setText(e.target.value)}
      className="border-none outline-slate-400 rounded-md mb-[0.5rem] py-[0.5rem] px-[1rem] w-full"
      type="text"
    />
  );
};

export default NewItemInput;
