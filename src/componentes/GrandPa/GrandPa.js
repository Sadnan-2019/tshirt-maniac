import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";
import "./GrandPa.css";

export const RingContext = createContext("diamond")

const GrandPa = () => {
  // let house=7;

  const [house, setHouse] = useState(1);
  let ornament="Diamond ring"
  const handleAddHouse = () => {
    const newhouse = house + 1;
    setHouse(newhouse);
  };
  return (
    <RingContext.Provider value={[house,setHouse]}>

<div className="py-4">
      <div
        className="grandpa-container py-4"
        style={{ border: "2px solid blue" }}
      >
        <h1>This Granpa</h1>
        <button onClick={handleAddHouse} className="btn btn-dark text-light">
          Buy House
        </button>
        <p>House:{house}</p>

        <div className="grandpa">
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Unty house={house}></Unty>
        </div>
      </div>
    </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
