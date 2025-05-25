import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import "./Components/assets/fonts/fonts.css";

// COMPONENTS
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./pages/Shop"; 
import Category from "./pages/Category";
import Shopcategory from "./pages/Shopcategory";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Services from "./pages/Services";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

// ASSETS
import artificial from "./assets/artificialbanner.png";
import fresh from "./assets/freshbanner.png";
import glassware from "./assets/glassbanner.png";
import decorations from "./assets/decorbanner.png";

function App() {
  return (
    <>{/*the main app that connecst it all*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Shopcategory />} />
        <Route path="/artificials" element={<Category banner={artificial} category="Artificial" />} />
        <Route path="/fresh-flowers" element={<Category banner={fresh} category="Fresh Flowers" />} />
        <Route path="/glassware" element={<Category banner={glassware} category="Glassware" />} />
        <Route path="/decorations" element={<Category banner={decorations} category="Decorations" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
