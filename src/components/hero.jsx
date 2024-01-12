// import React from "react";
// import icon from "../assets/images/icons/icon1.png";
// import icon1 from "../assets/images/icons/icon2.png";
// import icon2 from "../assets/images/icons/icon3.png";
// import icon4 from "../assets/images/icons/icon4.png";
// import icon5 from "../assets/images/icons/icon5.png";
// import icon6 from "../assets/images/icons/icon6.png";

// const hero = () => {
//   return (
//     <>
//       <section className="hero p-2">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="hero-details d-flex justify-content-around text-center mx-5">
//               <div className="card p-2">
//                 <div className="card-details mx-3">
//                   <img src={icon} alt="" className="img-fluid mb-2" />
//                   <p>Fast Orders</p>
//                 </div>
//               </div>
//               <div className="card-details mx-3">
//                 <div className="card p-2">
//                   <img src={icon1} alt="" className="img-fluid mb-2" />
//                   <p>Quick Shipping</p>
//                 </div>
//               </div>
//               <div className="card-details mx-3">
//                 <div className="card p-2">
//                   <img src={icon2} alt="" className="img-fluid mb-2" />
//                   <p>High Saves</p>
//                 </div>
//               </div>
//               <div className="card-details mx-3">
//                 <div className="card p-2">
//                   <img src={icon4} alt="" className="img-fluid mb-2" />
//                   <p>24/7 Supports</p>
//                 </div>
//               </div>
//               <div className="card-details mx-3">
//                 <div className="card p-2">
//                   <img src={icon5} alt="" className="img-fluid mb-2" />
//                   <p>Discounts</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default hero;

/* eslint-disable no-unused-vars */
import React from "react";
import orders from "../assets/images/icons/icon1.png";
import orders1 from "../assets/images/icons/icon2.png";
import orders2 from "../assets/images/icons/icon3.png";
import orders3 from "../assets/images/icons/icon4.png";
import orders4 from "../assets/images/icons/icon5.png";

const hero = () => {
  return (
    <>
      <section className="hero p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
              <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={orders}
                      className="card-img-top img-fluid m-auto"
                      alt="Fast Orders"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">Fast Orders</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={orders1}
                      className="card-img-top img-fluid m-auto"
                      alt="Quick Shipping"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">Quick Shipping</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={orders2}
                      className="card-img-top img-fluid m-auto"
                      alt="High Saves"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">High Saves</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={orders3}
                      className="card-img-top img-fluid m-auto"
                      alt="24/7 Support"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">24/7 Support</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={orders4}
                      className="card-img-top img-fluid m-auto"
                      alt="Online Orders"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">Online Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
