import React from "react";
import "../stylesheets/Layout.css"
import Header from "./Header"
import ProductList from "./ProductList";
import CartItemList from "./CartItemList"

function Layout() {
    let total = 100;

    return (
        <React.Fragment>
            <div className="layout">
                <Header />
                <ProductList />
                <div className="layout-price">
                    <h3>Total: ${total}</h3>
                    <button className="layout-order">Order</button>
                </div>
                <CartItemList />
            </div>
        </React.Fragment>

    )
}


export default Layout;