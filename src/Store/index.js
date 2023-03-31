import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
import ProductSlice from "./ProductSlice"




 const store=configureStore({
   
      reducer:{ui:CartSlice.reducer,cart:ProductSlice.reducer}
    
})
export default store