import React from "react";
import { useSelector } from "react-redux";
import "../stylesheets/Cart.css"

function Cart(){
   const total = useSelector(state => state.cart.itemsTotal); 
   return (
       <div className="cart">
           <h3> Cart: {total} Items</h3>
       </div>
   )
}

export default Cart;