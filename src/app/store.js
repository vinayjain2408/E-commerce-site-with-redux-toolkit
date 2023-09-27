import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slice/Sliderslice"

export const store = configureStore({
    reducer : {
        slider : slideReducer,
    }
})