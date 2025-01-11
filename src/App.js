import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homecard from './components/Homecard';
import LoginForm from './components/LoginForm';
import Product_List from './components/Sneakers';
import AddCart from './components/AddCart';
import Checkout from './components/Checkout';
import WishlistPage from './components/WishlistPage'; // New Wishlist Page import
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext'; // Import WishlistProvider
import Productviewcard from './components/Productviewcard';
import CustomerProfile from './components/CostomerProfile';
import { Link } from 'react-router-dom';
import ContactUs from './components/Contactus';
import OrdersList from './components/OrdersList';
import Dashboard from './components/Dashboard';
import ManageSellers from './components/ManageSellers'
function App() {
  return (
    <CartProvider>
        <Router>
          <Header />
          <Routes>
           
            <Route path="/home" element={<Homecard />} />
            <Route path="/" element={<Homecard />} />
            <Route path="/home/Product_List" element={<Product_List />} />
            <Route path="/productviewcard/:id" element={<Productviewcard />} />
            <Route path="/home/cart" element={<AddCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<WishlistPage />} /> {/* Add Wishlist route */}
            <Route path="home/products/:id" element={<Product_List />} />
            <Route path="/product/details/:id" element={<Productviewcard />} />
            <Route path="/customerProfile" element={<CustomerProfile/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/orders" element={<OrdersList/>}/>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path='managesellers' element={<ManageSellers/>}/>
          </Routes>
          <Footer />
        </Router>
    </CartProvider>
  );
}
export default App;