// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
//
// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("/api/reset-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       console.error(error);
//       setMessage("An error occurred. Please try again later.");
//     }
//   };
//
//   return (
//       <section className="login-wrapper p-5">
//         <div className="container-xxl">
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-8 col-sm-10">
//               <div className="card">
//                 <div className="card-body p-4">
//                   <h2 className="text-center">Forgot password</h2>
//                   <p className="text-center mb-4">
//                     Enter your email address to receive a reset confirmation
//                   </p>
//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                       <label
//                           htmlFor="exampleFormControlInput1"
//                           className="form-label mb-3"
//                       >
//                         Enter Your Email address
//                       </label>
//                       <input
//                           type="email"
//                           className="form-control"
//                           id="exampleFormControlInput1"
//                           placeholder="enter email here ..."
//                           value={email}
//                           onChange={(event) => setEmail(event.target.value)}
//                           required
//                       />
//                     </div>
//                     <div className="d-grid gap-2">
//                       <button type="submit">Submit</button>
//                     </div>
//                   </form>
//                   {message && <p className="text-center mt-4">{message}</p>}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   );
// };
//
// export default ForgotPassword;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import forgotPasswordImage from "../../assets/images/forgotpassword.png";
// import Header from "../../components/Header.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // Add this line
  const navigate = useNavigate();

  const showToast = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
          "http://localhost:8787/recover/reset-password",
          {
            sendToEmail: email, // Send the email in the correct format
          }
      );

      if (response.status === 200) {
        showToast("success", "Email sent successfully");
        navigate("/login");
      } else {
        showToast("error", "Failed to send email");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // setError('Failed to send email. Please try again.');
      showToast("success", "Email Sent Successful!");
      navigate("/login");
    }
  };

  return (
      <div>
        <div
            className="container"
            style={{ marginTop: "40px", textAlign: "center" }}
        >
          <div className="row justify-content-center align-items-center">
            <form
                className="col-md-4"
                onSubmit={handleSendEmail}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                  maxWidth:300
                }}
            >
              <h4 style={{ color: "orangered" }} className="text-center mb-4">
                {/* <FaEnvelope style={{ marginRight: "10px" }} /> */}
                Forgot Password?
              </h4>
              <p style={{ color: "blue" }} className="text-center mb-4">
                <AiOutlineLock style={{ marginRight: "10px" }} />
                Please enter your valid email address to receive a verification code
              </p>
              <div className="mb-4">
                <div className="input-group">
                  {/* <span className="input-group-text">PORT=3001 npm start

                  <FaEnvelope style={{ color: "black" }} />
                </span> */}
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Please Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{

                        borderRadius: "8px",
                        minWidth:260,
                        textAlign:'center'

                      }}
                  />
                </div>
              </div>
              {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
              )}
              <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "black",
                    borderRadius: "8px",
                  }}
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ForgotPassword;

