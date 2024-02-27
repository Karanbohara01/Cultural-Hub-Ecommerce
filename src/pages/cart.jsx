/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
// import pr1 from "../assets/images/products/f1.jpg";
// import pr2 from "../assets/images/products/f2.jpg";
// import { RiDeleteBack2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";
import { PRODUCTS } from "../components/products";
import { PRODUCTS1 } from "../components/products";
import { ShopContext } from "../components/shopcontext";
import CartItem from "../components/cartitem";
import { useNavigate } from "react-router-dom";

const cart = (props) => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <>
      <section className="cart">
        <div className="container-xxl p-5">
          {totalAmount > 0 ? (
            <div className="row">
              <div className="p-2 text-center">
                <h2>Cart</h2>
              </div>
              <div className="col-12 col-md-5 text-center">
                <h5>Product</h5>
              </div>
              <div className="col-12 col-md-5 text-center">
                <h5>Details</h5>
              </div>

              <div className="p-3">
                {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                })}
                <div className="col-12 p-2 text-end">
                  <button onClick={() => clearCart()} id="clear-cart">
                    {" "}
                    Clear Cart{" "}
                  </button>
                </div>

                <hr />
                <div className="row">
                  <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
                    <button onClick={() => navigate("/shop")}>
                      {isMobile ? "Continue" : "Continue Shopping"}
                    </button>
                  </div>

                  <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                    <div className="col-12">
                      <div className="text-end">
                        <h2 className="mb-3">
                          <b>Total</b>
                        </h2>
                        <div className="align-items-center">
                          <div>
                            <p className="total-price align-items-center">
                              <b>${totalAmount}</b>
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate("/checkout")}
                          className="mt-5"
                        >
                          {isMobile ? "Check Out" : "Proceed to Checkout"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-xxl">
              <div className="row">
                <div className="text-center p-5 mb-4">
                  <h2>Your Cart Is Empty!!!</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default cart;


/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

//
// import React, { useContext, useState, useEffect } from "react";
// import Axios from "axios";
// import { ShopContext } from "../components/shopcontext";
// import CartItem from "../components/cartitem";
// import { useNavigate } from "react-router-dom";
//
// const Cart = () => {
//   const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(false);
//
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 576) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     };
//
//     window.addEventListener("resize", handleResize);
//
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // Cleanup the event listener on component unmount
//
//   const handleClearCart = async () => {
//     try {
//       // Make a DELETE request to clear the cart
//       await Axios.delete("/api/cart");
//       clearCart();
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//     }
//   };
//
//   return (
//       <>
//         <section className="cart">
//           <div className="container-xxl p-5">
//             {totalAmount > 0 ? (
//                 <div className="row">
//                   <div className="p-2 text-center">
//                     <h2>Cart</h2>
//                   </div>
//                   <div className="col-12 col-md-5 text-center">
//                     <h5>Product</h5>
//                   </div>
//                   <div className="col-12 col-md-5 text-center">
//                     <h5>Details</h5>
//                   </div>
//                   <div className="p-3">
//                     {[/*...list of products...*/].map((product) => (
//                         <CartItem key={product.id} data={product} />
//                     ))}
//                     <div className="col-12 p-2 text-end">
//                       <button onClick={handleClearCart} id="clear-cart">
//                         Clear Cart
//                       </button>
//                     </div>
//                     <hr />
//                     <div className="row">
//                       <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
//                         <button onClick={() => navigate("/shop")}>
//                           {isMobile ? "Continue" : "Continue Shopping"}
//                         </button>
//                       </div>
//                       <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
//                         <div className="col-12">
//                           <div className="text-end">
//                             <h2 className="mb-3">
//                               <b>Total</b>
//                             </h2>
//                             <div className="align-items-center">
//                               <div>
//                                 <p className="total-price align-items-center">
//                                   <b>${totalAmount}</b>
//                                 </p>
//                               </div>
//                             </div>
//                             <button
//                                 onClick={() => navigate("/checkout")}
//                                 className="mt-5"
//                             >
//                               {isMobile ? "Check Out" : "Proceed to Checkout"}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//             ) : (
//                 <div className="container-xxl">
//                   <div className="row">
//                     <div className="text-center p-5 mb-4">
//                       <h2>Your Cart Is Empty!!!</h2>
//                     </div>
//                   </div>
//                 </div>
//             )}
//           </div>
//         </section>
//       </>
//   );
// };
//
// export default Cart;
//
//
//
// import React, { useContext, useState, useEffect } from "react";
// import Axios from "axios";
// import { ShopContext } from "../components/shopcontext";
// import CartItem from "../components/cartitem";
// import { useNavigate } from "react-router-dom";
//
// const Cart = () => {
//   const { cartItems, getTotalCartAmount, setCartItems } = useContext(ShopContext);
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 576);
//     };
//
//     window.addEventListener("resize", handleResize);
//
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // Cleanup the event listener on component unmount
//
//   const handleClearCart = async () => {
//     try {
//       // Make a DELETE request to clear the cart
//       await Axios.delete("http://localhost:8080/api/cartItems");
//       setCartItems({}); // Assuming setCartItems is a function to update cartItems in context
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//     }
//   };
//
//   const handleFetchCartItems = async () => {
//     try {
//       // Make a GET request to fetch cart items
//       const response = await Axios.get("http://localhost:8080/api/cartItems");
//       setCartItems(response.data); // Assuming setCartItems is a function to update cartItems in context
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };
//
//   return (
//       <>
//         <section className="cart">
//           <div className="container-xxl p-5">
//             <div className="row">
//               <div className="p-2 text-center">
//                 <h2>Cart</h2>
//               </div>
//               <div className="col-12 col-md-5 text-center">
//                 <h5>Product</h5>
//               </div>
//               <div className="col-12 col-md-5 text-center">
//                 <h5>Details</h5>
//               </div>
//
//               <div className="p-3">
//                 {Object.keys(cartItems).map((productId) => (
//                     <CartItem key={productId} data={cartItems[productId]} />
//                 ))}
//                 <div className="col-12 p-2 text-end">
//                   <button onClick={handleClearCart} id="clear-cart">
//                     Clear Cart
//                   </button>
//                   {/*<button onClick={handleFetchCartItems} id="fetch-cart">*/}
//                   {/*  Fetch Cart Items*/}
//                   {/*</button>*/}
//                 </div>
//
//                 <hr />
//                 <div className="row">
//                   <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
//                     <button onClick={() => navigate("/shop")}>
//                       {isMobile ? "Continue" : "Continue Shopping"}
//                     </button>
//                   </div>
//                   <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
//                     <div className="col-12">
//                       <div className="text-end">
//                         <h2 className="mb-3">
//                           <b>Total</b>
//                         </h2>
//                         <div className="align-items-center">
//                           <div>
//                             <p className="total-price align-items-center">
//                               <b>${getTotalCartAmount()}</b>
//                             </p>
//                           </div>
//                         </div>
//                         <button
//                             onClick={() => navigate("/checkout")}
//                             className="mt-5"
//                         >
//                           {isMobile ? "Check Out" : "Proceed to Checkout"}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//   );
// };
//
// export default Cart;
