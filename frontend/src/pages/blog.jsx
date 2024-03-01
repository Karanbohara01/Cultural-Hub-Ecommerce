// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown, FaHeart, FaComment } from 'react-icons/fa'; // Importing icons from Font Awesome

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs when the component mounts
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:8787/user/blog/getAll');
            setBlogs(response.data.map(blog => ({
                ...blog,
                liked: false,
                loved: false,
                disliked: false,
                showComment: false
            })));
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleLike = (blogId) => {
        setBlogs(blogs.map(blog => ({
            ...blog,
            liked: blog.blogId === blogId ? true : false,
            loved: false,
            disliked: false
        })));
        // Handle like functionality here
         console.log(`Liked blog with ID ${blogId}`);
    };

    const handleDislike = (blogId) => {
        setBlogs(blogs.map(blog => ({
            ...blog,
            liked: false,
            loved: false,
            disliked: blog.blogId === blogId ? true : false
        })));
        // Handle dislike functionality here
         console.log(`Disliked blog with ID ${blogId}`);
    };

    const handleLove = (blogId) => {
        setBlogs(blogs.map(blog => ({
            ...blog,
            liked: false,
            loved: blog.blogId === blogId ? true : false,
            disliked: false
        })));
        // Handle love functionality here
         console.log(`Loved blog with ID ${blogId}`);
    };

    const handleComment = (blogId, commentText) => {
        setBlogs(blogs.map(blog => blog.blogId === blogId ? {
            ...blog,
            showComment: true,
            comments: [...blog.comments, commentText]
        } : blog));
        console.log(`Commented on blog with ID ${blogId}: ${commentText}`);
    };


    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 className="mt-4 mb-4">Blogs</h1>
                <Link to={'/add-blog'}>
                    <button style={{ marginTop: 30, backgroundColor: 'pink', color: 'black', fontSize: 20, fontWeight: 'bold',marginRight:50 }}> Add Your Blog Here!</button>
                </Link>
            </div>

            <Row>
                {blogs.map((blog) => (
                    <Col key={blog.blogId} className={"d-flex justify-content-center"}>
                        <Card style={{ width: 1200, height: 300, marginBottom: 50, backgroundColor: 'pink', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {blog.image && (
                                <Card.Img
                                    variant="top"
                                    src={`data:image/png;base64,${blog.image}`}
                                    alt={`Blog ${blog.blogId}`}
                                    style={{ height: 300, width: 200, objectFit: 'cover', borderRadius: 10 }}
                                />
                            )}
                            <Card.Body>
                                <Card.Title><p style={{ color: 'black', fontSize: 20 }}>{blog.name}</p></Card.Title>
                                <Card.Text><p style={{ color: 'black', fontSize: 15 }}>{blog.blogs}</p></Card.Text>
                                <Card.Text><p style={{ color: 'black', fontSize: 15 }}>Date: {new Date(blog.date).toLocaleDateString()}</p></Card.Text>
                                <div style={{ marginTop: 100 }}>
                                    <Button style={{ backgroundColor: 'pink', color: blog.liked ? 'blue' : 'black', border: 'none' }} variant="primary" onClick={() => handleLike(blog.blogId)}>
                                        <FaThumbsUp style={{ color: blog.liked ? 'blue' : 'black' }} /> {blog.liked ? 'Liked' : 'Like'}
                                    </Button>
                                    <Button style={{ backgroundColor: 'pink', color: blog.disliked ? 'blue' : 'black', border: 'none' }} variant="primary" onClick={() => handleDislike(blog.blogId)}>
                                        <FaThumbsDown style={{ color: blog.disliked ? 'blue' : 'black' }} /> {blog.disliked ? 'Disliked' : 'Dislike'}
                                    </Button>
                                    <Button style={{ backgroundColor: 'pink', color: blog.loved ? 'red' : 'black', border: 'none' }} variant="primary" onClick={() => handleLove(blog.blogId)}>
                                        <FaHeart style={{ color: blog.loved ? 'red' : 'black' }} /> {blog.loved ? 'Loved' : 'Love'}
                                    </Button>
                                    <Button
                                        style={{ backgroundColor: 'pink', color: 'blue', border: 'none' }}
                                        variant="primary"
                                        onClick={() => handleComment(blog.blogId)}
                                    >
                                        <FaComment /> Comment
                                    </Button>
                                    {blog.showComment && (
                                        <div>
                                            <input type="text" placeholder="Write your comment here..." />
                                            <button>Submit</button> {/* You can add a submit button here */}
                                        </div>
                                    )}

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogList;
