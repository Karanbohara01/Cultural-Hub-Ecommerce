/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import '../assets/css/about.css'; // Assuming you have a CSS file for styling

import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import a6 from "../assets/images/about/a6.jpg";
import video from "../assets/images/about/1.mp4";
import orders from "../assets/images/icons/icon1.png";
import orders1 from "../assets/images/icons/icon2.png";
import orders2 from "../assets/images/icons/icon3.png";
import orders3 from "../assets/images/icons/icon4.png";
import orders4 from "../assets/images/icons/icon5.png";
import mobileImage from "../assets/images/mobileimage.jpg";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderVideoOrImage = () => {
    return isMobile ? (
      <img src={mobileImage} alt="Mobile Image" className="w-100" />
    ) : (
      <video loop muted autoPlay src={video} className="w-100"></video>
    );
  };

  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={a6} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1>
              <b>Who are we?</b>
            </h1>
            <p className="card-text mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
          </div>
        </div>
      </section>

      <section className="about-app p-5">
        <h2 className="fs-1 text-center mb-4">
          Download our <Link to="/">App</Link>
        </h2>
        <div className="col-12 p-5 col-md-8 mx-auto">
          {renderVideoOrImage()}
        </div>
      </section>

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            {/* Remaining code for customer testimonials */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
