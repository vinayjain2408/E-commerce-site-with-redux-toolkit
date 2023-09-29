import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slice/Sliderslice"
import productsReducer from "../features/slice/ProductSlice"
import cartReducer from "../features/slice/CardSlice"

export const store = configureStore({
    reducer : {
        slider : slideReducer,
        products : productsReducer,
        cart: cartReducer,
    }
})