import React from "react";
import "./Tshirt.css";

const Tshirt = ({handleAddtoCart,shirt}) => {
  const { name, price, img } = shirt;
  return (
    <div className="shirt-container">
      <p>Name:{name}</p>
      <img src={img} alt="" />

      <p>
        <small>Price:${price}</small>
      </p>
      <button onClick={()=>handleAddtoCart(shirt)} className="bg-info">Add to Cart</button>
    </div>
  );
};

export default Tshirt;
