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
            state.push(action.payload);
            // var index = state.id.findIndex((element) => {
            //     console.log(element)
            //     return element === action.payload.id;
            // });
            // // console.log(index);
            // if (index < 0) {
            //     state.id.push(action.payload.productID);
            //     state.price.push(action.payload.price);
            //     state.description.push(action.payload.description);
            //     state.quantity.push(1);
            // } else {
            //     state.quantity[index]++;
            // }
        },

        decrementFromCart: (state, action) => {
            // var temp = state.value.find(
            //     (element) => element.productID === action.payload.productID
            // );
            // temp.itemCount--;
            // if (temp.itemCount <= 0) {
            //     state.value = state.value.filter(
            //         (element) => element.productID !== action.payload.productID
            //     );
            // }
            // state.value[action.payload.productID].itemCount =
            //     state.value[action.payload.productID]?.itemCount - 1 ?? 0;
        },

        deleteFromCart: (state, action) => {
            // state.value[action.payload.productID] = 0;
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
