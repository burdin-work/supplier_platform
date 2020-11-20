import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/icons/logo-white.svg';
import iconInst from '../../assets/images/icons/icon-24-social-inst.png';
import iconLinkedin from '../../assets/images/icons/icon-24-social-linkedin.png';
import appStoreBadge from '../../assets/images/icons/app-store-badge.png';
import googleBadge from '../../assets/images/icons/google-play-badge.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="mainNavContainer">

                <div className="mainNavContent">
                    <NavLink to="/" className="logoLink">
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>

                    <div className="footerNavWrap">
                        <nav>
                            <ul>
                                <li><NavLink exact to="/">Home</NavLink></li>
                                <li><NavLink to="/supplier">Supplier</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/FAQ">FAQ</NavLink></li>
                                <li><NavLink to="/Legal">Legal</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="linksSocNetworks">
                    <a href="/"><img src={iconInst} alt="instagram" /></a>
                    <a href="/"><img src={iconLinkedin} alt="linkedinm" /></a>
                </div>

                <div className="linksDownload">
                    <a href="/"><img src={appStoreBadge} alt="app store" /></a>
                    <a href="/"><img src={googleBadge} alt="google" /></a>
                </div>

                <div className="copyright">
                    © Tinvio™ 2019. All Rights Reserved
                </div>
            </div>

        </footer>
    );
};

export default Footer;
