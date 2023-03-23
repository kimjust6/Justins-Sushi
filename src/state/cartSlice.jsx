import { createSlice } from "@reduxjs/toolkit";
// import { product } from "../interface/interface";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // incrementCartItem: (state, action) => {
        //     this.addToCart(state, action);
        // },

        addToCart: (state, action) => {
            var item = state.filter((element) => element.id === action.payload.id);
            if (item.length === 0) {
                action.payload.quantity = 1;
                state.push(action.payload);
            } else {
                item[0].quantity += 1;
            }
        },

        decrementCartItem: (state, action) => {
            var item = state.filter((element) => element.id === action.payload.id);
            if (item.length !== 0 && item[0].quantity > 1) {
                item[0].quantity -= 1;
            } else {
                return deleteFromCartHelper(state, action);
            }
        },

        deleteFromCart: (state, action) => {
            return deleteFromCartHelper(state, action);
        },

        emptyCart: (state) => {
            return [];
        },
    },
});

function deleteFromCartHelper(state, action) {
    return state.filter((element) => {
        return element.id !== action.payload.id;
    });
}

// Action creators are generated for each case reducer function
export const {
    // incrementCartItem,
    addToCart,
    decrementCartItem,
    deleteFromCart,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
