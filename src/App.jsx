import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="account" element={<Account />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
