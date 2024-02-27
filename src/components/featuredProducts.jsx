// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
// import { PRODUCTS } from "./products";
// import { PRODUCTS1 } from "./products";
//
// const featuredproducts = () => {
//   return (
//     <>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
//         {PRODUCTS.slice(2, 6).map((product) => (
//           <div className="col mb-5">
//             <div key={product.id} className="card h-100 m-auto">
//               <img
//                 src={product.image}
//                 className="card-img-top img-fluid"
//                 alt="..."
//               />
//               <div className="card-body">
//                 <p className="card-text mb-2">{product.brand}</p>
//                 <h5 className="mb-3">{product.name} </h5>
//                 <div className="card-footer m-auto text-center">
//                   <p className="text-danger fs-4">{product.status}</p>
//                   <p className="price">
//                     <span className="red"></span>{" "}
//                     <strike>${product.rate} </strike>
//                   </p>
//                 </div>
//                 <div className="card-footer d-md-none">
//                   <div className="d-flex justify-content-between align-items-center">
//                     <Link to="shop" className="m-auto">
//                       View products
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
//
// export default featuredproducts;

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

const featuredProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8787/admin/add-featured-products/getAll");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
                {products.map((product) => (
                    <div className="col mb-5" key={product.id}>
                        <div className="card h-100 m-auto">
                            <img style={{minWidth:200,minHeight:350}}
                                src={`data:image/png;base64,${product.image}`}
                                className="card-img-top img-fluid"
                                alt={product.productName}
                            />
                            <div className="card-body">
                                <p className="card-text mb-2">{product.brandName}</p>
                                <h5 className="mb-3">{product.productName}</h5>
                                <div className="card-footer m-auto text-center">
                                    <p className="text-danger fs-4">{product.status}</p>
                                    <p className="price">
                                        <span className="red"></span>{" "}
                                        <strike>${product.discount}</strike>
                                    </p>
                                </div>
                                <div className="card-footer d-md-none">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="shop" className="m-auto">
                                            View products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default featuredProducts;
