import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import useTshirt from "../useTshirt";
import "./Home.css";
// import useProducts from '../hooks/useProducts';

// import useTshirt from '../hooks/useTshirt';

const Home = () => {
  const [tshirts, setTshirts] = useTshirt();
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (seletedItem) => {
    // console.log(seletedItem)
    const exist=cart.find(existsItem=> existsItem.id===seletedItem.id)
    if(!exist){

      const newCart = [...cart, seletedItem];
      setCart(newCart);
    }else{
      alert("already exits")
    }
    
  };

  const handleRemoveCart=(removeItem)=>{
    // console.log(removeItem)
    const rest =cart.filter(cartShirt =>cartShirt.id !==removeItem.id)
    setCart(rest);



    
  }

  return (
    <div className="home-container">
      <div className="product-container">
        {/* <h1>This is my hjome {tshirts.length}</h1> */}

        {tshirts.map((shirt) => (
          <Tshirt
            shirt={shirt}
            key={shirt.id}
            handleAddtoCart={handleAddtoCart}
          ></Tshirt>
        ))}
        {/* <Tshirt></Tshirt> */}
      </div>

      <div>
        <div className="cart-container">
          <Cart 
          handleRemoveCart={handleRemoveCart}
          cart={cart}
          key={cart.id}

          
          
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
