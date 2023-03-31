import { createSlice } from "@reduxjs/toolkit";

const intitialCart={cartitems:[]}
 const ProductSlice=createSlice({
    name:"products",
    initialState:intitialCart,
    reducers:{
        addtocart(state,action){
          
            const newitem=action.payload;
            const existingitem=state.cartitems.find(item=>item.title===newitem.title)
            if(!existingitem){
                state.cartitems.push({...newitem,quantity:1})
            } else{
               existingitem.quantity++
            }
        }
    }
})

export const ProductAction=ProductSlice.actions
export default ProductSlice