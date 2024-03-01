// ProductListForm.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const ProductListForm = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from Spring Boot backend using Axios
        axios.get('http://your-backend-api-url/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    return (
        <div className="product-list-container">
            <h2 className="mt-4 mb-4">Product List</h2>
            <div className="product-list">
                {products.map(product => (
                    <Card key={product.id} style={{ width: '18rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductListForm;
