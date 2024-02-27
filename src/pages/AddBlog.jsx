// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from "../Admin/Dashboard/Components/Sidebar.jsx";
import AdminHeader from "../Admin/Dashboard/Components/Header.jsx";
import Header from "../components/header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/footer.jsx";

const BlogForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        blogs: '',
        image: null, // Assuming you want to upload an image
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            image: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('blogs', formData.blogs);
        formDataToSend.append('image', formData.image);

        try {
            await axios.post('http://localhost:8787/user/blog/save', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // You may want to redirect to the blog list page or show a success message
        } catch (error) {
            console.error('Error posting blog:', error);
            // Handle error, show error message, etc.
        }
    };

    return (
        <>
            <Header/>


            <Container style={{ marginTop: 50 }}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div style={{ border: '2px solid pink', borderRadius: '10px', padding: '20px',marginTop:80 }}>
                            <h1 className="text-center mb-4">Create a New Blog</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="blogName">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}

                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="blogContent">
                                    <Form.Label>Blog Content</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter blog content"
                                        name="blogs"
                                        value={formData.blogs}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="blogImage">
                                    <Form.Label>Blog Image</Form.Label>
                                    <Form.Control type="file" name="image" onChange={handleImageChange} />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Post Blog
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </>
    );
};

export default BlogForm;
