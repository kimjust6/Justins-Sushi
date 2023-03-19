import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const descriptionModal = createSlice({
    name: "menuItemModal",
    initialState,
    reducers: {
        setModal(state, action) {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModal } = descriptionModal.actions;

export default descriptionModal.reducer;
