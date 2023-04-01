import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:false,
    notification:null

}
 const CartSlice=createSlice({
    name:"ui",
    initialState,
    reducers:{
        cartshow(state){
           
            state.cart=!state.cart;
        },
        shownotify(state,action){
            state.notification=action.payload

        }
       
    }
})
export const cartaction=CartSlice.actions
export default CartSlice;