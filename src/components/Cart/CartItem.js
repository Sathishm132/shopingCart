import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../../Store/ProductSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const cartitems=useSelector(state=>state.cart.cartitems)
  const dispatch=useDispatch();
  const { title, quantity, total, price ,id} = props.item;
  const newitem={
    title:title,
    total:total,
    price:price,
    id:id,

  }
   const deletehandler=()=>{
    
    let newcartitem=[...cartitems]
            
    const id=newitem.id;
    const existingitem=newcartitem.find(item=>item.id===id)
    if(existingitem.quantity===1){
     newcartitem=newcartitem.filter((item)=>item.id!==id)
        
    }else{
       const index=newcartitem.findIndex(item=>item.id===id)
       newcartitem[index]={...existingitem,quantity:existingitem.quantity-1,totalprice:existingitem.totalprice-existingitem.price}
       
    }

    dispatch(ProductAction.removecart(newcartitem))

  }
  const addhandler=()=>{
    const newcartitem=[...cartitems]
    const existingitem=newcartitem.find(item=>item.title===newitem.title)
    if(!existingitem){
        newcartitem.push({...newitem,quantity:1})
    } else{
       const index=newcartitem.findIndex(item=>item.id===newitem.id)
       newcartitem[index]={...existingitem,quantity:existingitem.quantity+1,totalprice:existingitem.totalprice+newitem.price,}
       
    }
    dispatch(ProductAction.addtocart(newcartitem))


  }

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deletehandler}>-</button>
          <button onClick={addhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
