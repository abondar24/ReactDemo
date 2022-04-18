import React from "react";
import "../stylesheets/Cart.css"

function Cart(){
   const quantity = 0; 
   return (
       <div className="cart">
           <h3> Cart: {quantity} Items</h3>
       </div>
   )
}

export default Cart;