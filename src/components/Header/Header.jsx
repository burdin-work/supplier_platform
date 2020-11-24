import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/icons/logo-color.svg';
import ddMenu from '../../assets/images/bg/dd_menu.svg';
import close from '../../assets/images/icons/icon-close.png';
import AdaptiveNavigation from './AdaptiveNavigation';

const Header = () => {
    const [statusGM, setStatusGM] = useState(false);

    const toggleStatusGM = () => {
        setStatusGM(!statusGM);
    };

    return (
        <header className="header">
            <div className="mainNavContainer">

                {statusGM
                && <AdaptiveNavigation toggleStatusGM={toggleStatusGM} />}

                <div className="mainNavContent headerNav">
                    <NavLink to="/"><img className="logo" src={logo} alt="logo" /></NavLink>

                    <div className="navWrap">
                        {statusGM
                            ? (
                                <input
                                    type="image"
                                    className="closeDDMenu"
                                    src={close}
                                    onClick={toggleStatusGM}
                                    onKeyDown={toggleStatusGM}
                                    alt="close"
                                />
                            )
                            : (
                                <input
                                    type="image"
                                    className="ddMenu"
                                    src={ddMenu}
                                    onClick={toggleStatusGM}
                                    onKeyDown={toggleStatusGM}
                                    alt="drop-down menu"
                                />
                            )}
                        <nav>
                            <ul>
                                <li><NavLink exact to="/">Home</NavLink></li>
                                <li><NavLink to="/supplier">Supplier</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="headerRight">
                    <a className="header__button" href="#getStarted_form">Get Started</a>
                </div>

            </div>
        </header>
    );
};

export default Header;
