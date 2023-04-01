import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../../Store/ProductSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const cartitems=useSelector(state=>state.cart.cartitems)
  const { title, price, description, id} = props;
  const newitem={
    title:title,
    price:price,
    description:description,
    id:id,
    totalprice:price
  }
  const dispatch=useDispatch()
  const additemhandler=()=>{
    const newcartitem=[...cartitems]
    const existingitem=newcartitem.find(item=>item.title===newitem.title)
    if(!existingitem){
        newcartitem.push({...newitem,quantity:1})
    } else{
       const index=newcartitem.findIndex(item=>item.id===newitem.id)
       newcartitem[index]={...existingitem,quantity:existingitem.quantity+1,totalprice:existingitem.totalprice+newitem.price}
       
    }
    dispatch(ProductAction.addtocart(newcartitem))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={additemhandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
