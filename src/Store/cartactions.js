import axios from "axios";

import { cartaction } from "./CartSlice";
import { ProductAction } from "./ProductSlice";

export const fetchdata=()=>{
    return async(dispatch)=>{
        const fetchcart=async()=>{
            const response=await axios.get("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/cart/.json")
            if(!response.ok){
                throw new Error("something went wrong")
            }
            const data= await response.json();
            return data
        }
        try{
            const cartdata=await fetchcart()
            dispatch(ProductAction.replace(cartdata))
            
            dispatch(cartaction.shownotify({
                status:"success",
                title:"success",
                message:"data fetch successfully!"
              }))
        } catch(error){
          
        }
    }
}

export const Cartaction= (cartitems)=>{

    return async (dispatch)=>{
         
            dispatch(cartaction.shownotify({
              status:"pending",
              title:"sending",
              message:"data is sending"
            }))
            const senddata=async()=>{
                const response=await axios.put("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/cart/.json",cartitems)
                if(!response.ok){
                
                 
            
                }
              
                
            }
            try{
                await senddata()
                dispatch(cartaction.shownotify({
                    status:"success",
                    title:"success",
                    message:"data sent successfully!"
                  }))
            } catch(error){
                dispatch(cartaction.shownotify({
                    status:"error",
                    title:"error",
                    message:"network error"
                  }))

            }
           
          
    }
   
    
}
