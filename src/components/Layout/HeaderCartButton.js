import { useContext ,useEffect,useState} from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCardButton =(props)=>{
    const cartctx = useContext(CartContext);
    const {items,totalAmount} =cartctx

    const numberofCartitems = items.reduce((currNumber,item )=>{
        return currNumber + item.amount
    },0)

    const [btnHighligted, setbtnHighlighted] = useState(false);
    const btnClasses=`${classes.button} ${btnHighligted  &&(classes.bump)} `;

    useEffect(()=>{
        if(items.length===0)return;
        setbtnHighlighted(true);
       const timer= setTimeout(()=>{
            setbtnHighlighted(false);
        },300)
        return () =>{
            clearTimeout(timer)
        }
    },[items])


    return (<button className={btnClasses} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartitems}</span>
    </button>)
}
export default HeaderCardButton;