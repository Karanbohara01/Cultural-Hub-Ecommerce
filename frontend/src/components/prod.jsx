// import React, { useContext } from "react";
// import { ShopContext } from "./shopcontext";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// import Details from "../pages/details";

// const prod = (props) => {
//   const { id, name, price, image, brand } = props.data;
//   const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);

//   const cartItemAmount = cartItems[id];
//   return (
//     <>
//       <div className="col mb-5">
//         <Link key={id} className="card h-100 m-auto">
//           <img src={image} className="card-img-top img-fluid" alt="..." />
//           <div className="card-body">
//             <p className="card-text mb-2">{brand}</p>
//             <h5>{name} </h5>
//             <ReactStars
//               count={5}
//               edit={false}
//               value={4}
//               size={24}
//               activeColor="#EA9D5A"
//             />
//             <div className="mb-3">
//               <p className="price mb-2">
//                 <span className="red">{price} </span>&nbsp;{" "}
//                 <strike>{price * 2}$</strike>
//               </p>
//               <Link to="/details" onClick={() => viewProductDetails(id)}>
//                 <p className="text-center">
//                   <button className="fs-4" id="clear-cart">
//                     View Details
//                   </button>
//                 </p>
//               </Link>
//             </div>
//             <div className="d-flex justify-content-center">
//               <button
//                 onClick={() => {
//                   addToCart(id);
//                   event.target.classList.toggle("red");
//                 }}
//                 className="myButton"
//               >
//                 Add To Cart
//                 {cartItemAmount > 0 && `(${cartItemAmount})`}
//               </button>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default prod;
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
// import { ShopContext } from "./shopcontext";

// const Prod = (props) => {
//   const { id, name, price, image, brand } = props.data;
//   const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);
//   const cartItemAmount = cartItems[id];

//   return (
//     <div className="col mb-5">
//       <Link
//         to="/details"
//         onClick={() => viewProductDetails(id)}
//         className="card h-100 m-auto"
//       >
//         <img src={image} className="card-img-top img-fluid" alt="..." />
//         <div className="card-body">
//           <p className="card-text mb-2">{brand}</p>
//           <h5>{name}</h5>
//           <ReactStars
//             count={5}
//             edit={false}
//             value={4}
//             size={24}
//             activeColor="#EA9D5A"
//           />
//           <div className="mb-3">
//             <p className="price mb-2">
//               <span className="red">{price}</span>&nbsp;{" "}
//               <strike>{price * 2}$</strike>
//             </p>
//             <p className="text-center">
//               <button className="fs-4" id="clear-cart">
//                 View Details
//               </button>
//             </p>
//           </div>
//           <div className="d-flex justify-content-center">
//             <button
//               onClick={(event) => {
//                 addToCart(id);
//                 event.target.classList.toggle("red");
//               }}
//               className="myButton"
//             >
//               Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Prod;
// prod.jsx
//
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
// import { ShopContext } from "./shopcontext";
// import axios from 'axios';
//
// const Prod = (props) => {
//   const { id } = props.data;
//   const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);
//   const cartItemAmount = cartItems[id];
//   const [productData, setProductData] = useState({});
//
//   // Function to fetch demo product data
//   const fetchDemoProduct = () => {
//     // You can replace this with an actual backend API call
//     // For now, we'll use a demo product
//     const demoProduct = {
//       id: 1,
//       name: "Demo Product",
//       brand: "Demo Brand",
//       price: 29.99,
//       image: "https://placekitten.com/300/200", // Replace with an actual image URL
//     };
//
//     setProductData(demoProduct);
//   };
//
//   useEffect(() => {
//     // Fetch demo product data
//     fetchDemoProduct();
//   }, []);
//
//   return (
//       <div className="col mb-5">
//         <Link
//             to="/details"
//             onClick={() => viewProductDetails(id)}
//             className="card h-100 m-auto"
//         >
//           <img src={productData.image} className="card-img-top img-fluid" alt="..." />
//           <div className="card-body">
//             <p className="card-text mb-2">{productData.brand}</p>
//             <h5>{productData.name}</h5>
//             <ReactStars
//                 count={5}
//                 edit={false}
//                 value={4}
//                 size={24}
//                 activeColor="#EA9D5A"
//             />
//             <div className="mb-3">
//               <p className="price mb-2">
//                 <span className="red">{productData.price}</span>&nbsp;{" "}
//                 <strike>{productData.price * 2}$</strike>
//               </p>
//               <p className="text-center">
//                 <button className="fs-4" id="clear-cart">
//                   View Details
//                 </button>
//               </p>
//             </div>
//             <div className="d-flex justify-content-center">
//               <button
//                   onClick={(event) => {
//                     addToCart(id);
//                     event.target.classList.toggle("red");
//                   }}
//                   className="myButton"
//               >
//                 Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
//               </button>
//             </div>
//           </div>
//         </Link>
//       </div>
//   );
// };
//
// export default Prod;
//



// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Prod = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:8787/admin/add-products/getAll')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
  };

  const handleAddToCart = () => {
    // Implement logic for adding product to cart
    // You can use the product ID to identify the selected product
    // toast.success('Product added to cart successfully!', {
    //   position: 'top-center',
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
  };

  return (
      <>
        <center>
          <Row  className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {Array.isArray(products) &&
                products.map((product) => (
                    <Col key={product.id} className="mb-4">
                      <Card style={{ width: '18rem',marginLeft:40 }}>
                        <Card.Body>
                          <img width={250} src={`data:image/png;base64,${product.image}`} alt={product.productName} />
                          <Card.Title>{product.productName}</Card.Title>
                          <Card.Text>
                            {product.productDescription}
                          </Card.Text>
                          <Card.Text>
                            <b>Brand:</b> {product.brandName}
                          </Card.Text>
                          <Card.Text>
                            <b>Price:</b> ${product.productPrice}
                          </Card.Text>

                          <Button variant="success m-1" onClick={() => handleAddToCart()}>
                            <FaPlus /> Add to Cart
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                ))}
          </Row>
        </center>
      </>

  );
};

export default Prod;



