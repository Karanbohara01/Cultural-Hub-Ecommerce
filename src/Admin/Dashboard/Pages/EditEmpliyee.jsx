// EditEmployee.js

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const EditEmployee = ({ id }) => {
    const [editData, setEditData] = useState({
        code: "",
        name: "",
        email: "",
        phone: "",
        position: "",
        salary: "",
        join_date: "",
        documents: "",
        image: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://react.laravel/api/getemployee/${id}`);
                setEditData(response.data);  // Assuming the API response structure matches your state structure
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://react.laravel/api/updateemployee/${id}`, editData);
            // Add logic for success (e.g., show a success message, redirect, etc.)
        } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error("Error updating employee:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (

    <div className="pcoded-main-container">
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Employees</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="feather icon-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="!">Edit Employees</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="firstname" className="form-label">
                                                Employee Code
                                            </label>
                                            <input
                                                type="text"
                                                name="code"
                                                value={editData.code}
                                                onChange={handleChange}
                                                className="form-control form-control-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="firstname" className="form-label">
                                                Employee Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={editData.name}
                                                onChange={handleChange}
                                                className="form-control form-control-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* ... (other form fields) */}

                                </div>

                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-sm waves-effect waves-light mt-2">
                                        <i className="fas fa-save"></i> Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


);
};

export default EditEmployee;
