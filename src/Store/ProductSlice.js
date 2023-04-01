import { createSlice } from "@reduxjs/toolkit";

const intitialCart={cartitems:[],totalquantity:0,}
 const ProductSlice=createSlice({
    name:"products",
    initialState:intitialCart,
    reducers:{
        addtocart(state,action){
            state.totalquantity++
            state.cartitems=action.payload
        },
        removecart(state,action){
            state.cartitems=action.payload
            state.totalquantity--
         
        },
        replace(state,action){
            state.cartitems=action.payload

        }

    }
})

export const ProductAction=ProductSlice.actions
export default ProductSlice