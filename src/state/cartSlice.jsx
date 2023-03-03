import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;   
        },
        incrementToAmount: (state, action) => {
            state.value = action.payload;
        },
        // addToCart:(state, action)=>{
        //     // state.value
        // }
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
