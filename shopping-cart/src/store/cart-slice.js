import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./notification-slice";

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


export const  sendCardData = (cart)=> {
    return async (dispatch) => {
        const sendRequest = async () => {
            dispatch(notificationActions.showNotification({
                open: true,
                message: "Sending request",
                type: 'warning'
            }));

            const resp = await fetch(
                "https://shoppingcart-a62bb-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart)
                });

            const data = await resp.json;

            dispatch(notificationActions.showNotification({
                open: true,
                message: "Data sent succesfully",
                type: 'success'
            }));
        }

        try {
            await sendRequest()
        } catch (err) {
            dispatch(notificationActions.showNotification({
                open: true,
                message: "Error sending data",
                type: 'error'
              }));
        }
    }
}

export const cartActions = cartSlice.actions

export default cartSlice