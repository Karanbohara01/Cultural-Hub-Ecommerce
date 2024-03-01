// OrderForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../Admin/Dashboard/Components/Header.jsx";
import AdminSidebar from "../Admin/Dashboard/Components/Sidebar.jsx";

const OrderForm = () => {
    const [newOrder, setNewOrder] = useState({
        customerName: '',
        customerEmail: '',
        productName: '',
        orderDate: '',
        totalAmount: 0,
        status: 'Pending',
        address: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8787/admin/order/save', newOrder);

            // Reset form fields after successful submission
            setNewOrder({
                customerName: '',
                customerEmail: '',
                productName: '',
                orderDate: '',
                totalAmount: 0,
                status: 'Pending',
                address: '',
                // Reset more fields as needed
            });

            // Show a success toast
            toast.success('Order added successfully', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
        } catch (error) {
            console.error('Error adding a new order:', error.message);

            // Show an error toast
            toast.error('Error adding a new order', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
        }
    };

    return (
        <>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="container mt-5">
                <ToastContainer />
                <div style={{  minWidth: 500,marginTop:100 }} className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <center>
                                <h2 className="card-title mb-4">Fill the following details for shipping.</h2>
                            </center>
                            <div className="form-group">
                                <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    className="form-control"
                                    id="customerName"
                                    name="customerName"
                                    placeholder="Please enter your name"
                                    value={newOrder.customerName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    style={{ marginBottom: 10 }}
                                    type="email"
                                    className="form-control"
                                    id="customerEmail"
                                    name="customerEmail"
                                    placeholder="Please enter your email"
                                    value={newOrder.customerEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    style={{ marginBottom: 10 }}
                                    type="date"
                                    className="form-control"
                                    id="orderDate"
                                    name="orderDate"
                                    placeholder="Please select order date"
                                    value={newOrder.orderDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    name="productName"
                                    placeholder="Enter product name"
                                    value={newOrder.productName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    style={{ marginBottom: 10 }}
                                    type="number"
                                    className="form-control"
                                    id="totalAmount"
                                    name="totalAmount"
                                    placeholder="Enter total amount"
                                    value={newOrder.totalAmount}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <input
                                    style={{ marginBottom: 10 }}
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={newOrder.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <center>
                                <button style={{ marginTop: 30 }} type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default OrderForm;
