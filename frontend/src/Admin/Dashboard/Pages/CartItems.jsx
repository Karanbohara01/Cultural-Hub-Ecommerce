import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHeader from "../Components/Header.jsx";
import { ShopContext } from "../../../components/shopcontext.jsx";
import "./CartItems.css";

const CartItems = () => {
    const { addToCart, removeToCart, cartItems, updateCartItemCount } = useContext(ShopContext);
    const [products, setProducts] = useState([]);

    // Fetch products from the backend when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get("http://localhost:8787/cart/getAll")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    };

    // Function to update quantity and calculate total price
    const handleQuantityChange = (productId, quantity) => {
        updateCartItemCount(quantity, productId);
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                product.totalPrice = product.productPrice * quantity;
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    return (
        <>
            <div style={{ marginBottom: 100 }}>
                <AdminHeader />
            </div>
            <h1>Your Cart is Here!</h1>
            <div style={{ marginLeft: 30, marginRight: 30 }} className="cart-items-container">
                {products.map((product) => (
                    <Card key={product.id} className="card">
                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>
                                <b>Brand:</b> {product.brandName}
                            </Card.Text>
                            <Card.Text>
                                <b>Price:</b> Rs.{product.productPrice}
                            </Card.Text>
                            <Card.Text>
                                <b>Status:</b> {product.status}
                            </Card.Text>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter coupon code ..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button style={{ backgroundColor: "black" }} className="input-group-text" id="basic-addon2">
                                    Search
                                </Button>
                            </div>
                            <div>
                                <Button
                                    variant="success"
                                    onClick={() => handleQuantityChange(product.id, cartItems[product.id] + 1)}
                                >
                                    +
                                </Button>
                                <input
                                    type="text"
                                    value={cartItems[product.id]}
                                    onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                                />
                                <Button
                                    variant="danger"
                                    onClick={() => handleQuantityChange(product.id, cartItems[product.id] - 1)}
                                >
                                    -
                                </Button>
                                <span className="total-price">Total: Rs.{product.productPrice}</span>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div>
                <center>
                    <Link to={"/checkout"}>
                        <button style={{ margin: 80 }}>Proceed to checkout</button>
                    </Link>
                </center>
            </div>
        </>
    );
};

export default CartItems;
