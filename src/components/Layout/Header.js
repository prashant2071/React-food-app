import React from "react";
import mealimage from "./../../assets/image/meals.jpg";
import HeaderCardButton from "./HeaderCartButton";
import classes from "./Headers.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        {/* <button className={classes.cartbutton}>Cart</button> */}
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimage} alt="a table full of delicious food"></img>
      </div>
    </>
  );
};
export default Header;
