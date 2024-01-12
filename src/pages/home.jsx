import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-lg p-3 text-white mt-3">
                Trade in Offer!
              </span>
              <h1>Super Value Deals</h1>
              <h2>On all Products</h2>
              <p className="text-black p-3 m-0">Save more with Cultural-Hub</p>
              <Link className="button-link mb-3">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
      <Hero />
    </>
  );
};

export default home;
