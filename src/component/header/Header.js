import React from 'react';
import { NavLink } from 'react-router-dom';
import inisializeAuthentication from '../../firebase/firebase.init';
import logo from "../../images/logo.png"
import Usefirebase from '../Hook/Usefirebase';
import "./header.css"

inisializeAuthentication();
const Header = () => {
    const {user, logout} = Usefirebase();
    return (
        <div className="header">
           
            <img className="logo" src={logo} alt="" srcset="" />
            <nav>
                <NavLink to ="/shop">Shop</NavLink>
                <NavLink to ="/orderReview">order</NavLink>
                <NavLink to ="/review">Manage inventory</NavLink>
                {/* <NavLink to ="/login">Login</NavLink> */} 
                {
                    user.email ? 
                    <button onClick={logout}>Logout</button>
                    :
                    <NavLink to ="/login">Login</NavLink>
                }

            </nav>
        </div>
    );
};

export default Header;