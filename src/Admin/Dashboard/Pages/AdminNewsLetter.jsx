

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../Components/Header.jsx";
import AdminSidebar from "../Components/Sidebar.jsx";

const NewsletterList = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        // Fetch newsletter subscriptions when the component mounts
        fetchSubscriptions();
    }, []);

    const fetchSubscriptions = async () => {
        try {
            const response = await axios.get('http://localhost:8787/user/news-letter/getAll');
            setSubscriptions(response.data);
        } catch (error) {
            console.error('Error fetching newsletter subscriptions:', error);
        }
    };

    const handleDelete = async (newsLetterId) => {
        try {
            await axios.delete(`http://localhost:8787/user/news-letter/delete/${newsLetterId}`);
            // Refresh the newsletter subscriptions list after deletion
            fetchSubscriptions();

            // Show success toast
            toast.success('Newsletter subscription deleted successfully', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            console.error('Error deleting newsletter:', error);
            // Show error toast
            toast.error('Error deleting newsletter', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <>
            <AdminHeader/>
            <AdminSidebar/>
            <Container style={{ marginLeft: 300 }} className="mt-4 d-flex justify-content-center">
                <div className="text-center">
                    <h1 className="mb-4 mt-4">Newsletter Subscribers</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {subscriptions.map((subscription) => (
                            <Col key={subscription.newsLetterId}>
                                <Card style={{ maxHeight: 200, minHeight: 150, maxWidth: 300, minWidth: 300, backgroundColor: 'lightBlue' }} className="mb-4">
                                    <Card.Body>
                                        <Card.Text>Email: {subscription.email}</Card.Text>
                                        {/* Add the delete button */}
                                        <Button style={{ marginTop: 10 }} variant="danger" onClick={() => handleDelete(subscription.newsLetterId)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            <ToastContainer />
        </>
    );
};

export default NewsletterList;
