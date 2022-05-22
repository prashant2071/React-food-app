// import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './Store/CartProvider';
function App() {
  const [cartOpen,setCartOpen] =useState(false); 

  const OpenCartHandler = () =>{
    setCartOpen(true);
  }
  const closeCartHandler = () =>{
    setCartOpen(false);
  }
  return (
    <CartProvider>
    {cartOpen && <Cart onCloseCart = {closeCartHandler} />}
    <Header onShowCart = {OpenCartHandler}/>
    <main>
    <Meals/>
    </main>
    </CartProvider>  );
}

export default App;
