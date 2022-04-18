import React from "react"

import products from "../products.js"
import Product from "./Product"
import "../stylesheets/ProductList.css"

function ProductList() {

    const renderedProducts = products.map((product, id) => (
        <li key={id}>
            <Product
                id={product.id}
                name={product.name}
                imgUrl={product.imgURL}
                price={product.price}
            />
        </li>
    ));

    return (
        <div>
            <ul className="product-list">
                {renderedProducts}
            </ul>
        </div>
    )
}

export default ProductList;