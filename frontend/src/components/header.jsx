// import React from "react";
// import { BiPhoneCall } from "react-icons/bi";
// import { IoIosMail } from "react-icons/io";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/images/apneck.png";
// import { HiOutlineInboxIn } from "react-icons/hi";
// import { VscAccount } from "react-icons/vsc";
// import { MdShoppingBasket } from "react-icons/md";
// import { pink } from "@material-ui/core/colors";

// const Header = () => {
//   const Location = useLocation();
//   return (
//     <>
//       <header className="header-top-strip px-4 p-1 shadow-md">
//         <div className="container-xxl">
//           <div className="row align-items-center">
//             <div className="col-6">
//               <p>The trending outfits at 100% off</p>
//             </div>
//             <div className="col-6 d-flex justify-content-between">
//               <div>
//                 <a href="tel:+977-9828848192">Call us +977-9828848192</a>
//               </div>
//               <div>
//                 <Link to="tel:+977-9828848192">
//                   <BiPhoneCall className="fs-3 mx-4" />
//                 </Link>
//                 <Link to="mailto:example@example.com">
//                   <IoIosMail className="fs-3 mx-4" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-upper px-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-2 text-center">
//               <Link to="/">
//                 <img src={logo} alt="" className="img-fluid logo" />
//               </Link>
//             </div>
//             <div className="col-3 d-flex align-items-center">
//               <div className="input-group">
//                 <span className="input-group-text" id="basic-addon1">
//                   All
//                 </span>
//                 <input
//                   type="text"
//                   className="form-control p-2"
//                   placeholder="Search products"
//                   aria-label="Recipient's username"
//                   aria-describedby="basic-addon2"
//                 />
//                 <button class="input-group-text" id="basic-addon2">
//                   Search
//                 </button>
//               </div>
//             </div>
//             <div className=" nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
//               <Link
//                 to={"/"}
//                 className={location.pathname === "/" ? "active" : "inactive"}
//               >
//                 Home
//               </Link>
//               <Link
//                 to={"shop"}
//                 className={
//                   location.pathname === "/shop" ? "active" : "inactive"
//                 }
//               >
//                 Shop
//               </Link>
//               <Link
//                 to={"blog"}
//                 className={
//                   location.pathname === "/blog" ? "active" : "inactive"
//                 }
//               >
//                 Blog
//               </Link>
//               <Link
//                 to={"contact"}
//                 className={
//                   location.pathname === "/contact" ? "active" : "inactive"
//                 }
//               >
//                 Contact
//               </Link>
//               <Link
//                 to={"about"}
//                 className={
//                   location.pathname === "/about" ? "active" : "inactive"
//                 }
//               >
//                 About
//               </Link>
//             </div>
//             <div className=" nav-links-nav col-3 d-flex align-items-center justify-content-around">
//               <Link
//                 to={"wishlist"}
//                 className={
//                   location.pathname === "/wishlist" ? "inactive" : "active"
//                 }
//               >
//                 <div className="d-flex">
//                   <span>
//                     <HiOutlineInboxIn className="fs-4 mx-2" />
//                   </span>
//                   <p>Wishlist</p>
//                 </div>
//               </Link>
//               <Link
//                 to={"login"}
//                 className={
//                   location.pathname === "/wishlist" ? "inactive" : "active"
//                 }
//               >
//                 <div className="d-flex">
//                   <span>
//                     <VscAccount className="fs-4 mx-2" />
//                   </span>
//                   <p>Account</p>
//                 </div>
//               </Link>
//               <Link
//                 to={"cart"}
//                 className={
//                   location.pathname === "/cart" ? "inactive" : "active"
//                 }
//               >
//                 <div className="d-flex">
//                   <span>
//                     <MdShoppingBasket className="fs-4 mx-2" />
//                   </span>
//                   <p>Cart</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { ShopContext } from "../components/shopcontext";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart, CgProductHunt } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import compare from "../assets/images/compare.svg";
import wishlist from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import logo from "../assets/images/apneck.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="navbar-top p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
              <div className="col-md-8 me-auto">
                <p className="text-black">The trending outfits at 100% off</p>
              </div>
              <div className="col-md-2">
                <a href="tel:+">Call us at +977-9828848192</a>
              </div>
              <div className="col-md">
                <Link className="links fs-4">
                  <CiMail />
                </Link>
                <Link className="links fs-4">
                  <BiPhoneCall />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between d-md-none">
              <div className="col-md-6 me-auto">
                <p>Save Upto 100%</p>
              </div>
              <div className="col-md-2 m-auto">
                <a href="tel:+">Call us</a>
              </div>
              <div className="col-md-2 m-auto">
                <Link className="links fs-4">
                  <CiMail />
                </Link>
                <Link className="links fs-4">
                  <BiPhoneCall />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
        <div className="container-xxl">
          <div className="row align-items-center m-0">
            <div className="col-md-2 d-flex justify-content-center">
              <button
                className="navbar-toggler d-md-none "
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

                {/*<img src={logo} alt="logo" className="img-fluid logo" />*/}
               <Link to={"/"}>
                 <div style={{marginTop:10}}>
                   <h3 >Cultural-Hub</h3>

                 </div>
               </Link>
              <button className="cart-span fs-3 d-md-none">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "not-active"
                  }
                >
                  <CgShoppingCart />
                  <b>
                    {/*<span>{totalProducts}</span>*/}
                  </b>
                </Link>
              </button>
              <button className="cart-span-2 fs-3 d-md-none">
                <Link
                  to="login"
                  className={
                    location.pathname === "/login" ? "active" : "not-active"
                  }
                >
                  <VscAccount />
                </Link>
              </button>
            </div>
            <div className="col-md-10 row col-lg-10">
              <div className="col-md-3 m-auto">
                <div className="input-group d-none d-md-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
              </div>
              <div className="col-md-6 m-auto">
                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/"
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/shop"
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/blog"
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/about"
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/contact"
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to=""
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <CgProductHunt className="me-1 fs-2" />
                      </Link>
                    </div>
                    <div
                      className={
                        location.pathname === "login" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/login"
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <VscAccount className="me-1 fs-2" />
                      </Link>
                    </div>
                    <div
                      className={
                        location.pathname === "cart" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/cartItems"
                        className="d-flex align-items-center color-nav me-3 cart-span-one"
                      >
                        <CgShoppingCart className="me-1 fs-2" />
                        <div>
                          <p>
                            <b>
                              {/*<span>{totalProducts}</span>*/}
                            </b>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      to="/"
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      to="/shop"
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      to="/blog"
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      to="/contact"
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                </div>
                <div className="menu-bar__actions">
                  <div className="mb-2">
                    <Link
                      to=""
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={compare} alt="compare" className="d-none" />
                      <span>New</span>
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link
                      to=""
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={wishlist} alt="wishlist" className="d-none" />
                      <span>Wishlist</span>
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link
                      to="/login"
                      className={
                        location.pathname === "/login" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={user} alt="user" className="d-none" />
                      <span>Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
