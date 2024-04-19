import React from "react";

type columnProp = {
  text: string;
};
const CardContainer = ({ text }: columnProp) => {
  return (
    <div className="bg-white cursor-pointer mb-[0.5rem] px-[0.5rem] py-[1rem] max-w-[300px] border rounde-sm shadow-3xl">
      {text}
    </div>
  );
};

export default CardContainer;
