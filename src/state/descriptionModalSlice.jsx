import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const descriptionModal = createSlice({
    name: "menuItemModal",
    initialState,
    reducers: {
        setModal(state, action) {
            state.value = action.payload;
            state.isOpen = true;
        },
        clearModal(state, action) {
            state.value = {}
            state.isOpen = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModal, clearModal } = descriptionModal.actions;

export default descriptionModal.reducer;
