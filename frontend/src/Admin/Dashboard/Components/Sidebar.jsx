
// eslint-disable-next-line no-unused-vars
 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faStore, faCalendarAlt, faReceipt, faNewspaper, faBlog, faThList, faStar, faGift } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            {/* Hamburger Menu Button */}
            <div className="hamburger-menu" onClick={toggleSidebar}>
                <span>&#9776;</span>
            </div>

            {/* Admin Sidebar */}
            <nav className={`admin-sidebar bg-dark text-white ${sidebarOpen ? 'active' : ''}`}>
                <Link to="/admin-dashboard" className={`nav-link ${window.location.pathname === '/admin-dashboard' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                </Link>
                <Link to="/admin-products" className={`nav-link ${window.location.pathname === '/admin-products' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faStore} /> Shops
                </Link>
                <Link to="/orders" className={`nav-link ${window.location.pathname === '/orders' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faReceipt} /> Orders
                </Link>
                <Link to="/message" className={`nav-link ${window.location.pathname === '/message' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faReceipt} /> Messages
                </Link>
                <Link to="/calendar" className={`nav-link ${window.location.pathname === '/calendar' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faCalendarAlt} /> Events
                </Link>
                <Link to="/new-arrivals-admin" className={`nav-link ${window.location.pathname === '/new-arrivals-admin' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faGift} /> New Arrivals
                </Link>
                <Link to="/featured-products-admin" className={`nav-link ${window.location.pathname === '/featured-products-admin' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faStar} /> Featured Products
                </Link>
                <Link to="/admin-newsletter" className={`nav-link ${window.location.pathname === '/admin-newsletter' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faNewspaper} /> News Letter
                </Link>
                <Link to="/category" className={`nav-link ${window.location.pathname === '/category' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faThList} /> Categories
                </Link>
                <Link to="/handle-blog" className={`nav-link ${window.location.pathname === '/handle-blog' ? 'active-link' : ''}`}>
                    <FontAwesomeIcon icon={faBlog} /> Blogs
                </Link>
                {/* Add more items as needed */}
            </nav>
        </div>
    );
};

export default AdminSidebar;
