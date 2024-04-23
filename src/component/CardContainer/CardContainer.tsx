import React from "react";

type columnProp = {
  text: string;
  id: string;
};
const CardContainer = ({ text, id }: columnProp) => {
  return (
    <div className="bg-white cursor-pointer mb-[0.5rem] px-[0.5rem] py-[1rem] max-w-[300px] border rounde-sm shadow-3xl">
      {text}
      <h1>hellw world</h1>
    </div>
  );
};

export default CardContainer;
