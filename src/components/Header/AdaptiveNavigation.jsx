import React from 'react';
import { NavLink } from 'react-router-dom';

const AdaptiveNavigation = (props) => {
    const { toggleStatusGM } = props;
    return (
        <div className="adaptiveNav">
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
            <div className="navButtonWrap">
                <a
                    href="#getStarted_form"
                    className="presentation__button"
                    onClick={toggleStatusGM}
                    onKeyDown={toggleStatusGM}
                >
                    Get Started Now
                </a>
            </div>
        </div>
    );
};

export default AdaptiveNavigation;
