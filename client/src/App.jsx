import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import RelatedProducts from './components/RelatedProducts';
import Item from './pages/Item';

const App = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<AllProducts/>} />
          <Route path="/products/item" element={<Item/>} />
          <Route path="/products/*" element={<Product/>} />
          <Route path="/related" element={<RelatedProducts/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
  )
}

export default App
