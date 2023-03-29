import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:false
}
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        carttrue(state){
            state.cart=true

        },
        cartfalse(state){
            state.cart=false
        }
    }
})
export const cartaction=cartSlice.actions