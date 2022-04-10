import React from "react";
import { useParams } from 'react-router-dom';
import "../stylesheets/ShopItem.css"

function ShopItem() {
    const { id } = useParams()

    const [item, setItem] = React.useState({
        images: {}
    })

    const fetchItem = async () => {

        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`)
        const item = await data.json()

      
        setItem(item.data.item);
    }

    React.useEffect(() => {

        fetchItem();
    }, []);


    console.log(item)
    
    return (
        <div className="item">
            <h1>{item.name}</h1>
            <img  src={item.images.icon}/>
            <h3>Price: {item.cost}</h3>
        </div>
    )
}



export default ShopItem;