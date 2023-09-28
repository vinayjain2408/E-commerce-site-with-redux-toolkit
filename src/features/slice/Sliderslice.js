import { createSlice  } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";
export const sliderSlice = createSlice({
    name : "slider",
    initialState : {
        value : 0 ,
        length : sliderData.length,
    },
    reducers : {
        nextSlider(state , action){
            console.log("action" , action.payload)
            console.log("state" , state)
            state.value = action.payload > state.length -1 ? 0 : action.payload
        },
        prevSlider(state , action){
            state.value = action.payload <0 ? state.length -1: action.payload
        },
        dotSlider(state , action){
            const slide = action.payload;
            console.log("dot" , slide)
            state.value = slide
        },
    }
})

export const {nextSlider , prevSlider , dotSlider } = sliderSlice.actions
export default sliderSlice.reducer