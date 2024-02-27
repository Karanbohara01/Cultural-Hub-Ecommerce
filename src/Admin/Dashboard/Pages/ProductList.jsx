// ProductList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  width: 600px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 600px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await Axios.get('http://your-backend-api-url/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <StyledCard>
            <StyledCardContent>
                <Typography variant="h5" gutterBottom>
                    Products Added by Admin
                </Typography>
                {products.map((product) => (
                    <div key={product.id}>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography>{`Price: $${product.price}`}</Typography>
                        <Typography>{`Description: ${product.description}`}</Typography>
                        {/* Add more details or styling as needed */}
                    </div>
                ))}
            </StyledCardContent>
        </StyledCard>
    );
};

export default ProductList;
