import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";

export const store = configureStore({
    reducer: {
        nav: navigationReducer
    }
})