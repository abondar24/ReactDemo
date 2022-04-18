import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import loginSlice from "./login-slice";
import notificationSlice from "./notification-slice";


const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        cart: cartSlice.reducer,
        notification: notificationSlice.reducer
    }
});


export default store