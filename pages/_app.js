import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {

  }, [])
  const [cart, setCart] = useState([])
  
  const [reloadKey, setReloadKey] = useState(1)
  
  const addToCart = (item, qty, price) => {
    let newCart = cart;
    console.log('Add to cart');
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    console.log(newCart);
    setCart(newCart)
    setReloadKey(Math.random())
  }

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }


  const clearCart = () => {
    setCart([])
  }
  return <>
    <Navbar key={reloadKey} cart={cart} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
    <Footer />
  </>
}
