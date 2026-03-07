import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = ({ isLoading }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
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
                <Link
                    to="/"
                    className="header-logo"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease 1.2s' }}
                >
                    <img src={logo} alt="K-Cosméticos Logo" />
                </Link>

                <nav className="header-nav">
                    <ul>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
                        <li><Link to="/#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</Link></li>
                        <li><Link to="/marketplace" onClick={() => setIsMenuOpen(false)}>Vitrine</Link></li>
                        <li><Link to="/#localizacao" onClick={() => setIsMenuOpen(false)}>Localização</Link></li>
                        <li><Link to="/#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
                        <li><Link to="/#contato" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="header-cart-btn" onClick={() => setIsCartOpen(true)}>
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
                    </button>

                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
