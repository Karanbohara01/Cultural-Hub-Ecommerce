// eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import AdminHeader from "../Components/Header.jsx";
// import AdminSidebar from "../Components/Sidebar.jsx";
// import DigitalClock from "../Charts/Clock.jsx";
//
// const AdminOrderPage = () => {
//     const [orders, setOrders] = useState([]);
//
//     useEffect(() => {
//         // Fetch orders from the Spring Boot backend
//         fetchOrders();
//     }, []);
//
//     const fetchOrders = async () => {
//         try {
//             const response = await fetch('http://localhost:8787/admin/order/getAll');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch orders');
//             }
//             const data = await response.json();
//             setOrders(data);
//         } catch (error) {
//             console.error('Error fetching orders:', error.message);
//         }
//     };
//
//     const updateOrderStatus = async (orderId, newStatus) => {
//         console.log('Updating order:', orderId, 'with status:', newStatus);
//
//         try {
//             const response = await fetch(`http://localhost:8787/admin/order/update/${orderId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ status: newStatus }),
//             });
//
//             if (!response.ok) {
//                 throw new Error(`Failed to update order status. Status code: ${response.status}`);
//             }
//
//             const updatedOrders = orders.map((order) =>
//                 order.orderId === orderId ? { ...order, status: newStatus } : order
//             );
//
//             setOrders(updatedOrders);
//             console.log('Order updated Successfully');
//             console.log(updatedOrders);
//         } catch (error) {
//             console.error('Error updating order status:', error.message);
//         }
//     };


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../Components/Header.jsx";
import AdminSidebar from "../Components/Sidebar.jsx";
import DigitalClock from "../Charts/Clock.jsx";
import OrderForm from "../../../pages/Order.jsx";

const AdminOrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the Spring Boot backend
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:8787/admin/order/getAll');
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error.message);
        }
    };

    const updateOrderStatus = async (orderId, newStatus) => {
        console.log('Updating order:', orderId, 'with status:', newStatus);

        try {
            const response = await fetch(`http://localhost:8787/admin/order/update/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({status: newStatus}),
            });

            if (!response.ok) {
                throw new Error(`Failed to update order status. Status code: ${response.status}`);
            }

            const updatedOrders = orders.map((order) =>
                order.orderId === orderId ? {...order, status: newStatus} : order
            );

            setOrders(updatedOrders);

            // Show a success toast
            toast.success('Order status updated successfully', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            console.log('Order updated Successfully');
            console.log(updatedOrders);
        } catch (error) {
            console.error('Error updating order status:', error.message);

            // Show an error toast
            toast.error('Error updating order status', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });

        }};

    const deleteOrder = async (orderId) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            try {
                const response = await fetch(`http://localhost:8787/admin/order/delete/${orderId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error(`Failed to delete order. Status code: ${response.status}`);
                }

                const updatedOrders = orders.filter((order) => order.orderId !== orderId);
                setOrders(updatedOrders);
                console.log('Order deleted Successfully');

                console.log(updatedOrders);
            } catch (error) {
                console.error('Error deleting order:', error.message);
            }
        }
    };

    return (
        <>

            <div style={{ marginLeft: 650, marginTop: 80, marginBottom: -100, display: "flex", alignItems: 'center', justifyContent: 'right' }}>
                <DigitalClock />
            </div>

            <div style={{ marginTop: 100 }}>
                <AdminHeader />
            </div>

            <div>
                <AdminSidebar />
            </div>

            <center>
                <div style={{ marginLeft: 360 }} className="container">
                    <center>
                        <h2 className="mt-4 mb-4">Order Management - Admin Panel</h2>
                    </center>
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.customerName}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.productName}</td>
                                <td>Rs.{order.totalAmount.toFixed(2)}</td>
                                <td>{order.status}</td>
                                <td>
                                    {order.status === 'Pending' && (
                                        <button style={{marginLeft:40,minWidth:120}}
                                            className="btn btn-success btn-sm mr-2"
                                            onClick={() => updateOrderStatus(order.orderId, 'Shipped')}
                                        >
                                            Mark as Shipped
                                        </button>
                                    )}
                                    {order.status === 'Shipped' && (
                                        <button style={{marginLeft:40,minWidth:120}}
                                            className="btn btn-info btn-sm mr-2"
                                            onClick={() => updateOrderStatus(order.orderId, 'Delivered')}
                                        >
                                            Mark as Delivered
                                        </button>
                                    )}
                                    {order.status === 'Delivered' && (
                                        <button style={{marginLeft:40,minWidth:120}}
                                            className="btn btn-info btn-sm mr-2"
                                            onClick={() => updateOrderStatus(order.orderId, 'Email Sent')}
                                        >
                                            Send Email
                                        </button>
                                    )}

                                    {
                                        order.status === 'Email Sent' && (
                                            <button style={{marginLeft:40,minWidth:120}}
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteOrder(order.orderId)}
                                            >
                                                Delete
                                            </button>

                                        )

                                    }


                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </center>
        </>
    );
};

export default AdminOrderPage;
