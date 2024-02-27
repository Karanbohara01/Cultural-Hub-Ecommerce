// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './DEMO.css'; // Importing CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';






const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you can add your login logic
        setIsLoggedIn(true);
    };

    return (
        <div style={{height:80,width:"100%",backgroundColor:"pink",display:'flex',}} >
            <div style={{ flex: 1, alignItems: 'center', display: "flex", height: 80, backgroundColor: "pink", justifyContent: 'center', minWidth: 120, marginLeft:-30}}>
                <img  src='https://img.freepik.com/premium-vector/creative-abstract-modern-ecommerce-logo-design-colorful-gradient-online-shopping-logo-template_467913-976.jpg ' alt="Random Image" style={{ height: 80, marginRight: 10,width:80 }} />
            </div>


            <div style={{display:"flex",alignItems:'center',flex:3,height:80,backgroundColor:"pink",justifyContent:"center"}}>
               <form style={{marginRight:40}} className="search-form">
                   <input
                       type="text"
                       placeholder="Search.."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                   />
               </form>

               <button style={{ height: 40, marginTop: 0, marginLeft: -83, border: "1px solid white", borderRadius: 5 }} type="submit" className="search-btn">
                   <FontAwesomeIcon icon={faSearch} />
               </button>

                   <ul style={{display:"flex",alignItems:"center",listStyle:"none",marginTop:20,backgroundColor:'pink',maxWidth:500}} >
                       <li style={{marginRight:10,display:'flex',alignItems:"center"}}><a style={{textDecoration:"none"}} href="#home">Home</a></li>
                       <li style={{marginLeft:10}}><a  href="#news">News</a></li>
                       <li style={{marginLeft:10}}><a href="#products">Products</a></li>
                       <li style={{marginLeft:10}}><a href="#about">About</a></li>
                       <li style={{marginLeft:10,marginRight:20}}><a href="#faq">FAQ</a></li>
                   </ul>









            <div style={{display:"flex",flex:1,alignItems:'center',justifyContent:'flex-end',minWidth:70}}>
                <button style={{ border: "none", minWidth: 70,marginRight:10 }} type="submit" className="cart-btn">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </button>
                <form onSubmit={handleLogin}>
                    {isLoggedIn ? (
                        <button style={{border:"none",minWidth:90,marginRight:20}}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </button>
                    ) : (
                        <button style={{border:"none",minWidth:90,marginRight:20}} type="submit" className="login-btn">
                            <FontAwesomeIcon icon={faSignInAlt} /> Login
                        </button>
                    )}
                </form>

            </div>








           </div>

        </div>

    );
};

export default Navbar;
