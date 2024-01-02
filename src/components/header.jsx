import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip p-1 shadow-sm">
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
    </>
  );
};

export default Header;
