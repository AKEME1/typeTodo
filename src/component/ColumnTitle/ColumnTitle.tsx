import React from "react";
type ColoumnTitle = {
  text: string;
};
const ColumnTitle = ({ text }: ColoumnTitle) => {
  return (
    <div className="px-4 pt-[6px] pb-3">
      TODO:
      <h1>hellw world</h1> {text}
    </div>
  );
};

export default ColumnTitle;
