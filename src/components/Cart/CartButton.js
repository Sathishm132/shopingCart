import { useDispatch,} from 'react-redux';
import { cartaction } from '../../Store/CartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch=useDispatch();

  const clickhandler=()=>{
   
      dispatch(cartaction.cartshow());

  }
  return (
    <button className={classes.button} onClick={clickhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
