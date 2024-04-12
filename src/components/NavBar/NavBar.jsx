import React from "react"; 
import { Link } from "react-router-dom";
import './NavBar.scss';
import logo from '../../assets/LOGO.svg';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navBar">
                <img src={logo} alt="logo de Kaza" className="logo" />
                <div className="links">
                    <Link to="/" className="link">Accueil</Link>
                    <Link to="/about" className="link">A Propos</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;