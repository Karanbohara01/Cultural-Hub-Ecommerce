// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const CartForm = ({ cartProducts }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {/* eslint-disable-next-line react/prop-types */}
                {cartProducts.map((product) => (
                    <Col key={product.id} className="mb-4">
                        <Card style={{ maxHeight: 600, minHeight: 650, minWidth: 350, marginLeft: 70, marginTop: 80, maxWidth: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'whiteSmoke' }}>
                            <Card.Body>
                                <img
                                    style={{ objectFit: 'cover', width: '300px', height: '390px', marginBottom: 20, borderRadius: 10 }}
                                    src={`data:image/png;base64,${product.image}`}
                                    alt={product.productName}
                                />

                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>
                                    {product.productDescription}
                                </Card.Text>
                                <Card.Text>
                                    <b>Brand:</b> {product.brandName}
                                </Card.Text>
                                <Card.Text>
                                    <b>Price:</b> Rs.{product.productPrice}
                                </Card.Text>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 45, marginBottom: 20 }}>
                                    <Button
                                        variant="success"
                                        style={{
                                            padding: '10px 20px',
                                            fontSize: '1.2rem',
                                            borderRadius: '8px',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                            transition: 'background-color 0.3s ease',
                                        }}
                                        // Add functionality to remove product from cart if needed
                                    >
                                        <FaPlus style={{ marginRight: '5px' }} /> Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CartForm;
