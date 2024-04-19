import React from "react";
import { useState } from "react";
import NewItemFormContainer from "../NewItemFormContainer/NewItemFormContainer";

type AddItemProp = {
  onAdd(text: string): void;
  toggleButtonTex: string;
  dark?: boolean;
};

const AddItemButton = (props: AddItemProp) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonTex, dark } = props;

  if (showForm) {
    return (
      <NewItemFormContainer
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <button
      onClick={() => setShowForm(true)}
      className={`bg-[#ffff3d] border-none rounded-sm cursor-pointer max-w-[300px] py-[10px] px-3 text-left w-full hover:bg-[#ffff52] transition duration-[850] ease-in ${
        dark ? "#00" : "#fff"
      }`}
    >
      {toggleButtonTex}
    </button>
  );
};

export default AddItemButton;
