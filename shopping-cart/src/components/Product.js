import React from "react";

import "../stylesheets/Product.css"

function Product(props) {

    return (
        <div className="product-card">
            <img src={props.imgUrl} alt={props.name} />
            <h2>{props.name}</h2>
            <p>$ {props.price}</p>
            <button className="product-button">Add to cart</button>
        </div>
    )
}

export default Product;