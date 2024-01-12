import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/apneck.png";
import { HiOutlineInboxIn } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { MdShoppingBasket } from "react-icons/md";
import { pink } from "@material-ui/core/colors";

const Header = () => {
  const Location = useLocation();
  return (
    <>
      <header className="header-top-strip px-4 p-1 shadow-md">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+977-9828848192">Call us +977-9828848192</a>
              </div>
              <div>
                <Link to="tel:+977-9828848192">
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
                <Link to="mailto:example@example.com">
                  <IoIosMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-center">
              <Link to="/">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="img-fluid logo"
                />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  class="form-control p-2"
                  placeholder="Search products"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button class="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className=" nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : "inactive"}
              >
                Home
              </Link>
              <Link
                to={"shop"}
                className={
                  location.pathname === "/shop" ? "active" : "inactive"
                }
              >
                Shop
              </Link>
              <Link
                to={"blog"}
                className={
                  location.pathname === "/blog" ? "active" : "inactive"
                }
              >
                Blog
              </Link>
              <Link
                to={"contact"}
                className={
                  location.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </Link>
              <Link
                to={"about"}
                className={
                  location.pathname === "/about" ? "active" : "inactive"
                }
              >
                About
              </Link>
            </div>
            <div className=" nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link
                to={"wishlist"}
                className={
                  location.pathname === "/wishlist" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <HiOutlineInboxIn className="fs-4 mx-2" />
                  </span>
                  <p>Wishlist</p>
                </div>
              </Link>
              <Link
                to={"login"}
                className={
                  location.pathname === "/wishlist" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <VscAccount className="fs-4 mx-2" />
                  </span>
                  <p>Account</p>
                </div>
              </Link>
              <Link
                to={"cart"}
                className={
                  location.pathname === "/cart" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <MdShoppingBasket className="fs-4 mx-2" />
                  </span>
                  <p>Cart</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
// import React, { useContext, useState } from "react";
// import { ShopContext } from "../components/shopcontext";
// import { CiMail } from "react-icons/ci";
// import { BiPhoneCall } from "react-icons/bi";
// import { BsSearch } from "react-icons/bs";
// import { VscAccount } from "react-icons/vsc";
// import { CgShoppingCart, CgProductHunt } from "react-icons/cg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { NavLink, useLocation } from "react-router-dom";
// import compare from "../assets/images/compare.svg";
// import wishlist from "../assets/images/wishlist.svg";
// import user from "../assets/images/user.svg";
// import logo from "../assets/images/apneck.png";

// const header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();
//   const totalProducts = getTotalCartProducts();
//   const location = useLocation();
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <header className="navbar-top p-2">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
//               <div className="col-md-8 me-auto">
//                 <p className="text-black">The trending outfits at 100% off</p>
//               </div>
//               <div className="col-md-2">
//                 <a href="tel:+">Call us at +1 (234) 567-890</a>
//               </div>
//               <div className="col-md">
//                 <Link className="links fs-4">
//                   <CiMail />
//                 </Link>
//                 <Link className="links fs-4">
//                   <BiPhoneCall />
//                 </Link>
//               </div>
//             </div>
//             <div className="d-flex align-items-center  justify-content-between d-md-none">
//               <div className="col-md-6 me-auto">
//                 <p>Save Upto 100%</p>
//               </div>
//               <div className="col-md-2 m-auto">
//                 <a href="tel:+">Call us</a>
//               </div>
//               <div className="col-md-2 m-auto">
//                 <Link className="links fs-4">
//                   <CiMail />
//                 </Link>
//                 <Link className="links fs-4">
//                   <BiPhoneCall />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
//         <div className="container-xxl">
//           <div className="row align-items-center m-0">
//             <div className="col-md-2 d-flex justify-content-center">
//               <button
//                 className="navbar-toggler d-md-none "
//                 type="button"
//                 onClick={toggleMenu}
//               >
//                 <span className="navbar-toggler-icon">
//                   {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
//                 </span>
//               </button>

//               <Link to="/">
//                 <img src={logo} alt="logo" className="img-fluid logo" />
//               </Link>

//               <button className="cart-span fs-3 d-md-none">
//                 <Link
//                   to="cart"
//                   className={
//                     location.pathname === "/cart" ? "active" : "not-active"
//                   }
//                 >
//                   <CgShoppingCart />
//                   <b>
//                     <span>{totalProducts}</span>
//                   </b>
//                 </Link>
//               </button>

//               <button className="cart-span-2 fs-3 d-md-none">
//                 <Link
//                   to="login"
//                   className={
//                     location.pathname === "/login" ? "active" : "not-active"
//                   }
//                 >
//                   <VscAccount />
//                 </Link>
//               </button>
//             </div>

//             <div className="col-md-10 row col-lg-10">
//               <div className="col-md-3 m-auto">
//                 <div className="input-group d-none d-md-flex">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Find products ..."
//                     aria-label="Find products ..."
//                     aria-describedby="basic-addon2"
//                   />
//                   <button className="input-group-text" id="basic-addon2">
//                     search
//                   </button>
//                 </div>
//               </div>
//               <div className="col-md-6 m-auto">
//                 <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
//                   <div className="ms-auto gap-3">
//                     <NavLink
//                       to="/"
//                       className={
//                         location.pathname === "/" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       HOME
//                     </NavLink>
//                   </div>
//                   <div className="ms-auto gap-3">
//                     <NavLink
//                       to="/shop"
//                       className={
//                         location.pathname === "/shop" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       SHOP
//                     </NavLink>
//                   </div>
//                   <div className="ms-auto gap-3">
//                     <NavLink
//                       to="/blog"
//                       className={
//                         location.pathname === "/blog" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       BLOG
//                     </NavLink>
//                   </div>
//                   <div className="ms-auto gap-3">
//                     <NavLink
//                       to="/about"
//                       className={
//                         location.pathname === "/about" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       ABOUT
//                     </NavLink>
//                   </div>
//                   <div className="ms-auto gap-3">
//                     <NavLink
//                       to="/contact"
//                       className={
//                         location.pathname === "/contact"
//                           ? "active"
//                           : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       CONTACT
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="row d-flex justify-content-center">
//                   <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
//                     <div
//                       className={
//                         location.pathname === "/" ? "active" : "not-active"
//                       }
//                     >
//                       <Link
//                         onClick={toggleMenu}
//                         to=""
//                         className="d-flex align-items-center color-nav me-3"
//                       >
//                         <CgProductHunt className="me-1 fs-2" />
//                       </Link>
//                     </div>
//                     <div
//                       className={
//                         location.pathname === "login" ? "active" : "not-active"
//                       }
//                     >
//                       <Link
//                         onClick={toggleMenu}
//                         to="/login"
//                         className="d-flex align-items-center color-nav me-3"
//                       >
//                         <VscAccount className="me-1 fs-2" />
//                       </Link>
//                     </div>
//                     <div
//                       className={
//                         location.pathname === "cart" ? "active" : "not-active"
//                       }
//                     >
//                       <Link
//                         onClick={toggleMenu}
//                         to="/cart"
//                         className="d-flex align-items-center color-nav me-3 cart-span-one"
//                       >
//                         <CgShoppingCart className="me-1 fs-2" />
//                         <div>
//                           <p>
//                             <b>
//                               <span>{totalProducts}</span>
//                             </b>
//                           </p>
//                         </div>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {showMenu && (
//               <div className="col-md-10 d-md-none mt-3">
//                 <div className="input-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Find products ..."
//                     aria-label="Find products ..."
//                     aria-describedby="basic-addon2"
//                   />
//                   <button className="input-group-text" id="basic-addon2">
//                     search
//                   </button>
//                 </div>
//                 <div className="menu-links mt-2">
//                   <div className="mb-2">
//                     <NavLink
//                       className={
//                         location.pathname === "/" ? "active" : "not-active"
//                       }
//                       to="/"
//                       onClick={toggleMenu}
//                     >
//                       HOME
//                     </NavLink>
//                   </div>
//                   <div className="mb-2">
//                     <NavLink
//                       className={
//                         location.pathname === "/shop" ? "active" : "not-active"
//                       }
//                       to="/shop"
//                       onClick={toggleMenu}
//                     >
//                       SHOP
//                     </NavLink>
//                   </div>
//                   <div className="mb-2">
//                     <NavLink
//                       className={
//                         location.pathname === "/blog" ? "active" : "not-active"
//                       }
//                       to="/blog"
//                       onClick={toggleMenu}
//                     >
//                       BLOG
//                     </NavLink>
//                   </div>
//                   <div className="mb-2">
//                     <NavLink
//                       className={
//                         location.pathname === "/about" ? "active" : "not-active"
//                       }
//                       to="/about"
//                       onClick={toggleMenu}
//                     >
//                       ABOUT
//                     </NavLink>
//                   </div>
//                   <div className="mb-2">
//                     <NavLink
//                       className={
//                         location.pathname === "/contact"
//                           ? "active"
//                           : "not-active"
//                       }
//                       to="/contact"
//                       onClick={toggleMenu}
//                     >
//                       CONTACT
//                     </NavLink>
//                   </div>
//                 </div>

//                 <div className="menu-bar__actions">
//                   <div className="mb-2">
//                     <Link
//                       to=""
//                       className={
//                         location.pathname === "/" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       <img src={compare} alt="compare" className="d-none" />
//                       <span>New</span>
//                     </Link>
//                   </div>
//                   <div className="mb-2">
//                     <Link
//                       to=""
//                       className={
//                         location.pathname === "/" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       <img src={wishlist} alt="wishlist" className="d-none" />
//                       <span>Wishlist</span>
//                     </Link>
//                   </div>
//                   <div className="mb-2">
//                     <Link
//                       to="/login"
//                       className={
//                         location.pathname === "/login" ? "active" : "not-active"
//                       }
//                       onClick={toggleMenu}
//                     >
//                       <img src={user} alt="user" className="d-none" />
//                       <span>Account</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default header;
