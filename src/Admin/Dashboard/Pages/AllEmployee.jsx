// AllEmployee.js

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
// import EditEmployee from "./EditEmployee";

const AllEmployee = () => {
    const columns = [
        {
            name: "CODE",
            selector: (row) => row.code,
            sortable: true,
        },
        {
            name: "NAME",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "IMAGE",
            selector: (row) => row.image,
        },
        {
            name: "PHONE",
            selector: (row) => row.phone,
        },
        {
            name: "EMAIL",
            selector: (row) => row.email,
        },
        {
            name: "POSITION",
            selector: (row) => row.position,
        },
        {
            name: "JOIN DATE",
            selector: (row) => row.join_date,
        },
        {
            name: "SALARY",
            selector: (row) => row.salary,
        },
        {
            name: "DOCUMENTS",
            selector: (row) => row.documents,
        },
        {
            name: "ACTION",
            cell: (row) => (
                <>
                    <button
                        className="btn btn-info btn-sm rounded-pill"
                        onClick={() => handleEditClick(row.id)}>
                        <i title="Edit" className="feather icon-edit"></i>{" "}
                    </button>{" "}
                    <button className="btn btn-danger btn-sm rounded-pill ml-1">
                        <i title="Delete" className="feather icon-trash"></i>{" "}
                    </button>
                </>
            ),
        },
    ];

    const [employees, setEmployees] = useState([]);
    const [editingEmployeeId, setEditingEmployeeId] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://react.laravel/api/allemployees/"
                );
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleEditClick = async (id) => {
        try {
            await axios.put(`http://react.laravel/api/updateemployee/${id}/`);
        } catch (error) {
            console.error("Error updating employee:", error);
        }
        setEditingEmployeeId(id);
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {editingEmployeeId !== null && <EditEmployee id={editingEmployeeId} />}
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="page-header">
                        {/* ... (your existing JSX) */}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <DataTable
                                        columns={columns}
                                        data={filteredEmployees}
                                        pagination
                                        fixedHeader
                                        fixedHeaderScrollHeight="450px"
                                        highlightOnHover
                                        subHeader
                                        subHeaderComponent={
                                            <input
                                                type="text"
                                                className="w-25 form-control"
                                                placeholder="Search..."
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                        }
                                        customStyles={{
                                            headRow: {
                                                style: {
                                                    background: "#e0e0e0",
                                                    fontSize: "15px",
                                                    fontWeight: "bold",
                                                },
                                            },
                                            cells: {
                                                style: {
                                                    fontSize: "16px",
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllEmployee;

