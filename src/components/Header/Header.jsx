import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="K Cosméticos Logo" />
                </div>

                <nav className="header-nav">
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="btn-header-primary">Comprar Agora</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
