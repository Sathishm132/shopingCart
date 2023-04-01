import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  
  const cartitems=useSelector(state=>state.cart.cartitems)
  const Cart=cartitems.map(item=>(<CartItem key={item.id} item={{id:item.id,title:item.title,quantity:item.quantity,price:item.price, total:item.totalprice}}></CartItem>))
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      
        {Cart}
      </ul>
    </Card>
  );
};

export default Cart;
