
// eslint-disable-next-line no-unused-vars
import React from 'react';
import AdminSidebar from './Sidebar.jsx';
import AdminHeader from './Header.jsx';
import BarChartComponent from '../Charts/BarChart.jsx';
import Calendar from '../Charts/BasicCalendar.jsx';
import BasicPie from '../Charts/PieChart.jsx';
import './AdminDashboard.css';
import DigitalClock from "../Charts/Clock.jsx";
import UserProductList from "../Pages/ViewProduct.jsx";
import ShowProducts from "../Pages/ViewProduct.jsx";

import OrderForm from "../../../pages/Order.jsx";
import CartForm from "../../../components/Cart.jsx";
import BlogForm from "../../../pages/AddBlog.jsx";
import NewArrivalsAdmin from "../Pages/NewArrivalsAdmin.jsx";
import AdminNewsLetter from "../Pages/AdminNewsLetter.jsx";

// import AllEmployee from "../Pages/AllEmployee.jsx";
// import EditEmployee from "../Pages/EditEmpliyee.jsx"; // Import the CSS file for styling

const AdminDashboard = () => {
    return (
        <>
            <div className="header-container">
                <AdminHeader />

            </div>



            <AdminSidebar />
            {/*<UserProductList/>*/}
            <div style={{marginLeft:650,marginTop:80,marginBottom:-100 ,display:"flex",alignItems:'center',justifyContent:'right'}} >
                <DigitalClock/>
            </div>

            <div className="charts-container">

                <div style={{marginLeft:35}} className="chart">
                    <BarChartComponent />
                </div>
                <div className="chart">
                    <BasicPie />
                </div>
                <div className="chart">
                    <Calendar />
                </div>











            </div>
        </>
    );
};

export default AdminDashboard;
