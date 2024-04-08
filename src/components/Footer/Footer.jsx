import React from "react";
import './Footer.scss';
import logo from '../../assets/LOGO-white.svg';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo de Kaza" className="logo" />
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;