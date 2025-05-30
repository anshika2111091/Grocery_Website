import React from 'react'
import Categories from '../components/Categories'
import Seller from '../components/Seller'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Hero from "../components/Hero"
const Home = () => {
  return (
   <>
    <Hero/>
    <Categories/>
    <Seller/>
    <Features/>
    <Contact/>
   </>
  )
}

export default Home