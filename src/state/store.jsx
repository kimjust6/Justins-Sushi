import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counterslice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
