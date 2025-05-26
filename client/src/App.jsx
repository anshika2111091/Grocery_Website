import React from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Hero from './components/Hero'
import Seller from './components/Seller'
import Contact from './components/Contact'
import Features from './components/Features'

const App = () => {
  return (
    <div><Navbar/>
      <Hero/>
    <Categories/>
    <Seller/>
    <Features/>
    <Contact/>
  </div>
  )
}

export default App
