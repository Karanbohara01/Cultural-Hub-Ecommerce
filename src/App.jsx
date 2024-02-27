/* eslint-disable no-unused-vars */
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
// import ForgotPassword from "./pages/forgotpassword";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Blog from "./pages/blog";
import "./App.css";
import ShopContext from "./components/shopcontext";
import Details from "./pages/details";
import Sidebar from "./components/Sidebar";
import Chart from "./chart/Chart";
import AdminDashboard from "./Admin/Dashboard/Components/Dashboard.jsx";
import MyCalendar from "./Admin/Dashboard/Pages/Calendar.jsx";
import Message from "./Admin/Dashboard/Pages/Message.jsx";
import BasicPie from "./Admin/Dashboard/Charts/PieChart.jsx";

import BarChartComponent from "./Admin/Dashboard/Charts/BarChart.jsx";
import ViewProfile from "./Admin/Dashboard/Profile/MyProfile.jsx";
import StudentProfile from "./Admin/Dashboard/Profile/CreateProfile.jsx";
import ForgotPassword from "./pages/forgotpassword.jsx";
import AdminOrderPage from "./Admin/Dashboard/Pages/Order.jsx";
import AdminProductsPage from "./Admin/Dashboard/Pages/AdminProducts.jsx";
import ViewProduct from "./Admin/Dashboard/Pages/ViewProduct.jsx";
import OrderForm from "./pages/Order.jsx";
import CartForm from "./components/Cart.jsx";
import BlogForm from "./pages/AddBlog.jsx";
import Blogs from "./Admin/Dashboard/Pages/Blogs.jsx";
import NewArrivalsAdmin from "./Admin/Dashboard/Pages/NewArrivalsAdmin.jsx";
import FeaturedProductsAdmin from "./Admin/Dashboard/Pages/FeaturedProductsAdmin.jsx";
import AdminNewsletter from "./Admin/Dashboard/Pages/AdminNewsLetter.jsx";
import ImageDownloader from "./pages/imageDownloader.jsx";
import Navbar from "./Admin/Dashboard/Components/DEMO.jsx";
import {Category} from "@mui/icons-material";


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
              {/*<Route path="shop" element={<Shop />} />*/}
              <Route path="shop" element={<ViewProduct />} />
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

            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="calendar" element={<MyCalendar />} />
            <Route path="message" element={<Message/>} />
            <Route path="pie" element={<BasicPie/>} />
            <Route path="bar" element={<BarChartComponent/>} />
            <Route path="profile" element={<ViewProfile/>} />
            <Route path="create-profile" element={<StudentProfile/>} />
            <Route path="orders" element={<AdminOrderPage/>} />
            <Route path="admin-products" element={<AdminProductsPage/>} />
            <Route path="order-form" element={<OrderForm/>} />
            <Route path="cart-form" element={<CartForm/>} />
            <Route path="order-form" element={<OrderForm/>} />
            <Route path="add-blog" element={<BlogForm/>} />
            <Route path="handle-blog" element={<Blogs/>} />
            <Route path="new-arrivals-admin" element={<NewArrivalsAdmin/>} />
            <Route path="featured-products-admin" element={<FeaturedProductsAdmin/>} />
            <Route path="admin-newsletter" element={<AdminNewsletter/>} />
            <Route path="image-downloader" element={<ImageDownloader/>} />
            <Route path="binita-navbar" element={<Navbar/>} />
            <Route path="category" element={<Category/>} />

          </Routes>
        </BrowserRouter>
      </ShopContext>
      <ToastContainer/>
    </>
  );
}

export default App;
