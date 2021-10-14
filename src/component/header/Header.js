import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
           
            <img className="logo" src={logo} alt="" srcset="" />
            <nav>
                <NavLink to ="/shop">Shop</NavLink>
                <NavLink to ="/orderReview">order</NavLink>
                <NavLink to ="/review">Manage inventory</NavLink>

            </nav>
        </div>
    );
};

export default Header;