import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
//#2
export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})