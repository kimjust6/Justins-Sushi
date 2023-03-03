import { createSlice } from "@reduxjs/toolkit";
// import { product } from "../interface/interface";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state);
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount: (state, action) => {
            state.value = action.payload;
        },

        addToCart: (state, action) => {
            var item = state.filter((element) => element.id === action.payload.id);
            if (item.length === 0) {
                action.payload.quantity = 1;
                state.push(action.payload);
            } else {
                (item[0].quantity += 1);
            }
        },

        decrementFromCart: (state, action) => {
            
        },

        deleteFromCart: (state, action) => {
            return state.filter((element) => element.id !== action.payload.id);
        },

        emptyCart: (state) => {
            // state.value = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    increment,
    decrement,
    incrementByAmount,
    addToCart,
    decrementFromCart,
    deleteFromCart,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
