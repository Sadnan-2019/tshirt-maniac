import React from "react";

const Cart = ({ cart,handleRemoveCart }) => {

    //conditional rendaring
    //1.element variable
    //ternary operator
    let command;
    if(cart.length === 0){

        command= <p>Please add item</p>
    }else if(cart.length === 1){
        command=<p>Add one more</p>
    }
    
    else{
        command =<p>thaks for adding</p>
    }
  return (
    <div>
      <div className=" ">
        <h1>This is cart:{cart.length}</h1>
        
        
          {cart.map((shirt) => (
            <p>
                <small className ="text-info">{shirt.name}</small>
                <button onClick={()=>{handleRemoveCart(shirt)}} className="btn bg-dark text-light rounded-circle ms-4">X</button>
            
            </p>
          ))}

          {cart.length ===0 || <p className="text-success">Yaeh you are buying</p>}
          {cart.length ===3 && <div className="bg-dark">
              
            <p className="text-light">Three added if you want more added</p>
              
              </div>}
          {command}
          {

              cart.length !==4 ? "keep ading" :<button>Remove all</button>
          }

          {cart.length ===4 && <button className="bg-danger ms-4">Review Order</button>}
        
      </div>
    </div>
  );
};

export default Cart;
