import React from "react";
import Special from "../Special/Special";

const Myself = ({house,ornament}) => {
  return (
    <div>
      <h3> Me</h3>
      <p>House:{house}</p>
      <Special ornament={ornament}></Special>
    </div>
  );
};

export default Myself;
