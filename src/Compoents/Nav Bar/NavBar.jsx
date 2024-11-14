import React from "react";
import shopping from '../../assets/Frame (7).png'
import Love from '../../assets/Frame (6).png'
import { NavLink, useLocation } from "react-router-dom";
import './nav.css'
const NavBar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <div className={`${isHome ? "bg-purple-600" : ""} w-[96%] mx-auto mt-4 pt-2 rounded-t-3xl`}>
            <div className="navbar sm:w-10/12 mx-auto">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className={`${isHome ? "text-white" : ""} btn btn-ghost lg:hidden`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                />
            </svg>
            </div>
            <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li className="hover:bg-black hover:text-white rounded-lg">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
                <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
                <NavLink to="/account">Account</NavLink>
            </li>
            </ul>
        </div>
        <button className={`${isHome ? "text-white text-glow" : "text2-glow"} sm:text-2xl font-bold`}><NavLink to="/">Gadget Heaven</NavLink></button>
        </div>
        <div className="navbar-center hidden lg:flex">
    <ul className={`${isHome ? "text-white" : ""} space-x-3 menu-horizontal px-1`}>
        <li>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? "text-white underline" : "hover:underline"
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/statistics" 
                className={({ isActive }) => 
                    isActive ? "text-purple-600 underline" : "hover:underline"
                }>
                Statistics
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                    isActive ? "text-purple-600 underline" : "hover:underline"
                }>
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/account" 
                className={({ isActive }) => 
                    isActive ? "text-purple-600 underline" : "hover:underline"
                }>
                Account
            </NavLink>
        </li>
    </ul>
</div>
        <div className="navbar-end gap-2">
        <NavLink>
            <div className="relative">
            <img className="bg-white p-2 rounded-full" src={shopping} alt="icon" />
            </div>
        </NavLink>
        <NavLink>
            <div className="relative">
                <img className="bg-white p-2 rounded-full" src={Love} alt="icon" />
            </div>
        </NavLink>
        </div>
    </div>
    </div>
    );
};

export default NavBar;
