
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Cartaction, fetchdata } from './Store/cartactions';

let initialstate=true;
function App() {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.ui.cart)
  const cartitems=useSelector(state=>state.cart.cartitems)
  const notification=useSelector(state=>state.ui.notification)
  useEffect(()=>{
    dispatch(fetchdata())
  },[dispatch]);
  useEffect(()=>{
   
  
          
          if(initialstate){
            initialstate=false
            return;
          }
          dispatch(Cartaction(cartitems))
        
         
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
