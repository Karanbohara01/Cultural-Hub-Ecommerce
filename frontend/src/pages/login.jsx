
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import loginImage from "../../assets/images/login.png";
// import Header from "../../components/Header.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const userData = JSON.parse(atob(accessToken.split(".")[1]));
      if (userData?.role === "User") {
        navigate("/");
      } else if (userData?.role === "Admin") {
        navigate("/admin-dashboard");
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const backendUrl = "http://localhost:8787";

    try {
      const response = await axios.post(`${backendUrl}/authenticate`, {
        email,
        password,
      });
      const userData = response?.data?.data;

      localStorage.setItem("accessToken", userData?.token);
      localStorage.setItem("userId", userData?.userId);
      localStorage.setItem("email", userData?.email);
      localStorage.setItem("username", userData?.username);
      localStorage.setItem("role", userData?.role);

      if (userData?.role === "User") {
        window.location.href = "/";
      } else if (userData?.role === "Admin") {
        window.location.href = "/admin-dashboard";
      } else {
        setError("Username/Password Mismatch");
      }
    } catch (error) {
      console.error("Authentication Failed!", error);
      toast.error("Username/Password Mismatch! Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setError("Authentication Failed!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
      >
        {/* <Header /> */}
        <div className="container ">
          <div className="row justify-content-center align-items-center ">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    height: 500,
                    width: 400,
                    backgroundColor: "white",
                    marginTop: 40,
                    marginBottom: 40,
                    // border: "3px solid ",
                    borderRadius: 12,
                    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s ease-in-out",
                  }}
                  className="card"
              >
                <div
                    style={{ backgroundColor: "", width: 370, marginTop: 30 }}
                    className="card-body"
                >
                  <center>
                    <h3>Welcome Back !</h3>
                  </center>

                  <h1
                      style={{ color: "orangered" }}
                      className="text-center mb-4 k"
                  >
                    Login
                  </h1>

                  {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                  )}
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                      />
                      <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                      />
                      <span
                          className="input-group-text"
                          onClick={togglePasswordVisibility}
                      >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="/forgotpassword" className="float-end mb-4">
                      Forgot Password?
                    </a>
                  </div>
                  <button
                      onClick={handleLogin}
                      type="submit"
                      className="btn btn-success w-100"
                      style={{ backgroundColor: "black" }}
                  >
                    Login
                  </button>
                  <div className="mt-2 text-center mb-4">
                    <p>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Don't have an account? <a href="/signup">Register</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
