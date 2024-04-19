import React from "react";
type ColoumnTitle = {
  text: string;
};
const ColumnTitle = ({ text }: ColoumnTitle) => {
  return <div className="px-4 pt-[6px] pb-3">TODO: {text}</div>;
};

export default ColumnTitle;
