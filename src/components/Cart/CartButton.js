import { useDispatch, useSelector } from 'react-redux';
import { cartaction } from '../../Store/CartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart)
  const clickhandler=()=>{
    if(cart){
      dispatch(cartaction.cartfalse())
    }else{
      dispatch(cartaction.carttrue())
    }
   
    
  }
  return (
    <button className={classes.button} onClick={clickhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
