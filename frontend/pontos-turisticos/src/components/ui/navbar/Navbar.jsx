import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const navRef = useRef();
    const [activeNav, setActiveNav] = useState("");
    const location = useLocation();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    };

    const handleNavClick = (path) => {
        setActiveNav(path);
    };

    return (
        <header className="header">
            <Link to="/" className='logo'><span><strong>Pontos</strong></span><span style={{ fontWeight: '200' }}>Turísticos</span></Link>

            <nav className='navBar' ref={navRef}>
                <Link
                    to="/"
                    className={activeNav === "/" || location.pathname === "/" ? "active" : ""}
                    onClick={() => handleNavClick("/")}
                >
                    Pontos Turísticos
                </Link>
                <Link
                    to="/cadastrar"
                    className={activeNav === "/cadastrar" || location.pathname === "/cadastrar" ? "active" : ""}
                    onClick={() => handleNavClick("/cadastrar")}
                >
                    Cadastrar Ponto Turístico
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn nav-open-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;
