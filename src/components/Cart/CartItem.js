import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  // const closeHandler = (e) =>{
  //   e.preventDefault();
  //   console.log('hello')
  //   const keyEvent = new KeyboardEvent("keypress", { ctrlKey: true,key:"w"});
    
  //   console.log('keyevent',keyEvent)
  //   document.body.dispatchEvent(keyEvent);
  // }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        {/* <button onClick={closeHandler}>fsdfsdfas</button> */}
      </div>
    </li>
  );
};

export default CartItem;
