// AdminHeader.js

// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const AdminHeader = () => {
    return (
        <div className="d-flex flex-column mb-2">

            <header className="admin-header">
                <Link to={"/"}><div className="logo">Cultural-Hub</div></Link>
                <div className="header-actions">
                    <div className="search-container">
                        <input type="text" placeholder="Search..." />
                        <SearchIcon />
                    </div>
                    <Link to="/login">
                        <button className="logout-button">
                            < LogoutIcon  /> Logout
                        </button>
                    </Link>
                    <div className="more-dropdown">
                        <MoreVertIcon />
                        {/* Add more items in the dropdown as needed */}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AdminHeader;
