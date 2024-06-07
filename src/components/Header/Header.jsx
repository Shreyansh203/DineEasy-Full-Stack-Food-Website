import React from 'react';
import { Link, NavLink ,useNavigate} from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    const handlelogout = ()=>{
        localStorage.removeItem("send");
        navigate("/login");
    }

    return (
        <header className="shadow-lg sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600">
            <nav className="border-b border-indigo-800 px-3 lg:px-5 py-2" style={{ backgroundColor: '#8B0000' }}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        {/* <span className="text-white text-2xl font-bold tracking-wide">MyWebsite</span> */}
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {/* {(localStorage.getItem("send")) ?
                            <Link
                                to="/createuser"
                                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                                style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                            >
                                My Orders
                            </Link>
                            : ""} */}

                        {(!localStorage.getItem("send")) ?
                            <div>
                                <Link
                                    to="/createuser"
                                    className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                                    style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                                >
                                    Sign up
                                </Link>
                                <Link
                                    to="/login"
                                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                                    style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                                >
                                    Login
                                </Link>
                            </div>
                            : 
                            <div>
                                <Link
                                    to="/createuser"
                                    className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                                    style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                                >
                                    My Cart
                                </Link>
                                <Link
                                    to="/login"
                                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                                    style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                                    onClick={handlelogout}
                                >
                                    Logout
                                </Link>
                            </div>

                            }
                        {/* <Link
                            to="/createuser"
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                            style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                        >
                            Sign up
                        </Link>
                        <Link
                            to="/login"
                            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-transform duration-200 transform hover:scale-105 shadow-sm"
                            style={{ textDecoration: 'none', color: '#8B0000' }} // Adjust color to dark red
                        >
                            Login
                        </Link> */}
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 transition-colors duration-200 font-bold ${isActive ? 'text-yellow-400' : 'text-white'} hover:bg-indigo-700 lg:hover:bg-transparent hover:text-yellow-300`
                                    }
                                    style={{ textDecoration: 'none', color: 'white' }} // Adjust color to white
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/createuser"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 transition-colors duration-200 font-bold ${isActive ? 'text-yellow-400' : 'text-white'} hover:bg-indigo-700 lg:hover:bg-transparent hover:text-yellow-300`
                                    }
                                    style={{ textDecoration: 'none', color: 'white' }} // Adjust color to white
                                >
                                    Signin
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

