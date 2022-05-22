import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCardButton =(props)=>{
    const cartctx = useContext(CartContext);

    const numberofCartitems = cartctx.items.reduce((currNumber,item )=>{
        return currNumber + item.amount
    },0)


    return (<button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartitems}</span>
    </button>)
}
export default HeaderCardButton;