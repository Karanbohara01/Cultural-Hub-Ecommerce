// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminSidebar from '../Components/Sidebar.jsx';
import AdminHeader from '../Components/Header.jsx';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs when the component mounts
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:8787/user/blog/getAll');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleDelete = async (blogId) => {
        try {
            await axios.delete(`http://localhost:8787/user/blog/delete/${blogId}`);
            // Refresh the blogs list after deletion
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <>
            <AdminHeader />

            <AdminSidebar />

            <Container style={{marginLeft:300}} className="mt-4 d-flex justify-content-center">

                <div className="text-center">
                    <Link to={'/add-blog'}>
                        {/*<p style={{marginTop:30,fontSize:30}}>Click Here to Add Your Blog Here!</p>*/}
                        <button style={{backgroundColor:'black',color:'white',fontSize:20,fontWeight:'bold',marginTop:60,marginBottom:20}}>+ Create a New Blog</button>

                    </Link>
                    {/*<h1 className="mb-4">Blogs</h1>*/}


                    <Row xs={1} md={2} lg={3} className="g-4">
                        {blogs.map((blog) => (
                            <Col key={blog.blogId}>
                                <Card style={{maxHeight:400,minHeight:500,maxWidth:300,minWidth:300,backgroundColor:'lightPink'}} className="mb-4">
                                    {blog.image && (
                                        <Card.Img
                                            variant="top"
                                            src={`data:image/png;base64,${blog.image}`}
                                            alt={`Blog ${blog.blogId}`}
                                            style={{ maxHeight:100, objectFit: 'cover',width:100,borderRadius:'80%',marginLeft:100,marginTop:10 }}
                                        />
                                    )}
                                    <Card.Body>
                                        <Card.Title>{blog.name}</Card.Title>
                                        <Card.Text>{blog.blogs}</Card.Text>
                                        <Card.Text>Date: {new Date(blog.date).toLocaleDateString()}</Card.Text>
                                        {/* Add the delete button */}
                                        <Button style={{marginTop:20}} variant="danger" onClick={() => handleDelete(blog.blogId)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default BlogList;



