import React from "react";
import ComponentNo2 from "./ComponentNo2";

const ComponentNo1 = ({count, ...props}) => {
  return (
    <div>
      <span>ComponentNo1</span>
      <ComponentNo2 count={count}/>
    </div>
  );
};

export default ComponentNo1;
