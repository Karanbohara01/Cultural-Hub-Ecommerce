


// Import necessary dependencies
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import AdminSidebar from "../Components/Sidebar.jsx";
import AdminHeader from "../Components/Header.jsx";
import {toast} from "react-toastify";
import './NewArrivalsAdmin.css'

// Create the Product component
export default function NewArrivalsAdmin() {
    // State variables
    const [products, setProducts] = useState([]);
    const [editProductId, setEditProductId] = useState(null);
    const [showForm, setShowForm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [productData, setProductData] = useState({
        name: "",
        brand: "",
        description: "",
        price: 0,
        image: undefined
    });
    const [editProductData, setEditProductData] = useState({
        name: "",
        brand: "",
        description: "",
        price: 0,
        image: undefined
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            fetchProducts();
        } else {
            fetchProductById(searchQuery);
        }
    };

    const handleClose = () => setShowForm('');

    const handleShow = (formType, productId = null) => {
        setShowForm(formType);
        setEditProductId(productId);

        if (!productId) {
            setProductData({
                name: "",
                brand: "",
                description: "",
                price: 0,
                image: undefined
            });
        }
    };

    const handleSaveProduct = () => {
        let fd = new FormData();

        fd.append("productName", productData?.name);
        fd.append("brandName", productData?.brand);
        fd.append("productDescription", productData?.description);
        fd.append("productPrice", productData?.price);
        fd.append("image", productData?.image);

        console.log(fd);

        axios
            .post('http://localhost:8787/admin/new-arrivals/save', fd, {
                // Uncomment the next line if you need authorization headers
                // headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
            })
            .then((response) => {
                console.log('Product saved successfully:', response.data);
                toast.success("Product Added Successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                handleClose();
                fetchProducts();
            })
            .catch((error) => {
                console.error('Error saving product:', error);
                toast.error("Error saving product. Please try again later.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8787/admin/new-arrivals/getAll', {
                // Uncomment the next line if you need authorization headers
                // headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
            });
            console.log('Fetched products:', response.data);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchProductById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8787/admin/add-products/getById/${id}`, {
                // Uncomment the next line if you need authorization headers
                // headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") }
            });
            console.log('Fetched product by ID:', response.data);
            setProducts([response.data]);
        } catch (error) {
            console.error('Error fetching product by ID:', error);
        }
    };

    const handleRemoveProduct = (productId) => {
        if (productId === undefined) {
            console.error("Invalid ID: ID is undefined");
            return;
        }
        axios
            .delete(`http://localhost:8787/admin/new-Arrivals/delete/${productId}`)
            .then(() => {
                console.log(`Product with ID ${productId} removed successfully`);
                toast.success('Product deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                fetchProducts();
            })
            .catch((error) => {
                console.error(`Error removing product with ID ${productId}:`, error);
                toast.error("Error removing product. Please try again later.", {
                    position: "top-right",
                    autoClose:1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    const handleUpdateProduct = () => {
        axios
            .put(`http://localhost:8787/admin/add-products/update/${editProductId}`, editProductData)
            .then((response) => {
                console.log('Product updated successfully:', response.data);
                handleClose();
                fetchProducts();
            })
            .catch((error) => {
                console.error('Error updating product:', error);
                toast.error("Error updating product. Please try again later.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

            });
    };

    const handleEditProduct = (productId) => {
        const productToEdit = products.find((product) => product.productId === productId);


        setEditProductData({
            brand: productToEdit.brandName,
            name: productToEdit.productName,
            description: productToEdit.productDescription,
            price: productToEdit.productPrice,
            image: productToEdit.image
        });


        handleShow('editProduct', productId);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleImageUpload = (event) => {
        setProductData({ ...productData, image: event?.target?.files[0] });
    };



    return (
        <>


            <div>
                <AdminHeader/>

                <  AdminSidebar/>



            </div>
            <div style={{display:'flex',flexDirection:'row',marginTop:100,justifyContent:"space-evenly"}}>

                <center>


                    <Container  fluid className="flex-grow-1">
                        <div className="wrapper">
                            <div className="d-flex align-items-center mb-3">
                                <button style={{marginLeft:303,height:40,width:450,marginRight:6}}    className="btn btn-dark " onClick={() => { handleShow("addProduct") }}>Add New Product +</button>
                                <input
                                    type="text"
                                    className="form-control mr-2"
                                    placeholder="Search by ID"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <button className="btn btn-dark" onClick={handleSearch}>Search</button>
                            </div>




                            <div style={{ display: 'flex',marginLeft:280, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                                {Array.isArray(products) && products.map((product) => (
                                    <div className="item" key={product.productId} style={{ flex: '0 0 23%', margin: '1%' }}>
                                        <img style={{borderRadius:17,marginBottom:10,minWidth:260,minHeight:400}} width={260} src={`data:image/png;base64,${product.image}`} alt="Product" />
                                        <div>
                                            <button className="btn btn-success m-1" onClick={() => handleEditProduct(product.productId)}>
                                                <FaEdit /> View Details/Edit
                                            </button>
                                            <button className="btn btn-danger m-1" onClick={() => handleRemoveProduct(product.productId)}>
                                                <FaTrash /> Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <Modal
                                show={Boolean(showForm)}
                                onHide={handleClose}
                                animation={false}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >

                                {showForm === 'editProduct' && (
                                    <>
                                        <Modal.Header  closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Edit Product
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formEditProductName">
                                                    <Form.Label>Product Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Product Name"
                                                        value={editProductData.name}
                                                        onChange={(e) => setEditProductData({ ...editProductData, name: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formEditBrand">
                                                    <Form.Label>Brand</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Brand Name"
                                                        value={editProductData.brand}
                                                        onChange={(e) => setEditProductData({ ...editProductData, brand: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formEditDurationYears">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Enter Product Price"
                                                        value={editProductData.price}
                                                        onChange={(e) => setEditProductData({ ...editProductData, price: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formEditCourseFee">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Product Description"
                                                        value={editProductData.description}
                                                        onChange={(e) => setEditProductData({ ...editProductData, description: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formEditImage">
                                                    <Form.Label>Upload Image</Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(event) => setEditProductData({ ...editProductData, image: event?.target?.files[0] })}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                    </>
                                )}

                                {showForm === 'addProduct' && (
                                    <>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Add Product
                                            </Modal.Title>
                                        </Modal.Header>

                                        <  Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formProductName">
                                                    <Form.Label>Product Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Product Name"
                                                        value={productData.name}
                                                        onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formCredits">
                                                    <Form.Label>Brand</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Brand Name"
                                                        value={productData.brand}
                                                        onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formPrice">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Enter Product Price"
                                                        value={productData.price}
                                                        onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formCourseFee">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter Product Description"
                                                        value={productData.description}
                                                        onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="formEditImage">
                                                    <Form.Label>Upload Image</Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                    </>
                                )}

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                    {showForm === 'addProduct' && <Button variant="success" onClick={handleSaveProduct}>Save</Button>}
                                    {showForm === 'editProduct' && <Button variant="primary" onClick={handleUpdateProduct}>Save</Button>}
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Container>

                </center>

            </div>
        </>
    );
}



