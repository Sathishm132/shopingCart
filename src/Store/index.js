import { cartSlice } from "./CartSlice";

const { configureStore } = require("@reduxjs/toolkit");

 const store=configureStore({
    reducer:cartSlice.reducer
})
export default store