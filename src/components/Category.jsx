// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
    const [categoryName, setCategoryName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Making POST request to Spring Boot backend
            const response = await axios.post('/api/categories', { name: categoryName });

            // Checking if the request was successful
            if (response.status === 201) {
                // Clear input field and show success toast upon success
                setCategoryName('');
                toast.success('Category added successfully');
            } else {
                throw new Error('Failed to add category');
            }
        } catch (error) {
            // Show error toast in case of failure
            toast.error(error.message || 'Failed to add category');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Add Category</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Category Name:
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Category'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Category;
