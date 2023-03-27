import { createSlice } from "@reduxjs/toolkit";

const initialState = { subtotal: 0, cartArray: [], isOpen: false };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setIsCartOpen: (state, action) => {
            state.isOpen = action.payload;
            console.log(action);
        },

        addToCart: (state, action) => {
            var item = state.cartArray.filter((element) => element.id === action.payload.id);
            if (item.length === 0) {
                action.payload.quantity = 1;
                state.cartArray.push(action.payload);
            } else {
                item[0].quantity += 1;
            }
            state.subtotal += Number(action.payload.price);
        },

        decrementCartItem: (state, action) => {
            var item = state.cartArray.filter((element) => element.id === action.payload.id);
            state.subtotal -= Number(action.payload.price);
            if (item.length !== 0 && item[0].quantity > 1) {
                item[0].quantity -= 1;
            } else {
                state.cartArray = deleteFromCartHelper(state.cartArray, action);
                return state;
            }
        },

        deleteFromCart: (state, action) => {
            state.cartArray = deleteFromCartHelper(state.cartArray, action);
            let total = 0;
            for (let item of state.cartArray) {
                total += Number(item.price);
            }
            state.subtotal = total;
            return state;
        },

        emptyCart: (state) => {
            state.cartArray = [];
            return state;
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
    setIsCartOpen,
    addToCart,
    decrementCartItem,
    deleteFromCart,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
