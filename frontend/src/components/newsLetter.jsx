/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8787/user/news-letter/save", {
        email: email,
      });

      console.log("Newsletter subscription successful", response.data);

      // Show success toast
      toast.success("Newsletter subscription successful", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Additional logic here, such as clearing the email input or redirecting the user
    } catch (error) {
      console.error("Error subscribing to newsletter:", error.message);

      // Show error toast
      toast.error("Error subscribing to newsletter", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Handle error - you can display an error message to the user or take other actions.
    }
  };

  return (
      <>
        <section className="news-letter p-5">
          <div className="container-xxl">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="d-flex flex-column align-items-center">
                  <h2 style={{ color: "orangered" }} className="mb-3">
                    Sign Up for a newsletter
                  </h2>
                  <h5>
                    Get email updates on all our{" "}
                    <Link to="/">special offers</Link>
                  </h5>
                </div>
              </div>
              <div className="col-md-6 details d-flex flex-column justify-content-center">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                        type="text"
                        id="news-input"
                        className="form-control"
                        placeholder="@example.com"
                        aria-label="@example.com"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        type="submit"
                        className="input-group-text"
                        id="basic-addon2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </>
  );
};

export default Newsletter;
