// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import Header from "./header.jsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// Create the CartForm component
const CartForm = () => {
    // State variables
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items when the component mounts
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            // Replace the URL with the correct endpoint for fetching cart items
            const response = await axios.get('http://localhost:8787/user/add/cart/getAll', {
                // Uncomment the next line if you need authorization headers
                // headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
            });
            console.log('Fetched cart items:', response.data);
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    // Function to remove an item from the cart

    const handleRemoveProduct = (productId) => {
        if (productId === undefined) {
            console.error("Invalid ID: ID is undefined");
            return;
        }
        axios
            .delete(`http://localhost:8787/admin/add-products/delete/${productId}`)
            .then(() => {
                console.log(`Product with ID ${productId} removed successfully`);
                toast.success('Product deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                fetchCartItems();
            })
            .catch((error) => {
                console.error(`Error removing product with ID ${productId}:`, error);
                toast.error("Error removing product. Please try again later.", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    // Function to proceed to checkout
    const proceedToCheckout = () => {
        // Implement logic to proceed to checkout
        // You can navigate to the checkout page or perform additional actions here
        alert('Proceeding to checkout');
    };

    return (
        <>
            <Header />
            <div style={{ marginTop: 100 }}>
                <Container>
                    <center>
                        <h2>Your Cart</h2>
                    </center>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <Table striped bordered hover responsive>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Total Price</th>
                                <th>Brand</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>Rs.{item.productPrice}</td>
                                    <td>{item.productDescription}</td>
                                    <td>{item.totalPrice}</td>
                                    <td>{item.brandName}</td>
                                    <td>
                                        <img src={`data:image/png;base64,${item.image}`} alt={`Product ${index + 1}`} style={{ width: '50px', height: '50px' }} />
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleRemoveProduct(item.id)}>
                                            <FaTrash /> Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}

                    <div className="d-flex justify-content-end mt-3">
                        <Link to={'/order-form'}>
                            <Button variant="primary" onClick={proceedToCheckout}>
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CartForm;
