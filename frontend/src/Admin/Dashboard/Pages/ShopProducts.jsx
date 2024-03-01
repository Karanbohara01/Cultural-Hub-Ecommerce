// // AddProductCard.js
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import { Card, CardContent, TextField, Button, Tabs, Tab, Box, Typography, Input } from '@mui/material';
// import { styled } from '@mui/system';
// import Axios from 'axios';
//
//
//
// const StyledCard = styled(Card)`
//   width: 600px;
//   margin-bottom: 90px;
//   margin-top: 100px;
//   margin-left: 400px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//
//   //@media (max-width: 608px) {
//   //  width: 100%;
//   //  margin-right: 900px;
//   //display: flex;
//   //
//   //}
// `;
//
//
//
// const StyledCardContent = styled(CardContent)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//
//
// `;
//
// const StyledTabs = styled(Tabs)`
//   margin-bottom: 20px;
// `;
//
// const StyledTabPanel = styled(Box)`
//   width: 100%;
//
//   padding: 20px;
//   box-sizing: border-box;
//   display: ${({ value, index }) => (value === index ? 'block' : 'none')};
// `;
//
// const StyledForm = styled('form')`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
//
// const StyledTextField = styled(TextField)`
//   margin-bottom: 15px;
//
// `;
//
// const StyledInput = styled(Input)`
//   margin-bottom: 15px;
// `;
//
// const StyledButton = styled(Button)`
//   margin-top: 20px;
// `;
//
// const StyledTypography = styled(Typography)`
//   margin-bottom: 20px;
// `;
//
// const AddProductCard = () => {
//     const [product, setProduct] = useState({
//         id: '',
//         name: '',
//         price: '',
//         description: '',
//         image: null,
//         newName: '',
//         newPrice: '',
//         newDescription: '',
//     });
//     const [tabValue, setTabValue] = useState(0);
//
//     const handleInputChange = (e) => {
//         const { name, value, files } = e.target;
//
//         if (name === 'image') {
//             setProduct({ ...product, image: files[0] });
//         } else {
//             setProduct({ ...product, [name]: value });
//         }
//     };
//
//     const handleAddSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             const formData = new FormData();
//             formData.append('name', product.name);
//             formData.append('price', product.price);
//             formData.append('description', product.description);
//             formData.append('image', product.image);
//
//             const response = await Axios.post('http://your-backend-api-url/products', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             console.log('Product successfully added:', response.data);
//
//             setProduct({
//                 id: '',
//                 name: '',
//                 price: '',
//                 description: '',
//                 image: null,
//                 newName: '',
//                 newPrice: '',
//                 newDescription: '',
//             });
//         } catch (error) {
//             console.error('Error adding product:', error.message);
//         }
//     };
//
//     const handleUpdateSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             const formData = new FormData();
//             formData.append('name', product.newName);
//             formData.append('price', product.newPrice);
//             formData.append('description', product.newDescription);
//             formData.append('image', product.image);
//
//             const response = await Axios.put(`http://your-backend-api-url/products/${product.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             console.log('Product successfully updated:', response.data);
//
//             setProduct({
//                 id: '',
//                 name: '',
//                 price: '',
//                 description: '',
//                 image: null,
//                 newName: '',
//                 newPrice: '',
//                 newDescription: '',
//             });
//         } catch (error) {
//             console.error('Error updating product:', error.message);
//         }
//     };
//
//     const handleDeleteSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             const response = await Axios.delete(`http://your-backend-api-url/products/${product.id}`);
//
//             console.log('Product successfully deleted:', response.data);
//
//             setProduct({
//                 id: '',
//                 name: '',
//                 price: '',
//                 description: '',
//                 image: null,
//                 newName: '',
//                 newPrice: '',
//                 newDescription: '',
//             });
//         } catch (error) {
//             console.error('Error deleting product:', error.message);
//         }
//     };
//
//     const handleTabChange = (event, newValue) => {
//         setTabValue(newValue);
//     };
//
//     return (
//
//         <div>
//
//             <StyledCard >
//                 <StyledCardContent>
//                     <StyledTabs value={tabValue} onChange={handleTabChange} centered>
//                         <Tab label="Add Product" />
//                         <Tab label="Update Product" />
//                         <Tab label="Delete Product" />
//                     </StyledTabs>
//                     <StyledTabPanel value={tabValue} index={0}>
//                         <StyledForm onSubmit={handleAddSubmit}>
//                             <StyledTextField
//                                 label="Product Name"
//                                 variant="outlined"
//                                 name="name"
//                                 value={product.name}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledTextField
//                                 label="Price"
//                                 variant="outlined"
//                                 name="price"
//                                 value={product.price}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledTextField
//                                 label="Description"
//                                 variant="outlined"
//                                 name="description"
//                                 value={product.description}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                                 multiline
//                                 rows={4}
//                             />
//                             <StyledInput
//                                 type="file"
//                                 accept="image/*"
//                                 name="image"
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledButton type="submit" variant="contained" color="primary" fullWidth>
//                                 Add Product
//                             </StyledButton>
//                         </StyledForm>
//                     </StyledTabPanel>
//                     <StyledTabPanel value={tabValue} index={1}>
//                         <StyledForm onSubmit={handleUpdateSubmit}>
//                             <StyledTypography variant="h6" gutterBottom>
//                                 Update Product
//                             </StyledTypography>
//                             <StyledTextField
//                                 label="Product ID"
//                                 variant="outlined"
//                                 name="id"
//                                 value={product.id}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledTextField
//                                 label="New Product Name"
//                                 variant="outlined"
//                                 name="newName"
//                                 value={product.newName}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledTextField
//                                 label="New Price"
//                                 variant="outlined"
//                                 name="newPrice"
//                                 value={product.newPrice}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledTextField
//                                 label="New Description"
//                                 variant="outlined"
//                                 name="newDescription"
//                                 value={product.newDescription}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                                 multiline
//                                 rows={4}
//                             />
//                             <StyledButton type="submit" variant="contained" color="primary" fullWidth>
//                                 Update Product
//                             </StyledButton>
//                         </StyledForm>
//                     </StyledTabPanel>
//                     <StyledTabPanel value={tabValue} index={2}>
//                         <StyledForm onSubmit={handleDeleteSubmit}>
//                             <StyledTypography variant="h6" gutterBottom>
//                                 Delete Product
//                             </StyledTypography>
//                             <StyledTextField
//                                 label="Product ID"
//                                 variant="outlined"
//                                 name="id"
//                                 value={product.id}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             />
//                             <StyledButton type="submit" variant="contained" color="primary" fullWidth>
//                                 Delete Product
//                             </StyledButton>
//                         </StyledForm>
//                     </StyledTabPanel>
//                 </StyledCardContent>
//             </StyledCard>
//
//         </div>
//
//
//     );
// };
//
// export default AddProductCard;
