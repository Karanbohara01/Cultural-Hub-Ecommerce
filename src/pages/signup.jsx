
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState(""); // New state for error message

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const validateEmail = (email) => {
    // Use a simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required!");
    } else if (!validateEmail(email)) {
      setError("Invalid email address!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      try {
        const response = await axios.post(
            "http://localhost:8787/system-user/save",
            {
              username: username,
              email: email,
              password: password,
            }
        );

        if (response.data.data === "Email already exists!") {
          // If register success, show notification
          toast.error("Email already exists!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log("Response data status:", response.data);
          navigate("/student/sign-up");
        } else {
          // If the server indicates an error, display the error message
          toast.info("Registered Successfully!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          navigate("/login");
        }
      } catch (error) {
        // Check for the specific error message in the error response
        if (
            error.response &&
            error.response.status === 500 &&
            error.response.data.includes(
                "duplicate key value violates unique constraint"
            )
        ) {
          // Display toast message for duplicate key
          toast.error(
              "User with the provided email and username already exists",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              }
          );
        } else {
          // Show a generic error toast
          toast.error("Error saving user. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error("Error saving user:", error);
        }
      }
    }
  };

  return (
      <>
        <div className="sign-up-container">
          <div className="container">
            <div className="row justify-content-center ">
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="col-md-6">

                <div style={{width:450,height:630}} className="card mt-2  shadow">
                  <div className="card-body">
                    <h1 style={{color:'orangered'}} className="text-center ">Sign Up</h1>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                    )}
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <div className="input-group">
                          <input
                              type={showPassword.password ? "text" : "password"}
                              className="form-control"
                              id="password"
                              value={password}
                              onChange={handlePasswordChange}
                              required
                          />
                          <span style={{backgroundColor:"black",color:'white'}}
                              className="input-group-text cursor-pointer"
                              onClick={() => toggleShowPassword("password")}
                          >
                          {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password
                        </label>
                        <div className="input-group">
                          <input
                              type={
                                showPassword.confirmPassword ? "text" : "password"
                              }
                              className="form-control"
                              id="confirmPassword"
                              value={confirmPassword}
                              onChange={handleConfirmPasswordChange}
                              required
                          />
                          <span style={{backgroundColor:"black",color:'white'}}
                              className="input-group-text cursor-pointer"
                              onClick={() => toggleShowPassword("confirmPassword")}
                          >
                          {showPassword.confirmPassword ? (
                              <FaEyeSlash />
                          ) : (
                              <FaEye />
                          )}
                        </span>
                        </div>
                      </div>
                      <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                      >
                        <button
                            type="button"
                            className="btn btn-dark mb-2"
                            onClick={handleSignUp}
                        >
                          Register
                        </button>
                        <Link
                            style={{ textDecoration: "none", color: "orangered" }}
                            to="/login"
                            className="ms-2 btn btn-link"
                        >
                          Already A Member?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default SignUp;









