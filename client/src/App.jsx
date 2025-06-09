import React,{useContext} from 'react'
import Home from './pages/Home'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import RelatedProducts from './components/RelatedProducts';
import Item from './pages/Item';
import LoginSignup from './components/LoginSignup';
import Cart from './pages/Cart';
import SuccessPage from './pages/SuccessPage';
import AddAddress from './pages/AddAddress';
import { ThemeContext } from './context/ThemeContext';
import { Navigate } from 'react-router-dom';
import Seller from './pages/Seller';
import { ThemeProvider } from './context/ThemeContext';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/success";
  const hideFooter = location.pathname === "/success" || location.pathname==="/seller";
    const { search } = useContext(ThemeContext);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {search.length ? <Route path="/products" element={<AllProducts/>} /> :  <Route path="/" element={<Home/>} />}
          <Route path="/" element={search.length ? <Navigate to="/products"/> : <Home/>} />
          <Route path="/products" element={<AllProducts/>} />
          <Route path="/products/:id" element={<Item/>} />
          <Route path="/products/category/*" element={<Product/>} />
          <Route path="/related" element={<RelatedProducts/>} />
          <Route path="/sign" element={<LoginSignup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/success" element={<SuccessPage/>} />
          <Route path="/add-address" element={<AddAddress/>} />
          <Route path="/seller" element={<Seller/>} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
        <Router>
    <AppContent />
  </Router>
  </ThemeProvider>

);

export default App;
