import React from "react";
import ComponentNo3 from "./ComponentNo3";

const ComponentNo2 = ({count}) => {
  return (
    <div>
      <span>ComponentNo2</span>
      <ComponentNo3 count={count}/>
    </div>
  );
};

export default ComponentNo2;
