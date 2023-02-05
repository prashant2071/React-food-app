import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
const Cart = (props) =>{
    // const cartItems=<ul className={classes['cart-items']}> {[{id:'c1',name:"sushi",amount:2,price:12999}]
    // .map((item ,index)=><li key={index}>{item.name}</li>)}
    // </ul>
const  cartCtx = useContext(CartContext);
const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`; 
console.log('the cart context item is ',cartCtx.items);
const hasItem = cartCtx.items.length > 0;
const CartRemoveItem = (id) =>{
cartCtx.removeItem(id);
}
 const CartAddItem = item =>{
    cartCtx.addItem({...item,amount:1})
 }

    
return (<>
<div>
    <Modal onClose= {props.onCloseCart}>
    <ul className={classes['cart-items']}>{cartCtx.items.map((item,index)=>(
    //    <li key={index}>{item.name}</li>
    <CartItem
    key={item.id}
    price={item.price}
    name={item.name}
    amount={item.amount}
    onRemove={CartRemoveItem.bind(null,item.id)} 
    onAdd= {CartAddItem.bind(null,item)}/>
    ))}
    </ul>
    <div className={classes.total}>
    <span> Total Amount</span>
    <span>{totalAmount}</span>

    </div>
    <div className={classes.actions}>
        <button  className={classes['button--alt']} onClick={props.onCloseCart}>close</button>
        {hasItem &&( <button className={classes.button}>Order</button>)}

    </div>
    </Modal>
</div>
</>)
}
export default Cart;