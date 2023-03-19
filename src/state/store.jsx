import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import descriptionModal from "./descriptionModalSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        menuItemModal: descriptionModal,
    },
});
