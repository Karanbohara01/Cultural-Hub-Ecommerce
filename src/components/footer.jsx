import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import pay from "../assets/images/pay/pay.png";

const footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-5">Contact us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b>
                  Balkumari, Lalitpur
                </p>
                <p className="mb-3">
                  <b>Phone:</b>
                  <a href="tel:+977-9828848192">Call us +977-9828848192</a>
                </p>
                <p className="mb-5">
                  <b>Hours Open:</b>8 am to 5pm
                </p>
                <p className="mb-3">
                  <b>Follow Us</b>
                </p>
                <div className=" col-4 mb-3 social-icons  d-flex justify-content-around ">
                  <Link>
                    <FaFacebook className="fs-5" />
                  </Link>
                  <Link>
                    <AiFillTwitterCircle className="fs-4" />
                  </Link>

                  <Link>
                    <BiLogoInstagramAlt className="fs-4" />
                  </Link>
                  <Link>
                    <IoLogoLinkedin className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">About </h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Tax Policy</Link>
                <Link className="mb-3">Fee Policy</Link>
                <Link className="mb-3">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">Contact </h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3 ">View Cart</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3 ">Payments</Link>
                <Link className="mb-3 ">My Orders</Link>
                <Link className="mb-3 ">My Wishlist</Link>
                <Link className="mb-3 ">Coupons</Link>
              </div>
            </div>
            <div className="col-4 ">
              <h3 className="mb-3">Install App</h3>
              <div className="footer-details">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay">
                  <Link>
                    <img src={google} alt="" className="img-fluid p-4 my-3" />
                  </Link>

                  <Link>
                    <img src={app} alt="" className="img-fluid p-4 my-3" />
                  </Link>
                </div>
                <p className="mb-3">Payment Methods</p>
                <Link className="pay">
                  <img src={pay} alt="" className="img-fluid p-3 " />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <p>&copy; Developed By Karan Bohara 2024</p>
            </div>
            <div className="col-3 d-flex justify-content-between">
              <Link className="text-black">Terms Of Use</Link>
              <Link className="text-black">Privacy Policy</Link>
              <Link className="text-black">Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
