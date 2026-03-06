import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="K Cosméticos Logo" />
                </div>

                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a></li>
                        <li><a href="#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
                        <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                        <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
