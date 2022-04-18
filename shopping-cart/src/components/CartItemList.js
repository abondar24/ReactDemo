import React from "react";

import CartItem from "./CartItem";
import "../stylesheets/CartItemList.css"

function CartItemList() {

    return (
        <div className="cart-item-list">
            <h2>Your cart</h2>
            <ul className="cart-item-ul">
               <li className="cart-item-li">
                   <CartItem 
                      id = {1} 
                      price={2500}
                      name={"Macbook"}
                      quantity={1} />
               </li>
            </ul>
        </div>

    )
}


export default CartItemList;