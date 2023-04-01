import { useDispatch, useSelector,} from 'react-redux';
import { cartaction } from '../../Store/CartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const total=useSelector(state=>state.cart.totalquantity)

  const clickhandler=()=>{
   
      dispatch(cartaction.cartshow());

  }
  return (
    <button className={classes.button} onClick={clickhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
