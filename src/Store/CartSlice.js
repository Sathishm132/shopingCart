import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:false
}
 const CartSlice=createSlice({
    name:"ui",
    initialState,
    reducers:{
        cartshow(state){
            console.log(state.cart)
            state.cart=!state.cart;
        },
       
    }
})
export const cartaction=CartSlice.actions
export default CartSlice;