import React from "react";
import ComponentNo4 from "./ComponentNo4";

const ComponentNo3 = ({count}) => {
  return (
    <div>
      <span>ComponentNo3</span>
      <ComponentNo4 count={count}/>
    </div>
  );
};

export default ComponentNo3;
