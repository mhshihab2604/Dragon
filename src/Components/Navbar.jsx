import {Link} from "react-router-dom";
import {IoIosContact} from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/></svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="flex gap-5 text-[#706F6F] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/career">Career</Link>
                            <Link to="/register">Register</Link>
                        </ul>
                    </div>
                    <h1 className="text-4xl font-extrabold">Moha Milon</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 text-[#706F6F] menu menu-horizontal px-1">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/career">Career</Link>
                        <Link to="/register">Register</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <IoIosContact className="text-3xl lg:text-5xl"></IoIosContact>
                    <Link to="/login"><button className="btn bg-[#403F3F] w-20 lg:w-36 text-white font-semibold">Log in</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;