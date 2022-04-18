import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        itemsTotal: 0,
        showCart: false
    },


    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
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
        removeFromCart(state, action) {
            const id = action.payload.id;

            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== existingItem.id)
                state.itemsTotal--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }
})


export const cartActions = cartSlice.actions

export default cartSlice;