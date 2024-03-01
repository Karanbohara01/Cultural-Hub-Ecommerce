// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { FaPlus } from 'react-icons/fa';
// import { toast } from 'react-toastify';
//
// const ShowProducts = () => {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         fetchProducts();
//     }, []);
//
//     const fetchProducts = () => {
//         axios.get('http://localhost:8787/admin/add-products/getAll')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching product data:', error);
//             });
//     };
//
//     const handleAddToCart = () => {
//         // Implement logic for adding product to cart
//         // You can use the product ID to identify the selected product
//         toast.success('Product added to cart successfully!', {
//             position: 'top-right',
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//         });
//     };
//
//     return (
//         <>
//             <div style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
//                 <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
//                     {Array.isArray(products) &&
//                         products.map((product) => (
//                             <Col key={product.id} className="mb-4">
//                                 <Card  style={{maxHeight:600,minHeight:650, minWidth:350,marginLeft:70,marginTop:80,maxWidth:300,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'whiteSmoke'}}>
//                                     <  Card.Body>
//                                         <img
//                                             style={{ objectFit: 'cover', width: '300px', height: '390px',marginBottom:20,borderRadius:10 }}
//                                             src={`data:image/png;base64,${product.image}`}
//                                             alt={product.productName}
//                                         />
//
//                                         <Card.Title>{product.productName}</Card.Title>
//                                         <Card.Text>
//                                             {product.productDescription}
//                                         </Card.Text>
//                                         <Card.Text>
//                                             <b>Brand:</b> {product.brandName}
//                                         </Card.Text>
//                                         <Card.Text>
//                                             <b>Price:</b> Rs.{product.productPrice}
//                                         </Card.Text>
//
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 45, marginBottom: 20 }}>
//                                             <Button
//                                                 variant="success"
//                                                 style={{
//                                                     padding: '10px 20px',
//                                                     fontSize: '1.2rem',
//                                                     borderRadius: '8px',
//                                                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                                                     transition: 'background-color 0.3s ease',
//                                                 }}
//                                                 onClick={() => handleAddToCart()}
//                                             >
//                                                 <FaPlus style={{ marginRight: '5px' }} /> Add to Cart
//                                             </Button>
//                                         </div>
//
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                 </Row>
//             </div>
//         </>
//
//     );
// };
//
// export default ShowProducts;
//
//
//
//

// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { FaPlus } from 'react-icons/fa';
// import { toast } from 'react-toastify';
//
// const ShowProducts = () => {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         fetchProducts();
//     }, []);
//
//     const fetchProducts = () => {
//         axios.get('http://localhost:8787/add-products/getAll')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching product data:', error);
//             });
//     };
//
//     const handleAddToCart = (product) => {
//         const cartItem = {
//             productId: product.id,
//             productName: product.productName,
//             brandName: product.brandName,
//             productPrice: product.productPrice,
//             image:product.image,
//             // Add other properties as needed
//         };
//
//
//
//         axios.post('http://localhost:8787/cart/add-cart', cartItem)
//             .then(response => {
//                 toast.success('Product added to cart successfully!', {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                 });
//                 console.log(product.brandName);
//             })
//             .catch(error => {
//                 console.error('Error adding product to cart:', error);
//                 toast.error('Error adding product to cart. Please try again later.', {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                 });
//             });
//     };
//
//
//
//     return (
//         <>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
//                     {Array.isArray(products) &&
//                         products.map((product) => (
//                             <Col key={product.id} className="mb-4">
//                                 <Card style={{ maxHeight: 600, minHeight: 650, minWidth: 350, marginLeft: 70, marginTop: 80, maxWidth: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'whiteSmoke' }}>
//                                     <Card.Body>
//                                         <img
//                                             style={{ objectFit: 'cover', width: '300px', height: '390px', marginBottom: 20, borderRadius: 10 }}
//                                             src={`data:image/png;base64,${product.image}`}
//                                             alt={product.productName}
//                                         />
//
//                                         <Card.Title>{product.productName}</Card.Title>
//                                         <Card.Text>
//                                             {product.productDescription}
//                                         </Card.Text>
//                                         <Card.Text>
//                                             <b>Brand:</b> {product.brandName}
//                                         </Card.Text>
//                                         <Card.Text>
//                                             <b>Price:</b> Rs.{product.productPrice}
//                                         </Card.Text>
//
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 45, marginBottom: 20 }}>
//                                             <Button
//                                                 variant="success"
//                                                 style={{
//                                                     padding: '10px 20px',
//                                                     fontSize: '1.2rem',
//                                                     borderRadius: '8px',
//                                                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                                                     transition: 'background-color 0.3s ease',
//                                                 }}
//                                                 onClick={() => handleAddToCart(product)}
//                                             >
//                                                 <FaPlus style={{ marginRight: '5px' }} /> Add to Cart
//                                             </Button>
//                                         </div>
//
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                 </Row>
//             </div>
//         </>
//
//     );
// };
//
// export default ShowProducts;


// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8787/add-products/getAll')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    };

    const handleAddToCart = (product) => {
        const cartItem = {
            productId: product.id,
            productName: product.productName,
            brandName: product.brandName,
            productPrice: product.productPrice,
            image: product.image,
            totalPrice:product.totalPrice,
            productCount:product.productCount

            // Add other properties as needed
        };

        axios.post('http://localhost:8787/cart/add-cart', cartItem)
            .then(response => {
                toast.success('Product added to cart successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log(product.brandName);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
                toast.error('Error adding product to cart. Please try again later.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {Array.isArray(products) &&
                        products.map((product) => (
                            <Col key={product.id} className="mb-4">
                                <Card style={{ maxHeight: 600, minHeight: 650, minWidth: 350, marginLeft: 70, marginTop: 80, maxWidth: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'whiteSmoke' }}>
                                    <Card.Body>
                                        <img
                                            style={{ objectFit: 'cover', width: '300px', height: '390px', marginBottom: 20, borderRadius: 10 }}
                                            src={`data:image/png;base64,${product.image}`}
                                            alt={product.productName}
                                        />

                                        <Card.Title>{product.productName}</Card.Title>
                                        <Card.Text>
                                            {product.productDescription}
                                        </Card.Text>
                                        <Card.Text>
                                            <b>Brand:</b> {product.brandName}
                                        </Card.Text>
                                        <Card.Text>
                                            <b>Price:</b> Rs.{product.productPrice}
                                        </Card.Text>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 45, marginBottom: 20 }}>
                                            <Button
                                                variant="success"
                                                style={{
                                                    padding: '10px 20px',
                                                    fontSize: '1.2rem',
                                                    borderRadius: '8px',
                                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                                    transition: 'background-color 0.3s ease',
                                                }}
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                <FaPlus style={{ marginRight: '5px' }} /> Add to Cart
                                            </Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </>

    );
};

export default ShowProducts;

