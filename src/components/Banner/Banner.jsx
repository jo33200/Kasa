import React from "react"; 
import { Link } from "react-router-dom";
import './Banner.scss';
import logo from '../../assets/LOGO.svg';

const Banner = () => {
    return (
        <div className="banner">
            <img src={logo} alt="logo de Kaza" className="logo" />
            <div className="links">
                <Link to="/" className="link">Accueil</Link>
                <Link to="/about" className="link">A Propos</Link>
            </div>
        </div>
    )
}

export default Banner;