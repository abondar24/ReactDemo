import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        itemsTotal:0,
        showCart: false
    },


    reducers: {
        addToCart(state,action) {
            const newItem = action.payload;

            const existingItem = state.items.find((item)=>item.id === newItem.id);

            if (existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });

              state.itemsTotal++;  
            }


        },
        removeFromCart() {},
        setShowCart(state) {
            state.showCart=true;
        }
    }
})


export const cartActions = cartSlice.actions

export default cartSlice;