// Import necessary libraries
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace "YOUR_API_ENDPOINT" with the actual URL where your server is expecting the form data
      const response = await axios.post(
          "http://localhost:8787/user/message/save",
          formData
      );

      if (response.status === 200) {
        console.log("Message submitted successfully");
        // Show success toast
        toast.success("Message submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          emailAddress: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting message", error);
      // Show error toast
      toast.error("Error submitting message. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
      <>
        <ToastContainer /> {/* ToastContainer must be rendered at the top level */}
        <section style={{marginTop:20}} className="contact-wrapper p-5">
          <div  className="container-xxl">
            <div className="row">
              <div className="col-12 text-center">
                <h1 style={{color:'black',marginTop:120}} className=" text">Reach Out to Us</h1>
                <p style={{color:'black'}} className=" text fs-3">We are only a step away from you</p>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-wrapper-details p-5">
          <div className="container-xxl">
            <div className="row text-center align-items-center">
              <div className="col-lg-6 col-md-12 p-3">
                <div className="map card m-auto embed-responsive embed-responsive-16by9">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113881.16168956543!2d85.3240366742419!3d27.71724582238048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bd535c7f19%3A0x59162e6139a6d6a3!2sKathmandu!5e0!3m2!1sen!2snp!4v1668532780442!5m2!1sen!2snp"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card p-5">
                  <h2 className="footer-title mb-3">
                    <b style={{ color: "black" }}>Contact Us</b>
                  </h2>
                  <p className="mb-2">
                    <b>Address:</b> Balkumari, Lalitpur
                  </p>
                  <p className="mb-2">
                    <b>Phone:</b>{" "}
                    <a className="footer-tel" href="tel:+977-9828848192">
                      Call us at +977-9828848192
                    </a>
                  </p>
                  <p className="mb-4">
                    <b>Hours:</b> From 8 a.m To 6 p.m
                  </p>

                  <p>
                    Thank you for considering us! We appreciate your interest in
                    reaching out to our team at Cultural-Hub. Our office is
                    located in the vibrant area of Balkumari, Lalitpur, making it
                    convenient for you to connect with us.
                  </p>
                  <p>
                    If you have any questions, need assistance, or would like to
                    discuss collaboration opportunities, feel free to drop us a
                    message using the form below. We are committed to providing
                    timely responses and ensuring your experience with us is
                    smooth and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-message p-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
                <div className="card p-5">
                  <h2 className="text-center mb-4">Leave Us A message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                              type="text"
                              className="form-control"
                              placeholder="First name"
                              aria-label="First name"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                              aria-label="Last name"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                          />
                        </div>
                        <div className="col-12">
                          <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label mb-3"
                          >
                            Enter Your Email address
                          </label>
                          <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Email"
                              name="emailAddress" // Updated from "email" to "emailAddress"
                              value={formData.emailAddress}
                              onChange={handleChange}
                          />
                        </div>
                        <div className="col-12">
                          <label
                              htmlFor="exampleFormControlTextarea1"
                              className="form-label"
                          >
                            Type in your message
                          </label>
                          <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="col-12 text-center gap-2">
                          <button id="button-link" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Contact;
