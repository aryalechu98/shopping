import React, { useEffect } from 'react'
import Category from '../components/Category/Category'
import Footer from '../components/Footer'
import Header from '../components/Navbar/Header'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products/Products'
import Layout from './Layout'
import { useSelector } from 'react-redux'

const Home = () => {

      const cart=useSelector(state=>state.cart)

  useEffect(()=>{
    fetch('https://my-shopping-cart-c66be-default-rtdb.firebaseio.com/cartItems.json',
    {
      method:'PUT',
      body:JSON.stringify(cart),
    })
  },[cart])
  return (
    <div>
        
<Header/>
<Layout/>
<Category/>
<Products/>
<Newsletter/>
<Footer/>
        
    </div>
  )
}

export default Home