import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/images/apneck.png";
import { HiOutlineInboxIn } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
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
                <img src={logo} alt="" className="img-fluid logo" />
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
              <Link to={"/"}>Home</Link>
              <Link to={"shop"}>Shop</Link>
              <Link to={"blog"}>Blog</Link>
              <Link to={"contact"}>Contact</Link>
              <Link to={"about"}>About</Link>
            </div>
            <div className=" nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link to={"wishlist"} className="d-flex">
                <HiOutlineInboxIn className="fs-4 mx-2" />
                <span>Wishlist</span>
              </Link>
              <Link to={"account"} className="d-flex">
                <VscAccount className="fs-4 mx-2" />
                <span>Account</span>
              </Link>
              <Link to={"cart"} className="d-flex">
                <MdShoppingBasket className="fs-4 mx-2" />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
