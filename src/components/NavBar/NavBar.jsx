import React from "react"; 
import { Link, useLocation } from "react-router-dom";
import './NavBar.scss';
import logo from '../../assets/LOGO.svg';

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <div className="navBar">
                <img src={logo} alt="logo de Kaza" className="logo" />
                <div className="links">
                    <Link to="/" className={location.pathname === "/" ? "link active" : "link"}>Accueil</Link>
                    <Link to="/about" className={location.pathname === "/about" ? "link active" : "link"}>A Propos</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;