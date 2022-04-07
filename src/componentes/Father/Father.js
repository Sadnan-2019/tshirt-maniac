import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import './Father.css'

const Father = ({ house,ornament }) => {
  return (
    <div>
      <h3> Father</h3>
      <p>House:{house}</p>

      <div className="father-container">
        <Myself house={house} ornament={ornament}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
