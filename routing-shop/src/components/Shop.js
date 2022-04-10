import React from "react";
import {Link} from "react-router-dom"
import "../stylesheets/Shop.css"

function Shop(){
   
    const [items,setItems] = React.useState([])

    //equals to async arrow func added below
    // function fetchItems(){
    //     fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
    //    .then(data=>data.json())
    //    .then(items=>{
    //        setItems(items.data)})
    // }

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        setItems(items.data);
    }


    React.useEffect(()=>{
        fetchItems();
    },[])



    return (
        <div className="shop-items">
            {items.map(item =>(
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
            ))}
        </div>
    )
}


export default Shop;