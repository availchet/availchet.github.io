import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

export default function Header() {
    return (
        <header className="header-container clearfix">
            <div className='header-inner'>
                <a href="/" className="site-avatar">
                    <img src={Logo} alt="Logo" />
                </a>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="nav-link-selected">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeClassName="nav-link-selected">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/timeline" exact activeClassName="nav-link-selected">
                                Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" exact activeClassName="nav-link-selected">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
