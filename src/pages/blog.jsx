


// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";

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

    return (
        <Container>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <h1 className="mt-4 mb-4">Blogs</h1>
                <Link to={'/add-blog'}>
                    {/*<p style={{marginTop:30,fontSize:30}}>Click Here to Add Your Blog Here!</p>*/}
                    <button style={{marginTop:30,backgroundColor:'pink',color:'black',fontSize:20,fontWeight:'bold'}}>+ Add Your Blog Here!</button>

                </Link>
            </div>

            <Row>
                {blogs.map((blog) => (
                    <Col key={blog.blogId} className={"d-flex justify-content-center"}>
                        <Card style={{ width: 1200,height:300, marginBottom: 50, backgroundColor: 'pink',color:'black',display:'flex',flexDirection:'row' ,justifyContent:'space-between'}}>
                            {blog.image && (
                                <Card.Img
                                    variant="top"
                                    src={`data:image/png;base64,${blog.image}`}
                                    alt={`Blog ${blog.blogId}`}
                                    style={{height:300,width:200,  objectFit:'cover', borderRadius: 10 }}
                                />
                            )}
                            <Card.Body >
                                <Card.Title ><p style={{color:'black',fontSize:20}}>{blog.name}</p></Card.Title>
                                <Card.Text><p style={{color:'black',fontSize:15}}>{blog.blogs}</p></Card.Text>
                                <Card.Text><p style={{color:'black',fontSize:15}}>Date: {new Date(blog.date).toLocaleDateString()}</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogList;

