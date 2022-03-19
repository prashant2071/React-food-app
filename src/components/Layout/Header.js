import React from "react";
import mealimage from './../../assets/image/meals.jpg'
import classes from './../Layout/Headers.component.css'
const Header = props =>{
return <>
<header className={classes.header}>
    <h1>Meals</h1>
    <button>Cart</button>
</header>
<div className={classes['main-image']} >
    <img src={mealimage} alt="a table full of delicious food"></img>
</div>
</>
};
export default Header;