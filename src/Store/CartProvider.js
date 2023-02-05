import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("the added item is ADD");
    console.log("the state is", state.items);
    console.log("the action is", action);
    // const existingItem = state.items.some(item=>{
    //   return item.name===action.item.name   //it is used find that item is already repeated or not it give bool response
    // }) ;
    const existingItemIdex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log("the existing item index is", existingItemIdex); //it is use
    const existingCartItem = state.items[existingItemIdex]; // it is like a[1]
    console.log('the existing cart item',existingCartItem);
    let updatedItems;
    if (existingCartItem) {
     const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIdex] = updatedItem;
    }
    else{
      updatedItems=state.items.concat(action.item);

    }
    // console.log('the updateed item is ',updatedItems);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if(action.type==="REMOVE"){
    console.log('In action type REMOVE');
    const existingCartItemIndex = state.items.findIndex(item=>item.id==action.id);
    // console.log('###########################3333',existingCartItemIndex);
    let updatedItem;
    let updatedItems;
    const existingItem=state.items[existingCartItemIndex];
    console.log('the updated item is',existingItem)
    if(existingItem.amount===1){
      console.log('the updated item  IF CASE amount ===1')
      updatedItems = state.items.filter(item=>item.id!==action.id)
      console.log('the updated items  is ',updatedItems);
    }
    else{
      console.log('THE AMOUNT DECREASE BY 1 ELSE CASE');
      updatedItem = {...existingItem,amount: existingItem.amount -1}
      console.log('THE UPDATED AMOUNT IS',updatedItem)
      updatedItems =[...state.items];
      updatedItems[existingCartItemIndex] =updatedItem
      console.log('updatedItems ===========',updatedItems)

    }
    console.log('the updated items are',updatedItems)
    const updatedAmount = state.totalAmount - existingItem.price;
    return {
      items:updatedItems,
      totalAmount:updatedAmount
    }
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartstate, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartState({
      type: "ADD",
      item: item,
    });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartState({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
