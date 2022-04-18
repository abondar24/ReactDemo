import React from "react";
import "../stylesheets/Layout.css"
import Header from "./Header" 

function Layout (){
    let total = 100;

    return (
        <div className="layout">
            <Header />
            <div className="layout-price">
                <h3>Total: ${total}</h3>
                <button className="layout-order">Order</button>
            </div>
        </div>
    )
} 


export default Layout;