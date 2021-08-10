import React from "react";

const Row = ({ children, text }: { children: any; text?: boolean }) => {
  return <div className={`stripe-row ${text ? "text" : ""}`}>{children}</div>;
};

export default Row;
