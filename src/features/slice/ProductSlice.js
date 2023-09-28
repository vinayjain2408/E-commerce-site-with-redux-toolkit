import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsslice = createSlice({
  name: "products",
  initialState: {
    filterProducts:
    JSON.parse(sessionStorage.getItem("filterData")) || storeData
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProducts = filter ;
        console.log("filter" , filter)
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filterData" , saveState)
      } catch (error) {
        return error
      }
    },
    singleProduct(state,action){
        try{
            const oneProduct = storeData.filter((product)=> product.id === action.payload)
            state.singleProduct = oneProduct;
            const saveState = JSON.stringify(oneProduct);
            sessionStorage.setItem("oneProduct" , saveState)
            console.log("one Product" , oneProduct)
        }
        catch(err){
            return err
        }
    }
  },
});

export const { filterProducts , singleProduct} = productsslice.actions;

export default productsslice.reducer;
