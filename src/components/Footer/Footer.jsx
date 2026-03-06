import React from 'react';
import { Instagram, Facebook, Youtube, CreditCard, Smartphone, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-socials">
                        <h3>Siga-nos</h3>
                        <div className="social-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram size={24} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook size={24} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-payments">
                        <h3>Meios de Pagamento</h3>
                        <div className="payment-icons">
                            <div className="payment-item" title="Cartão de Crédito">
                                <CreditCard size={28} />
                                <span>Crédito</span>
                            </div>
                            <div className="payment-item" title="Cartão de Débito">
                                <CreditCard size={28} />
                                <span>Débito</span>
                            </div>
                            <div className="payment-item" title="PIX">
                                <Smartphone size={28} />
                                <span>PIX</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; 2026 K-Cosméticos. Todos os direitos reservados.</p>
                    </div>
                    <div className="developer">
                        <span>Desenvolvido por</span>
                        <a href="https://github.com/igorryan" target="_blank" rel="noopener noreferrer" className="github-link">
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
