import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { cartaction } from './Store/CartSlice';
let initialstate=true;
function App() {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.ui.cart)
  const cartitems=useSelector(state=>state.cart.cartitems)
  const notification=useSelector(state=>state.ui.notification)

  useEffect(()=>{
   
   const senddata=async()=>{ 
    dispatch(cartaction.shownotify({
      status:"pending",
      title:"sending",
      message:"data is sending"
    }))
    const response=await axios.put("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/cart/.json",cartitems)
    if(!response.ok){
      dispatch(cartaction.shownotify({
        status:"error",
        title:"error",
        message:"network error"
      }))

    }
    dispatch(cartaction.shownotify({
      status:"success",
      title:"success",
      message:"data sent successfully!"
    }))
          }
          if(initialstate){
            initialstate=false
            return;
          }
          senddata().catch((error)=>{
            dispatch(cartaction.shownotify({
              status:"error",
              title:"error",
              message:"network error"
            }))
          })
         
  },[cartitems,dispatch])
  
  return (
    <>
    {notification&&<Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {cart&&<Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
