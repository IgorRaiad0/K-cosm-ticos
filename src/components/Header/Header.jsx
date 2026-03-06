import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-menu-active' : ''}`}>
            <div className="header-container">
                <Link to="/" className="header-logo" onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt="K-Cosméticos Logo" />
                </Link>

                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className="header-nav">
                    <ul>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
                        <li><a href="#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
                        <li><Link to="/marketplace" onClick={() => setIsMenuOpen(false)}>Vitrine</Link></li>
                        <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                        <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
