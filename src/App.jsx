/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Blog from "./pages/blog";
import "./App.css";
import ShopContext from "./components/shopcontext";
import Details from "./pages/details";
import Sidebar from "./components/Sidebar";
import Chart from "./chart/Chart";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="part" element={<Chart />} />
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgotpassword" element={<ForgotPassword />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="details" element={<Details />} />

              <Route path="sidebar" element={<Sidebar />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App;
